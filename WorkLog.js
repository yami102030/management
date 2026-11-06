import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
    ListChecks, Users, LogOut, PanelLeft, GraduationCap, FolderOpen, ShieldCheck, User,
    MoreVertical, GripVertical, Plus, Check, CheckCircle2, AlertCircle, AlertTriangle,
    Copy, Trash2, ChevronUp, ChevronDown, ChevronsUp, ChevronsDown, Repeat,
    SlidersHorizontal, SkipForward, X, Lock, Pause, Play, Pencil
} from 'lucide-react';

/* =====================================================================
   工作日誌（例行工作）— 電腦版
   用法：和 MemberDataCenter 一樣，載入後用 window.WorkLog 取得元件
   需要傳入：session、supabase、goToService（點「服事管理」時要做的事）、
            utils（選填，有 fetchAllData 就會用）
   ===================================================================== */

// ---------- 固定資料 ----------
const ROLE_LABELS = { member: '會友', coworker: '同工', admin_staff: '行政', leader: '領袖', pastor: '牧師', admin: '系統管理員' };
const ROLE_ICONS = { member: User, admin_staff: FolderOpen, pastor: GraduationCap, admin: ShieldCheck };
const HIGH_ROLES = ['leader', 'pastor', 'admin']; // 這幾種用金黃色圖示
const FLAG_LABELS = { pastor_decision: '需牧師決策', team_discussion: '需團隊討論', cross_dept: '需跨部門協調', track_progress: '需追蹤進度' };
const STATUS_LABELS = { pending: '待處理', in_progress: '進行中', awaiting_confirm: '待確認', done: '已完成' };
const WD = ['日', '一', '二', '三', '四', '五', '六'];
const FONT_SIZES = { s: 13, m: 15, l: 18 }; // 三顆「A」：小、標準、大（比照禱告頁）

// 欄位：locked 代表不能隱藏；min 是最小寬度（px），順序和手機版預設顯示的「任務、負責人、狀態、日期」一致
const COLS = [
    { id: 'title', label: '任務', locked: true, w: 'minmax(190px,2.4fr)', min: 190 },
    { id: 'who', label: '負責人', w: 'minmax(104px,1fr)', min: 104 },
    { id: 'status', label: '狀態', locked: true, w: '150px', min: 150 },
    { id: 'date', label: '日期', w: 'minmax(96px,0.9fr)', min: 96 },
    { id: 'time', label: '時間', w: 'minmax(112px,1fr)', min: 112 },
    { id: 'hours', label: '工時', w: '64px', min: 64 },
    { id: 'priority', label: '優先級', w: '64px', min: 64 },
    { id: 'flag', label: '會議對焦', w: 'minmax(112px,1fr)', min: 112 },
    { id: 'note', label: '備註', w: 'minmax(120px,1.5fr)', min: 120 },
];

// ---------- 日期小工具（一律用台灣時間） ----------
const TZ = 'Asia/Taipei';
const getNow = () => {
    const s = new Intl.DateTimeFormat('sv-SE', {
        timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).format(new Date());
    return { date: s.slice(0, 10), time: s.slice(11, 16) };
};
const parseD = (s) => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d); };
const fmtD = (ms) => new Date(ms).toISOString().slice(0, 10);
const addDays = (s, n) => fmtD(parseD(s) + n * 86400000);
const diffDays = (a, b) => Math.round((parseD(a) - parseD(b)) / 86400000);
const dowOf = (s) => new Date(parseD(s)).getUTCDay(); // 0=日
const mondayOf = (s) => addDays(s, -((dowOf(s) + 6) % 7));
const mdLabel = (s) => { const [, m, d] = s.split('-').map(Number); return `${m}/${d}`; };
const dateLabel = (s, today) => {
    const k = diffDays(s, today);
    const tag = k === 0 ? '今天' : k === 1 ? '明天' : k === -1 ? '昨天' : '';
    return { text: `${mdLabel(s)}（${WD[dowOf(s)]}）`, tag };
};
const hhmm = (t) => (t ? String(t).slice(0, 5) : '');
const hoursOf = (it) => {
    if (!it.start_time || !it.end_time || it.start_date !== it.end_date) return null;
    const [h1, m1] = hhmm(it.start_time).split(':').map(Number);
    const [h2, m2] = hhmm(it.end_time).split(':').map(Number);
    const mins = (h2 * 60 + m2) - (h1 * 60 + m1);
    if (mins <= 0) return null;
    return `${Math.round((mins / 60) * 10) / 10} 小時`;
};

// ---------- 錯誤訊息翻成白話 ----------
const friendlyError = (e) => {
    const m = String((e && e.message) || e || '');
    const map = [
        ['not your routine item', '只有本人可以修改自己的例行工作'],
        ['cannot complete', '這筆已經完成、跳過或取消，不能再按完成'],
        ['cannot skip', '只有「週期自動產生、尚未完成」的工作可以跳過'],
        ['overdue items cannot be moved', '逾期的任務固定在最上面，不能搬移'],
        ['item not in your list', '這筆不在你的清單裡'],
        ['item not found or canceled', '這筆工作已被取消或不存在'],
        ['more than one member record', '這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號'],
        ['no member record', '找不到這個帳號對應的同工資料'],
        ['no permission', '沒有使用權限'],
        ['permission denied', '沒有使用權限'],
        ['dates are required', '日期必填'],
        ['weekly rule needs', '每週重複請至少選一個星期'],
        ['monthly rule needs', '每月重複請選幾號，或勾「每月最後一天」'],
        ['until date is before', '重複的結束日不能早於開始日'],
        ['not your recurring rule', '只有建立者可以修改這個週期設定'],
        ['violates check constraint', '內容不符合規則（例如任務名稱空白、結束日期早於開始日期）'],
    ];
    for (const [k, v] of map) if (m.includes(k)) return v;
    return m || '發生未知錯誤';
};

const ruleSummary = (r) => {
    if (r.freq === 'daily') return r.weekdays_only ? '每天（週一到週五）' : '每天';
    if (r.freq === 'weekly') return '每週 ' + [...(r.week_days || [])].sort((a, b) => a - b).map(n => WD[n % 7]).join('、');
    const parts = [];
    if (r.month_day) parts.push(`${r.month_day} 號`);
    if (r.month_last_day) parts.push('最後一天');
    return '每月 ' + parts.join('、');
};

// ---------- 小元件：權限圖示＋姓名（點圖示或姓名，3 秒內改顯示權限） ----------
const PersonTag = ({ person, size = 16, strong }) => {
    const [showRole, setShowRole] = useState(false);
    useEffect(() => {
        if (!showRole) return undefined;
        const t = setTimeout(() => setShowRole(false), 3000);
        return () => clearTimeout(t);
    }, [showRole]);
    const role = person && person.role;
    const Icon = ROLE_ICONS[role] || User;
    const high = HIGH_ROLES.includes(role);
    return (
        <button type="button" onClick={(e) => { e.stopPropagation(); setShowRole(v => !v); }}
            title={ROLE_LABELS[role] || ''} className="inline-flex items-center gap-1.5 max-w-full text-left">
            <span className={`shrink-0 ${high ? 'text-amber-500' : 'text-slate-400'}`}><Icon size={size} /></span>
            <span className={`truncate ${strong ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                {showRole ? (ROLE_LABELS[role] || role) : ((person && person.name) || '（未知）')}
            </span>
        </button>
    );
};

// ---------- 小元件：點一下就能改的文字（任務名稱、備註） ----------
const EditableText = ({ value, placeholder, canEdit, onSave, className = '' }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(value || '');
    const cancelRef = useRef(false);
    useEffect(() => { if (!editing) setText(value || ''); }, [value, editing]);
    const commit = async () => {
        setEditing(false);
        if (cancelRef.current) { cancelRef.current = false; return; }
        const v = text.trim();
        if (v !== (value || '').trim()) await onSave(v);
    };
    if (!editing) {
        return (
            <div onClick={() => canEdit && setEditing(true)}
                className={`${className} ${canEdit ? 'cursor-text hover:bg-slate-100/80' : ''} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`}>
                {value ? value : (canEdit ? <span className="text-slate-300">{placeholder}</span> : null)}
            </div>
        );
    }
    return (
        <input autoFocus value={text} onChange={e => setText(e.target.value)} onBlur={commit}
            onKeyDown={e => {
                if (e.key === 'Enter') e.currentTarget.blur();
                if (e.key === 'Escape') { cancelRef.current = true; e.currentTarget.blur(); }
            }}
            className="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900" />
    );
};

// ---------- 小元件：點一下改「開始／結束」的日期或時間 ----------
const EditableRange = ({ type, a, b, canEdit, children, onSave }) => {
    const [editing, setEditing] = useState(false);
    const [va, setVa] = useState(a || '');
    const [vb, setVb] = useState(b || '');
    const cancelRef = useRef(false);
    useEffect(() => { if (!editing) { setVa(a || ''); setVb(b || ''); } }, [a, b, editing]);
    const finish = async () => {
        setEditing(false);
        if (cancelRef.current) { cancelRef.current = false; return; }
        if (va !== (a || '') || vb !== (b || '')) await onSave(va, vb);
    };
    if (!editing) {
        return (
            <div onClick={() => canEdit && setEditing(true)}
                className={`${canEdit ? 'cursor-pointer hover:bg-slate-100/80' : ''} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`}>
                {children}
            </div>
        );
    }
    const inputCls = 'w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900';
    return (
        <div tabIndex={-1}
            onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) finish(); }}
            onKeyDown={e => {
                if (e.key === 'Enter') finish();
                if (e.key === 'Escape') { cancelRef.current = true; setEditing(false); }
            }}
            className="flex flex-col gap-1">
            <label className="flex items-center gap-1 text-[0.75em] text-slate-400">起
                <input autoFocus type={type} value={va} onChange={e => setVa(e.target.value)} className={inputCls} /></label>
            <label className="flex items-center gap-1 text-[0.75em] text-slate-400">迄
                <input type={type} value={vb} onChange={e => setVb(e.target.value)} className={inputCls} /></label>
        </div>
    );
};

// ---------- 「詳細新增」與「修改週期設定」共用的視窗 ----------
const WorkModal = ({ mode, initial, today, onClose, onSubmit, busy }) => {
    const init = initial || {};
    const isRuleEdit = mode === 'editRule';
    const [title, setTitle] = useState(init.title || '');
    const [startDate, setStartDate] = useState(init.start_date || today);
    const [startTime, setStartTime] = useState(hhmm(init.start_time));
    const [endDate, setEndDate] = useState(init.end_date || init.start_date || today);
    const [endTime, setEndTime] = useState(hhmm(init.end_time));
    const [priority, setPriority] = useState(init.priority || 'normal');
    const [note, setNote] = useState(init.note || '');
    const [flag, setFlag] = useState(init.meeting_flag || '');
    const [repeat, setRepeat] = useState(isRuleEdit ? init.freq : 'none');
    const [weekdaysOnly, setWeekdaysOnly] = useState(!!init.weekdays_only);
    const [weekDays, setWeekDays] = useState(init.week_days || []);
    const [monthDay, setMonthDay] = useState(init.month_day ? String(init.month_day) : '');
    const [monthLast, setMonthLast] = useState(!!init.month_last_day);
    const [untilDate, setUntilDate] = useState(init.until_date || '');
    const [isActive, setIsActive] = useState(init.is_active === undefined ? true : init.is_active);
    const [err, setErr] = useState('');

    const lbl = 'text-xs font-medium text-slate-500';
    const inp = 'w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all';
    const toggleWd = (n) => setWeekDays(w => w.includes(n) ? w.filter(x => x !== n) : [...w, n]);

    const submit = () => {
        setErr('');
        if (!title.trim()) return setErr('請輸入任務名稱');
        if (!startDate) return setErr('開始日期必填');
        if (repeat === 'none' && (!endDate || endDate < startDate)) return setErr('結束日期不能早於開始日期');
        if (repeat === 'weekly' && weekDays.length === 0) return setErr('每週重複請至少選一個星期');
        if (repeat === 'monthly' && !monthDay && !monthLast) return setErr('每月重複請選幾號，或勾「每月最後一天」');
        if (repeat !== 'none' && untilDate && untilDate < startDate) return setErr('重複的結束日不能早於開始日');
        onSubmit({
            title: title.trim(), startDate, startTime: startTime || null,
            endDate: repeat === 'none' ? endDate : startDate, endTime: endTime || null,
            priority, note: note.trim() || null, flag: flag || null,
            repeat, weekdaysOnly: repeat === 'daily' && weekdaysOnly,
            weekDays: repeat === 'weekly' ? weekDays : [],
            monthDay: repeat === 'monthly' && monthDay ? Number(monthDay) : null,
            monthLast: repeat === 'monthly' && monthLast,
            untilDate: untilDate || null, isActive,
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100">
                <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        {isRuleEdit ? <><Repeat className="text-indigo-600" size={20} /> 修改週期設定</> : <><Plus className="text-indigo-600" size={20} /> 新增例行工作</>}
                    </h3>
                    <button onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"><X size={20} /></button>
                </div>
                <div className="p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1">
                    <div className="space-y-1.5">
                        <label className={lbl}>任務名稱（必填）</label>
                        <input autoFocus value={title} onChange={e => setTitle(e.target.value)} placeholder="一句話說明工作內容" className={inp} />
                    </div>

                    <div className="space-y-1.5">
                        <label className={lbl}>重複</label>
                        <div className="flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max">
                            {[['none', '不重複'], ['daily', '每天'], ['weekly', '每週'], ['monthly', '每月']].filter(([k]) => !(isRuleEdit && k === 'none')).map(([k, t]) => (
                                <button key={k} type="button" onClick={() => setRepeat(k)}
                                    className={`h-8 px-4 rounded-md text-xs font-medium transition-all ${repeat === k ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}>{t}</button>
                            ))}
                        </div>
                        {repeat === 'daily' && (
                            <label className="flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none">
                                <input type="checkbox" checked={weekdaysOnly} onChange={e => setWeekdaysOnly(e.target.checked)} className="accent-indigo-600" /> 只排週一到週五
                            </label>
                        )}
                        {repeat === 'weekly' && (
                            <div className="flex gap-2 pt-1 flex-wrap">
                                {[1, 2, 3, 4, 5, 6, 7].map(n => (
                                    <button key={n} type="button" onClick={() => toggleWd(n)}
                                        className={`w-10 h-10 rounded-full border text-sm font-medium transition-all ${weekDays.includes(n) ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'}`}>{WD[n % 7]}</button>
                                ))}
                            </div>
                        )}
                        {repeat === 'monthly' && (
                            <div className="flex items-center gap-4 pt-1 flex-wrap">
                                <select value={monthDay} onChange={e => setMonthDay(e.target.value)} className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900">
                                    <option value="">不指定號數</option>
                                    {Array.from({ length: 31 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n} 號</option>)}
                                </select>
                                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
                                    <input type="checkbox" checked={monthLast} onChange={e => setMonthLast(e.target.checked)} className="accent-indigo-600" /> 每月最後一天
                                </label>
                                {monthDay && Number(monthDay) > 28 && !monthLast && (
                                    <span className="text-xs text-amber-600">{monthDay} 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」</span>
                                )}
                            </div>
                        )}
                        {repeat !== 'none' && (
                            <p className="text-xs text-slate-400 pt-1">到時間系統會在凌晨自動建立當天的工作；修改週期只影響之後產生的。</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5"><label className={lbl}>{repeat === 'none' ? '開始日期' : '從哪一天開始'}</label><input type="date" value={startDate} onChange={e => { setStartDate(e.target.value); if (endDate < e.target.value) setEndDate(e.target.value); }} className={inp} /></div>
                        <div className="space-y-1.5"><label className={lbl}>開始時間（選填）</label><input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className={inp} /></div>
                        {repeat === 'none' ? (
                            <div className="space-y-1.5"><label className={lbl}>結束日期（到期日）</label><input type="date" value={endDate} min={startDate} onChange={e => setEndDate(e.target.value)} className={inp} /></div>
                        ) : (
                            <div className="space-y-1.5"><label className={lbl}>重複到哪一天（選填）</label><input type="date" value={untilDate} min={startDate} onChange={e => setUntilDate(e.target.value)} className={inp} /></div>
                        )}
                        <div className="space-y-1.5"><label className={lbl}>結束時間（選填）</label><input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className={inp} /></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className={lbl}>優先級</label>
                            <div className="flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max">
                                {[['normal', '普通'], ['urgent', '緊急']].map(([k, t]) => (
                                    <button key={k} type="button" onClick={() => setPriority(k)}
                                        className={`h-8 px-4 rounded-md text-xs font-medium transition-all ${priority === k ? (k === 'urgent' ? 'bg-white text-red-600 shadow-sm' : 'bg-white text-indigo-600 shadow-sm') : 'text-slate-500 hover:bg-slate-200/50'}`}>{t}</button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className={lbl}>會議對焦（週三會議挑議題用，可不選）</label>
                            <select value={flag} onChange={e => setFlag(e.target.value)} className={inp}>
                                <option value="">不標記</option>
                                {Object.entries(FLAG_LABELS).map(([k, t]) => <option key={k} value={k}>{t}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className={lbl}>備註</label>
                        <textarea value={note} onChange={e => setNote(e.target.value)} rows={2} className={inp} />
                    </div>

                    {isRuleEdit && (
                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
                            <input type="checkbox" checked={isActive} onChange={e => setIsActive(e.target.checked)} className="accent-indigo-600" /> 啟用這個週期（取消勾選就是停止）
                        </label>
                    )}
                    {err && <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"><AlertCircle size={16} /> {err}</div>}
                </div>
                <div className="p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0">
                    <button onClick={onClose} className="flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors">取消</button>
                    <button onClick={submit} disabled={busy} className="flex-1 py-3 font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-400 shadow-button hover:-translate-y-0.5 rounded-lg transition-all duration-200 disabled:opacity-50">{isRuleEdit ? '儲存' : (repeat === 'none' ? '新增' : '建立週期')}</button>
                </div>
            </div>
        </div>
    );
};

// =====================================================================
// 主畫面
// =====================================================================
const WorkLog = ({ session, supabase, goToService, utils }) => {
    // ----- 狀態 -----
    const [now, setNow] = useState(getNow());
    const [me, setMe] = useState(null);                 // 目前登入者的 member id
    const [people, setPeople] = useState([]);           // 三種權限的人
    const [accessError, setAccessError] = useState('');
    const [flat, setFlat] = useState([]);               // 所有載入的「工作＋執行人」
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [confirmAction, setConfirmAction] = useState(null);

    const [viewWho, setViewWho] = useState('mine');     // mine | all
    const [viewRange, setViewRange] = useState('today'); // today | week | custom
    const [customStart, setCustomStart] = useState('');
    const [customEnd, setCustomEnd] = useState('');
    const [selected, setSelected] = useState(new Set());

    const [sbCollapsed, setSbCollapsed] = useState(() => { try { return localStorage.getItem('tbcSidebarCollapsed') === '1'; } catch (e) { return false; } });
    const toggleSb = () => setSbCollapsed(v => { const n = !v; try { localStorage.setItem('tbcSidebarCollapsed', n ? '1' : '0'); } catch (e) {} return n; });
    const [fontKey, setFontKey] = useState(() => { try { const v = localStorage.getItem('tbcWorkFont'); return FONT_SIZES[v] ? v : 'm'; } catch (e) { return 'm'; } });
    const pickFont = (k) => { setFontKey(k); try { localStorage.setItem('tbcWorkFont', k); } catch (e) {} };
    const [hiddenCols, setHiddenCols] = useState(() => { try { return JSON.parse(localStorage.getItem('tbcWorkHiddenCols') || '[]'); } catch (e) { return []; } });
    const toggleCol = (id) => setHiddenCols(h => {
        const n = h.includes(id) ? h.filter(x => x !== id) : [...h, id];
        try { localStorage.setItem('tbcWorkHiddenCols', JSON.stringify(n)); } catch (e) {}
        return n;
    });
    const [colMenuOpen, setColMenuOpen] = useState(false);

    const [quickTitle, setQuickTitle] = useState('');
    const [quickDate, setQuickDate] = useState('');
    const [busy, setBusy] = useState(false);
    const [modal, setModal] = useState(null);           // { mode:'create' } | { mode:'editRule', rule }
    const [rulesOpen, setRulesOpen] = useState(false);
    const [rules, setRules] = useState([]);
    const [menu, setMenu] = useState(null);             // { key, x, y }
    const [drag, setDrag] = useState(null);             // { key, date }
    const [dragReady, setDragReady] = useState(null);
    const [overKey, setOverKey] = useState(null);

    const fs = FONT_SIZES[fontKey];
    const ic = fs + 3;
    const today = now.date;
    const msgTimer = useRef(null);
    const reqRef = useRef(0);

    const showMessage = (type, text) => {
        setMessage({ type, text });
        clearTimeout(msgTimer.current);
        msgTimer.current = setTimeout(() => setMessage({ type: '', text: '' }), 3200);
    };
    const call = async (fn, args) => {
        const { data, error } = await supabase.rpc(fn, args || {});
        if (error) throw error;
        return data;
    };
    // 做一個動作：成功後重新讀取，失敗顯示白話錯誤
    const act = async (fn, okText) => {
        try {
            const r = await fn();
            await loadData(true);
            if (okText) showMessage('success', typeof okText === 'function' ? okText(r) : okText);
            return r;
        } catch (e) {
            showMessage('error', friendlyError(e));
            await loadData(true);
            return undefined;
        }
    };

    // ----- 顯示範圍 -----
    const range = useMemo(() => {
        if (viewRange === 'today') return { start: today, end: today };
        if (viewRange === 'week') { const s = mondayOf(today); return { start: s, end: addDays(s, 6) }; }
        const s = customStart || today; const e = customEnd || s;
        return s <= e ? { start: s, end: e } : { start: e, end: s };
    }, [viewRange, customStart, customEnd, today]);

    // 每 30 秒更新一次「現在時間」，讓逾期標記會自己出現
    useEffect(() => {
        const t = setInterval(() => setNow(prev => { const n = getNow(); return (n.date === prev.date && n.time === prev.time) ? prev : n; }), 30000);
        return () => clearInterval(t);
    }, []);

    // ----- 讀資料 -----
    const loadPeople = async () => {
        try {
            const myId = await call('work_current_member');
            const list = await call('work_list_people');
            setMe(myId);
            setPeople(list || []);
            setSelected(new Set((list || []).map(p => p.member_id)));
            setAccessError('');
            return true;
        } catch (e) {
            setAccessError(friendlyError(e));
            return false;
        }
    };

    const loadData = async (silent) => {
        const req = ++reqRef.current;
        if (!silent) setIsLoading(true);
        try {
            const fetchAll = (utils && utils.fetchAllData) ? utils.fetchAllData : (fn) => fn();
            const ok = (res) => { if (res && res.error) throw res.error; return (res && res.data) || []; };
            // A：和顯示範圍有重疊的工作
            const a = ok(await fetchAll(() => supabase.from('work_items').select('*, work_assignees(*)')
                .is('canceled_at', null).lte('start_date', range.end).gte('end_date', range.start)));
            // B：已逾期、還沒完成的（不管多久以前，都要置頂提醒）
            const od = ok(await fetchAll(() => supabase.from('work_items').select('id, work_assignees!inner(id)')
                .is('canceled_at', null).lte('end_date', today)
                .neq('work_assignees.status', 'done').is('work_assignees.skipped_at', null)));
            const have = new Set(a.map(x => x.id));
            const needIds = od.map(x => x.id).filter(id => !have.has(id));
            let extra = [];
            if (needIds.length) {
                extra = ok(await fetchAll(() => supabase.from('work_items').select('*, work_assignees(*)').in('id', needIds)));
            }
            if (req !== reqRef.current) return; // 有更新的讀取，這次作廢
            const rows = [];
            for (const it of [...a, ...extra]) {
                const { work_assignees: as, ...item } = it;
                for (const asg of (as || [])) rows.push({ key: asg.id, item: { ...item, assigneeCount: (as || []).length }, a: asg });
            }
            setFlat(rows);
        } catch (e) {
            if (req === reqRef.current) showMessage('error', '讀取失敗：' + friendlyError(e));
        } finally {
            if (req === reqRef.current && !silent) setIsLoading(false);
        }
    };

    useEffect(() => { loadPeople(); }, []); // eslint-disable-line
    useEffect(() => { if (me) loadData(false); }, [me, range.start, range.end, today]); // eslint-disable-line
    useEffect(() => { if (viewRange === 'custom' && !customStart) { setCustomStart(today); setCustomEnd(addDays(today, 6)); } }, [viewRange]); // eslint-disable-line

    // ----- 整理要顯示的資料 -----
    const peopleMap = useMemo(() => { const m = {}; people.forEach(p => { m[p.member_id] = { name: p.name, role: p.role }; }); return m; }, [people]);
    const myPerson = me ? peopleMap[me] : null;

    const { overdueRows, groups, total } = useMemo(() => {
        const rows = flat.map(r => {
            const done = r.a.status === 'done';
            const skipped = !!r.a.skipped_at;
            const endT = hhmm(r.item.end_time);
            const overdue = !done && !skipped && (r.item.end_date < now.date || (r.item.end_date === now.date && endT && endT < now.time));
            return {
                ...r, done, skipped, overdue,
                isMine: r.a.member_id === me,
                isRoutine: r.item.assigneeCount === 1 && r.item.creator_member_id === r.a.member_id,
                isRecurring: !!r.item.recurring_rule_id,
                person: peopleMap[r.a.member_id],
            };
        });
        const vis = rows.filter(r => viewWho === 'mine' ? r.isMine : selected.has(r.a.member_id));
        const od = vis.filter(r => r.overdue).sort((x, y) =>
            (x.item.end_date + hhmm(x.item.end_time)).localeCompare(y.item.end_date + hhmm(y.item.end_time)) ||
            ((x.person && x.person.name) || '').localeCompare((y.person && y.person.name) || ''));
        const inR = vis.filter(r => !r.overdue && r.item.start_date <= range.end && r.item.end_date >= range.start);
        const byDate = {};
        inR.forEach(r => { (byDate[r.item.start_date] = byDate[r.item.start_date] || []).push(r); });
        const gs = Object.keys(byDate).sort().map(date => {
            const list = byDate[date].sort((x, y) => {
                if (viewWho === 'mine') return (x.a.sort_order - y.a.sort_order) || String(x.a.created_at).localeCompare(String(y.a.created_at));
                const tx = hhmm(x.item.start_time) || '99:99'; const ty = hhmm(y.item.start_time) || '99:99';
                return tx.localeCompare(ty) || ((x.person && x.person.name) || '').localeCompare((y.person && y.person.name) || '');
            });
            // 只有「我的」、而且這天不早於顯示範圍時才能搬移（避免漏載同一天的其他筆而排錯位置）
            const canMove = viewWho === 'mine' && date >= range.start;
            return { date, rows: list, canMove };
        });
        return { overdueRows: od, groups: gs, total: od.length + inR.length };
    }, [flat, now, me, viewWho, selected, range, peopleMap]);

    const visibleCols = COLS.filter(c => c.locked || !hiddenCols.includes(c.id));
    const tpl = `48px ${visibleCols.map(c => c.w).join(' ')}`;
    // 欄位加總的最小寬度：比畫面窄時才出現橫向捲軸，而且白色卡片會跟著撐到底
    const listMinWidth = 48 + visibleCols.reduce((n, c) => n + c.min, 0) + 8 * visibleCols.length + 16;

    // ----- 動作 -----
    const saveItem = (row, patch, okText) => act(() => {
        const it = { ...row.item, ...patch };
        return call('work_update_routine', {
            p_item_id: it.id, p_title: it.title, p_start_date: it.start_date, p_start_time: it.start_time || null,
            p_end_date: it.end_date, p_end_time: it.end_time || null, p_priority: it.priority || 'normal',
            p_note: it.note || null, p_meeting_flag: it.meeting_flag || null,
        });
    }, okText);
    const saveDates = (row, s, e) => {
        if (!s || !e) { showMessage('error', '日期必填'); return; }
        let ns = s, ne = e;
        // 只改了開始日期：結束日期跟著搬，保持原本的天數
        if (s !== row.item.start_date && e === row.item.end_date) ne = addDays(s, diffDays(row.item.end_date, row.item.start_date));
        if (ne < ns) { showMessage('error', '結束日期不能早於開始日期'); return; }
        // 改完如果跑到目前顯示範圍之外，要告訴使用者它去哪了，免得以為不見了
        const leaves = !(ns <= range.end && ne >= range.start);
        return saveItem(row, { start_date: ns, end_date: ne },
            leaves ? `已改到 ${mdLabel(ns)}（目前顯示範圍看不到，切換範圍就會出現）` : null);
    };
    const saveTimes = (row, s, e) => saveItem(row, { start_time: s || null, end_time: e || null });
    const saveTitle = (row, v) => { if (!v) { showMessage('error', '任務名稱不能空白'); return; } return saveItem(row, { title: v }); };
    const completeRow = (row) => act(() => call('work_complete', { p_item_id: row.item.id, p_note: null }), '已完成');
    const skipRow = (row) => act(() => call('work_skip', { p_item_id: row.item.id }), '已跳過這次');
    const moveRow = (row, where) => act(() => call('work_move', { p_item_id: row.item.id, p_where: where }));
    const copyRow = (row) => act(() => call('work_copy', { p_item_id: row.item.id }), '已複製到今天，狀態重設為待處理');
    const deleteRow = (row) => setConfirmAction({
        title: '警告', confirmText: '刪除',
        message: `確定要刪除「${row.item.title}」嗎？\n（已經完成或跳過過的，會改成「取消」並保留紀錄）`,
        onConfirm: async () => {
            setConfirmAction(null);
            await act(() => call('work_delete', { p_item_id: row.item.id }),
                (r) => r === 'canceled' ? '這筆已有進度紀錄，已改為取消並保留紀錄' : '已刪除');
        },
    });

    const quickAdd = async () => {
        const t = quickTitle.trim();
        if (!t || busy) return;
        setBusy(true);
        const d = quickDate || today;
        const r = await act(() => call('work_create_routine', { p_title: t, p_start_date: d, p_end_date: d }));
        setBusy(false);
        if (r) {
            setQuickTitle('');
            const inRange = d <= range.end && d >= range.start;
            showMessage('success', inRange ? '已新增' : `已新增到 ${mdLabel(d)}（目前顯示範圍看不到，切換範圍就會出現）`);
        }
    };

    const submitModal = async (p) => {
        setBusy(true);
        let ok;
        if (modal.mode === 'editRule') {
            ok = await act(() => call('work_update_rule', {
                p_rule_id: modal.rule.id, p_title: p.title, p_freq: p.repeat, p_weekdays_only: p.weekdaysOnly,
                p_week_days: p.weekDays, p_month_day: p.monthDay, p_month_last_day: p.monthLast,
                p_start_date: p.startDate, p_until_date: p.untilDate, p_start_time: p.startTime, p_end_time: p.endTime,
                p_priority: p.priority, p_note: p.note, p_meeting_flag: p.flag, p_is_active: p.isActive,
            }), '週期設定已儲存（只影響之後產生的工作）');
            if (ok !== undefined) await loadRules();
        } else if (p.repeat === 'none') {
            ok = await act(() => call('work_create_routine', {
                p_title: p.title, p_start_date: p.startDate, p_start_time: p.startTime, p_end_date: p.endDate,
                p_end_time: p.endTime, p_priority: p.priority, p_note: p.note, p_meeting_flag: p.flag,
            }), '已新增');
        } else {
            ok = await act(() => call('work_create_rule', {
                p_title: p.title, p_freq: p.repeat, p_weekdays_only: p.weekdaysOnly, p_week_days: p.weekDays,
                p_month_day: p.monthDay, p_month_last_day: p.monthLast, p_start_date: p.startDate, p_until_date: p.untilDate,
                p_start_time: p.startTime, p_end_time: p.endTime, p_priority: p.priority, p_note: p.note, p_meeting_flag: p.flag,
            }), '已建立週期設定，之後會在凌晨自動出現在清單');
        }
        setBusy(false);
        if (ok !== undefined) setModal(null);
    };

    const loadRules = async () => {
        try {
            const { data, error } = await supabase.from('work_recurring_rules').select('*').eq('creator_member_id', me).order('created_at');
            if (error) throw error;
            setRules(data || []);
        } catch (e) { showMessage('error', '讀取週期設定失敗：' + friendlyError(e)); }
    };
    const openRules = async () => { setRulesOpen(true); await loadRules(); };
    const toggleRule = async (r) => {
        const ok = await act(() => call('work_update_rule', {
            p_rule_id: r.id, p_title: r.title, p_freq: r.freq, p_weekdays_only: r.weekdays_only, p_week_days: r.week_days,
            p_month_day: r.month_day, p_month_last_day: r.month_last_day, p_start_date: r.start_date, p_until_date: r.until_date,
            p_start_time: r.start_time, p_end_time: r.end_time, p_priority: r.priority, p_note: r.note,
            p_meeting_flag: r.meeting_flag, p_is_active: !r.is_active,
        }), r.is_active ? '已停止這個週期' : '已重新啟用');
        if (ok !== undefined) await loadRules();
    };

    // ----- 拖曳排序 -----
    const onDropOn = async (g, targetRow) => {
        const d = drag; setDrag(null); setOverKey(null); setDragReady(null);
        if (!d || d.date !== g.date || d.key === targetRow.key) return;
        const movable = g.rows.filter(r => !r.overdue);
        const from = movable.findIndex(r => r.key === d.key);
        const to = movable.findIndex(r => r.key === targetRow.key);
        const dragged = g.rows.find(r => r.key === d.key);
        if (!dragged || from < 0 || to < 0) return;
        // 告訴資料庫「放到哪一筆的前面／後面」，不是「放到第幾個」：
        // 畫面上看到的可能只是那一天的一部分工作（例如跨天任務），用「第幾個」會對不準。
        // p_after 一定要明確帶上（true／false），資料庫有兩個同名函式，少帶會分不清要用哪一個。
        await act(() => call('work_move_to', { p_item_id: dragged.item.id, p_target_item_id: targetRow.item.id, p_after: from < to }));
    };

    // ----- 版面小零件 -----
    const segBox = 'flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 shadow-sm shrink-0';
    const segBtn = (on) => `h-8 px-4 rounded-md text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${on ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`;

    const menuRow = menu ? [...overdueRows, ...groups.flatMap(g => g.rows)].find(r => r.key === menu.key) : null;
    const menuGroup = menuRow ? groups.find(g => g.rows.some(r => r.key === menuRow.key)) : null;

    const renderRow = (r, g) => {
        const canEdit = r.isMine && r.isRoutine;
        const movable = g ? g.rows.filter(x => !x.overdue) : [];
        const canDrag = !!g && g.canMove && canEdit && !r.overdue;
        const isOver = overKey === r.key && drag && drag.key !== r.key;
        const dim = r.done || r.skipped;
        const cell = (c) => {
            switch (c.id) {
                case 'title':
                    return (
                        <div key={c.id} className="min-w-0">
                            <div className="flex items-start gap-1.5 flex-wrap">
                                <div className="min-w-0 flex-1">
                                    <EditableText value={r.item.title} placeholder="任務名稱" canEdit={canEdit} onSave={(v) => saveTitle(r, v)}
                                        className={`font-medium ${dim ? 'text-slate-400 line-through' : (r.overdue ? 'text-red-600' : 'text-slate-900')}`} />
                                </div>
                                <div className="flex items-center gap-1 pt-1 shrink-0">
                                    {r.overdue && <span className="inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"><AlertTriangle size={Math.round(fs * 0.8)} /> 逾期</span>}
                                    {r.isRoutine && <span className="text-[0.7em] px-1.5 py-0.5 rounded border border-violet-100 bg-violet-50 text-violet-600 font-bold">例行</span>}
                                    {r.isRecurring && <span title="週期性工作，自動產生" className="text-slate-400"><Repeat size={Math.round(fs * 0.95)} /></span>}
                                </div>
                            </div>
                        </div>
                    );
                case 'who':
                    return <div key={c.id} className="min-w-0"><PersonTag person={r.person} size={ic} /></div>;
                case 'date': {
                    const multi = r.item.start_date !== r.item.end_date;
                    return (
                        <div key={c.id} className={`min-w-0 ${r.overdue ? 'text-red-600' : 'text-slate-700'}`}>
                            <EditableRange type="date" a={r.item.start_date} b={r.item.end_date} canEdit={canEdit} onSave={(s, e) => saveDates(r, s, e)}>
                                {multi ? `${mdLabel(r.item.start_date)} → ${mdLabel(r.item.end_date)}` : mdLabel(r.item.start_date)}
                            </EditableRange>
                        </div>
                    );
                }
                case 'time': {
                    const s = hhmm(r.item.start_time), e = hhmm(r.item.end_time);
                    return (
                        <div key={c.id} className="min-w-0 text-slate-700">
                            <EditableRange type="time" a={s} b={e} canEdit={canEdit} onSave={(a2, b2) => saveTimes(r, a2, b2)}>
                                {s || e ? `${s || '—'} ~ ${e || '—'}` : <span className="text-slate-300">{canEdit ? '加時間' : ''}</span>}
                            </EditableRange>
                        </div>
                    );
                }
                case 'hours':
                    return <div key={c.id} className="text-slate-500 text-[0.9em]">{hoursOf(r.item) || ''}</div>;
                case 'priority':
                    return (
                        <div key={c.id}>
                            <button type="button" disabled={!canEdit}
                                onClick={() => saveItem(r, { priority: r.item.priority === 'urgent' ? 'normal' : 'urgent' })}
                                title={canEdit ? '點一下切換' : ''}
                                className={`text-[0.75em] px-2 py-0.5 rounded border font-bold ${r.item.priority === 'urgent' ? 'bg-red-50 border-red-100 text-red-600' : 'bg-slate-50 border-slate-200 text-slate-400'} ${canEdit ? 'hover:brightness-95 cursor-pointer' : 'cursor-default'}`}>
                                {r.item.priority === 'urgent' ? '緊急' : '普通'}
                            </button>
                        </div>
                    );
                case 'flag':
                    return (
                        <div key={c.id} className="min-w-0">
                            {canEdit ? (
                                <select value={r.item.meeting_flag || ''} onChange={e => saveItem(r, { meeting_flag: e.target.value || null })}
                                    className={`max-w-full text-[0.8em] rounded border px-1.5 py-1 outline-none cursor-pointer ${r.item.meeting_flag ? 'bg-violet-50 border-violet-100 text-violet-600 font-bold' : 'bg-transparent border-transparent text-slate-300 hover:border-slate-200'}`}>
                                    <option value="">—</option>
                                    {Object.entries(FLAG_LABELS).map(([k, t]) => <option key={k} value={k}>{t}</option>)}
                                </select>
                            ) : (r.item.meeting_flag ? <span className="text-[0.8em] px-2 py-0.5 rounded border bg-violet-50 border-violet-100 text-violet-600 font-bold">{FLAG_LABELS[r.item.meeting_flag]}</span> : null)}
                        </div>
                    );
                case 'note':
                    return (
                        <div key={c.id} className="min-w-0">
                            <EditableText value={r.item.note} placeholder="備註" canEdit={canEdit} onSave={(v) => saveItem(r, { note: v || null })} className="text-slate-600 text-[0.92em]" />
                        </div>
                    );
                case 'status':
                    return (
                        <div key={c.id} className="flex items-center gap-1.5 flex-wrap">
                            {r.done ? (
                                <span className="inline-flex items-center gap-1 text-[0.8em] px-2 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold"><CheckCircle2 size={Math.round(fs)} /> 已完成</span>
                            ) : r.skipped ? (
                                <span className="inline-flex items-center gap-1 text-[0.8em] px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-500 font-bold"><SkipForward size={Math.round(fs)} /> 已跳過</span>
                            ) : canEdit ? (
                                <>
                                    <button onClick={() => completeRow(r)} className="h-8 px-3 rounded-md text-[0.8em] font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-button hover:-translate-y-0.5 transition-all flex items-center gap-1"><Check size={Math.round(fs)} /> 完成</button>
                                    {r.isRecurring && <button onClick={() => skipRow(r)} title="放假或這次沒做" className="h-8 px-2.5 rounded-md text-[0.8em] font-medium text-slate-500 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">跳過這次</button>}
                                </>
                            ) : (
                                <span className="text-[0.8em] px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 font-medium">{STATUS_LABELS[r.a.status]}</span>
                            )}
                        </div>
                    );
                default: return null;
            }
        };
        return (
            <div key={r.key}
                draggable={canDrag && dragReady === r.key}
                onDragStart={(e) => { setDrag({ key: r.key, date: g.date }); e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', r.key); } catch (x) {} }}
                onDragOver={(e) => { if (drag && g && drag.date === g.date && !r.overdue) { e.preventDefault(); if (overKey !== r.key) setOverKey(r.key); } }}
                onDrop={(e) => { e.preventDefault(); if (g) onDropOn(g, r); }}
                onDragEnd={() => { setDrag(null); setOverKey(null); setDragReady(null); }}
                className={`group grid items-start gap-x-2 px-2 py-2.5 border-b border-slate-100 last:border-b-0 transition-colors
                    ${r.overdue ? 'bg-red-50/40' : 'hover:bg-indigo-50/30'} ${drag && drag.key === r.key ? 'opacity-40' : ''}
                    ${isOver ? 'ring-2 ring-inset ring-indigo-400 bg-indigo-50/60' : ''}`}
                style={{ gridTemplateColumns: tpl }}>
                <div className="flex items-center gap-0.5 pt-0.5">
                    {canDrag ? (
                        <span onMouseDown={() => setDragReady(r.key)} onMouseUp={() => setDragReady(null)} title="按住拖曳排序"
                            className="cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"><GripVertical size={ic} /></span>
                    ) : <span style={{ width: ic }} />}
                    {canEdit ? (
                        <button onClick={(e) => { const b = e.currentTarget.getBoundingClientRect(); setMenu({ key: r.key, x: Math.min(b.left, window.innerWidth - 220), y: Math.min(b.bottom + 4, window.innerHeight - 300) }); }}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="更多"><MoreVertical size={ic} /></button>
                    ) : <span style={{ width: ic + 8 }} />}
                </div>
                {visibleCols.map(cell)}
            </div>
        );
    };

    // ----- 畫面 -----
    const MyIcon = myPerson ? (ROLE_ICONS[myPerson.role] || User) : User;
    const myHigh = myPerson && HIGH_ROLES.includes(myPerson.role);

    return (
        <div className="flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative" style={{ fontSize: fs }}>
            {/* 左邊導覽列：樣式沿用 MemberDataCenter 的 tbc-sb */}
            <div data-sb={sbCollapsed ? 'collapsed' : 'open'} className="tbc-sb tbc-sb-md transition-all duration-300 ease-in-out relative w-64 flex flex-col justify-between shrink-0 z-30 h-full">
                <div className="flex flex-col">
                    <div className="tbc-sb-head">
                        <button onClick={sbCollapsed ? toggleSb : undefined} className="tbc-sb-logobtn" title={sbCollapsed ? '開啟側邊欄' : undefined}>
                            {window.TBC_LOGO ? <img src={window.TBC_LOGO} alt="" className="tbc-sb-logo" /> : <span className="tbc-sb-logo font-bold">TBC</span>}
                            <span className="tbc-sb-open"><PanelLeft size={20} /></span>
                        </button>
                        <span className="tbc-sb-label tbc-sb-title latin-tight">TBC Serve Manager</span>
                        <button onClick={toggleSb} className="hidden md:flex tbc-sb-toggle" title="隱藏側邊欄"><PanelLeft size={18} /></button>
                    </div>
                    <nav className="tbc-sb-nav">
                        <div className="tbc-sb-item tbc-sb-active" title="工作日誌"><ListChecks size={18} /><span className="tbc-sb-label">工作日誌</span></div>
                        <button onClick={() => goToService && goToService()} className="tbc-sb-item" title="服事管理"><Users size={18} /><span className="tbc-sb-label">服事管理</span></button>
                    </nav>
                </div>
                <div className="tbc-sb-foot">
                    <button onClick={async () => { if (supabase && supabase.auth && supabase.auth.signOut) { await supabase.auth.signOut(); } window.location.reload(); }} className="tbc-sb-item tbc-sb-logout" title="登出"><LogOut size={18} /><span className="tbc-sb-label">登出</span></button>
                </div>
            </div>

            <div className="flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0">
                {/* 頁首：左＝權限圖示＋姓名；右＝工具 */}
                <div className="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20">
                    <div className="flex items-center gap-2.5 min-w-0" style={{ fontSize: fs * 1.35 }}>
                        <span className={myHigh ? 'text-amber-500' : 'text-slate-400'}><MyIcon size={Math.round(fs * 1.7)} /></span>
                        <span className="font-extrabold text-slate-900 tracking-tight truncate">{myPerson ? myPerson.name : (accessError ? '' : '…')}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="relative">
                            <button onClick={() => setColMenuOpen(v => !v)} className={`${segBox} !p-1.5`}><span className={segBtn(colMenuOpen)}><SlidersHorizontal size={14} className="text-slate-500" /> 欄位</span></button>
                            {colMenuOpen && (
                                <>
                                    <div className="fixed inset-0 z-30" onClick={() => setColMenuOpen(false)} />
                                    <div className="absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in">
                                        <p className="text-[0.75em] text-slate-400 px-2 py-1">勾選要顯示的欄位（只記在這台電腦）</p>
                                        {COLS.map(c => (
                                            <label key={c.id} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked ? 'text-slate-300' : 'text-slate-700 hover:bg-slate-50 cursor-pointer'}`}>
                                                <input type="checkbox" disabled={c.locked} checked={c.locked || !hiddenCols.includes(c.id)} onChange={() => toggleCol(c.id)} className="accent-indigo-600" />
                                                {c.label}{c.locked && <Lock size={11} />}
                                            </label>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={segBox}>
                            <button onClick={openRules} className={segBtn(false)}><Repeat size={14} className="text-slate-500" /> 週期設定</button>
                        </div>
                        <div className={segBox} title="文字大小">
                            {[['s', '小', 12], ['m', '標準', 15], ['l', '大', 19]].map(([k, t, px]) => (
                                <button key={k} onClick={() => pickFont(k)} title={t} aria-label={`文字${t}`}
                                    className={`h-8 w-9 rounded-md font-bold leading-none transition-all ${fontKey === k ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'}`} style={{ fontSize: px }}>A</button>
                            ))}
                        </div>
                    </div>
                </div>

                {accessError ? (
                    <div className="flex-1 flex items-center justify-center p-6">
                        <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md">
                            <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"><Lock size={30} /></div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">無法使用工作日誌</h3>
                            <p className="text-slate-500 font-normal">{accessError}</p>
                            <p className="text-slate-400 text-[0.85em] mt-3">工作日誌只開放給牧師、行政與系統管理員。</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* 篩選列＋快速新增 */}
                        <div className="px-6 pt-4 pb-2 bg-slate-50 z-10 shrink-0 space-y-3">
                            <div className="flex items-center gap-3 flex-wrap">
                                <div className={segBox}>
                                    <button onClick={() => setViewWho('mine')} className={segBtn(viewWho === 'mine')}>我的</button>
                                    <button onClick={() => setViewWho('all')} className={segBtn(viewWho === 'all')}>全部</button>
                                </div>
                                <div className={segBox}>
                                    <button onClick={() => setViewRange('today')} className={segBtn(viewRange === 'today')}>今日</button>
                                    <button onClick={() => setViewRange('week')} className={segBtn(viewRange === 'week')}>本週</button>
                                    <button onClick={() => setViewRange('custom')} className={segBtn(viewRange === 'custom')}>自訂</button>
                                </div>
                                {viewRange === 'custom' && (
                                    <div className="flex items-center gap-2">
                                        <input type="date" value={customStart} onChange={e => setCustomStart(e.target.value)} className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20" />
                                        <span className="text-slate-400">～</span>
                                        <input type="date" value={customEnd} min={customStart} onChange={e => setCustomEnd(e.target.value)} className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20" />
                                    </div>
                                )}
                                <span className="text-slate-400 text-[0.85em]">
                                    {range.start === range.end ? mdLabel(range.start) : `${mdLabel(range.start)} ～ ${mdLabel(range.end)}`}
                                    <span className="ml-3">共 {total} 筆</span>
                                </span>
                            </div>

                            {viewWho === 'all' && (
                                <div className="flex items-center gap-2 flex-wrap">
                                    <button onClick={() => setSelected(new Set(people.map(p => p.member_id)))} className="text-[0.8em] px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">全選</button>
                                    <button onClick={() => setSelected(new Set())} className="text-[0.8em] px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">全不選</button>
                                    {people.map(p => {
                                        const on = selected.has(p.member_id);
                                        const Icon = ROLE_ICONS[p.role] || User;
                                        return (
                                            <button key={p.member_id} onClick={() => setSelected(s => { const n = new Set(s); if (n.has(p.member_id)) n.delete(p.member_id); else n.add(p.member_id); return n; })}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[0.85em] font-medium transition-all ${on ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'}`}>
                                                <Icon size={ic - 2} className={on && HIGH_ROLES.includes(p.role) ? 'text-amber-500' : ''} />{p.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            <div className="bg-white p-2 rounded-xl shadow-soft border border-slate-100 flex items-center gap-2 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20">
                                <Plus className="text-slate-400 ml-2 shrink-0" size={20} />
                                <input type="text" value={quickTitle} onChange={e => setQuickTitle(e.target.value)}
                                    onKeyDown={e => { if (e.key === 'Enter' && !e.nativeEvent.isComposing) quickAdd(); }}
                                    placeholder="新增一件自己要做的事，輸入後按 Enter" className="flex-1 min-w-0 py-2.5 bg-transparent outline-none font-normal text-slate-800" />
                                <input type="date" value={quickDate || today} onChange={e => setQuickDate(e.target.value)} title="日期（預設今天）" className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.85em] text-slate-700" />
                                <button onClick={() => setModal({ mode: 'create' })} className="h-9 px-4 rounded-lg text-[0.85em] font-medium text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors whitespace-nowrap">詳細／重複</button>
                                <button onClick={quickAdd} disabled={!quickTitle.trim() || busy} className="h-9 px-5 rounded-lg text-[0.85em] font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-400 shadow-button hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:hover:translate-y-0 whitespace-nowrap">新增</button>
                            </div>
                        </div>

                        {/* 清單 */}
                        <div className="flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24">
                            <div className="space-y-4" style={{ minWidth: listMinWidth }}>
                                <div className="grid gap-x-2 px-2 py-2 text-[0.78em] font-medium text-slate-400 sticky top-0 z-10 bg-slate-50" style={{ gridTemplateColumns: tpl }}>
                                    <span />
                                    {visibleCols.map(c => <span key={c.id}>{c.label}</span>)}
                                </div>

                                {isLoading && flat.length === 0 ? (
                                    <div className="text-center py-20 text-slate-400 font-medium animate-pulse">Loading...</div>
                                ) : total === 0 ? (
                                    <div className="text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200">
                                        這段時間沒有工作。從上面輸入一件事，按 Enter 就能新增。
                                    </div>
                                ) : (
                                    <>
                                        {overdueRows.length > 0 && (
                                            <div className="bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden">
                                                <div className="px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold">
                                                    <AlertTriangle size={ic} /> 逾期未完成 <span className="text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md">{overdueRows.length}</span>
                                                </div>
                                                {overdueRows.map(r => renderRow(r, null))}
                                            </div>
                                        )}
                                        {groups.map(g => {
                                            const dl = dateLabel(g.date, today);
                                            return (
                                                <div key={g.date} className="bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden">
                                                    <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2">
                                                        <span className={`font-bold ${dl.tag === '今天' ? 'text-indigo-600' : 'text-slate-800'}`}>{dl.text}</span>
                                                        {dl.tag && <span className={`text-[0.75em] px-2 py-0.5 rounded font-bold ${dl.tag === '今天' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'bg-slate-100 text-slate-500'}`}>{dl.tag}</span>}
                                                        <span className="text-[0.8em] text-slate-400">{g.rows.length} 筆</span>
                                                    </div>
                                                    {g.rows.map(r => renderRow(r, g))}
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}

                {/* 三點選單 */}
                {menu && menuRow && (
                    <>
                        <div className="fixed inset-0 z-[60]" onClick={() => setMenu(null)} onContextMenu={(e) => { e.preventDefault(); setMenu(null); }} />
                        <div className="fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in" style={{ left: menu.x, top: menu.y, fontSize: fs }}>
                            {(() => {
                                const movable = menuGroup ? menuGroup.rows.filter(x => !x.overdue) : [];
                                const idx = movable.findIndex(x => x.key === menuRow.key);
                                const canMove = !!menuGroup && menuGroup.canMove && idx >= 0;
                                const item = (Icon, text, onClick, disabled, danger) => (
                                    <button disabled={disabled} onClick={() => { setMenu(null); onClick(); }}
                                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${danger ? 'text-red-600 hover:bg-red-50' : 'text-slate-700 hover:bg-slate-50'}`}>
                                        <Icon size={ic - 1} />{text}
                                    </button>
                                );
                                return (
                                    <>
                                        <p className="px-3 pt-1 pb-0.5 text-[0.72em] text-slate-400 font-medium">搬移{!canMove && '（這裡不能搬移）'}</p>
                                        {item(ChevronsUp, '移到頂端', () => moveRow(menuRow, 'top'), !canMove || idx === 0)}
                                        {item(ChevronUp, '上一行', () => moveRow(menuRow, 'up'), !canMove || idx === 0)}
                                        {item(ChevronDown, '下一行', () => moveRow(menuRow, 'down'), !canMove || idx === movable.length - 1)}
                                        {item(ChevronsDown, '移到底部', () => moveRow(menuRow, 'bottom'), !canMove || idx === movable.length - 1)}
                                        <div className="h-px bg-slate-100 my-1" />
                                        {item(Copy, '複製到今天', () => copyRow(menuRow))}
                                        {item(Trash2, '刪除', () => deleteRow(menuRow), false, true)}
                                    </>
                                );
                            })()}
                        </div>
                    </>
                )}

                {/* 新增／修改週期 */}
                {modal && <WorkModal key={modal.mode + (modal.rule ? modal.rule.id : '')} mode={modal.mode} initial={modal.rule} today={today} busy={busy} onClose={() => setModal(null)} onSubmit={submitModal} />}

                {/* 週期設定清單 */}
                {rulesOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                        <div className="bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100">
                            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2"><Repeat className="text-indigo-600" size={20} /> 我的週期設定</h3>
                                <button onClick={() => setRulesOpen(false)} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"><X size={20} /></button>
                            </div>
                            <div className="p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1">
                                <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 text-sm font-normal text-sky-700 leading-relaxed">
                                    週期設定像手機的重複鬧鐘：設定一次，之後每天凌晨系統會自動把當天的工作放進清單。修改只影響之後產生的。
                                </div>
                                {rules.length === 0 ? (
                                    <div className="text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200">還沒有週期設定。到「詳細／重複」新增。</div>
                                ) : rules.map(r => (
                                    <div key={r.id} className={`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${r.is_active ? 'bg-white border-slate-100' : 'bg-slate-50 border-dashed border-slate-200'}`}>
                                        <div className="min-w-0">
                                            <div className={`font-medium truncate ${r.is_active ? 'text-slate-900' : 'text-slate-400'}`}>{r.title}</div>
                                            <div className="text-[0.8em] text-slate-500 mt-0.5">
                                                {ruleSummary(r)}{r.start_time ? `　${hhmm(r.start_time)}${r.end_time ? '~' + hhmm(r.end_time) : ''}` : ''}
                                                {r.until_date ? `　到 ${mdLabel(r.until_date)}` : ''}{!r.is_active ? '　（已停止）' : ''}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            <button onClick={() => setModal({ mode: 'editRule', rule: r })} className="p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors" title="編輯"><Pencil size={16} /></button>
                                            <button onClick={() => toggleRule(r)} className={`p-2.5 rounded-lg active:scale-95 transition-colors ${r.is_active ? 'bg-amber-50 text-amber-600 hover:bg-amber-100' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`} title={r.is_active ? '停止' : '重新啟用'}>{r.is_active ? <Pause size={16} /> : <Play size={16} />}</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {message.text && (
                    <div className="fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none">
                        <div className={`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${message.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
                            <div className="shrink-0 mt-0.5">{message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}</div>
                            <div className="text-sm leading-snug break-words flex-1">{message.text}</div>
                        </div>
                    </div>
                )}

                {confirmAction && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                        <div className="bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100">
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"><AlertCircle size={32} /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{confirmAction.title}</h3>
                                <p className="text-sm font-normal text-slate-500 whitespace-pre-line">{confirmAction.message}</p>
                            </div>
                            <div className="p-3 bg-slate-50 flex gap-2 border-t border-slate-100">
                                <button onClick={() => setConfirmAction(null)} className="flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors">取消</button>
                                <button onClick={confirmAction.onConfirm} className="flex-1 py-3 font-medium text-white rounded-lg transition-all duration-200 bg-gradient-to-r from-red-500 to-rose-600 hover:-translate-y-0.5 shadow-button">{confirmAction.confirmText || '確定'}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

window.WorkLog = WorkLog;
