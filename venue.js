/* TBC ONE 場地預約（後台）— 由原始碼打包 */
(() => {
  // src/shims/react.js
  var R = window.__TBC.React;
  var react_default = R;
  var {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext,
    createContext,
    Fragment,
    createElement,
    forwardRef,
    memo,
    useLayoutEffect,
    useReducer,
    useId,
    useSyncExternalStore,
    cloneElement,
    isValidElement,
    Children,
    StrictMode,
    useTransition,
    useDeferredValue,
    startTransition,
    useImperativeHandle,
    useDebugValue,
    Suspense,
    lazy,
    createRef,
    Component,
    PureComponent,
    version
  } = R;

  // src/venue/utils.js
  var TZ = "Asia/Taipei";
  var pad = (n) => String(n).padStart(2, "0");
  var WEEKDAYS = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
  var todayStr = () => new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(/* @__PURE__ */ new Date());
  var parseDate = (s) => {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1, d));
  };
  var fmtDate = (dt) => `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
  var addDays = (s, n) => {
    const d = parseDate(s);
    d.setUTCDate(d.getUTCDate() + n);
    return fmtDate(d);
  };
  var addMonths = (s, n) => {
    const d = parseDate(s);
    d.setUTCDate(1);
    d.setUTCMonth(d.getUTCMonth() + n);
    return fmtDate(d);
  };
  var monthStart = (s) => s.slice(0, 7) + "-01";
  var dow = (s) => parseDate(s).getUTCDay();
  var daysInMonth = (first) => {
    const d = parseDate(first);
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  };
  var monthGrid = (first) => {
    const lead = dow(first);
    const weeks = Math.ceil((lead + daysInMonth(first)) / 7);
    const start = addDays(first, -lead);
    return Array.from({ length: weeks * 7 }, (_, i) => addDays(start, i));
  };
  var mdLabel = (s) => `${+s.slice(5, 7)}/${+s.slice(8, 10)}`;
  var fullLabel = (s) => `${+s.slice(5, 7)} \u6708 ${+s.slice(8, 10)} \u65E5\uFF08${WEEKDAYS[dow(s)]}\uFF09`;
  var monthTitle = (first) => `${first.slice(0, 4)} \u5E74 ${+first.slice(5, 7)} \u6708`;
  var hm = (t) => (t || "").slice(0, 5);
  var timeToMin = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + (m || 0);
  };
  var fmtDateTime = (iso) => {
    if (!iso) return "";
    return new Intl.DateTimeFormat("zh-TW", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date(iso));
  };
  var daysSince = (iso) => Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 864e5));
  var weekdaysLabel = (arr) => [...arr].sort((a, b) => a - b).map((d) => WEEKDAYS[d]).join("\u3001");
  var STATUS = {
    pending: { label: "\u5F85\u6838\u51C6" },
    approved: { label: "\u5DF2\u6838\u51C6" },
    rejected: { label: "\u5DF2\u9000\u56DE" },
    cancelled: { label: "\u5DF2\u53D6\u6D88" }
  };
  var SPACE_COLORS = ["#0070d5", "#0f8b8d", "#d9822b", "#8a5cd0", "#d4609f", "#4a9c5d", "#c25b4a", "#5b6b7a", "#b08900", "#2f6fb0"];
  var OVERDUE_DAYS = 14;
  var minToHm = (m) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
  var addMinutes = (t, n) => minToHm(timeToMin(t) + n);
  var addYears = (s, n) => {
    const [y, m, d] = s.split("-").map(Number);
    const last = new Date(Date.UTC(y + n, m, 0)).getUTCDate();
    return `${y + n}-${pad(m)}-${pad(Math.min(d, last))}`;
  };
  var timeOptions = (from, to) => {
    const out = [];
    for (let m = timeToMin(from); m <= timeToMin(to); m += 15) out.push(minToHm(m));
    return out;
  };
  var weekOfMonth = (s) => Math.ceil(+s.slice(8, 10) / 7);
  var thisSunday = (today) => addDays(today, (7 - dow(today)) % 7);
  var buildDates = ({ start, unit, interval, count, weekdays, skipNth }) => {
    if (!start) return [];
    const iv = Math.max(1, Math.min(12, parseInt(interval, 10) || 1));
    const n = Math.max(1, Math.min(52, parseInt(count, 10) || 1));
    const out = [];
    if (unit === "day") {
      for (let i = 0; i < n; i++) out.push(addDays(start, i * iv));
    } else if (unit === "year") {
      for (let i = 0; i < n; i++) out.push(addYears(start, i * iv));
    } else {
      const days = (weekdays && weekdays.length ? [...weekdays] : [dow(start)]).sort((a, b) => a - b);
      const skip = new Set(skipNth || []);
      const sun0 = addDays(start, -dow(start));
      for (let w = 0; w < 600 && out.length < n; w++) {
        const ws = addDays(sun0, 7 * iv * w);
        for (const d of days) {
          const date = addDays(ws, d);
          if (date < start || skip.has(weekOfMonth(date))) continue;
          out.push(date);
          if (out.length >= n) break;
        }
      }
    }
    return out;
  };

  // src/venue/api.js
  var toError = (e) => {
    const raw = e && (e.message || e.details) || "\u767C\u751F\u672A\u77E5\u932F\u8AA4\uFF0C\u8ACB\u518D\u8A66\u4E00\u6B21";
    const code = e && e.code || "";
    let msg = raw;
    if (/Could not find the function|PGRST202|schema cache/i.test(raw) || code === "PGRST202") {
      msg = "\u8CC7\u6599\u5EAB\u9084\u6C92\u6709\u5834\u5730\u9810\u7D04\u7684\u51FD\u5F0F\uFF08venue_02_rpc.sql \u5C1A\u672A\u5957\u7528\uFF09";
    } else if (/Failed to fetch|NetworkError|Load failed/i.test(raw)) {
      msg = "\u9023\u7DDA\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66";
    } else if (/permission denied/i.test(raw) || code === "42501") {
      msg = "\u6B0A\u9650\u4E0D\u8DB3";
    }
    const err = new Error(msg);
    err.code = code;
    return err;
  };
  var createApi = (supabase) => {
    const call = async (fn, args) => {
      const { data, error } = await supabase.rpc(fn, args || {});
      if (error) throw toError(error);
      return data;
    };
    const read = async (query) => {
      const { data, error } = await query;
      if (error) throw toError(error);
      return data || [];
    };
    const listBookings = async (from, to) => {
      const out = [];
      let s = from;
      while (s <= to) {
        const e = addDays(s, 360) < to ? addDays(s, 360) : to;
        const rows = await call("venue_list_bookings", { p_from: s, p_to: e });
        out.push(...rows || []);
        s = addDays(e, 1);
      }
      return out;
    };
    return {
      listBookings,
      listSpaces: () => read(supabase.from("venue_spaces").select("*").order("sort_order").order("name")),
      listRules: () => read(supabase.from("venue_rules").select("*").order("created_at")),
      checkConflicts: (spaceId, dates, start, end) => call("venue_check_conflicts", { p_space_id: spaceId, p_dates: dates, p_start_time: start, p_end_time: end }),
      // 管理角色送出的申請會直接變成「已核准」
      submitRequest: (f) => call("venue_submit_request", {
        p_space_id: f.space_id,
        p_title: f.title,
        p_dates: f.dates,
        p_start_time: f.start_time,
        p_end_time: f.end_time,
        p_org_unit: f.org_unit || null,
        p_contact_name: f.contact_name || null,
        p_contact_phone: f.contact_phone || null,
        p_note: f.note || null,
        p_visibility: f.visibility || "public",
        p_skip_conflicts: !!f.skip_conflicts
      }),
      // 核准或退回（一次最多 100 筆，超過自動分批）
      review: async (ids, action, note) => {
        let n = 0;
        for (let i = 0; i < ids.length; i += 100) {
          n += await call("venue_review", { p_ids: ids.slice(i, i + 100), p_action: action, p_note: note || null });
        }
        return n;
      },
      cancel: async (ids) => {
        let n = 0;
        for (let i = 0; i < ids.length; i += 100) n += await call("venue_cancel", { p_ids: ids.slice(i, i + 100) });
        return n;
      },
      saveSpace: (s) => call("venue_save_space", {
        p_id: s.id || null,
        p_name: s.name,
        p_sort_order: s.sort_order ?? 0,
        p_is_active: s.is_active !== false,
        p_public_visible: s.public_visible !== false,
        p_note: s.note || null
      }),
      saveRule: (r) => call("venue_save_rule", {
        p_id: r.id || null,
        p_space_id: r.space_id,
        p_title: r.title,
        p_week_days: r.week_days,
        p_start_time: r.start_time,
        p_end_time: r.end_time,
        p_start_date: r.start_date,
        p_until_date: r.until_date || null,
        p_skip_nth: r.skip_nth || [],
        p_swap_nth: r.swap_nth || {},
        p_org_unit: r.org_unit || null,
        p_contact_name: r.contact_name || null,
        p_contact_phone: r.contact_phone || null,
        p_note: r.note || null,
        p_visibility: r.visibility || "public",
        p_is_active: r.is_active !== false
      }),
      deleteRule: (id) => call("venue_delete_rule", { p_rule_id: id })
    };
  };

  // src/venue/ui.jsx
  var PATHS = {
    calendar: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }), /* @__PURE__ */ react_default.createElement("path", { d: "M16 2v4M8 2v4M3 10h18" })),
    inbox: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }), /* @__PURE__ */ react_default.createElement("path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" })),
    repeat: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "m17 2 4 4-4 4" }), /* @__PURE__ */ react_default.createElement("path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }), /* @__PURE__ */ react_default.createElement("path", { d: "m7 22-4-4 4-4" }), /* @__PURE__ */ react_default.createElement("path", { d: "M21 13v1a4 4 0 0 1-4 4H3" })),
    pin: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), /* @__PURE__ */ react_default.createElement("circle", { cx: "12", cy: "10", r: "3" })),
    plus: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ react_default.createElement("path", { d: "M12 5v14" })),
    x: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M18 6 6 18" }), /* @__PURE__ */ react_default.createElement("path", { d: "m6 6 12 12" })),
    check: /* @__PURE__ */ react_default.createElement("path", { d: "M20 6 9 17l-5-5" }),
    left: /* @__PURE__ */ react_default.createElement("path", { d: "m15 18-6-6 6-6" }),
    right: /* @__PURE__ */ react_default.createElement("path", { d: "m9 18 6-6-6-6" }),
    up: /* @__PURE__ */ react_default.createElement("path", { d: "m18 15-6-6-6 6" }),
    down: /* @__PURE__ */ react_default.createElement("path", { d: "m6 9 6 6 6-6" }),
    clock: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ react_default.createElement("path", { d: "M12 6v6l4 2" })),
    alert: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }), /* @__PURE__ */ react_default.createElement("path", { d: "M12 9v4" }), /* @__PURE__ */ react_default.createElement("path", { d: "M12 17h.01" })),
    edit: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }), /* @__PURE__ */ react_default.createElement("path", { d: "m15 5 4 4" })),
    trash: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M3 6h18" }), /* @__PURE__ */ react_default.createElement("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }), /* @__PURE__ */ react_default.createElement("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }), /* @__PURE__ */ react_default.createElement("path", { d: "M10 11v6" }), /* @__PURE__ */ react_default.createElement("path", { d: "M14 11v6" }))
  };
  var Icon = ({ name, size = 18 }) => /* @__PURE__ */ react_default.createElement("svg", { className: "tv-icon", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, PATHS[name]);
  function Dialog({ title, onClose, children, footer, onSubmit, wide }) {
    const box = useRef(null);
    const closeRef = useRef(onClose);
    closeRef.current = onClose;
    useEffect(() => {
      const prev = document.activeElement;
      const onKey = (e) => {
        if (e.key === "Escape") closeRef.current();
      };
      document.addEventListener("keydown", onKey);
      const first = box.current && (box.current.querySelector("[data-autofocus]") || box.current.querySelector("input:not([type=checkbox]),select,textarea"));
      if (first) first.focus();
      return () => {
        document.removeEventListener("keydown", onKey);
        if (prev && prev.focus) prev.focus();
      };
    }, []);
    const Body = onSubmit ? "form" : "div";
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-overlay", role: "presentation" }, /* @__PURE__ */ react_default.createElement("div", { className: `tv-dialog${wide ? " wide" : ""}`, role: "dialog", "aria-modal": "true", "aria-label": title, ref: box }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-dhead" }, /* @__PURE__ */ react_default.createElement("h3", null, title), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn", onClick: onClose, "aria-label": "\u95DC\u9589" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "x" }))), /* @__PURE__ */ react_default.createElement(Body, { className: "tv-dform", onSubmit, noValidate: onSubmit ? true : void 0 }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-dbody" }, children), footer && /* @__PURE__ */ react_default.createElement("div", { className: "tv-dfoot" }, footer))));
  }
  var Field = ({ label, required, hint, error, children }) => /* @__PURE__ */ react_default.createElement("div", { className: `tv-field${error ? " invalid" : ""}` }, label && /* @__PURE__ */ react_default.createElement("label", { className: "tv-label" }, label, required && /* @__PURE__ */ react_default.createElement("span", { className: "tv-req", "aria-hidden": "true" }, "*")), children, hint && !error && /* @__PURE__ */ react_default.createElement("div", { className: "tv-hint" }, hint), error && /* @__PURE__ */ react_default.createElement("div", { className: "tv-err", role: "alert" }, error));
  var Switch = ({ on, onChange, label, disabled }) => /* @__PURE__ */ react_default.createElement(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": on,
      "aria-label": label,
      disabled,
      onClick: () => onChange(!on),
      className: `tv-switch${on ? " on" : ""}`
    },
    /* @__PURE__ */ react_default.createElement("span", null)
  );
  var StatusTag = ({ status }) => /* @__PURE__ */ react_default.createElement("span", { className: `tv-tag ${status}` }, (STATUS[status] || {}).label || status);
  function ConfirmDialog({ title, message, withNote, noteLabel, notePlaceholder, confirmLabel, danger, onConfirm, onClose }) {
    const [text, setText] = useState("");
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const run = async (e) => {
      if (e) e.preventDefault();
      if (busy) return;
      setBusy(true);
      setErr("");
      try {
        await onConfirm(text.trim());
        onClose();
      } catch (ex) {
        setErr(ex.message);
        setBusy(false);
      }
    };
    return /* @__PURE__ */ react_default.createElement(
      Dialog,
      {
        title,
        onClose,
        onSubmit: run,
        footer: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u5148\u4E0D\u8981"), /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: `tv-btn ${danger ? "danger fill" : "primary"}`, disabled: busy }, busy ? "\u8655\u7406\u4E2D\u2026" : confirmLabel))
      },
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-pre" }, message),
      withNote && /* @__PURE__ */ react_default.createElement(Field, { label: noteLabel || "\u8AAA\u660E\uFF08\u9078\u586B\uFF09" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: text, onChange: (e) => setText(e.target.value), placeholder: notePlaceholder || "", maxLength: 300 })),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }

  // src/venue/BookingDialog.jsx
  var START_OPTIONS = timeOptions("08:00", "22:45");
  var END_OPTIONS = timeOptions("08:15", "23:45");
  var DURATIONS = [[60, "1 \u5C0F\u6642"], [90, "1.5 \u5C0F\u6642"], [120, "2 \u5C0F\u6642"], [180, "3 \u5C0F\u6642"]];
  var TL_FROM = 8;
  var TL_TO = 23;
  var HORIZON_DAYS = 365;
  var NTH = [1, 2, 3, 4, 5];
  var durText = (min) => {
    const h = Math.floor(min / 60), m = min % 60;
    return `${h ? `${h} \u5C0F\u6642` : ""}${m ? ` ${m} \u5206\u9418` : ""}`.trim();
  };
  var weekdayLabel = (d) => `${mdLabel(d)}\uFF08${WEEKDAYS[dow(d)]}\uFF09`;
  function BookingDialog({ api, spaces, initialDate, initialSpaceId, defaultContact, onClose, onSaved, notify }) {
    const today = todayStr();
    const active = spaces.filter((s) => s.is_active);
    const startDate0 = initialDate && initialDate >= today ? initialDate : today;
    const [spaceId, setSpaceId] = useState(initialSpaceId && active.some((s) => s.id === initialSpaceId) ? initialSpaceId : (active[0] || {}).id || "");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(startDate0);
    const [start, setStart] = useState("19:00");
    const [duration, setDuration] = useState(120);
    const [customEnd, setCustomEnd] = useState("21:00");
    const [contact, setContact] = useState(defaultContact || "");
    const [org, setOrg] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [repeat, setRepeat] = useState(false);
    const [unit, setUnit] = useState("week");
    const [interval, setIntervalN] = useState(1);
    const [count, setCount] = useState(4);
    const [weekdays, setWeekdays] = useState([dow(startDate0)]);
    const [skipNth, setSkipNth] = useState([]);
    const [skip, setSkip] = useState(false);
    const [conflicts, setConflicts] = useState([]);
    const [dayRows, setDayRows] = useState([]);
    const [checking, setChecking] = useState(false);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const [tried, setTried] = useState(false);
    const end = duration ? addMinutes(start, duration) : customEnd;
    const endOk = end <= "23:59" && !end.startsWith("24");
    const timeOk = !!start && !!end && end > start && endOk;
    const dates = useMemo(() => {
      if (!date) return [];
      if (!repeat) return [date];
      return buildDates({ start: date, unit, interval, count, weekdays, skipNth });
    }, [date, repeat, unit, interval, count, weekdays, skipNth]);
    const horizon = addDays(today, HORIZON_DAYS);
    const dateErr = !date ? "\u8ACB\u9078\u64C7\u65E5\u671F" : date < today ? "\u4E0D\u80FD\u9810\u7D04\u904E\u53BB\u7684\u65E5\u671F" : dates.length > 60 ? "\u4E00\u6B21\u6700\u591A 60 \u5834\uFF0C\u8ACB\u6E1B\u5C11\u6B21\u6578" : dates.some((d) => d > horizon) ? "\u6700\u591A\u53EA\u80FD\u9810\u7D04\u5230\u4E00\u5E74\u5167\uFF0C\u8ACB\u6E1B\u5C11\u6B21\u6578\u6216\u9593\u9694" : "";
    const datesKey = dates.join(",");
    useEffect(() => {
      setConflicts([]);
      setSkip(false);
      if (!spaceId || !dates.length || !timeOk || dateErr) return void 0;
      let alive = true;
      setChecking(true);
      const t = setTimeout(async () => {
        try {
          const rows = await api.checkConflicts(spaceId, dates, start, end);
          if (alive) {
            setConflicts(rows || []);
            setErr("");
          }
        } catch (e) {
          if (alive) setErr(e.message);
        } finally {
          if (alive) setChecking(false);
        }
      }, 350);
      return () => {
        alive = false;
        clearTimeout(t);
        setChecking(false);
      };
    }, [api, spaceId, datesKey, start, end, timeOk, dateErr]);
    useEffect(() => {
      if (!spaceId || !date || date < today) {
        setDayRows([]);
        return void 0;
      }
      let alive = true;
      api.listBookings(date, date).then((rows) => {
        if (alive) setDayRows((rows || []).filter((r) => r.space_id === spaceId && (r.status === "approved" || r.status === "pending")));
      }).catch(() => {
        if (alive) setDayRows([]);
      });
      return () => {
        alive = false;
      };
    }, [api, spaceId, date, today]);
    const conflictDates = new Set(conflicts.map((c) => c.booking_date));
    const allConflict = conflicts.length > 0 && conflicts.length >= dates.length;
    const blockedByConflict = conflicts.length > 0 && !(skip && !allConflict);
    const okCount = dates.length - (skip ? conflicts.length : 0);
    const spaceName = (active.find((s) => s.id === spaceId) || {}).name || "";
    const errors = {
      title: !title.trim() ? "\u8ACB\u586B\u5BEB\u6D3B\u52D5\u540D\u7A31" : "",
      space: !spaceId ? "\u8ACB\u9078\u64C7\u5834\u5730" : "",
      contact: !contact.trim() ? "\u8ACB\u586B\u5BEB\u806F\u7D61\u4EBA" : "",
      time: !timeOk ? end && end > start ? "\u7D50\u675F\u6642\u9593\u4E0D\u80FD\u665A\u65BC 23:59" : "\u7D50\u675F\u6642\u9593\u8981\u665A\u65BC\u958B\u59CB\u6642\u9593" : ""
    };
    const hasErr = Object.values(errors).some(Boolean) || !!dateErr || dates.length === 0;
    const canSubmit = !busy && !checking && !blockedByConflict && !hasErr;
    const show = (k) => tried ? errors[k] : "";
    const submit = async (e) => {
      e.preventDefault();
      setTried(true);
      if (!canSubmit) return;
      setBusy(true);
      setErr("");
      try {
        const res = await api.submitRequest({
          space_id: spaceId,
          title: title.trim(),
          dates,
          start_time: start,
          end_time: end,
          org_unit: org,
          contact_name: contact.trim(),
          contact_phone: phone,
          note,
          skip_conflicts: skip
        });
        const skipped = res && res.skipped ? res.skipped.length : 0;
        notify(`\u5DF2\u65B0\u589E ${res ? res.created : dates.length} \u5834\u9810\u7D04${skipped ? `\uFF0C\u7565\u904E ${skipped} \u5929` : ""}`);
        onSaved();
        onClose();
      } catch (ex) {
        setErr(ex.message);
        setBusy(false);
      }
    };
    const pickDate = (d) => {
      setDate(d);
      setWeekdays([dow(d)]);
    };
    const toggleWeekday = (d) => setWeekdays((w) => w.includes(d) ? w.length > 1 ? w.filter((x) => x !== d) : w : [...w, d].sort());
    const toggleNth = (n) => setSkipNth((s) => s.includes(n) ? s.filter((x) => x !== n) : [...s, n].sort());
    const span = (TL_TO - TL_FROM) * 60;
    const pos = (t) => Math.max(0, Math.min(100, (timeToMin(t) - TL_FROM * 60) / span * 100));
    const bar = (a, b) => ({ left: `${pos(a)}%`, width: `${Math.max(1.2, pos(b) - pos(a))}%` });
    const firstConflict = !repeat && conflicts.length > 0;
    const avail = !spaceId || !timeOk || dateErr ? "" : checking ? "\u6AA2\u67E5\u4E2D\u2026" : conflicts.length === 0 ? "\u9019\u500B\u6642\u6BB5\u53EF\u4EE5\u9810\u7D04" : repeat ? "" : "\u9019\u500B\u6642\u6BB5\u5DF2\u88AB\u5360\u7528";
    const subline = `${spaceName || "\uFF08\u672A\u9078\u5834\u5730\uFF09"} \u30FB ${date ? weekdayLabel(date) : "\u2014"} ${timeOk ? `${start}\u2013${end}` : ""}${dates.length > 1 ? ` \u30FB \u5171 ${okCount} \u5834` : ""}`;
    return /* @__PURE__ */ react_default.createElement(
      Dialog,
      {
        title: "\u65B0\u589E\u9810\u7D04",
        onClose,
        onSubmit: submit,
        wide: true,
        footer: /* @__PURE__ */ react_default.createElement("div", { className: "tv-confirmwrap" }, /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: "tv-confirm", disabled: busy || checking || blockedByConflict }, /* @__PURE__ */ react_default.createElement("strong", null, busy ? "\u9001\u51FA\u4E2D\u2026" : checking ? "\u6AA2\u67E5\u885D\u7A81\u4E2D\u2026" : "\u78BA\u8A8D\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("span", null, subline)), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u53D6\u6D88"))
      },
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-note info" }, "\u7BA1\u7406\u8005\u65B0\u589E\u7684\u9810\u7D04\u6703\u76F4\u63A5\u6838\u51C6\uFF0C\u4E26\u99AC\u4E0A\u5360\u7528\u6642\u6BB5\u3002"),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u6D3B\u52D5\u540D\u7A31", required: true, error: show("title") }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: title, onChange: (e) => setTitle(e.target.value), maxLength: 200, placeholder: "\u4F8B\u5982\uFF1A\u5C0F\u7D44\u805A\u6703\u3001\u656C\u62DC\u5718\u7DF4", "data-autofocus": true })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5834\u5730", required: true, error: show("space") }, active.length === 0 ? /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn" }, "\u9084\u6C92\u6709\u53EF\u7528\u7684\u5834\u5730\uFF0C\u8ACB\u5148\u5230\u300C\u5834\u5730\u8A2D\u5B9A\u300D\u65B0\u589E\u3002") : /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: spaceId, onChange: (e) => setSpaceId(e.target.value) }, active.map((s) => /* @__PURE__ */ react_default.createElement("option", { key: s.id, value: s.id }, s.name)))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u65E5\u671F", required: true, error: dateErr }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-quick", role: "group", "aria-label": "\u5FEB\u901F\u9078\u65E5\u671F" }, [["\u4ECA\u5929", today], ["\u660E\u5929", addDays(today, 1)], ["\u672C\u9031\u65E5", thisSunday(today)]].map(([label, d]) => /* @__PURE__ */ react_default.createElement("button", { key: label, type: "button", className: `tv-qbtn${date === d ? " on" : ""}`, "aria-pressed": date === d, onClick: () => pickDate(d) }, label))), /* @__PURE__ */ react_default.createElement("input", { type: "date", className: "tv-input", value: date, min: today, onChange: (e) => pickDate(e.target.value), "aria-label": "\u9078\u64C7\u65E5\u671F" }), date && !dateErr && /* @__PURE__ */ react_default.createElement("div", { className: "tv-hint" }, weekdayLabel(date))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u958B\u59CB\u6642\u9593", required: true }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: start, onChange: (e) => setStart(e.target.value), "aria-label": "\u958B\u59CB\u6642\u9593" }, START_OPTIONS.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t)))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u7528\u591A\u4E45", required: true, error: show("time") }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-quick", role: "group", "aria-label": "\u7528\u591A\u4E45" }, DURATIONS.map(([m, label]) => /* @__PURE__ */ react_default.createElement("button", { key: m, type: "button", className: `tv-qbtn${duration === m ? " on" : ""}`, "aria-pressed": duration === m, onClick: () => setDuration(m) }, label)), /* @__PURE__ */ react_default.createElement(
        "button",
        {
          type: "button",
          className: `tv-qbtn${duration === 0 ? " on" : ""}`,
          "aria-pressed": duration === 0,
          onClick: () => {
            setDuration(0);
            if (end > start && endOk) setCustomEnd(end);
          }
        },
        "\u81EA\u8A02"
      )), duration === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-row", style: { marginTop: 8 } }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u7D50\u675F\u6642\u9593"), /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: customEnd, onChange: (e) => setCustomEnd(e.target.value), "aria-label": "\u7D50\u675F\u6642\u9593" }, END_OPTIONS.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t)))), timeOk && /* @__PURE__ */ react_default.createElement("div", { className: "tv-timebox" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-bigtime" }, start, " \u2013 ", end), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u5171 ", durText(timeToMin(end) - timeToMin(start)))), spaceId && date >= today && /* @__PURE__ */ react_default.createElement("div", { className: "tv-tlwrap", "aria-label": "\u7576\u5929\u6642\u9593\u8EF8" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-track tall" }, dayRows.map((r) => /* @__PURE__ */ react_default.createElement("div", { key: r.id, className: `tv-tl-bar busy${r.status === "pending" ? " pending" : ""}`, style: bar(hm(r.start_time), hm(r.end_time)), title: `${hm(r.start_time)}\u2013${hm(r.end_time)} ${r.title}` })), timeOk && /* @__PURE__ */ react_default.createElement("div", { className: `tv-tl-bar mine${firstConflict ? " bad" : ""}`, style: bar(start, end) })), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-axis wide" }, [8, 11, 14, 17, 20, 23].map((h) => /* @__PURE__ */ react_default.createElement("span", { key: h, style: { left: `${(h - TL_FROM) / (TL_TO - TL_FROM) * 100}%` } }, String(h).padStart(2, "0")))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tlnote" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-lg busy" }), "\u5DF2\u6709\u9810\u7D04\u3000", /* @__PURE__ */ react_default.createElement("span", { className: "tv-lg mine" }), "\u9019\u6B21\u9810\u7D04", avail && /* @__PURE__ */ react_default.createElement("b", { className: conflicts.length && !repeat ? "bad" : "good" }, " \u30FB ", avail)))),
      conflicts.length > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn", role: "status" }, /* @__PURE__ */ react_default.createElement("strong", null, allConflict ? dates.length === 1 ? "\u9019\u500B\u6642\u6BB5\u5DF2\u88AB\u5360\u7528" : "\u6240\u9078\u65E5\u671F\u5168\u90E8\u885D\u7A81" : `\u6709 ${conflicts.length} \u5929\u7684\u6642\u6BB5\u5DF2\u88AB\u5360\u7528`), /* @__PURE__ */ react_default.createElement("div", null, conflicts.map((c) => `${mdLabel(c.booking_date)}\uFF08${(STATUS[c.status] || {}).label || c.status}\uFF09`).join("\u3001")), allConflict ? /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u8ACB\u6539\u6642\u9593\u3001\u6539\u5834\u5730\uFF0C\u6216\u63DB\u4E00\u5929\u3002") : /* @__PURE__ */ react_default.createElement("label", { className: "tv-check" }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: skip, onChange: (e) => setSkip(e.target.checked) }), "\u7565\u904E\u9019 ", conflicts.length, " \u5929\uFF0C\u5176\u9918 ", dates.length - conflicts.length, " \u5929\u7167\u5E38\u9810\u7D04")),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u4EBA", required: true, error: show("contact") }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: contact, onChange: (e) => setContact(e.target.value), maxLength: 50, placeholder: "\u501F\u7528\u7684\u8CA0\u8CAC\u4EBA" })),
      /* @__PURE__ */ react_default.createElement("details", { className: "tv-more" }, /* @__PURE__ */ react_default.createElement("summary", null, "\u91CD\u8907\u9810\u7D04", repeat ? `\uFF08\u5171 ${dates.length} \u5834\uFF09` : ""), /* @__PURE__ */ react_default.createElement("div", { className: "tv-switchrow" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", role: "switch", "aria-checked": repeat, "aria-label": "\u91CD\u8907\u9031\u671F", onClick: () => setRepeat(!repeat), className: `tv-switch${repeat ? " on" : ""}` }, /* @__PURE__ */ react_default.createElement("span", null)), /* @__PURE__ */ react_default.createElement("span", null, "\u91CD\u8907\u9031\u671F")), repeat && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", { className: "tv-row tv-repeatrow" }, /* @__PURE__ */ react_default.createElement("span", null, "\u6BCF"), /* @__PURE__ */ react_default.createElement("input", { type: "number", className: "tv-input tv-num", min: "1", max: "12", value: interval, onChange: (e) => setIntervalN(e.target.value), "aria-label": "\u9593\u9694" }), /* @__PURE__ */ react_default.createElement("select", { className: "tv-select slim", value: unit, onChange: (e) => setUnit(e.target.value), "aria-label": "\u9031\u671F\u55AE\u4F4D" }, /* @__PURE__ */ react_default.createElement("option", { value: "week" }, "\u9031"), /* @__PURE__ */ react_default.createElement("option", { value: "day" }, "\u5929"), /* @__PURE__ */ react_default.createElement("option", { value: "year" }, "\u5E74")), /* @__PURE__ */ react_default.createElement("span", null, "\uFF0C\u5171"), /* @__PURE__ */ react_default.createElement("input", { type: "number", className: "tv-input tv-num", min: "1", max: "52", value: count, onChange: (e) => setCount(e.target.value), "aria-label": "\u6B21\u6578" }), /* @__PURE__ */ react_default.createElement("span", null, "\u6B21")), unit === "week" && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", { className: "tv-label", style: { marginTop: 12 } }, "\u661F\u671F\u5E7E"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-days", role: "group", "aria-label": "\u661F\u671F" }, WEEKDAYS.map((w, d) => /* @__PURE__ */ react_default.createElement("button", { key: d, type: "button", className: "tv-daybtn", "aria-pressed": weekdays.includes(d), onClick: () => toggleWeekday(d) }, w))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-label", style: { marginTop: 12 } }, "\u6BCF\u6708\u66AB\u505C\u9810\u7D04\u9031\u6B21"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-days", role: "group", "aria-label": "\u66AB\u505C\u9031\u6B21" }, NTH.map((n) => /* @__PURE__ */ react_default.createElement("button", { key: n, type: "button", className: "tv-qbtn skip", "aria-pressed": skipNth.includes(n), onClick: () => toggleNth(n) }, "\u7B2C ", n, " \u9031"))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-hint" }, "\u88AB\u66AB\u505C\u7684\u9031\u6B21\u4E0D\u6703\u6392\uFF0C\u4E5F\u4E0D\u7B97\u9032\u300C\u5171 N \u6B21\u300D\u3002")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-label", style: { marginTop: 12 } }, "\u9810\u8A08\u4F7F\u7528\u65E5\u671F\uFF08", dates.length, " \u5834\uFF09"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-datechips", "aria-label": "\u9810\u8A08\u4F7F\u7528\u65E5\u671F" }, dates.map((d) => /* @__PURE__ */ react_default.createElement("span", { key: d, className: `tv-dchip plain${conflictDates.has(d) ? " bad" : ""}` }, weekdayLabel(d)))))),
      /* @__PURE__ */ react_default.createElement("details", { className: "tv-more" }, /* @__PURE__ */ react_default.createElement("summary", null, "\u66F4\u591A\u8CC7\u8A0A\uFF08\u501F\u7528\u55AE\u4F4D\u3001\u96FB\u8A71\u3001\u5099\u8A3B\uFF09"), /* @__PURE__ */ react_default.createElement(Field, { label: "\u501F\u7528\u55AE\u4F4D" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: org, onChange: (e) => setOrg(e.target.value), maxLength: 100, placeholder: "\u4F8B\u5982\uFF1A\u9752\u5E74\u5718\u5951" })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u96FB\u8A71" }, /* @__PURE__ */ react_default.createElement("input", { type: "tel", inputMode: "tel", className: "tv-input", value: phone, onChange: (e) => setPhone(e.target.value), maxLength: 30 })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u5099\u8A3B" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: note, onChange: (e) => setNote(e.target.value), maxLength: 500, placeholder: "\u4F8B\u5982\uFF1A\u9700\u8981\u7121\u7DDA\u9EA5\u514B\u98A8 2 \u652F" }))),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }

  // src/venue/CalendarTab.jsx
  var MAX_CHIPS = 3;
  function CalendarTab({ api, spaces, colorOf, rev, onChanged, notify, goReview, userName }) {
    const today = todayStr();
    const [anchor, setAnchor] = useState(monthStart(today));
    const [selected, setSelected] = useState(today);
    const [spaceId, setSpaceId] = useState("all");
    const [showClosed, setShowClosed] = useState(false);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const [dialog, setDialog] = useState(null);
    const [busyId, setBusyId] = useState(null);
    const days = useMemo(() => monthGrid(anchor), [anchor]);
    const from = days[0];
    const to = days[days.length - 1];
    useEffect(() => {
      let alive = true;
      setLoading(true);
      api.listBookings(from, to).then((r) => {
        if (alive) {
          setRows(r);
          setErr("");
        }
      }).catch((e) => {
        if (alive) setErr(e.message);
      }).finally(() => {
        if (alive) setLoading(false);
      });
      return () => {
        alive = false;
      };
    }, [api, from, to, rev]);
    const byDate = useMemo(() => {
      const m = /* @__PURE__ */ new Map();
      for (const r of rows) {
        if (spaceId !== "all" && r.space_id !== spaceId) continue;
        if (!showClosed && r.status !== "pending" && r.status !== "approved") continue;
        if (!m.has(r.booking_date)) m.set(r.booking_date, []);
        m.get(r.booking_date).push(r);
      }
      for (const list of m.values()) {
        list.sort((a, b) => a.start_time.localeCompare(b.start_time) || a.space_name.localeCompare(b.space_name));
      }
      return m;
    }, [rows, spaceId, showClosed]);
    const goMonth = (n) => {
      const next = addMonths(anchor, n);
      setAnchor(next);
      setSelected(next.slice(0, 7) === today.slice(0, 7) ? today : next);
    };
    const goToday = () => {
      setAnchor(monthStart(today));
      setSelected(today);
    };
    const activeSpaces = spaces.filter((s) => s.is_active);
    const dayList = byDate.get(selected) || [];
    const act = async (r, fn, okMsg) => {
      setBusyId(r.id);
      try {
        await fn();
        notify(okMsg);
        onChanged();
      } catch (e) {
        notify(e.message, "err");
      } finally {
        setBusyId(null);
      }
    };
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-cal" }, /* @__PURE__ */ react_default.createElement("section", { className: "tv-calmain", "aria-label": "\u6708\u66C6" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn bordered", onClick: () => goMonth(-1), "aria-label": "\u4E0A\u500B\u6708" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "left" })), /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, monthTitle(anchor)), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn bordered", onClick: () => goMonth(1), "aria-label": "\u4E0B\u500B\u6708" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "right" })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm", onClick: goToday }, "\u4ECA\u5929"), loading && /* @__PURE__ */ react_default.createElement("span", { className: "tv-loading" }, "\u66F4\u65B0\u4E2D\u2026")), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", onClick: () => setDialog({ type: "new", date: selected }), disabled: activeSpaces.length === 0 }, /* @__PURE__ */ react_default.createElement(Icon, { name: "plus", size: 16 }), "\u65B0\u589E\u9810\u7D04")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-filters" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-pills", role: "group", "aria-label": "\u5834\u5730\u7BE9\u9078" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: `tv-pill${spaceId === "all" ? " on" : ""}`, "aria-pressed": spaceId === "all", onClick: () => setSpaceId("all") }, "\u5168\u90E8\u5834\u5730"), activeSpaces.map((s) => /* @__PURE__ */ react_default.createElement("button", { key: s.id, type: "button", className: `tv-pill${spaceId === s.id ? " on" : ""}`, "aria-pressed": spaceId === s.id, onClick: () => setSpaceId(s.id) }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot", style: { background: colorOf(s.id) } }), s.name))), /* @__PURE__ */ react_default.createElement("label", { className: "tv-check" }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: showClosed, onChange: (e) => setShowClosed(e.target.checked) }), "\u986F\u793A\u5DF2\u9000\u56DE\uFF0F\u5DF2\u53D6\u6D88")), err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err), /* @__PURE__ */ react_default.createElement("div", { className: "tv-month", role: "grid", "aria-label": monthTitle(anchor) }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-weekhead", role: "row" }, WEEKDAYS.map((w) => /* @__PURE__ */ react_default.createElement("div", { key: w, role: "columnheader" }, w))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-weeks" }, days.map((d) => {
      const list = byDate.get(d) || [];
      const out = d.slice(0, 7) !== anchor.slice(0, 7);
      const hasOverdue = list.some((r) => r.overdue);
      return /* @__PURE__ */ react_default.createElement(
        "div",
        {
          key: d,
          role: "gridcell",
          tabIndex: 0,
          "aria-selected": d === selected,
          className: `tv-day${out ? " out" : ""}${d === selected ? " sel" : ""}${d === today ? " today" : ""}`,
          onClick: () => setSelected(d),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSelected(d);
            }
          }
        },
        /* @__PURE__ */ react_default.createElement("span", { className: "tv-daynum" }, +d.slice(8, 10)),
        hasOverdue && /* @__PURE__ */ react_default.createElement("i", { className: "tv-overdue-dot", title: "\u6709\u903E\u671F\u672A\u5BE9\u6838\u7684\u7533\u8ACB" }),
        /* @__PURE__ */ react_default.createElement("div", { className: "tv-chips" }, list.slice(0, MAX_CHIPS).map((r) => /* @__PURE__ */ react_default.createElement(
          "div",
          {
            key: r.id,
            className: `tv-chip ${r.status}${r.overdue ? " overdue" : ""}`,
            style: { "--c": colorOf(r.space_id) },
            title: `${hm(r.start_time)}\u2013${hm(r.end_time)} ${r.title}\uFF08${r.space_name}\uFF09`
          },
          /* @__PURE__ */ react_default.createElement("b", null, hm(r.start_time)),
          " ",
          r.title
        )), list.length > MAX_CHIPS && /* @__PURE__ */ react_default.createElement("div", { className: "tv-more-count" }, "\u9084\u6709 ", list.length - MAX_CHIPS, " \u7B46")),
        list.length > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-dots", "aria-hidden": "true" }, list.slice(0, 6).map((r) => /* @__PURE__ */ react_default.createElement("i", { key: r.id, className: `tv-dot ${r.status}`, style: { background: colorOf(r.space_id) } })))
      );
    }))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-legend" }, /* @__PURE__ */ react_default.createElement("span", null, /* @__PURE__ */ react_default.createElement("i", { className: "tv-legend-solid" }), "\u5DF2\u6838\u51C6"), /* @__PURE__ */ react_default.createElement("span", null, /* @__PURE__ */ react_default.createElement("i", { className: "tv-legend-dash" }), "\u5F85\u6838\u51C6\uFF08\u5BE9\u6838\u4E2D\uFF09"), /* @__PURE__ */ react_default.createElement("span", null, /* @__PURE__ */ react_default.createElement("i", { className: "tv-legend-dash red" }), "\u5F85\u6838\u51C6\u5DF2\u903E\u671F"))), /* @__PURE__ */ react_default.createElement("aside", { className: "tv-panel", "aria-label": "\u7576\u65E5\u9810\u7D04" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-panelhead" }, /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement("h3", null, fullLabel(selected)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, dayList.length === 0 ? "\u9019\u5929\u6C92\u6709\u9810\u7D04" : `\u5171 ${dayList.length} \u7B46`)), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm primary", onClick: () => setDialog({ type: "new", date: selected }), disabled: activeSpaces.length === 0 }, /* @__PURE__ */ react_default.createElement(Icon, { name: "plus", size: 14 }), "\u65B0\u589E")), /* @__PURE__ */ react_default.createElement(Timeline, { list: dayList, spaces, spaceId, colorOf }), /* @__PURE__ */ react_default.createElement("div", { className: "tv-bklist" }, dayList.map((r) => /* @__PURE__ */ react_default.createElement(
      BookingItem,
      {
        key: r.id,
        r,
        color: colorOf(r.space_id),
        busy: busyId === r.id,
        onApprove: () => act(r, () => api.review([r.id], "approve"), "\u5DF2\u6838\u51C6"),
        onReject: () => setDialog({ type: "reject", r }),
        onCancel: () => setDialog({ type: "cancel", r }),
        goReview
      }
    ))), activeSpaces.length === 0 && !loading && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn" }, "\u9084\u6C92\u6709\u5834\u5730\uFF0C\u8ACB\u5148\u5230\u300C\u5834\u5730\u8A2D\u5B9A\u300D\u65B0\u589E\u3002")), dialog && dialog.type === "new" && /* @__PURE__ */ react_default.createElement(
      BookingDialog,
      {
        api,
        spaces,
        initialDate: dialog.date,
        initialSpaceId: spaceId === "all" ? "" : spaceId,
        defaultContact: userName,
        onClose: () => setDialog(null),
        onSaved: onChanged,
        notify
      }
    ), dialog && dialog.type === "reject" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u9000\u56DE\u9019\u7B46\u7533\u8ACB",
        danger: true,
        confirmLabel: "\u9000\u56DE\u4E26\u91CB\u51FA\u6642\u6BB5",
        withNote: true,
        noteLabel: "\u9000\u56DE\u539F\u56E0\uFF08\u7533\u8ACB\u4EBA\u770B\u5F97\u5230\uFF0C\u9078\u586B\uFF09",
        notePlaceholder: "\u4F8B\u5982\uFF1A\u8A72\u6642\u6BB5\u53E6\u6709\u6559\u6703\u6D3B\u52D5",
        message: `\u300C${dialog.r.title}\u300D
${fullLabel(dialog.r.booking_date)} ${hm(dialog.r.start_time)}\u2013${hm(dialog.r.end_time)}\u3000${dialog.r.space_name}

\u9000\u56DE\u5F8C\u6642\u6BB5\u6703\u7ACB\u523B\u91CB\u51FA\uFF0C\u5176\u4ED6\u4EBA\u53EF\u4EE5\u7533\u8ACB\u3002`,
        onConfirm: async (note) => {
          await api.review([dialog.r.id], "reject", note);
          notify("\u5DF2\u9000\u56DE\uFF0C\u6642\u6BB5\u5DF2\u91CB\u51FA");
          onChanged();
        },
        onClose: () => setDialog(null)
      }
    ), dialog && dialog.type === "cancel" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u53D6\u6D88\u9019\u7B46\u9810\u7D04",
        danger: true,
        confirmLabel: "\u53D6\u6D88\u9810\u7D04",
        message: `\u300C${dialog.r.title}\u300D
${fullLabel(dialog.r.booking_date)} ${hm(dialog.r.start_time)}\u2013${hm(dialog.r.end_time)}\u3000${dialog.r.space_name}

\u53D6\u6D88\u5F8C\u6642\u6BB5\u6703\u7ACB\u523B\u91CB\u51FA\u3002`,
        onConfirm: async () => {
          await api.cancel([dialog.r.id]);
          notify("\u5DF2\u53D6\u6D88\uFF0C\u6642\u6BB5\u5DF2\u91CB\u51FA");
          onChanged();
        },
        onClose: () => setDialog(null)
      }
    ));
  }
  function Timeline({ list, spaces, spaceId, colorOf }) {
    const live = list.filter((r) => r.status === "pending" || r.status === "approved");
    const rowsOf = spaces.filter((s) => spaceId === "all" ? s.is_active || live.some((r) => r.space_id === s.id) : s.id === spaceId);
    if (rowsOf.length === 0) return null;
    const startMin = Math.min(7 * 60, ...live.map((r) => Math.floor(timeToMin(r.start_time) / 60) * 60));
    const endMin = Math.max(22 * 60, ...live.map((r) => Math.ceil(timeToMin(r.end_time) / 60) * 60));
    const span = endMin - startMin;
    const ticks = [];
    for (let h = Math.ceil(startMin / 60); h * 60 <= endMin; h++) if (h % 3 === 1 || h * 60 === startMin) ticks.push(h);
    const pos = (min) => `${(min - startMin) / span * 100}%`;
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl", "aria-label": "\u5404\u5834\u5730\u4F7F\u7528\u6642\u6BB5" }, rowsOf.map((s) => /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-row", key: s.id }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-name", title: s.name }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot", style: { background: colorOf(s.id) } }), s.name), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-track", style: { backgroundSize: `${100 / (span / 60)}% 100%` } }, live.filter((r) => r.space_id === s.id).map((r) => /* @__PURE__ */ react_default.createElement(
      "i",
      {
        key: r.id,
        className: `tv-tl-bar ${r.status}${r.overdue ? " overdue" : ""}`,
        style: { "--c": colorOf(s.id), left: pos(timeToMin(r.start_time)), width: `${(timeToMin(r.end_time) - timeToMin(r.start_time)) / span * 100}%` },
        title: `${hm(r.start_time)}\u2013${hm(r.end_time)} ${r.title}`
      }
    ))))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-row axis" }, /* @__PURE__ */ react_default.createElement("div", null), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-axis" }, ticks.map((h) => /* @__PURE__ */ react_default.createElement("span", { key: h, style: { left: pos(h * 60) } }, h)))));
  }
  function BookingItem({ r, color, busy, onApprove, onReject, onCancel, goReview }) {
    const [open, setOpen] = useState(false);
    const closed = r.status === "rejected" || r.status === "cancelled";
    return /* @__PURE__ */ react_default.createElement("div", { className: `tv-bk ${r.status}${r.overdue ? " overdue" : ""}`, style: { "--c": color } }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-bkhead", onClick: () => setOpen(!open), "aria-expanded": open }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-bktime" }, hm(r.start_time), "\u2013", hm(r.end_time)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkmain" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-bktitle" }, r.title), /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkmeta" }, /* @__PURE__ */ react_default.createElement(StatusTag, { status: r.status }), r.overdue && /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag overdue" }, "\u903E\u671F\u672A\u5BE9\u6838"), r.rule_id && /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag plain" }, "\u5B9A\u671F"), /* @__PURE__ */ react_default.createElement("span", null, r.space_name))), /* @__PURE__ */ react_default.createElement(Icon, { name: open ? "up" : "down", size: 16 })), open && /* @__PURE__ */ react_default.createElement("dl", { className: "tv-bkdetail" }, r.requester_name && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u4EBA"), /* @__PURE__ */ react_default.createElement("dd", null, r.requester_name)), r.org_unit && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u501F\u7528\u55AE\u4F4D"), /* @__PURE__ */ react_default.createElement("dd", null, r.org_unit)), (r.contact_name || r.contact_phone) && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u806F\u7D61"), /* @__PURE__ */ react_default.createElement("dd", null, r.contact_name, r.contact_phone && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " ", /* @__PURE__ */ react_default.createElement("a", { href: `tel:${r.contact_phone}` }, r.contact_phone)))), r.note && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u5099\u8A3B"), /* @__PURE__ */ react_default.createElement("dd", { className: "tv-pre" }, r.note)), r.review_note && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u5BE9\u6838\u8AAA\u660E"), /* @__PURE__ */ react_default.createElement("dd", { className: "tv-pre" }, r.review_note)), /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u6642\u9593"), /* @__PURE__ */ react_default.createElement("dd", null, fmtDateTime(r.created_at)), r.series_id && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u4F86\u6E90"), /* @__PURE__ */ react_default.createElement("dd", null, "\u591A\u65E5\u7533\u8ACB\u7684\u5176\u4E2D\u4E00\u5929"))), closed && /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkfoot muted" }, "\u6642\u6BB5\u5DF2\u91CB\u51FA"), r.status === "pending" && /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkfoot" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm primary", onClick: onApprove, disabled: busy }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 14 }), "\u6838\u51C6"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", onClick: onReject, disabled: busy }, "\u9000\u56DE"), r.series_id && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: goReview }, "\u591A\u65E5\u7533\u8ACB\uFF0C\u5230\u5BE9\u6838\u9801\u6574\u6279\u8655\u7406")), r.status === "approved" && /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkfoot" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", onClick: onCancel, disabled: busy }, "\u53D6\u6D88\u9810\u7D04")));
  }

  // src/venue/ReviewTab.jsx
  function groupPending(rows) {
    const map = /* @__PURE__ */ new Map();
    for (const r of rows) {
      const key = r.series_id || r.id;
      if (!map.has(key)) map.set(key, { key, items: [] });
      map.get(key).items.push(r);
    }
    const groups = [...map.values()];
    for (const g of groups) {
      g.items.sort((a, b) => a.booking_date.localeCompare(b.booking_date) || a.start_time.localeCompare(b.start_time));
      g.first = g.items[0];
      g.overdue = g.items.some((i) => i.overdue);
      g.created = g.items.reduce((m, i) => i.created_at < m ? i.created_at : m, g.items[0].created_at);
    }
    groups.sort((a, b) => Number(b.overdue) - Number(a.overdue) || a.created.localeCompare(b.created) || a.first.booking_date.localeCompare(b.first.booking_date));
    return groups;
  }
  function ReviewTab({ api, pending, loading, error, colorOf, onChanged, notify }) {
    const [onlyOverdue, setOnlyOverdue] = useState(false);
    const [picked, setPicked] = useState(() => /* @__PURE__ */ new Set());
    const [dialog, setDialog] = useState(null);
    const [busyKey, setBusyKey] = useState(null);
    const groups = useMemo(() => groupPending(pending), [pending]);
    const shown = onlyOverdue ? groups.filter((g) => g.overdue) : groups;
    const overdueN = groups.filter((g) => g.overdue).length;
    const pickedGroups = shown.filter((g) => picked.has(g.key));
    const idsOf = (gs) => gs.flatMap((g) => g.items.map((i) => i.id));
    const togglePick = (key) => setPicked((s) => {
      const n = new Set(s);
      if (n.has(key)) n.delete(key);
      else n.add(key);
      return n;
    });
    const allPicked = shown.length > 0 && pickedGroups.length === shown.length;
    const toggleAll = () => setPicked(allPicked ? /* @__PURE__ */ new Set() : new Set(shown.map((g) => g.key)));
    const approve = async (gs) => {
      setBusyKey(gs.length === 1 ? gs[0].key : "*");
      try {
        const n = await api.review(idsOf(gs), "approve");
        notify(`\u5DF2\u6838\u51C6 ${n} \u5834`);
        setPicked(/* @__PURE__ */ new Set());
        onChanged();
      } catch (e) {
        notify(e.message, "err");
      } finally {
        setBusyKey(null);
      }
    };
    if (error) return /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, error);
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-review" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, "\u5F85\u5BE9\u6838"), /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, groups.length === 0 ? "\u6C92\u6709\u5F85\u8655\u7406\u7684\u7533\u8ACB" : `${groups.length} \u4EF6\u7533\u8ACB\uFF0C\u5171 ${pending.length} \u5834`)), overdueN > 0 && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: `tv-pill red${onlyOverdue ? " on" : ""}`, "aria-pressed": onlyOverdue, onClick: () => setOnlyOverdue(!onlyOverdue) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 14 }), "\u53EA\u770B\u903E\u671F\uFF08", overdueN, "\uFF09")), overdueN > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "status" }, "\u6709 ", overdueN, " \u4EF6\u7533\u8ACB\u5DF2\u7B49\u5F85\u8D85\u904E ", OVERDUE_DAYS, " \u5929\u3002\u7533\u8ACB\u4EBA\u9084\u5728\u7B49\u56DE\u8986\uFF0C\u8ACB\u76E1\u5FEB\u6838\u51C6\uFF0C\u6216\u9000\u56DE\u91CB\u51FA\u6642\u6BB5\u3002"), shown.length > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-bulk" }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-check" }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: allPicked, onChange: toggleAll }), "\u5168\u9078"), pickedGroups.length > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u5DF2\u9078 ", pickedGroups.length, " \u4EF6"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm primary", disabled: busyKey === "*", onClick: () => approve(pickedGroups) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 14 }), "\u6838\u51C6"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", disabled: busyKey === "*", onClick: () => setDialog({ groups: pickedGroups }) }, "\u9000\u56DE"))), loading && pending.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, "\u8B80\u53D6\u4E2D\u2026"), !loading && groups.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u76EE\u524D\u6C92\u6709\u5F85\u5BE9\u6838\u7684\u7533\u8ACB")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cards" }, shown.map((g) => {
      const f = g.first;
      const wait = daysSince(g.created);
      const multi = g.items.length > 1;
      return /* @__PURE__ */ react_default.createElement("article", { key: g.key, className: `tv-card tv-rv${g.overdue ? " overdue" : ""}`, style: { "--c": colorOf(f.space_id) } }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-rvpick" }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: picked.has(g.key), onChange: () => togglePick(g.key), "aria-label": `\u9078\u53D6 ${f.title}` })), /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvbody" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvtop" }, /* @__PURE__ */ react_default.createElement("h3", null, f.title), g.overdue ? /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag overdue" }, "\u5DF2\u7B49\u5F85 ", wait, " \u5929") : /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag pending" }, wait === 0 ? "\u4ECA\u5929\u7533\u8ACB" : `\u5DF2\u7B49\u5F85 ${wait} \u5929`)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvwhen" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-rvplace" }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot", style: { background: colorOf(f.space_id) } }), f.space_name), /* @__PURE__ */ react_default.createElement("span", null, hm(f.start_time), "\u2013", hm(f.end_time)), !multi && /* @__PURE__ */ react_default.createElement("span", null, fullLabel(f.booking_date))), multi && /* @__PURE__ */ react_default.createElement("div", { className: "tv-datechips", "aria-label": "\u7533\u8ACB\u7684\u65E5\u671F" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u5171 ", g.items.length, " \u5834\uFF1A"), g.items.slice(0, 10).map((i) => /* @__PURE__ */ react_default.createElement("span", { key: i.id, className: "tv-dchip plain" }, mdLabel(i.booking_date), "\uFF08", WEEKDAYS[dow(i.booking_date)], "\uFF09")), g.items.length > 10 && /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u2026\u9084\u6709 ", g.items.length - 10, " \u5834")), /* @__PURE__ */ react_default.createElement("dl", { className: "tv-bkdetail inline" }, f.requester_name && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u4EBA"), /* @__PURE__ */ react_default.createElement("dd", null, f.requester_name)), f.org_unit && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u501F\u7528\u55AE\u4F4D"), /* @__PURE__ */ react_default.createElement("dd", null, f.org_unit)), (f.contact_name || f.contact_phone) && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u806F\u7D61"), /* @__PURE__ */ react_default.createElement("dd", null, f.contact_name, " ", f.contact_phone && /* @__PURE__ */ react_default.createElement("a", { href: `tel:${f.contact_phone}` }, f.contact_phone))), f.note && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u5099\u8A3B"), /* @__PURE__ */ react_default.createElement("dd", { className: "tv-pre" }, f.note)), /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u6642\u9593"), /* @__PURE__ */ react_default.createElement("dd", null, fmtDateTime(g.created))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkfoot" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm primary", disabled: busyKey === g.key, onClick: () => approve([g]) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 14 }), "\u6838\u51C6", multi ? `\uFF08${g.items.length} \u5834\uFF09` : ""), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", disabled: busyKey === g.key, onClick: () => setDialog({ groups: [g] }) }, "\u9000\u56DE"))));
    })), dialog && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u9000\u56DE\u7533\u8ACB",
        danger: true,
        confirmLabel: "\u9000\u56DE\u4E26\u91CB\u51FA\u6642\u6BB5",
        withNote: true,
        noteLabel: "\u9000\u56DE\u539F\u56E0\uFF08\u7533\u8ACB\u4EBA\u770B\u5F97\u5230\uFF0C\u9078\u586B\uFF09",
        notePlaceholder: "\u4F8B\u5982\uFF1A\u8A72\u6642\u6BB5\u53E6\u6709\u6559\u6703\u6D3B\u52D5\uFF0C\u5EFA\u8B70\u6539\u9078\u5176\u4ED6\u6642\u6BB5",
        message: dialog.groups.length === 1 ? `\u300C${dialog.groups[0].first.title}\u300D${dialog.groups[0].items.length > 1 ? `\uFF08\u5171 ${dialog.groups[0].items.length} \u5834\uFF09` : ""}

\u9000\u56DE\u5F8C\u6642\u6BB5\u6703\u7ACB\u523B\u91CB\u51FA\uFF0C\u5176\u4ED6\u4EBA\u53EF\u4EE5\u7533\u8ACB\u3002` : `\u5171 ${dialog.groups.length} \u4EF6\u7533\u8ACB\uFF08${idsOf(dialog.groups).length} \u5834\uFF09

\u9000\u56DE\u5F8C\u6642\u6BB5\u6703\u7ACB\u523B\u91CB\u51FA\uFF0C\u5176\u4ED6\u4EBA\u53EF\u4EE5\u7533\u8ACB\u3002`,
        onConfirm: async (note) => {
          const n = await api.review(idsOf(dialog.groups), "reject", note);
          notify(`\u5DF2\u9000\u56DE ${n} \u5834\uFF0C\u6642\u6BB5\u5DF2\u91CB\u51FA`);
          setPicked(/* @__PURE__ */ new Set());
          onChanged();
        },
        onClose: () => setDialog(null)
      }
    ));
  }

  // src/venue/RulesTab.jsx
  var TIME_OPTIONS = timeOptions("06:00", "23:45");
  var NTH2 = [1, 2, 3, 4, 5];
  var blankRule = (spaces) => ({
    id: null,
    title: "",
    space_id: (spaces.find((s) => s.is_active) || {}).id || "",
    week_days: [],
    start_time: "19:00",
    end_time: "21:00",
    start_date: "",
    until_date: "",
    skip_nth: [],
    swap_nth: {},
    org_unit: "",
    contact_name: "",
    contact_phone: "",
    note: "",
    is_active: true
  });
  var fromRow = (r) => ({
    ...r,
    start_time: hm(r.start_time),
    end_time: hm(r.end_time),
    start_date: r.start_date || "",
    until_date: r.until_date || "",
    org_unit: r.org_unit || "",
    contact_name: r.contact_name || "",
    contact_phone: r.contact_phone || "",
    note: r.note || "",
    skip_nth: r.skip_nth || [],
    swap_nth: r.swap_nth || {},
    week_days: r.week_days || []
  });
  function RulesTab({ api, spaces, rev, onChanged, notify }) {
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const [dialog, setDialog] = useState(null);
    const [local, setLocal] = useState(0);
    useEffect(() => {
      let alive = true;
      setLoading(true);
      api.listRules().then((r) => {
        if (alive) {
          setRules(r);
          setErr("");
        }
      }).catch((e) => {
        if (alive) setErr(e.message);
      }).finally(() => {
        if (alive) setLoading(false);
      });
      return () => {
        alive = false;
      };
    }, [api, rev, local]);
    const spaceName = useMemo(() => Object.fromEntries(spaces.map((s) => [s.id, s.name])), [spaces]);
    const reload = () => {
      setLocal((n) => n + 1);
      onChanged();
    };
    const toggleActive = async (r, on) => {
      try {
        await api.saveRule({ ...fromRow(r), is_active: on });
        notify(on ? "\u5DF2\u555F\u7528\uFF0C\u5DF2\u6392\u9032\u672A\u4F86\u7684\u65E5\u66C6" : "\u5DF2\u505C\u7528\uFF0C\u672A\u4F86\u7531\u5B83\u6392\u7684\u9810\u7D04\u5DF2\u79FB\u9664");
        reload();
      } catch (e) {
        notify(e.message, "err");
      }
    };
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-rules" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, "\u5B9A\u671F\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u5171 ", rules.length, " \u500B\uFF0C\u555F\u7528\u4E2D ", rules.filter((r) => r.is_active).length, " \u500B")), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", disabled: !spaces.some((s) => s.is_active), onClick: () => setDialog({ type: "edit", rule: blankRule(spaces) }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "plus", size: 16 }), "\u65B0\u589E\u5B9A\u671F\u9810\u7D04")), err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err), loading && rules.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, "\u8B80\u53D6\u4E2D\u2026"), !loading && !err && rules.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "repeat", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u9084\u6C92\u6709\u5B9A\u671F\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u4F8B\u5982\u6BCF\u9031\u65E5\u7684\u4E3B\u65E5\u5D07\u62DC\u3001\u6BCF\u9031\u4E09\u7684\u8A69\u73ED\u7DF4\u7FD2\uFF0C\u8A2D\u5B9A\u4E00\u6B21\u5C31\u6703\u81EA\u52D5\u6392\u9032\u65E5\u66C6\u3002")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cards" }, rules.map((r) => {
      const conflicts = r.last_conflict_dates || [];
      return /* @__PURE__ */ react_default.createElement("article", { key: r.id, className: `tv-card tv-rule${r.is_active ? "" : " off"}` }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-rulehead" }, /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement("h3", null, r.title, !r.is_active && /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag cancelled" }, "\u5DF2\u505C\u7528")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvwhen" }, /* @__PURE__ */ react_default.createElement("span", null, "\u6BCF\u9031", weekdaysLabel(r.week_days), "\u3000", hm(r.start_time), "\u2013", hm(r.end_time)), /* @__PURE__ */ react_default.createElement("span", null, spaceName[r.space_id] || "\uFF08\u5834\u5730\u5DF2\u522A\u9664\uFF09"))), /* @__PURE__ */ react_default.createElement(Switch, { on: r.is_active, label: r.is_active ? "\u505C\u7528" : "\u555F\u7528", onChange: (on) => on ? toggleActive(r, true) : setDialog({ type: "pause", rule: r }) })), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tags" }, (r.skip_nth || []).map((n) => /* @__PURE__ */ react_default.createElement("span", { key: `s${n}`, className: "tv-tag overdue-soft" }, "\u7B2C ", n, " \u9031\u66AB\u505C")), Object.keys(r.swap_nth || {}).sort().map((n) => /* @__PURE__ */ react_default.createElement("span", { key: `w${n}`, className: "tv-tag info" }, "\u7B2C ", n, " \u9031\u6539\u7528", spaceName[r.swap_nth[n]] || "\u5176\u4ED6\u5834\u5730"))), conflicts.length > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn", role: "status" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 14 }), " \u6709 ", conflicts.length, " \u5929\u56E0\u70BA\u5834\u5730\u5DF2\u88AB\u5360\u7528\uFF0C\u6C92\u6709\u6392\u9032\u53BB\uFF1A", conflicts.slice(0, 8).map(mdLabel).join("\u3001"), conflicts.length > 8 ? "\u2026" : "", /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u8ACB\u5230\u65E5\u66C6\u78BA\u8A8D\uFF0C\u5FC5\u8981\u6642\u8ABF\u6574\u90A3\u5929\u7684\u9810\u7D04\u6216\u9019\u500B\u5B9A\u671F\u9810\u7D04\u3002")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u671F\u9593\uFF1A", r.start_date, " \uFF5E ", r.until_date || "\u6301\u7E8C\u6392\u73ED", r.last_generated_to && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, "\u5DF2\u6392\u5230 ", r.last_generated_to)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkfoot" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm", onClick: () => setDialog({ type: "edit", rule: fromRow(r) }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "edit", size: 14 }), "\u7DE8\u8F2F"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", onClick: () => setDialog({ type: "delete", rule: r }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "trash", size: 14 }), "\u522A\u9664")));
    })), dialog && dialog.type === "edit" && /* @__PURE__ */ react_default.createElement(RuleDialog, { api, spaces, initial: dialog.rule, onClose: () => setDialog(null), onSaved: reload, notify }), dialog && dialog.type === "pause" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u505C\u7528\u9019\u500B\u5B9A\u671F\u9810\u7D04",
        danger: true,
        confirmLabel: "\u505C\u7528",
        message: `\u300C${dialog.rule.title}\u300D\u505C\u7528\u5F8C\uFF0C\u4ECA\u5929\u4EE5\u5F8C\u7531\u5B83\u6392\u7684\u9810\u7D04\u6703\u5168\u90E8\u79FB\u9664\u3001\u6642\u6BB5\u91CB\u51FA\u3002
\u904E\u53BB\u7684\u7D00\u9304\u6703\u4FDD\u7559\u3002\u4E4B\u5F8C\u53EF\u4EE5\u518D\u555F\u7528\u3002`,
        onConfirm: async () => {
          await toggleActive(dialog.rule, false);
        },
        onClose: () => setDialog(null)
      }
    ), dialog && dialog.type === "delete" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u522A\u9664\u9019\u500B\u5B9A\u671F\u9810\u7D04",
        danger: true,
        confirmLabel: "\u522A\u9664",
        message: `\u300C${dialog.rule.title}\u300D\u522A\u9664\u5F8C\uFF0C\u4ECA\u5929\u4EE5\u5F8C\u7531\u5B83\u6392\u7684\u9810\u7D04\u6703\u4E00\u4F75\u522A\u9664\u3002
\u904E\u53BB\u7684\u7D00\u9304\u6703\u4FDD\u7559\u3002\u9019\u500B\u52D5\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002`,
        onConfirm: async () => {
          await api.deleteRule(dialog.rule.id);
          notify("\u5DF2\u522A\u9664\u5B9A\u671F\u9810\u7D04");
          reload();
        },
        onClose: () => setDialog(null)
      }
    ));
  }
  function RuleDialog({ api, spaces, initial, onClose, onSaved, notify }) {
    const [f, setF] = useState(initial);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const [tried, setTried] = useState(false);
    const isEdit = !!f.id;
    const set = (k, v) => setF((x) => ({ ...x, [k]: v }));
    const toggleDay = (d) => set("week_days", f.week_days.includes(d) ? f.week_days.filter((x) => x !== d) : [...f.week_days, d].sort());
    const modeOf = (n) => f.skip_nth.includes(n) ? "skip" : f.swap_nth[n] ? "swap" : "normal";
    const setMode = (n, mode) => {
      const skip = f.skip_nth.filter((x) => x !== n);
      const swap = { ...f.swap_nth };
      delete swap[n];
      if (mode === "skip") skip.push(n);
      if (mode === "swap") swap[n] = (spaces.find((s) => s.id !== f.space_id) || spaces[0] || {}).id || "";
      setF((x) => ({ ...x, skip_nth: skip.sort(), swap_nth: swap }));
    };
    const setSwapSpace = (n, id) => setF((x) => ({ ...x, swap_nth: { ...x.swap_nth, [n]: id } }));
    const errors = {
      title: !f.title.trim() ? "\u8ACB\u586B\u5BEB\u6D3B\u52D5\u540D\u7A31" : "",
      space: !f.space_id ? "\u8ACB\u9078\u64C7\u5834\u5730" : "",
      days: f.week_days.length === 0 ? "\u8ACB\u81F3\u5C11\u9078\u4E00\u5929" : "",
      time: !(f.start_time && f.end_time && f.end_time > f.start_time) ? "\u7D50\u675F\u6642\u9593\u8981\u665A\u65BC\u958B\u59CB\u6642\u9593" : "",
      until: f.until_date && f.until_date < (f.start_date || todayStr()) ? "\u7D50\u675F\u65E5\u671F\u4E0D\u80FD\u65E9\u65BC\u958B\u59CB\u65E5\u671F" : ""
    };
    const invalid = Object.values(errors).some(Boolean);
    const show = (k) => tried ? errors[k] : "";
    const save = async (e) => {
      e.preventDefault();
      setTried(true);
      if (invalid || busy) return;
      setBusy(true);
      setErr("");
      try {
        const swap = {};
        for (const n of Object.keys(f.swap_nth)) if (f.swap_nth[n]) swap[n] = f.swap_nth[n];
        await api.saveRule({ ...f, title: f.title.trim(), swap_nth: swap, start_date: f.start_date || todayStr() });
        notify(isEdit ? "\u5DF2\u5132\u5B58\uFF0C\u4E26\u91CD\u65B0\u6392\u5B9A\u672A\u4F86\u7684\u9810\u7D04" : "\u5DF2\u65B0\u589E\uFF0C\u4E26\u6392\u9032\u672A\u4F86\u534A\u5E74\u7684\u65E5\u66C6");
        onSaved();
        onClose();
      } catch (ex) {
        setErr(ex.message);
        setBusy(false);
      }
    };
    return /* @__PURE__ */ react_default.createElement(
      Dialog,
      {
        title: isEdit ? "\u7DE8\u8F2F\u5B9A\u671F\u9810\u7D04" : "\u65B0\u589E\u5B9A\u671F\u9810\u7D04",
        onClose,
        onSubmit: save,
        wide: true,
        footer: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u53D6\u6D88"), /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: "tv-btn primary", disabled: busy }, busy ? "\u5132\u5B58\u4E26\u6392\u7A0B\u4E2D\u2026" : "\u5132\u5B58"))
      },
      isEdit && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note info" }, "\u5132\u5B58\u5F8C\u6703\u91CD\u65B0\u6392\u5B9A\u4ECA\u5929\u4EE5\u5F8C\u7684\u6240\u6709\u5834\u6B21\uFF1B\u4E4B\u524D\u55AE\u7368\u53D6\u6D88\u7684\u5834\u6B21\u6703\u6062\u5FA9\u3002"),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u6D3B\u52D5\u540D\u7A31", required: true, error: show("title") }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.title, onChange: (e) => set("title", e.target.value), maxLength: 200, placeholder: "\u4F8B\u5982\uFF1A\u4E3B\u65E5\u5D07\u62DC\u3001\u8A69\u73ED\u7DF4\u7FD2", "data-autofocus": true })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5834\u5730", required: true, error: show("space") }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: f.space_id, onChange: (e) => set("space_id", e.target.value) }, spaces.map((s) => /* @__PURE__ */ react_default.createElement("option", { key: s.id, value: s.id, disabled: !s.is_active && s.id !== initial.space_id }, s.name, s.is_active ? "" : "\uFF08\u5DF2\u505C\u7528\uFF09")))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5728\u9019\u5E7E\u5929\u91CD\u8907", required: true, error: show("days") }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-days", role: "group", "aria-label": "\u661F\u671F" }, WEEKDAYS.map((w, d) => /* @__PURE__ */ react_default.createElement("button", { key: d, type: "button", className: "tv-daybtn", "aria-pressed": f.week_days.includes(d), onClick: () => toggleDay(d) }, w)))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u958B\u59CB / \u7D50\u675F\u6642\u9593", required: true, error: show("time") }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-row" }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: f.start_time, onChange: (e) => set("start_time", e.target.value), "aria-label": "\u958B\u59CB\u6642\u9593" }, TIME_OPTIONS.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t))), /* @__PURE__ */ react_default.createElement("span", { className: "tv-dash" }, "\u2013"), /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: f.end_time, onChange: (e) => set("end_time", e.target.value), "aria-label": "\u7D50\u675F\u6642\u9593" }, TIME_OPTIONS.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t))))),
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-switchrow" }, /* @__PURE__ */ react_default.createElement(Switch, { on: f.is_active, onChange: (v) => set("is_active", v), label: "\u555F\u7528\uFF08\u81EA\u52D5\u7E8C\u6392\uFF09" }), /* @__PURE__ */ react_default.createElement("span", null, "\u555F\u7528\uFF08\u81EA\u52D5\u7E8C\u6392\uFF09")),
      /* @__PURE__ */ react_default.createElement("details", { className: "tv-more", open: f.skip_nth.length > 0 || Object.keys(f.swap_nth).length > 0 }, /* @__PURE__ */ react_default.createElement("summary", null, "\u4F8B\u5916\u5B89\u6392\uFF08\u66AB\u505C\u3001\u63DB\u5834\u5730\uFF09"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-hint", style: { margin: "0 0 8px" } }, "\u300C\u7B2C N \u9031\u300D\u662F\u6BCF\u6708\u7B2C N \u500B\u8A72\u661F\u671F\uFF0C\u4F8B\u5982\u7B2C 1 \u9031\uFF1D\u6BCF\u6708 1\u20137 \u865F\u3002"), NTH2.map((n) => /* @__PURE__ */ react_default.createElement("div", { className: "tv-weekrow", key: n }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-weeklabel" }, "\u7B2C ", n, " \u9031"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-seg", role: "group", "aria-label": `\u7B2C ${n} \u9031` }, [["normal", "\u6B63\u5E38"], ["skip", "\u66AB\u505C"], ["swap", "\u63DB\u5834\u5730"]].map(([m, label]) => /* @__PURE__ */ react_default.createElement("button", { key: m, type: "button", "aria-pressed": modeOf(n) === m, className: m === "skip" ? "skip" : "", onClick: () => setMode(n, m) }, label))), modeOf(n) === "swap" && /* @__PURE__ */ react_default.createElement("select", { className: "tv-select slim", value: f.swap_nth[n] || "", onChange: (e) => setSwapSpace(n, e.target.value), "aria-label": `\u7B2C ${n} \u9031\u4F7F\u7528\u7684\u5834\u5730` }, spaces.map((s) => /* @__PURE__ */ react_default.createElement("option", { key: s.id, value: s.id }, s.name)))))),
      /* @__PURE__ */ react_default.createElement("details", { className: "tv-more", open: !!f.start_date || !!f.until_date }, /* @__PURE__ */ react_default.createElement("summary", null, "\u671F\u9593"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-hint", style: { margin: "0 0 8px" } }, "\u4E0D\u586B\u65E5\u671F\uFF1D\u5F9E\u4ECA\u5929\u8D77\u6301\u7E8C\u6392\u73ED\u3002"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-grid2" }, /* @__PURE__ */ react_default.createElement(Field, { label: "\u958B\u59CB\u65E5\u671F" }, /* @__PURE__ */ react_default.createElement("input", { type: "date", className: "tv-input", value: f.start_date, onChange: (e) => set("start_date", e.target.value) })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u7D50\u675F\u65E5\u671F", error: show("until") }, /* @__PURE__ */ react_default.createElement("input", { type: "date", className: "tv-input", value: f.until_date, min: f.start_date || void 0, onChange: (e) => set("until_date", e.target.value) })))),
      /* @__PURE__ */ react_default.createElement("details", { className: "tv-more" }, /* @__PURE__ */ react_default.createElement("summary", null, "\u806F\u7D61\u8CC7\u8A0A\u8207\u5099\u8A3B"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-grid2" }, /* @__PURE__ */ react_default.createElement(Field, { label: "\u501F\u7528\u55AE\u4F4D" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.org_unit, onChange: (e) => set("org_unit", e.target.value), maxLength: 100 })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u4EBA" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.contact_name, onChange: (e) => set("contact_name", e.target.value), maxLength: 50 }))), /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u96FB\u8A71" }, /* @__PURE__ */ react_default.createElement("input", { type: "tel", inputMode: "tel", className: "tv-input", value: f.contact_phone, onChange: (e) => set("contact_phone", e.target.value), maxLength: 30 })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u5099\u8A3B" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: f.note, onChange: (e) => set("note", e.target.value), maxLength: 500 }))),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }

  // src/venue/SpacesTab.jsx
  function SpacesTab({ api, spaces, colorOf, onSpacesChanged, notify }) {
    const [dialog, setDialog] = useState(null);
    const [busy, setBusy] = useState(false);
    const save = async (s) => {
      await api.saveSpace(s);
      await onSpacesChanged();
    };
    const quick = async (s, patch, okMsg) => {
      setBusy(true);
      try {
        await save({ ...s, ...patch });
        if (okMsg) notify(okMsg);
      } catch (e) {
        notify(e.message, "err");
      } finally {
        setBusy(false);
      }
    };
    const move = async (idx, dir) => {
      const j = idx + dir;
      if (j < 0 || j >= spaces.length) return;
      const order = [...spaces];
      [order[idx], order[j]] = [order[j], order[idx]];
      setBusy(true);
      try {
        for (let i = 0; i < order.length; i++) {
          if (order[i].sort_order !== (i + 1) * 10) await api.saveSpace({ ...order[i], sort_order: (i + 1) * 10 });
        }
        await onSpacesChanged();
      } catch (e) {
        notify(e.message, "err");
      } finally {
        setBusy(false);
      }
    };
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-spaces" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, "\u5834\u5730\u8A2D\u5B9A"), /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, spaces.length, " \u500B\u5834\u5730")), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", onClick: () => setDialog({ space: { id: null, name: "", note: "", is_active: true, public_visible: true, sort_order: (spaces.length + 1) * 10 } }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "plus", size: 16 }), "\u65B0\u589E\u5834\u5730")), spaces.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "pin", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u9084\u6C92\u6709\u5834\u5730"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u5148\u65B0\u589E\u5834\u5730\uFF08\u4F8B\u5982\uFF1A\u5927\u5802\u3001\u526F\u5802\u3001\u4E8C\u6A13\u6559\u5BA4\uFF09\uFF0C\u624D\u80FD\u9810\u7D04\u8207\u6392\u5B9A\u671F\u9810\u7D04\u3002")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cards" }, spaces.map((s, i) => /* @__PURE__ */ react_default.createElement("article", { key: s.id, className: `tv-card tv-space${s.is_active ? "" : " off"}` }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacemain" }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot big", style: { background: colorOf(s.id) } }), /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacetext" }, /* @__PURE__ */ react_default.createElement("h3", null, s.name, !s.is_active && /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag cancelled" }, "\u5DF2\u505C\u7528")), s.note && /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, s.note))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacectl" }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-switchrow compact" }, /* @__PURE__ */ react_default.createElement(
      Switch,
      {
        on: s.is_active,
        disabled: busy,
        label: `${s.name} \u555F\u7528`,
        onChange: (v) => quick(s, { is_active: v }, v ? "\u5DF2\u555F\u7528" : "\u5DF2\u505C\u7528\uFF0C\u4E4B\u5F8C\u4E0D\u80FD\u518D\u9810\u7D04\u9019\u500B\u5834\u5730")
      }
    ), /* @__PURE__ */ react_default.createElement("span", null, "\u53EF\u9810\u7D04")), /* @__PURE__ */ react_default.createElement("label", { className: "tv-switchrow compact" }, /* @__PURE__ */ react_default.createElement(
      Switch,
      {
        on: s.public_visible,
        disabled: busy,
        label: `${s.name} \u516C\u958B\u9801\u986F\u793A`,
        onChange: (v) => quick(s, { public_visible: v }, v ? "\u516C\u958B\u9801\u6703\u986F\u793A\u9019\u500B\u5834\u5730" : "\u516C\u958B\u9801\u4E0D\u518D\u986F\u793A\u9019\u500B\u5834\u5730")
      }
    ), /* @__PURE__ */ react_default.createElement("span", null, "\u516C\u958B\u9801\u986F\u793A")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-ctlbtns" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn bordered", disabled: busy || i === 0, onClick: () => move(i, -1), "aria-label": `${s.name} \u5F80\u4E0A` }, /* @__PURE__ */ react_default.createElement(Icon, { name: "up", size: 16 })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn bordered", disabled: busy || i === spaces.length - 1, onClick: () => move(i, 1), "aria-label": `${s.name} \u5F80\u4E0B` }, /* @__PURE__ */ react_default.createElement(Icon, { name: "down", size: 16 })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm", onClick: () => setDialog({ space: s }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "edit", size: 14 }), "\u7DE8\u8F2F")))))), dialog && /* @__PURE__ */ react_default.createElement(SpaceDialog, { space: dialog.space, onSave: save, onClose: () => setDialog(null), notify }));
  }
  function SpaceDialog({ space, onSave, onClose, notify }) {
    const [f, setF] = useState({ ...space, note: space.note || "" });
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const [tried, setTried] = useState(false);
    const nameErr = !f.name.trim() ? "\u8ACB\u586B\u5BEB\u5834\u5730\u540D\u7A31" : f.name.trim().length > 60 ? "\u540D\u7A31\u6700\u591A 60 \u5B57" : "";
    const submit = async (e) => {
      e.preventDefault();
      setTried(true);
      if (nameErr || busy) return;
      setBusy(true);
      setErr("");
      try {
        await onSave({ ...f, name: f.name.trim() });
        notify(space.id ? "\u5DF2\u5132\u5B58" : "\u5DF2\u65B0\u589E\u5834\u5730");
        onClose();
      } catch (ex) {
        setErr(/duplicate|unique|venue_spaces_name_uq/i.test(ex.message) ? "\u5DF2\u7D93\u6709\u540C\u540D\u7684\u5834\u5730\u4E86" : ex.message);
        setBusy(false);
      }
    };
    return /* @__PURE__ */ react_default.createElement(
      Dialog,
      {
        title: space.id ? "\u7DE8\u8F2F\u5834\u5730" : "\u65B0\u589E\u5834\u5730",
        onClose,
        onSubmit: submit,
        footer: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u53D6\u6D88"), /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: "tv-btn primary", disabled: busy }, busy ? "\u5132\u5B58\u4E2D\u2026" : "\u5132\u5B58"))
      },
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5834\u5730\u540D\u7A31", required: true, error: tried ? nameErr : "" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.name, onChange: (e) => setF({ ...f, name: e.target.value }), maxLength: 60, placeholder: "\u4F8B\u5982\uFF1A\u5927\u5802", "data-autofocus": true })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5099\u8A3B", hint: "\u53EA\u6709\u7BA1\u7406\u8005\u770B\u5F97\u5230\uFF0C\u4F8B\u5982\u5BB9\u7D0D\u4EBA\u6578\u3001\u8A2D\u5099" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: f.note, onChange: (e) => setF({ ...f, note: e.target.value }), maxLength: 300 })),
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-switchrow" }, /* @__PURE__ */ react_default.createElement(Switch, { on: f.is_active, onChange: (v) => setF({ ...f, is_active: v }), label: "\u53EF\u9810\u7D04" }), /* @__PURE__ */ react_default.createElement("span", null, "\u53EF\u9810\u7D04\uFF08\u95DC\u9589\u5F8C\u4E0D\u80FD\u518D\u7533\u8ACB\uFF0C\u5DF2\u6392\u7684\u9810\u7D04\u4E0D\u53D7\u5F71\u97FF\uFF09")),
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-switchrow" }, /* @__PURE__ */ react_default.createElement(Switch, { on: f.public_visible, onChange: (v) => setF({ ...f, public_visible: v }), label: "\u516C\u958B\u9801\u986F\u793A" }), /* @__PURE__ */ react_default.createElement("span", null, "\u5728\u516C\u958B\u9801\u986F\u793A\u9019\u500B\u5834\u5730")),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }

  // src/venue/VenueApp.jsx
  var TABS = [
    { id: "calendar", label: "\u65E5\u66C6", icon: "calendar" },
    { id: "review", label: "\u5BE9\u6838", icon: "inbox" },
    { id: "rules", label: "\u5B9A\u671F\u9810\u7D04", icon: "repeat" },
    { id: "spaces", label: "\u5834\u5730\u8A2D\u5B9A", icon: "pin" }
  ];
  var TAB_IDS = TABS.map((t) => t.id);
  var ALLOWED_ROLES = ["pastor", "admin_staff", "admin"];
  var readTab = () => {
    const h = (window.location.hash || "").replace("#", "");
    return TAB_IDS.includes(h) ? h : "calendar";
  };
  function VenueApp({ supabase, identity }) {
    const api = useMemo(() => createApi(supabase), [supabase]);
    const allowed = !!identity && ALLOWED_ROLES.includes(identity.role);
    const [tab, setTab] = useState(readTab);
    const [spaces, setSpaces] = useState([]);
    const [spacesErr, setSpacesErr] = useState("");
    const [pending, setPending] = useState([]);
    const [pendingLoading, setPendingLoading] = useState(true);
    const [pendingErr, setPendingErr] = useState("");
    const [rev, setRev] = useState(0);
    const [toast, setToast] = useState(null);
    const toastTimer = useRef(null);
    useEffect(() => {
      const on = () => setTab(readTab());
      window.addEventListener("hashchange", on);
      return () => window.removeEventListener("hashchange", on);
    }, []);
    const go = useCallback((t) => {
      if (window.location.hash !== `#${t}`) window.location.hash = t;
      setTab(t);
    }, []);
    const notify = useCallback((msg, kind = "ok") => {
      setToast({ msg, kind });
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(null), kind === "err" ? 6e3 : 3500);
    }, []);
    useEffect(() => () => clearTimeout(toastTimer.current), []);
    const loadSpaces = useCallback(async () => {
      try {
        setSpaces(await api.listSpaces());
        setSpacesErr("");
      } catch (e) {
        setSpacesErr(e.message);
      }
    }, [api]);
    const loadPending = useCallback(async () => {
      setPendingLoading(true);
      try {
        const t = todayStr();
        const rows = await api.listBookings(addDays(t, -30), addDays(t, 366));
        setPending(rows.filter((r) => r.status === "pending"));
        setPendingErr("");
      } catch (e) {
        setPendingErr(e.message);
      } finally {
        setPendingLoading(false);
      }
    }, [api]);
    useEffect(() => {
      if (allowed) {
        loadSpaces();
        loadPending();
      }
    }, [allowed, loadSpaces, loadPending]);
    const onChanged = useCallback(() => {
      setRev((v) => v + 1);
      loadPending();
    }, [loadPending]);
    const colorOf = useMemo(() => {
      const map = new Map(spaces.map((s, i) => [s.id, SPACE_COLORS[i % SPACE_COLORS.length]]));
      return (id) => map.get(id) || "#8c8c8c";
    }, [spaces]);
    if (!allowed) {
      return /* @__PURE__ */ react_default.createElement("div", { className: "tbc-venue" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty", style: { margin: "auto" } }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u6B0A\u9650\u4E0D\u8DB3"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u5834\u5730\u9810\u7D04\u5F8C\u53F0\u9650\u7267\u8005\u3001\u884C\u653F\u8207\u7BA1\u7406\u54E1\u4F7F\u7528\u3002")));
    }
    const overdueN = new Set(pending.filter((p) => p.overdue).map((p) => p.series_id || p.id)).size;
    const pendingN = new Set(pending.map((p) => p.series_id || p.id)).size;
    const loadErr = spacesErr;
    return /* @__PURE__ */ react_default.createElement("div", { className: "tbc-venue" }, /* @__PURE__ */ react_default.createElement("header", { className: "tv-head" }, /* @__PURE__ */ react_default.createElement("h1", { className: "tv-title" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "calendar", size: 26 }), "\u5834\u5730\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("nav", { className: "tv-tabs", role: "tablist", "aria-label": "\u5834\u5730\u9810\u7D04" }, TABS.map((t) => /* @__PURE__ */ react_default.createElement("button", { key: t.id, type: "button", role: "tab", "aria-selected": tab === t.id, className: "tv-tab", onClick: () => go(t.id) }, /* @__PURE__ */ react_default.createElement(Icon, { name: t.icon, size: 16 }), t.label, t.id === "review" && pendingN > 0 && /* @__PURE__ */ react_default.createElement("span", { className: `tv-badge${overdueN > 0 ? " red" : ""}`, "aria-label": `${pendingN} \u4EF6\u5F85\u5BE9\u6838` }, pendingN))))), /* @__PURE__ */ react_default.createElement("main", { className: "tv-body" }, loadErr && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, loadErr), overdueN > 0 && tab !== "review" && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad tv-banner", role: "status" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 16 }), "\u6709 ", overdueN, " \u4EF6\u7533\u8ACB\u5DF2\u7B49\u5F85\u8D85\u904E ", OVERDUE_DAYS, " \u5929\u6C92\u6709\u8655\u7406\u3002", /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: () => go("review") }, "\u524D\u5F80\u5BE9\u6838")), tab === "calendar" && /* @__PURE__ */ react_default.createElement(CalendarTab, { api, spaces, colorOf, rev, onChanged, notify, goReview: () => go("review"), userName: identity && identity.name || "" }), tab === "review" && /* @__PURE__ */ react_default.createElement(ReviewTab, { api, pending, loading: pendingLoading, error: pendingErr, colorOf, onChanged, notify }), tab === "rules" && /* @__PURE__ */ react_default.createElement(RulesTab, { api, spaces, rev, onChanged, notify }), tab === "spaces" && /* @__PURE__ */ react_default.createElement(SpacesTab, { api, spaces, colorOf, onSpacesChanged: loadSpaces, notify })), toast && /* @__PURE__ */ react_default.createElement("div", { className: `tv-toast ${toast.kind}`, role: "status" }, toast.msg));
  }

  // src/styles/venue.css.js
  var venue_css_default = ".tbc-venue,.tbc-venue *,.tbc-venue *:before,.tbc-venue *:after{box-sizing:border-box}.tbc-venue{--tv-primary: #0070d5;--tv-primary-h: #005cb0;--tv-tint: #eef6fd;--tv-ink-blue: #004a8f;--tv-line: #e8e8e8;--tv-line2: #d9d9d9;--tv-ink: #262626;--tv-sub: #595959;--tv-mute: #8c8c8c;--tv-bg: #f7f9fa;--tv-red: #d4101b;--tv-red-bg: #fdecee;--tv-red-line: #f3c3c7;--tv-amber: #8a5300;--tv-amber-bg: #fff4df;--tv-amber-line: #f1d49b;--tv-green: #1f6f43;--tv-green-bg: #e6f4ec;height:100%;display:flex;flex-direction:column;background:var(--tv-bg);color:var(--tv-ink);font-size:14px;line-height:1.5;letter-spacing:0}.tbc-venue h1,.tbc-venue h2,.tbc-venue h3,.tbc-venue p,.tbc-venue dl,.tbc-venue dd{margin:0}.tbc-venue button{cursor:pointer;font:inherit;color:inherit;background:none;border:0;padding:0}.tbc-venue button:disabled{cursor:not-allowed}.tbc-venue :focus-visible{outline:2px solid var(--tv-primary);outline-offset:2px}.tbc-venue .tv-icon{flex:none}.tbc-venue .tv-pre{white-space:pre-wrap;word-break:break-word}.tbc-venue .tv-sub{color:var(--tv-sub);font-size:13px}.tbc-venue a{color:var(--tv-primary);text-decoration:none}.tbc-venue a:hover{text-decoration:underline}.tbc-venue .tv-head{display:flex;align-items:center;flex-wrap:wrap;gap:12px 24px;background:#fff;border-bottom:1px solid var(--tv-line);padding:14px 24px;flex:none}.tbc-venue .tv-title{display:flex;align-items:center;gap:8px;font-size:22px;font-weight:600}.tbc-venue .tv-title .tv-icon{color:var(--tv-primary)}.tbc-venue .tv-tabs{display:flex;gap:4px;margin-left:auto;overflow-x:auto;max-width:100%}.tbc-venue .tv-tab{height:36px;padding:0 16px;border-radius:9999px;color:var(--tv-sub);display:inline-flex;align-items:center;gap:6px;white-space:nowrap;transition:background .15s}.tbc-venue .tv-tab:hover{background:#f5f5f5}.tbc-venue .tv-tab[aria-selected=true]{background:var(--tv-tint);color:var(--tv-primary);font-weight:600}.tbc-venue .tv-badge{min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--tv-primary);color:#fff;font-size:11px;font-weight:600;display:inline-flex;align-items:center;justify-content:center}.tbc-venue .tv-badge.red{background:var(--tv-red)}.tbc-venue .tv-body{flex:1;min-height:0;overflow:auto;padding:20px 24px 72px}.tbc-venue .tv-banner{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:16px}.tbc-venue .tv-btn{height:40px;padding:0 16px;border-radius:9999px;border:1px solid var(--tv-line2);background:#fff;color:var(--tv-ink);display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;transition:background-color .15s}.tbc-venue .tv-btn:hover:not(:disabled){background:#f5f5f5}.tbc-venue .tv-btn.sm{height:32px;padding:0 12px;font-size:13px}.tbc-venue .tv-btn.primary{background:var(--tv-primary);border-color:var(--tv-primary);color:#fff}.tbc-venue .tv-btn.primary:hover:not(:disabled){background:var(--tv-primary-h)}.tbc-venue .tv-btn.danger{color:var(--tv-red);border-color:var(--tv-red-line)}.tbc-venue .tv-btn.danger:hover:not(:disabled){background:var(--tv-red-bg)}.tbc-venue .tv-btn.danger.fill{background:var(--tv-red);border-color:var(--tv-red);color:#fff}.tbc-venue .tv-btn.danger.fill:hover:not(:disabled){background:#b30d17}.tbc-venue .tv-btn:disabled{opacity:.4}.tbc-venue .tv-icon-btn{width:36px;height:36px;border-radius:9999px;display:inline-flex;align-items:center;justify-content:center;color:var(--tv-sub);flex:none}.tbc-venue .tv-icon-btn:hover:not(:disabled){background:#f0f0f0}.tbc-venue .tv-icon-btn.bordered{border:1px solid var(--tv-line2);background:#fff;width:34px;height:34px}.tbc-venue .tv-icon-btn:disabled{opacity:.35}.tbc-venue .tv-link{color:var(--tv-primary);text-decoration:underline;font-size:13px}.tbc-venue .tv-input,.tbc-venue .tv-select,.tbc-venue .tv-textarea{width:100%;height:42px;padding:0 12px;font:inherit;font-size:15px;color:var(--tv-ink);background:#fff;border:1px solid var(--tv-line2);border-radius:8px;outline:none}.tbc-venue .tv-textarea{height:auto;min-height:84px;padding:10px 12px;resize:vertical}.tbc-venue .tv-input:focus,.tbc-venue .tv-select:focus,.tbc-venue .tv-textarea:focus{border-color:var(--tv-primary);box-shadow:0 0 0 3px #0070d529}.tbc-venue .tv-field.invalid .tv-input,.tbc-venue .tv-field.invalid .tv-select{border-color:var(--tv-red)}.tbc-venue .tv-select.slim{height:36px;width:auto;min-width:140px;font-size:14px}.tbc-venue .tv-num{width:64px;text-align:center;padding:0 6px}.tbc-venue .tv-field{margin-bottom:16px}.tbc-venue .tv-label{display:block;margin-bottom:6px;font-weight:600;font-size:14px}.tbc-venue .tv-req{color:var(--tv-red);margin-left:2px}.tbc-venue .tv-hint{margin-top:4px;font-size:12px;color:var(--tv-mute)}.tbc-venue .tv-err{margin-top:4px;font-size:13px;color:var(--tv-red);font-weight:500}.tbc-venue .tv-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.tbc-venue .tv-row .tv-input{flex:1;min-width:120px}.tbc-venue .tv-row .tv-select:not(.slim){flex:1;width:auto;min-width:110px}.tbc-venue .tv-row .tv-num{flex:none;min-width:0}.tbc-venue .tv-inline{display:inline-flex;align-items:center;gap:6px;color:var(--tv-sub);font-size:13px}.tbc-venue .tv-dash{color:var(--tv-mute)}.tbc-venue .tv-grid2{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}.tbc-venue .tv-check{display:inline-flex;align-items:center;gap:8px;cursor:pointer}.tbc-venue .tv-check input{width:16px;height:16px;accent-color:var(--tv-primary)}.tbc-venue .tv-switch{width:44px;height:24px;border-radius:9999px;background:#d0d0d0;position:relative;flex:none;transition:background-color .15s}.tbc-venue .tv-switch span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .15s}.tbc-venue .tv-switch.on{background:var(--tv-primary)}.tbc-venue .tv-switch.on span{transform:translate(20px)}.tbc-venue .tv-switch:disabled{opacity:.5}.tbc-venue .tv-switchrow{display:flex;align-items:center;gap:10px;margin:12px 0}.tbc-venue .tv-switchrow.compact{margin:0;gap:8px;font-size:13px;color:var(--tv-sub)}.tbc-venue .tv-pill{height:32px;padding:0 12px;border-radius:9999px;border:1px solid var(--tv-line2);background:#fff;display:inline-flex;align-items:center;gap:6px;font-size:13px;white-space:nowrap}.tbc-venue .tv-pill:hover{background:#f5f5f5}.tbc-venue .tv-pill.on{background:var(--tv-tint);border-color:var(--tv-primary);color:var(--tv-primary);font-weight:600}.tbc-venue .tv-pill.red{color:var(--tv-red);border-color:var(--tv-red-line)}.tbc-venue .tv-pill.red.on{background:var(--tv-red-bg);border-color:var(--tv-red);color:var(--tv-red)}.tbc-venue .tv-more{border:1px solid var(--tv-line);border-radius:8px;padding:0 12px;margin-bottom:16px;background:#fcfcfc}.tbc-venue .tv-more summary{cursor:pointer;padding:12px 0;font-weight:600;font-size:14px}.tbc-venue .tv-more[open]{padding-bottom:4px}.tbc-venue .tv-days{display:flex;gap:6px;flex-wrap:wrap}.tbc-venue .tv-daybtn{width:40px;height:40px;border-radius:50%;border:1px solid var(--tv-line2);background:#fff;font-weight:600}.tbc-venue .tv-daybtn[aria-pressed=true]{background:var(--tv-primary);border-color:var(--tv-primary);color:#fff}.tbc-venue .tv-weekrow{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 0;border-top:1px solid var(--tv-line)}.tbc-venue .tv-weeklabel{width:52px;font-weight:600}.tbc-venue .tv-seg{display:inline-flex;border:1px solid var(--tv-line2);border-radius:9999px;overflow:hidden;background:#fff}.tbc-venue .tv-seg button{height:32px;padding:0 14px;font-size:13px}.tbc-venue .tv-seg button+button{border-left:1px solid var(--tv-line2)}.tbc-venue .tv-seg button[aria-pressed=true]{background:var(--tv-primary);color:#fff;font-weight:600}.tbc-venue .tv-seg button.skip[aria-pressed=true]{background:var(--tv-red)}.tbc-venue .tv-datechips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;align-items:center}.tbc-venue .tv-dchip{display:inline-flex;align-items:center;gap:4px;height:28px;padding:0 6px 0 10px;border-radius:9999px;background:var(--tv-tint);color:var(--tv-ink-blue);font-size:13px}.tbc-venue .tv-dchip.plain{padding:0 10px}.tbc-venue .tv-dchip.bad{background:var(--tv-amber-bg);color:var(--tv-amber)}.tbc-venue .tv-dchip button{width:20px;height:20px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center}.tbc-venue .tv-dchip button:hover{background:#00000014}.tbc-venue .tv-note{padding:10px 12px;border-radius:8px;font-size:13px;margin-bottom:14px}.tbc-venue .tv-note.info{background:var(--tv-tint);color:var(--tv-ink-blue)}.tbc-venue .tv-note.warn{background:var(--tv-amber-bg);color:var(--tv-amber);border:1px solid var(--tv-amber-line)}.tbc-venue .tv-note.bad{background:var(--tv-red-bg);color:var(--tv-red);border:1px solid var(--tv-red-line)}.tbc-venue .tv-note .tv-check{margin-top:8px;display:flex}.tbc-venue .tv-tag{display:inline-flex;align-items:center;height:20px;padding:0 8px;border-radius:9999px;font-size:12px;font-weight:500;white-space:nowrap;margin-left:0}.tbc-venue .tv-tag.pending{background:var(--tv-amber-bg);color:var(--tv-amber)}.tbc-venue .tv-tag.approved{background:var(--tv-green-bg);color:var(--tv-green)}.tbc-venue .tv-tag.rejected{background:var(--tv-red-bg);color:var(--tv-red)}.tbc-venue .tv-tag.cancelled,.tbc-venue .tv-tag.plain{background:#f0f0f0;color:var(--tv-sub)}.tbc-venue .tv-tag.overdue{background:var(--tv-red);color:#fff}.tbc-venue .tv-tag.overdue-soft{background:var(--tv-red-bg);color:var(--tv-red)}.tbc-venue .tv-tag.info{background:var(--tv-tint);color:var(--tv-ink-blue)}.tbc-venue h3 .tv-tag{margin-left:8px;vertical-align:middle}.tbc-venue .tv-dot{display:inline-block;width:10px;height:10px;border-radius:50%;flex:none}.tbc-venue .tv-dot.big{width:14px;height:14px}.tbc-venue .tv-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:56px 16px;color:var(--tv-mute);text-align:center}.tbc-venue .tv-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px}.tbc-venue .tv-navs{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.tbc-venue .tv-monthtitle{font-size:20px;font-weight:600;min-width:112px}.tbc-venue .tv-loading{color:var(--tv-mute);font-size:12px}.tbc-venue .tv-filters{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}.tbc-venue .tv-pills{display:flex;gap:6px;flex-wrap:wrap}.tbc-venue .tv-cal{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:16px;align-items:start}.tbc-venue .tv-month{background:#fff;border:1px solid var(--tv-line);border-radius:8px;overflow:hidden}.tbc-venue .tv-weekhead{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));background:var(--tv-bg);border-bottom:1px solid var(--tv-line)}.tbc-venue .tv-weekhead div{padding:8px 0;text-align:center;font-size:13px;color:var(--tv-sub);font-weight:600}.tbc-venue .tv-weeks{display:grid;grid-template-columns:repeat(7,minmax(0,1fr))}.tbc-venue .tv-day{position:relative;min-height:108px;padding:6px;border-right:1px solid var(--tv-line);border-bottom:1px solid var(--tv-line);cursor:pointer;overflow:hidden}.tbc-venue .tv-day:nth-child(7n){border-right:0}.tbc-venue .tv-day:hover{background:#fafcfe}.tbc-venue .tv-day.out{background:#fafafa;color:var(--tv-mute)}.tbc-venue .tv-day.sel{background:var(--tv-tint);box-shadow:inset 0 0 0 2px var(--tv-primary)}.tbc-venue .tv-daynum{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;border-radius:13px;font-size:13px;font-weight:500}.tbc-venue .tv-day.today .tv-daynum{background:var(--tv-primary);color:#fff;font-weight:600}.tbc-venue .tv-overdue-dot{position:absolute;top:9px;right:9px;width:8px;height:8px;border-radius:50%;background:var(--tv-red)}.tbc-venue .tv-chips{margin-top:2px}.tbc-venue .tv-chip{margin-top:2px;padding:0 6px;border-radius:4px;border-left:3px solid var(--c);background:color-mix(in srgb,var(--c) 13%,#fff);font-size:12px;line-height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--tv-ink)}.tbc-venue .tv-chip b{font-weight:600;font-variant-numeric:tabular-nums}.tbc-venue .tv-chip.pending{background:#fff;border:1px dashed var(--c);border-left:3px solid var(--c)}.tbc-venue .tv-chip.overdue{border-color:var(--tv-red);border-left-color:var(--tv-red);color:var(--tv-red);background:var(--tv-red-bg)}.tbc-venue .tv-chip.rejected,.tbc-venue .tv-chip.cancelled{background:#f5f5f5;border-left-color:#bbb;color:var(--tv-mute);text-decoration:line-through}.tbc-venue .tv-more-count{margin-top:2px;font-size:12px;color:var(--tv-sub);padding-left:6px}.tbc-venue .tv-dots{display:none;gap:3px;flex-wrap:wrap;margin-top:4px}.tbc-venue .tv-dots .tv-dot{width:7px;height:7px}.tbc-venue .tv-dots .tv-dot.pending{background:transparent!important;box-shadow:inset 0 0 0 1.5px var(--tv-mute)}.tbc-venue .tv-legend{display:flex;gap:16px;flex-wrap:wrap;margin-top:10px;font-size:12px;color:var(--tv-sub)}.tbc-venue .tv-legend span{display:inline-flex;align-items:center;gap:6px}.tbc-venue .tv-legend-solid,.tbc-venue .tv-legend-dash{width:22px;height:12px;border-radius:3px;border-left:3px solid var(--tv-primary);background:color-mix(in srgb,var(--tv-primary) 13%,#fff);display:inline-block}.tbc-venue .tv-legend-dash{background:#fff;border:1px dashed var(--tv-primary);border-left:3px solid var(--tv-primary)}.tbc-venue .tv-legend-dash.red{border-color:var(--tv-red);background:var(--tv-red-bg)}.tbc-venue .tv-panel{background:#fff;border:1px solid var(--tv-line);border-radius:8px;padding:16px;position:sticky;top:0;max-height:calc(100dvh - 150px);overflow:auto}.tbc-venue .tv-panelhead{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:12px}.tbc-venue .tv-panelhead h3{font-size:17px;font-weight:600}.tbc-venue .tv-tl{margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--tv-line)}.tbc-venue .tv-tl-row{display:grid;grid-template-columns:88px minmax(0,1fr);gap:8px;align-items:center;margin:5px 0}.tbc-venue .tv-tl-name{display:flex;align-items:center;gap:6px;font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tbc-venue .tv-tl-track{position:relative;height:20px;border-radius:4px;background-color:#f3f3f3;background-image:linear-gradient(to right,#e1e1e1 1px,transparent 1px);background-repeat:repeat-x}.tbc-venue .tv-tl-bar{position:absolute;top:2px;bottom:2px;border-radius:3px;background:var(--c);min-width:3px}.tbc-venue .tv-tl-bar.pending{background:repeating-linear-gradient(45deg,var(--c),var(--c) 3px,color-mix(in srgb,var(--c) 35%,#fff) 3px,color-mix(in srgb,var(--c) 35%,#fff) 6px)}.tbc-venue .tv-tl-bar.overdue{outline:2px solid var(--tv-red)}.tbc-venue .tv-tl-row.axis{margin-top:2px}.tbc-venue .tv-tl-axis{position:relative;height:14px;font-size:11px;color:var(--tv-mute)}.tbc-venue .tv-tl-axis span{position:absolute;transform:translate(-50%)}.tbc-venue .tv-bklist{display:flex;flex-direction:column;gap:8px}.tbc-venue .tv-bk{border:1px solid var(--tv-line);border-left:4px solid var(--c);border-radius:8px;padding:0 10px}.tbc-venue .tv-bk.pending{border-style:dashed;border-left-style:solid}.tbc-venue .tv-bk.overdue{border-color:var(--tv-red);background:snow}.tbc-venue .tv-bk.rejected,.tbc-venue .tv-bk.cancelled{opacity:.7}.tbc-venue .tv-bkhead{width:100%;display:flex;align-items:flex-start;gap:10px;padding:10px 0;text-align:left}.tbc-venue .tv-bktime{font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap;padding-top:1px}.tbc-venue .tv-bkmain{flex:1;min-width:0}.tbc-venue .tv-bktitle{font-weight:600;word-break:break-word}.tbc-venue .tv-bkmeta{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:4px;font-size:12px;color:var(--tv-sub)}.tbc-venue .tv-bkdetail{display:grid;grid-template-columns:72px 1fr;gap:4px 8px;padding:8px 0 10px;border-top:1px solid var(--tv-line);font-size:13px}.tbc-venue .tv-bkdetail dt{color:var(--tv-mute)}.tbc-venue .tv-bkdetail.inline{border-top:0;padding-top:4px}.tbc-venue .tv-bkfoot{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:0 0 10px}.tbc-venue .tv-bkfoot.muted{color:var(--tv-mute);font-size:12px}.tbc-venue .tv-cards{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(min(100%,420px),1fr));align-items:start}.tbc-venue .tv-card{background:#fff;border:1px solid var(--tv-line);border-radius:8px;padding:16px}.tbc-venue .tv-card h3{font-size:16px;font-weight:600;word-break:break-word}.tbc-venue .tv-bulk{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;padding:8px 12px;background:#fff;border:1px solid var(--tv-line);border-radius:8px}.tbc-venue .tv-rv{display:flex;gap:12px;border-left:4px solid var(--c)}.tbc-venue .tv-rv.overdue{border-color:var(--tv-red);background:snow;border-left-color:var(--tv-red)}.tbc-venue .tv-rvpick{padding-top:2px}.tbc-venue .tv-rvpick input{width:18px;height:18px;accent-color:var(--tv-primary)}.tbc-venue .tv-rvbody{flex:1;min-width:0}.tbc-venue .tv-rvtop{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}.tbc-venue .tv-rvwhen{display:flex;flex-wrap:wrap;gap:4px 14px;margin:6px 0 8px;color:var(--tv-sub);font-size:13px}.tbc-venue .tv-rvplace{display:inline-flex;align-items:center;gap:6px}.tbc-venue .tv-rulehead{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.tbc-venue .tv-rule.off{background:#fafafa}.tbc-venue .tv-rule.off h3{color:var(--tv-sub)}.tbc-venue .tv-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}.tbc-venue .tv-tags:empty{display:none}.tbc-venue .tv-rule .tv-note{margin:8px 0}.tbc-venue .tv-rule .tv-bkfoot{padding:10px 0 0}.tbc-venue .tv-space{display:flex;flex-direction:column;gap:12px}.tbc-venue .tv-space.off{background:#fafafa}.tbc-venue .tv-spacemain{display:flex;gap:10px;align-items:flex-start}.tbc-venue .tv-spacetext{min-width:0}.tbc-venue .tv-spacectl{display:flex;align-items:center;gap:14px;flex-wrap:wrap;border-top:1px solid var(--tv-line);padding-top:12px}.tbc-venue .tv-ctlbtns{display:flex;gap:6px;align-items:center;margin-left:auto}.tbc-venue .tv-overlay{position:fixed;inset:0;z-index:100;background:#0006;display:flex;justify-content:center;align-items:flex-start;padding:5vh 16px;overflow:auto}.tbc-venue .tv-dialog{width:100%;max-width:460px;background:#fff;border-radius:12px;display:flex;flex-direction:column}.tbc-venue .tv-dialog.wide{max-width:580px}.tbc-venue .tv-dhead{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 8px}.tbc-venue .tv-dhead h3{font-size:18px;font-weight:600}.tbc-venue .tv-dform{display:flex;flex-direction:column;min-height:0}.tbc-venue .tv-dbody{padding:8px 20px 4px}.tbc-venue .tv-dfoot{display:flex;justify-content:flex-end;gap:8px;padding:12px 20px 16px;border-top:1px solid var(--tv-line);margin-top:8px}.tbc-venue .tv-toast{position:fixed;left:50%;bottom:32px;transform:translate(-50%);z-index:120;max-width:calc(100vw - 32px);padding:10px 20px;border-radius:9999px;background:#262626;color:#fff;font-size:14px}.tbc-venue .tv-toast.err{background:var(--tv-red)}.tbc-venue .tv-quick{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}.tbc-venue .tv-qbtn{height:36px;padding:0 16px;border-radius:9999px;border:1px solid var(--tv-line2);background:#fff;font-size:14px}.tbc-venue .tv-qbtn:hover{background:#f5f5f5}.tbc-venue .tv-qbtn.on,.tbc-venue .tv-qbtn[aria-pressed=true]{background:var(--tv-primary);border-color:var(--tv-primary);color:#fff;font-weight:600}.tbc-venue .tv-qbtn.skip[aria-pressed=true]{background:var(--tv-red);border-color:var(--tv-red)}.tbc-venue .tv-timebox{margin-top:10px}.tbc-venue .tv-bigtime{font-size:28px;font-weight:700;letter-spacing:.5px;font-variant-numeric:tabular-nums;color:var(--tv-ink-blue)}.tbc-venue .tv-tlwrap{margin-top:12px}.tbc-venue .tv-tl-track.tall{height:28px;border-radius:6px}.tbc-venue .tv-tl-bar.busy{top:3px;bottom:3px;background:#b8b8b8}.tbc-venue .tv-tl-bar.busy.pending{background:repeating-linear-gradient(45deg,#b8b8b8,#b8b8b8 3px,#e2e2e2 3px 6px)}.tbc-venue .tv-tl-bar.mine{top:0;bottom:0;background:color-mix(in srgb,var(--tv-primary) 80%,transparent);border:2px solid var(--tv-primary);border-radius:4px}.tbc-venue .tv-tl-bar.mine.bad{background:color-mix(in srgb,var(--tv-red) 55%,transparent);border-color:var(--tv-red)}.tbc-venue .tv-tl-axis.wide{margin-top:3px;height:16px}.tbc-venue .tv-tlnote{margin-top:4px;font-size:12px;color:var(--tv-sub)}.tbc-venue .tv-tlnote b.good{color:var(--tv-green)}.tbc-venue .tv-tlnote b.bad{color:var(--tv-red)}.tbc-venue .tv-lg{display:inline-block;width:12px;height:8px;border-radius:2px;margin-right:4px;vertical-align:middle}.tbc-venue .tv-lg.busy{background:#b8b8b8}.tbc-venue .tv-lg.mine{background:var(--tv-primary)}.tbc-venue .tv-repeatrow{gap:8px}.tbc-venue .tv-repeatrow .tv-select.slim{min-width:72px}.tbc-venue .tv-confirmwrap{display:flex;flex-direction:column;gap:8px;width:100%}.tbc-venue .tv-confirm{width:100%;min-height:56px;padding:8px 16px;border-radius:14px;background:var(--tv-primary);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}.tbc-venue .tv-confirm strong{font-size:17px;font-weight:600}.tbc-venue .tv-confirm span{font-size:12px;opacity:.9}.tbc-venue .tv-confirm:hover:not(:disabled){background:var(--tv-primary-h)}.tbc-venue .tv-confirm:disabled{opacity:.45}@media(max-width:1100px){.tbc-venue .tv-cal{grid-template-columns:minmax(0,1fr)}.tbc-venue .tv-panel{position:static;max-height:none}}@media(max-width:640px){.tbc-venue .tv-head{padding:12px 16px}.tbc-venue .tv-body{padding:16px 12px 72px}.tbc-venue .tv-tabs{margin-left:0}.tbc-venue .tv-day{min-height:58px;padding:4px}.tbc-venue .tv-chips{display:none}.tbc-venue .tv-dots{display:flex}.tbc-venue .tv-grid2{grid-template-columns:1fr}.tbc-venue .tv-input,.tbc-venue .tv-select,.tbc-venue .tv-textarea{font-size:16px}.tbc-venue .tv-overlay{padding:0;align-items:flex-end}.tbc-venue .tv-dialog,.tbc-venue .tv-dialog.wide{max-width:none;border-radius:12px 12px 0 0;max-height:94dvh;overflow:auto}}@media(prefers-reduced-motion:reduce){.tbc-venue *{transition:none!important}}\n";

  // src/venue/entry.jsx
  var st = document.createElement("style");
  st.setAttribute("data-tbc", "venue");
  st.textContent = venue_css_default;
  document.head.appendChild(st);
  window.TBC_VENUE = { Root: VenueApp };
  window.dispatchEvent(new Event("tbc-venue-ready"));
})();
