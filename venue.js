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
  var nowHm = () => new Intl.DateTimeFormat("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit", hour12: false }).format(/* @__PURE__ */ new Date());

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
        p_skip_conflicts: !!f.skip_conflicts
      }),
      // 修改一筆預約（只限今天以後、待核准或已核准）
      updateBooking: (id, f) => call("venue_update_booking", {
        p_id: id,
        p_space_id: f.space_id,
        p_title: f.title,
        p_date: f.date,
        p_start_time: f.start_time,
        p_end_time: f.end_time,
        p_org_unit: f.org_unit || null,
        p_contact_name: f.contact_name || null,
        p_contact_phone: f.contact_phone || null,
        p_note: f.note || null
      }),
      // 核准或退回（一次最多 100 筆，超過自動分批）
      review: async (ids, action, note) => {
        let n = 0;
        for (let i = 0; i < ids.length; i += 100) {
          n += await call("venue_review", { p_ids: ids.slice(i, i + 100), p_action: action, p_note: note || null });
        }
        return n;
      },
      // 刪除一筆預約並釋出時段（定期預約排出的場次會留成「已取消」，避免被自動排回來）
      deleteBooking: (id) => call("venue_delete_booking", { p_id: id }),
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
      deleteSpace: (id) => call("venue_delete_space", { p_id: id }),
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
        p_is_active: r.is_active !== false
      }),
      deleteRule: (id) => call("venue_delete_rule", { p_rule_id: id })
    };
  };

  // src/venue/ui.jsx
  var PATHS = {
    calendar: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }), /* @__PURE__ */ react_default.createElement("path", { d: "M16 2v4M8 2v4M3 10h18" })),
    inbox: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }), /* @__PURE__ */ react_default.createElement("path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" })),
    search: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("circle", { cx: "11", cy: "11", r: "8" }), /* @__PURE__ */ react_default.createElement("path", { d: "m21 21-4.3-4.3" })),
    history: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), /* @__PURE__ */ react_default.createElement("path", { d: "M3 3v5h5" }), /* @__PURE__ */ react_default.createElement("path", { d: "M12 7v5l4 2" })),
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
  function Dialog({ title, onClose, children, footer, footerClass, onSubmit, wide }) {
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
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-overlay", role: "presentation" }, /* @__PURE__ */ react_default.createElement("div", { className: `tv-dialog${wide ? " wide" : ""}`, role: "dialog", "aria-modal": "true", "aria-label": title, ref: box }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-dhead" }, /* @__PURE__ */ react_default.createElement("h3", null, title), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn", onClick: onClose, "aria-label": "\u95DC\u9589" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "x" }))), /* @__PURE__ */ react_default.createElement(Body, { className: "tv-dform", onSubmit, noValidate: onSubmit ? true : void 0 }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-dbody" }, children), footer && /* @__PURE__ */ react_default.createElement("div", { className: `tv-dfoot${footerClass ? " " + footerClass : ""}` }, footer))));
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
  function ConfirmDialog({ title, message, withNote, noteLabel, notePlaceholder, confirmLabel, danger, hideCancel, compact, onConfirm, onClose }) {
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
    useEffect(() => {
      if (!compact) return void 0;
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [compact]);
    if (compact) {
      return /* @__PURE__ */ react_default.createElement("div", { className: "tv-overlay", role: "presentation" }, /* @__PURE__ */ react_default.createElement("form", { className: "tv-dialog tv-cbox", role: "dialog", "aria-modal": "true", "aria-label": title, onSubmit: run, noValidate: true }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn tv-cboxx", onClick: onClose, "aria-label": "\u95DC\u9589", disabled: busy }, /* @__PURE__ */ react_default.createElement(Icon, { name: "x" })), /* @__PURE__ */ react_default.createElement("h3", null, title), message ? /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub tv-cmsg" }, message) : null, withNote && /* @__PURE__ */ react_default.createElement("label", { className: "tv-cnote" }, /* @__PURE__ */ react_default.createElement("span", null, noteLabel || "\u8AAA\u660E\uFF08\u9078\u586B\uFF09"), /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: text, onChange: (e) => setText(e.target.value), maxLength: 300 })), err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err), /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: "tv-btn danger fill block", disabled: busy, "data-autofocus": withNote ? void 0 : true }, busy ? "\u8655\u7406\u4E2D\u2026" : confirmLabel), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn block", onClick: onClose, disabled: busy }, "\u53D6\u6D88")));
    }
    return /* @__PURE__ */ react_default.createElement(
      Dialog,
      {
        title,
        onClose,
        onSubmit: run,
        footer: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, !hideCancel && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u53D6\u6D88"), /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: `tv-btn ${danger ? "danger fill" : "primary"}`, disabled: busy }, busy ? "\u8655\u7406\u4E2D\u2026" : confirmLabel))
      },
      message ? /* @__PURE__ */ react_default.createElement("div", { className: "tv-pre" }, message) : null,
      withNote && /* @__PURE__ */ react_default.createElement(Field, { label: noteLabel || "\u8AAA\u660E\uFF08\u9078\u586B\uFF09" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: text, onChange: (e) => setText(e.target.value), placeholder: notePlaceholder || "", maxLength: 300 })),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }
  function Collapse({ title, hint, defaultOpen, children }) {
    const [open, setOpen] = useState(!!defaultOpen);
    return /* @__PURE__ */ react_default.createElement("details", { className: "tv-collapse", open, onToggle: (e) => setOpen(e.currentTarget.open) }, /* @__PURE__ */ react_default.createElement("summary", null, /* @__PURE__ */ react_default.createElement("span", { className: "tv-ctitle" }, title), hint && /* @__PURE__ */ react_default.createElement("span", { className: "tv-chint" }, hint), /* @__PURE__ */ react_default.createElement("span", { className: "tv-cplus", "aria-hidden": "true" })), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cbody" }, children));
  }

  // src/venue/BookingDialog.jsx
  var START_OPTIONS = timeOptions("08:00", "22:45");
  var END_OPTIONS = timeOptions("08:15", "23:45");
  var DURATIONS = [[60, "1 \u5C0F\u6642"], [90, "1.5 \u5C0F\u6642"], [120, "2 \u5C0F\u6642"], [180, "3 \u5C0F\u6642"]];
  var TL_FROM = 8;
  var TL_TO = 23;
  var HORIZON_DAYS = 365;
  var NTH = [1, 2, 3, 4, 5];
  var weekdayLabel = (d) => `${mdLabel(d)}\uFF08${WEEKDAYS[dow(d)]}\uFF09`;
  function BookingDialog({ api, spaces, editing, initialDate, initialSpaceId, initialStart, initialDuration, defaultContact, onClose, onSaved, notify }) {
    const today = todayStr();
    const ed = editing || null;
    const active = spaces.filter((s) => s.is_active || ed && s.id === ed.space_id);
    const startDate0 = ed ? ed.booking_date : initialDate && initialDate >= today ? initialDate : today;
    const edDur = ed ? timeToMin(hm(ed.end_time)) - timeToMin(hm(ed.start_time)) : 0;
    const [spaceId, setSpaceId] = useState(ed ? ed.space_id : initialSpaceId && active.some((s) => s.id === initialSpaceId) ? initialSpaceId : (active[0] || {}).id || "");
    const [title, setTitle] = useState(ed ? ed.title : "");
    const [date, setDate] = useState(startDate0);
    const start0 = ed ? hm(ed.start_time) : initialStart ? initialStart < "08:00" ? "08:00" : initialStart > "22:45" ? "22:45" : initialStart : "19:00";
    const [start, setStart] = useState(start0);
    const [duration, setDuration] = useState(ed ? DURATIONS.some(([m]) => m === edDur) ? edDur : 0 : initialDuration ? DURATIONS.some(([m]) => m === initialDuration) ? initialDuration : 0 : 120);
    const [customEnd, setCustomEnd] = useState(ed ? hm(ed.end_time) : initialDuration ? addMinutes(start0, initialDuration) > "23:45" ? "23:45" : addMinutes(start0, initialDuration) : "21:00");
    const [contact, setContact] = useState(ed ? ed.contact_name || "" : defaultContact || "");
    const [org, setOrg] = useState(ed ? ed.org_unit || "" : "");
    const [phone, setPhone] = useState(ed ? ed.contact_phone || "" : "");
    const [note, setNote] = useState(ed ? ed.note || "" : "");
    const [repeat, setRepeat] = useState(false);
    const [unit, setUnit] = useState("week");
    const [interval, setIntervalN] = useState(1);
    const [count, setCount] = useState(4);
    const [weekdays, setWeekdays] = useState([dow(startDate0)]);
    const [skipNth, setSkipNth] = useState([]);
    const [skip, setSkip] = useState(false);
    const [apiConflicts, setConflicts] = useState([]);
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
    const dateErr = !date ? "\u8ACB\u9078\u64C7\u65E5\u671F" : !ed && date < today ? "\u4E0D\u80FD\u9810\u7D04\u904E\u53BB\u7684\u65E5\u671F" : dates.length > 60 ? "\u4E00\u6B21\u6700\u591A 60 \u5834\uFF0C\u8ACB\u6E1B\u5C11\u6B21\u6578" : dates.some((d) => d > horizon) ? "\u6700\u591A\u53EA\u80FD\u9810\u7D04\u5230\u4E00\u5E74\u5167\uFF0C\u8ACB\u6E1B\u5C11\u6B21\u6578\u6216\u9593\u9694" : "";
    const datesKey = dates.join(",");
    useEffect(() => {
      setConflicts([]);
      setSkip(false);
      if (ed) return void 0;
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
      if (!spaceId || !date || !ed && date < today) {
        setDayRows([]);
        return void 0;
      }
      let alive = true;
      api.listBookings(date, date).then((rows) => {
        if (alive) setDayRows((rows || []).filter((r) => r.space_id === spaceId && (r.status === "approved" || r.status === "pending") && !(ed && r.id === ed.id)));
      }).catch(() => {
        if (alive) setDayRows([]);
      });
      return () => {
        alive = false;
      };
    }, [api, spaceId, date, today]);
    const edClash = ed && timeOk ? dayRows.filter((r) => hm(r.start_time) < end && hm(r.end_time) > start) : [];
    const conflicts = ed ? edClash.map((r) => ({ booking_date: date, status: r.status })) : apiConflicts;
    const conflictDates = new Set(conflicts.map((c) => c.booking_date));
    const allConflict = conflicts.length > 0 && conflicts.length >= dates.length;
    const blockedByConflict = conflicts.length > 0 && !(skip && !allConflict);
    const okCount = dates.length - (skip ? conflicts.length : 0);
    const spaceName = (active.find((s) => s.id === spaceId) || {}).name || "";
    const errors = {
      title: !title.trim() ? "\u8ACB\u586B\u5BEB\u6D3B\u52D5\u540D\u7A31" : "",
      space: !spaceId ? "\u8ACB\u9078\u64C7\u5834\u5730" : "",
      contact: !ed && !contact.trim() ? "\u8ACB\u586B\u5BEB\u806F\u7D61\u4EBA" : "",
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
        if (ed) {
          await api.updateBooking(ed.id, { space_id: spaceId, title: title.trim(), date, start_time: start, end_time: end, org_unit: org, contact_name: contact.trim(), contact_phone: phone, note });
          notify("\u5DF2\u5132\u5B58");
          onSaved();
          onClose();
          return;
        }
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
    const avail = !spaceId || !timeOk || dateErr ? "" : checking ? "\u6AA2\u67E5\u4E2D\u2026" : conflicts.length === 0 ? "\u53EF\u9810\u7D04" : repeat ? "" : "\u4E0D\u53EF\u9810\u7D04";
    const subline = `${spaceName || "\uFF08\u672A\u9078\u5834\u5730\uFF09"} \u30FB ${date ? weekdayLabel(date) : "\u2014"} ${timeOk ? `${start}\u2013${end}` : ""}${dates.length > 1 ? ` \u30FB \u5171 ${okCount} \u5834` : ""}`;
    return /* @__PURE__ */ react_default.createElement(
      Dialog,
      {
        title: ed ? "\u7DE8\u8F2F\u9810\u7D04" : "\u65B0\u589E\u9810\u7D04",
        onClose,
        onSubmit: submit,
        wide: true,
        footer: /* @__PURE__ */ react_default.createElement("div", { className: "tv-confirmwrap" }, /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: "tv-confirm", disabled: busy || checking || blockedByConflict }, /* @__PURE__ */ react_default.createElement("strong", null, busy ? ed ? "\u5132\u5B58\u4E2D\u2026" : "\u9001\u51FA\u4E2D\u2026" : checking ? "\u6AA2\u67E5\u885D\u7A81\u4E2D\u2026" : ed ? "\u5132\u5B58" : "\u78BA\u8A8D\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("span", null, subline)), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u53D6\u6D88"))
      },
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u6D3B\u52D5\u540D\u7A31", required: true, error: show("title") }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: title, onChange: (e) => setTitle(e.target.value), maxLength: 200, placeholder: "\u4F8B\u5982\uFF1A\u5C0F\u7D44\u805A\u6703\u3001\u656C\u62DC\u5718\u7DF4", "data-autofocus": true })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5834\u5730", required: true, error: show("space") }, active.length === 0 ? /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn" }, "\u9084\u6C92\u6709\u53EF\u7528\u7684\u5834\u5730\uFF0C\u8ACB\u5148\u5230\u300C\u5834\u5730\u8A2D\u5B9A\u300D\u65B0\u589E\u3002") : /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: spaceId, onChange: (e) => setSpaceId(e.target.value) }, active.map((s) => /* @__PURE__ */ react_default.createElement("option", { key: s.id, value: s.id }, s.name)))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u65E5\u671F", required: true, error: dateErr }, /* @__PURE__ */ react_default.createElement("input", { type: "date", className: "tv-input", value: date, min: ed ? void 0 : today, onChange: (e) => pickDate(e.target.value), "aria-label": "\u9078\u64C7\u65E5\u671F" })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u958B\u59CB\u6642\u9593", required: true }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: start, onChange: (e) => setStart(e.target.value), "aria-label": "\u958B\u59CB\u6642\u9593" }, (START_OPTIONS.includes(start) ? START_OPTIONS : [...START_OPTIONS, start].sort()).map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t)))),
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
      )), duration === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-row", style: { marginTop: 8 } }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u7D50\u675F\u6642\u9593"), /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: customEnd, onChange: (e) => setCustomEnd(e.target.value), "aria-label": "\u7D50\u675F\u6642\u9593" }, (END_OPTIONS.includes(customEnd) ? END_OPTIONS : [...END_OPTIONS, customEnd].sort()).map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t)))), timeOk && /* @__PURE__ */ react_default.createElement("div", { className: "tv-timebox" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-bigtime" }, start, " \u2013 ", end)), spaceId && date && (ed || date >= today) && /* @__PURE__ */ react_default.createElement("div", { className: "tv-tlwrap", "aria-label": "\u7576\u5929\u6642\u9593\u8EF8" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-track tall" }, dayRows.map((r) => /* @__PURE__ */ react_default.createElement("div", { key: r.id, className: `tv-tl-bar busy${r.status === "pending" ? " pending" : ""}`, style: bar(hm(r.start_time), hm(r.end_time)), title: `${hm(r.start_time)}\u2013${hm(r.end_time)} ${r.title}` })), timeOk && /* @__PURE__ */ react_default.createElement("div", { className: `tv-tl-bar mine${firstConflict ? " bad" : ""}`, style: bar(start, end) })), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tl-axis wide" }, [8, 11, 14, 17, 20, 23].map((h) => /* @__PURE__ */ react_default.createElement("span", { key: h, style: { left: `${(h - TL_FROM) / (TL_TO - TL_FROM) * 100}%` } }, String(h).padStart(2, "0")))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tlnote" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-lg busy" }), "\u5DF2\u9810\u7D04", avail && /* @__PURE__ */ react_default.createElement("b", { className: conflicts.length && !repeat ? "bad" : "good" }, "\u3000", avail)))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u4EBA", required: !ed, error: show("contact") }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: contact, onChange: (e) => setContact(e.target.value), maxLength: 50, placeholder: "\u501F\u7528\u7684\u8CA0\u8CAC\u4EBA" })),
      !ed && /* @__PURE__ */ react_default.createElement(Collapse, { title: "\u91CD\u8907\u9810\u7D04" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-switchrow" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", role: "switch", "aria-checked": repeat, "aria-label": "\u91CD\u8907\u9031\u671F", onClick: () => setRepeat(!repeat), className: `tv-switch${repeat ? " on" : ""}` }, /* @__PURE__ */ react_default.createElement("span", null)), /* @__PURE__ */ react_default.createElement("span", null, "\u91CD\u8907\u9031\u671F")), repeat && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", { className: "tv-row tv-repeatrow" }, /* @__PURE__ */ react_default.createElement("span", null, "\u6BCF"), /* @__PURE__ */ react_default.createElement("input", { type: "number", className: "tv-input tv-num", min: "1", max: "12", value: interval, onChange: (e) => setIntervalN(e.target.value), "aria-label": "\u9593\u9694" }), /* @__PURE__ */ react_default.createElement("select", { className: "tv-select slim", value: unit, onChange: (e) => setUnit(e.target.value), "aria-label": "\u9031\u671F\u55AE\u4F4D" }, /* @__PURE__ */ react_default.createElement("option", { value: "week" }, "\u9031"), /* @__PURE__ */ react_default.createElement("option", { value: "day" }, "\u5929"), /* @__PURE__ */ react_default.createElement("option", { value: "year" }, "\u5E74")), /* @__PURE__ */ react_default.createElement("span", null, "\uFF0C\u5171"), /* @__PURE__ */ react_default.createElement("input", { type: "number", className: "tv-input tv-num", min: "1", max: "52", value: count, onChange: (e) => setCount(e.target.value), "aria-label": "\u6B21\u6578" }), /* @__PURE__ */ react_default.createElement("span", null, "\u6B21")), unit === "week" && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("div", { className: "tv-label", style: { marginTop: 12 } }, "\u661F\u671F\u5E7E"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-days", role: "group", "aria-label": "\u661F\u671F" }, WEEKDAYS.map((w, d) => /* @__PURE__ */ react_default.createElement("button", { key: d, type: "button", className: "tv-daybtn", "aria-pressed": weekdays.includes(d), onClick: () => toggleWeekday(d) }, w))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-label", style: { marginTop: 12 } }, "\u6BCF\u6708\u66AB\u505C\u9810\u7D04\u9031\u6B21"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-days", role: "group", "aria-label": "\u66AB\u505C\u9031\u6B21" }, NTH.map((n) => /* @__PURE__ */ react_default.createElement("button", { key: n, type: "button", className: "tv-qbtn skip", "aria-pressed": skipNth.includes(n), onClick: () => toggleNth(n) }, "\u7B2C ", n, " \u9031")))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-label", style: { marginTop: 12 } }, "\u9810\u8A08\u4F7F\u7528\u65E5\u671F\uFF1A\u5171 ", dates.length, " \u5834", conflicts.length > 0 ? `\uFF0C${conflicts.length} \u5834\u885D\u7A81` : ""), /* @__PURE__ */ react_default.createElement("div", { className: "tv-datechips", "aria-label": "\u9810\u8A08\u4F7F\u7528\u65E5\u671F" }, dates.map((d) => /* @__PURE__ */ react_default.createElement("span", { key: d, className: `tv-dchip plain${conflictDates.has(d) ? " bad" : ""}` }, weekdayLabel(d)))), conflicts.length > 0 && !allConflict && /* @__PURE__ */ react_default.createElement("label", { className: "tv-check" }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: skip, onChange: (e) => setSkip(e.target.checked) }), "\u7565\u904E\u6642\u9593\u885D\u7A81\u5834\u6B21\uFF0C\u5176\u9918\u7167\u5E38\u9810\u7D04"), allConflict && /* @__PURE__ */ react_default.createElement("div", { className: "tv-err", role: "alert" }, "\u6240\u9078\u65E5\u671F\u5168\u90E8\u885D\u7A81\uFF0C\u8ACB\u6539\u6642\u9593\u3001\u6539\u5834\u5730\uFF0C\u6216\u63DB\u65E5\u671F\u3002"))),
      /* @__PURE__ */ react_default.createElement(Collapse, { title: "\u66F4\u591A\u8CC7\u8A0A", defaultOpen: !!(ed && (org || phone || note)) }, /* @__PURE__ */ react_default.createElement(Field, { label: "\u501F\u7528\u55AE\u4F4D" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: org, onChange: (e) => setOrg(e.target.value), maxLength: 100, placeholder: "\u4F8B\u5982\uFF1A\u9752\u5E74\u5718\u5951" })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u96FB\u8A71" }, /* @__PURE__ */ react_default.createElement("input", { type: "tel", inputMode: "tel", className: "tv-input", value: phone, onChange: (e) => setPhone(e.target.value), maxLength: 30 })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u5099\u8A3B" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: note, onChange: (e) => setNote(e.target.value), maxLength: 500, placeholder: "\u4F8B\u5982\uFF1A\u9700\u8981\u7121\u7DDA\u9EA5\u514B\u98A8 2 \u652F" }))),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }

  // src/venue/QuickFind.jsx
  var START_OPTIONS2 = timeOptions("08:00", "22:45");
  var DURATIONS2 = [[60, "1 \u5C0F\u6642"], [90, "1.5 \u5C0F\u6642"], [120, "2 \u5C0F\u6642"], [180, "3 \u5C0F\u6642"]];
  var END_OPTIONS2 = timeOptions("08:15", "23:45");
  var DAY_FROM = 8 * 60;
  var DAY_TO = 23 * 60;
  var mdw = (d) => `${+d.slice(5, 7)}/${+d.slice(8, 10)}\uFF08${WEEKDAYS[dow(d)]}\uFF09`;
  var defaultStart = (date, today) => {
    if (date !== today) return "19:00";
    const h = Math.min(22, Math.max(8, parseInt(nowHm().slice(0, 2), 10) + 1));
    return `${String(h).padStart(2, "0")}:00`;
  };
  var alternatives = (busy, wantStart, dur) => {
    let cands = [];
    for (let s = DAY_FROM; s + dur <= DAY_TO; s += 15) {
      if (busy.every((r) => !(timeToMin(r.start_time) < s + dur && timeToMin(r.end_time) > s))) cands.push(s);
    }
    const noLunch = cands.filter((s) => !(s < 13 * 60 && s + dur > 12 * 60));
    if (noLunch.length) cands = noLunch;
    cands.sort((a, b) => Math.abs(a - wantStart) - Math.abs(b - wantStart) || a - b);
    const out = [];
    for (const c of cands) {
      if (out.every((o) => Math.abs(o - c) >= 45)) out.push(c);
      if (out.length >= 3) break;
    }
    return out.sort((a, b) => a - b);
  };
  function QuickFind({ api, spaces, colorOf, initialDate, initial, onClose, onPick }) {
    const today = todayStr();
    const d0 = initial ? initial.date : initialDate && initialDate >= today ? initialDate : today;
    const [date, setDate] = useState(d0);
    const [start, setStart] = useState(() => initial ? initial.start : defaultStart(d0, today));
    const [dur0, setDur0] = useState(initial ? initial.durMode : 120);
    const [customEnd, setCustomEnd] = useState(initial ? initial.customEnd : "21:00");
    const [sel, setSel] = useState(initial ? initial.sel : null);
    const [menuOpen, setMenuOpen] = useState(false);
    const duration = dur0 || Math.max(0, timeToMin(customEnd) - timeToMin(start));
    const [rows, setRows] = useState(null);
    const [err, setErr] = useState("");
    const end = minToHm(timeToMin(start) + duration);
    const endOk = duration > 0 && timeToMin(start) + duration <= DAY_TO + 60 && end <= "23:59";
    const dateErr = !date ? "\u8ACB\u9078\u64C7\u65E5\u671F" : date < today ? "\u4E0D\u80FD\u9810\u7D04\u904E\u53BB\u7684\u65E5\u671F" : "";
    useEffect(() => {
      if (dateErr) {
        setRows([]);
        return void 0;
      }
      let alive = true;
      setRows(null);
      api.listBookings(date, date).then((r) => {
        if (alive) {
          setRows((r || []).filter((x) => x.status === "pending" || x.status === "approved"));
          setErr("");
        }
      }).catch((e) => {
        if (alive) {
          setErr(e.message);
          setRows([]);
        }
      });
      return () => {
        alive = false;
      };
    }, [api, date, dateErr]);
    const active = spaces.filter((sp) => sp.is_active);
    const allOn = !sel || active.every((sp) => sel.has(sp.id));
    const toggleSp = (id) => {
      const n = new Set(sel || active.map((x) => x.id));
      if (n.has(id)) n.delete(id);
      else n.add(id);
      setSel(active.every((x) => n.has(x.id)) ? null : n);
    };
    const results = useMemo(() => {
      if (!rows || dateErr || !endOk) return [];
      const s = timeToMin(start), e = s + duration;
      const list = active.filter((sp) => !sel || sel.has(sp.id)).map((sp) => {
        const mine = rows.filter((r) => r.space_id === sp.id);
        const clash = mine.filter((r) => timeToMin(r.start_time) < e && timeToMin(r.end_time) > s);
        return { sp, mine, clash, free: clash.length === 0, alts: clash.length ? alternatives(mine, s, duration) : [] };
      });
      list.sort((a, b) => b.free - a.free || a.sp.name.localeCompare(b.sp.name, "zh-TW"));
      return list;
    }, [rows, spaces, start, duration, endOk, dateErr, sel]);
    const freeN = results.filter((r) => r.free).length;
    const pick = (spaceId, startMin) => onPick({ spaceId, date, start: minToHm(startMin), duration, back: { date, start, durMode: dur0, customEnd, sel } });
    return /* @__PURE__ */ react_default.createElement(
      Dialog,
      {
        title: "\u5FEB\u901F\u627E\u5834\u5730",
        onClose,
        wide: true,
        footer: /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose }, "\u95DC\u9589")
      },
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u65E5\u671F", error: dateErr }, /* @__PURE__ */ react_default.createElement("input", { type: "date", className: "tv-input", value: date, min: today, onChange: (e) => setDate(e.target.value), "aria-label": "\u9078\u64C7\u65E5\u671F" })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u958B\u59CB\u6642\u9593" }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: start, onChange: (e) => setStart(e.target.value), "aria-label": "\u958B\u59CB\u6642\u9593" }, START_OPTIONS2.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t)))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u7528\u591A\u4E45" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-quick", role: "group", "aria-label": "\u7528\u591A\u4E45" }, DURATIONS2.map(([m, label]) => /* @__PURE__ */ react_default.createElement("button", { key: m, type: "button", className: `tv-qbtn${dur0 === m ? " on" : ""}`, "aria-pressed": dur0 === m, onClick: () => setDur0(m) }, label)), /* @__PURE__ */ react_default.createElement(
        "button",
        {
          type: "button",
          className: `tv-qbtn${dur0 === 0 ? " on" : ""}`,
          "aria-pressed": dur0 === 0,
          onClick: () => {
            setDur0(0);
            if (end > start && endOk) setCustomEnd(end);
          }
        },
        "\u81EA\u8A02"
      )), dur0 === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-row", style: { marginTop: 8 } }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u7D50\u675F\u6642\u9593"), /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: customEnd, onChange: (e) => setCustomEnd(e.target.value), "aria-label": "\u7D50\u675F\u6642\u9593" }, END_OPTIONS2.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t)))), endOk && /* @__PURE__ */ react_default.createElement("div", { className: "tv-timebox" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-bigtime" }, start, " \u2013 ", end))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5834\u5730" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-select tv-spacepick", "aria-expanded": menuOpen, onClick: () => setMenuOpen(!menuOpen) }, /* @__PURE__ */ react_default.createElement("span", null, allOn ? "\u5168\u90E8\u5834\u5730" : !sel || sel.size === 0 ? "\u672A\u9078\u5834\u5730" : `${sel.size} \u500B\u5834\u5730`), /* @__PURE__ */ react_default.createElement(Icon, { name: "down", size: 14 })), menuOpen && /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacepanel", role: "group", "aria-label": "\u9078\u64C7\u5834\u5730" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacelisthead" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u52FE\u9078\u8981\u67E5\u8A62\u7684\u5834\u5730"), /* @__PURE__ */ react_default.createElement("span", null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: () => setSel(null) }, "\u5168\u9078"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: () => setSel(/* @__PURE__ */ new Set()) }, "\u53D6\u6D88"))), active.map((sp) => /* @__PURE__ */ react_default.createElement("label", { key: sp.id, className: "tv-spaceitem", style: { "--c": colorOf(sp.id) } }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: !sel || sel.has(sp.id), onChange: () => toggleSp(sp.id) }), /* @__PURE__ */ react_default.createElement("i", { className: "tv-box" }), /* @__PURE__ */ react_default.createElement("span", null, sp.name))))),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err),
      !endOk && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn" }, "\u7D50\u675F\u6642\u9593\u8981\u665A\u65BC\u958B\u59CB\u6642\u9593\uFF0C\u4E14\u4E0D\u80FD\u8D85\u904E 23:59\u3002"),
      !dateErr && endOk && /* @__PURE__ */ react_default.createElement("section", { "aria-live": "polite", className: "tv-qresults" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-qsummary" }, rows === null ? "\u67E5\u8A62\u4E2D\u2026" : results.length === 0 ? "\u6C92\u6709\u7B26\u5408\u7684\u5834\u5730" : /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("b", null, mdw(date), " ", start, "\u2013", end), "\u3000", freeN > 0 ? `${freeN} \u500B\u5834\u5730\u53EF\u9810\u7D04` : "\u9019\u500B\u6642\u6BB5\u90FD\u88AB\u5360\u7528\u4E86")), results.map(({ sp, mine, clash, free, alts }) => /* @__PURE__ */ react_default.createElement("div", { key: sp.id, className: `tv-qrow${free ? " free" : " busy"}`, style: { "--c": colorOf(sp.id) } }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-qmain" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-qname" }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot big", style: { background: colorOf(sp.id) } }), sp.name), sp.note && /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, sp.note), free ? /* @__PURE__ */ react_default.createElement("div", { className: "tv-qok" }, "\u53EF\u9810\u7D04", mine.length > 0 && /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u3000\u4E0D\u53EF\u9810\u7D04\uFF1A", mine.map((r) => `${hm(r.start_time)}\u2013${hm(r.end_time)}`).join("\u3001"))) : /* @__PURE__ */ react_default.createElement("div", { className: "tv-qno" }, "\u4E0D\u53EF\u9810\u7D04\uFF1A", clash.map((r) => `${hm(r.start_time)}\u2013${hm(r.end_time)} ${r.title}`).join("\u3001"), alts.length > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-qalts" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u63A8\u85A6\u6642\u9593"), alts.map((a) => /* @__PURE__ */ react_default.createElement("button", { key: a, type: "button", className: "tv-qbtn sm good", onClick: () => pick(sp.id, a) }, minToHm(a), "\u2013", minToHm(a + duration)))))), free && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", onClick: () => pick(sp.id, timeToMin(start)) }, "\u9810\u7D04"))))
    );
  }

  // src/venue/CalendarTab.jsx
  var live = (r) => r.status === "pending" || r.status === "approved";
  function CalendarTab({ api, spaces, colorOf, rev, onChanged, notify, goReview, userName }) {
    const today = todayStr();
    const [anchor, setAnchor] = useState(today);
    const [picked, setPicked] = useState(null);
    const showClosed = false;
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const [dialog, setDialog] = useState(null);
    const [busy, setBusy] = useState(false);
    const savedRef = useRef(false);
    const listRef = useRef(null);
    const jumpRef = useRef(null);
    const mStart = monthStart(anchor);
    const mEnd = addDays(addMonths(mStart, 1), -1);
    const grid = useMemo(() => monthGrid(mStart), [mStart]);
    useEffect(() => {
      let alive = true;
      setLoading(true);
      api.listBookings(mStart, mEnd).then((r) => {
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
    }, [api, mStart, mEnd, rev]);
    const activeSpaces = spaces.filter((s) => s.is_active);
    const byDate = useMemo(() => {
      const m = /* @__PURE__ */ new Map();
      for (const r of rows) {
        if (picked && !picked.has(r.space_id)) continue;
        if (!showClosed && !live(r)) continue;
        if (!m.has(r.booking_date)) m.set(r.booking_date, []);
        m.get(r.booking_date).push(r);
      }
      for (const list of m.values()) list.sort((a, b) => a.start_time.localeCompare(b.start_time) || a.space_name.localeCompare(b.space_name));
      return m;
    }, [rows, picked, showClosed]);
    const dates = useMemo(() => [...byDate.keys()].sort(), [byDate]);
    useEffect(() => {
      const d = jumpRef.current;
      if (!d || !listRef.current) return;
      jumpRef.current = null;
      const target = [...listRef.current.querySelectorAll("[data-date]")].find((el) => el.getAttribute("data-date") >= d);
      if (target && target.scrollIntoView) target.scrollIntoView({ block: "start", behavior: "smooth" });
    }, [anchor, dates]);
    const stepMonth = (n) => setAnchor(addMonths(mStart, n));
    const pickDay = (d) => {
      jumpRef.current = d;
      setAnchor(d);
    };
    const newDate = anchor >= today ? anchor : today;
    const onlySpace = picked && picked.size === 1 ? [...picked][0] : "";
    const canNew = activeSpaces.length > 0;
    const run = async (fn, okMsg) => {
      setBusy(true);
      try {
        await fn();
        notify(okMsg);
        onChanged();
      } catch (e) {
        notify(e.message, "err");
      } finally {
        setBusy(false);
      }
    };
    const closeNew = () => {
      const back = dialog && dialog.back;
      if (back && !savedRef.current) setDialog({ type: "find", init: back });
      else setDialog(null);
      savedRef.current = false;
    };
    const ids = activeSpaces.map((s) => s.id);
    const sel = picked || new Set(ids);
    const toggleSpace = (id) => {
      const n = new Set(sel);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      setPicked(ids.every((x) => n.has(x)) ? null : n);
    };
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-cal" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm", onClick: () => setAnchor(today) }, "\u4ECA\u5929"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn bordered", onClick: () => stepMonth(-1), "aria-label": "\u4E0A\u500B\u6708" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "left" })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn bordered", onClick: () => stepMonth(1), "aria-label": "\u4E0B\u500B\u6708" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "right" })), /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, mStart.slice(0, 4), " \u5E74 ", +mStart.slice(5, 7), " \u6708"), loading && /* @__PURE__ */ react_default.createElement("span", { className: "tv-loading" }, "\u66F4\u65B0\u4E2D\u2026")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolright" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: () => setDialog({ type: "find" }), disabled: !canNew }, /* @__PURE__ */ react_default.createElement(Icon, { name: "search", size: 16 }), "\u5FEB\u901F\u627E\u5834\u5730"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", onClick: () => setDialog({ type: "new", date: newDate }), disabled: !canNew }, /* @__PURE__ */ react_default.createElement(Icon, { name: "plus", size: 16 }), "\u65B0\u589E\u9810\u7D04"))), err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err), !canNew && !loading && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn" }, "\u9084\u6C92\u6709\u5834\u5730\uFF0C\u8ACB\u5148\u5230\u300C\u5834\u5730\u8A2D\u5B9A\u300D\u65B0\u589E\u3002"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-calwrap" }, /* @__PURE__ */ react_default.createElement("aside", { className: "tv-side", "aria-label": "\u6708\u66C6\u8207\u5834\u5730" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-mini", role: "grid", "aria-label": `${mStart.slice(0, 4)}\u5E74${+mStart.slice(5, 7)}\u6708` }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-minihead" }, /* @__PURE__ */ react_default.createElement("b", null, mStart.slice(0, 4), "\u5E74", +mStart.slice(5, 7), "\u6708"), /* @__PURE__ */ react_default.createElement("span", null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn sm", onClick: () => stepMonth(-1), "aria-label": "\u4E0A\u500B\u6708" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "left", size: 16 })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn sm", onClick: () => stepMonth(1), "aria-label": "\u4E0B\u500B\u6708" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "right", size: 16 })))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-minigrid" }, WEEKDAYS.map((w) => /* @__PURE__ */ react_default.createElement("span", { key: w, className: "tv-miniw" }, w)), grid.map((d) => {
      const out = d.slice(0, 7) !== mStart.slice(0, 7);
      return /* @__PURE__ */ react_default.createElement(
        "button",
        {
          key: d,
          type: "button",
          className: `tv-minid${out ? " out" : ""}${d < today ? " pastday" : ""}${d === today ? " today" : ""}${d === anchor && d !== today ? " sel" : ""}${byDate.has(d) ? " has" : ""}`,
          "aria-label": `${+d.slice(5, 7)} \u6708 ${+d.slice(8, 10)} \u65E5${byDate.has(d) ? "\uFF0C\u6709\u9810\u7D04" : ""}`,
          onClick: () => pickDay(d)
        },
        +d.slice(8, 10)
      );
    }))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacelist", role: "group", "aria-label": "\u986F\u793A\u54EA\u4E9B\u5834\u5730" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacelisthead" }, /* @__PURE__ */ react_default.createElement("b", null, "\u5834\u5730"), /* @__PURE__ */ react_default.createElement("span", null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: () => setPicked(null) }, "\u5168\u90E8"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: () => setPicked(/* @__PURE__ */ new Set()) }, "\u53D6\u6D88"))), activeSpaces.map((s) => /* @__PURE__ */ react_default.createElement("label", { key: s.id, className: "tv-spaceitem", style: { "--c": colorOf(s.id) } }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: sel.has(s.id), onChange: () => toggleSpace(s.id) }), /* @__PURE__ */ react_default.createElement("i", { className: "tv-box" }), /* @__PURE__ */ react_default.createElement("span", null, s.name))))), /* @__PURE__ */ react_default.createElement("section", { className: "tv-agenda", ref: listRef, "aria-label": "\u9810\u7D04\u689D\u5217" }, dates.length === 0 && !loading && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "calendar", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u9019\u500B\u6708\u6C92\u6709\u7B26\u5408\u7684\u9810\u7D04")), dates.map((d) => /* @__PURE__ */ react_default.createElement("div", { key: d, className: `tv-agday${d === today ? " today" : ""}${d < today ? " past" : ""}`, "data-date": d }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-agdate" }, /* @__PURE__ */ react_default.createElement("b", null, +d.slice(8, 10)), /* @__PURE__ */ react_default.createElement("span", null, +d.slice(5, 7), " \u6708\uFF0C\u9031", WEEKDAYS[dow(d)])), /* @__PURE__ */ react_default.createElement("ul", { className: "tv-aglist" }, byDate.get(d).map((r) => /* @__PURE__ */ react_default.createElement("li", { key: r.id }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: `tv-agitem ${r.status}${r.overdue ? " overdue" : ""}${r.rule_id ? "" : " adhoc"}`, onClick: () => setDialog({ type: "detail", r }) }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot", style: { background: colorOf(r.space_id) } }), /* @__PURE__ */ react_default.createElement("span", { className: "tv-agtime" }, hm(r.start_time), " \u2013 ", hm(r.end_time)), /* @__PURE__ */ react_default.createElement("span", { className: "tv-agtitle" }, r.title), /* @__PURE__ */ react_default.createElement("span", { className: "tv-agspace" }, r.space_name), /* @__PURE__ */ react_default.createElement("span", { className: "tv-agfill" }), r.status === "pending" && /* @__PURE__ */ react_default.createElement("span", { className: `tv-tag ${r.overdue ? "overdue" : "pending"}` }, r.overdue ? "\u903E\u671F\u5F85\u6838\u51C6" : "\u5F85\u6838\u51C6"))))))))), dialog && dialog.type === "new" && /* @__PURE__ */ react_default.createElement(
      BookingDialog,
      {
        api,
        spaces,
        initialDate: dialog.date,
        initialSpaceId: dialog.spaceId || onlySpace,
        initialStart: dialog.start,
        initialDuration: dialog.duration,
        defaultContact: userName,
        onClose: closeNew,
        onSaved: () => {
          savedRef.current = true;
          onChanged();
        },
        notify
      }
    ), dialog && dialog.type === "find" && /* @__PURE__ */ react_default.createElement(
      QuickFind,
      {
        api,
        spaces,
        colorOf,
        initialDate: newDate,
        initial: dialog.init,
        onClose: () => setDialog(null),
        onPick: (p) => {
          savedRef.current = false;
          setDialog({ type: "new", date: p.date, spaceId: p.spaceId, start: p.start, duration: p.duration, back: p.back });
        }
      }
    ), dialog && dialog.type === "detail" && /* @__PURE__ */ react_default.createElement(
      BookingCard,
      {
        r: dialog.r,
        color: colorOf(dialog.r.space_id),
        busy,
        today,
        onClose: () => setDialog(null),
        goReview: () => {
          setDialog(null);
          goReview();
        },
        onApprove: () => run(async () => {
          await api.review([dialog.r.id], "approve");
          setDialog(null);
        }, "\u5DF2\u6838\u51C6"),
        onReject: () => setDialog({ type: "reject", r: dialog.r }),
        onEdit: () => setDialog({ type: "edit", r: dialog.r }),
        onDelete: () => setDialog({ type: "delete", r: dialog.r })
      }
    ), dialog && dialog.type === "edit" && /* @__PURE__ */ react_default.createElement(BookingDialog, { api, spaces, editing: dialog.r, onClose: () => setDialog(null), onSaved: onChanged, notify }), dialog && dialog.type === "reject" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u9000\u56DE\u7533\u8ACB",
        danger: true,
        compact: true,
        confirmLabel: "\u9000\u56DE",
        withNote: true,
        noteLabel: "\u539F\u56E0\uFF08\u9078\u586B\uFF09",
        onConfirm: async (note) => {
          await api.review([dialog.r.id], "reject", note);
          notify("\u5DF2\u9000\u56DE\uFF0C\u6642\u6BB5\u5DF2\u91CB\u51FA");
          onChanged();
        },
        onClose: () => setDialog(null)
      }
    ), dialog && dialog.type === "delete" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u522A\u9664\u9810\u7D04",
        danger: true,
        compact: true,
        confirmLabel: "\u522A\u9664",
        message: "",
        onConfirm: async () => {
          await api.deleteBooking(dialog.r.id);
          notify("\u5DF2\u522A\u9664");
          onChanged();
        },
        onClose: () => setDialog(null)
      }
    ));
  }
  function BookingCard({ r, color, busy, today, onClose, onApprove, onReject, onEdit, onDelete, goReview }) {
    const editable = live(r);
    const box = useRef(null);
    useEffect(() => {
      const prev = document.activeElement;
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKey);
      if (box.current) box.current.focus();
      return () => {
        document.removeEventListener("keydown", onKey);
        if (prev && prev.focus) prev.focus();
      };
    }, []);
    const d = r.booking_date;
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-overlay", role: "presentation" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-dialog tv-bcard", role: "dialog", "aria-modal": "true", "aria-label": r.title, tabIndex: -1, ref: box }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-cardtools" }, editable && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn", title: "\u7DE8\u8F2F", "aria-label": "\u7DE8\u8F2F", onClick: onEdit, disabled: busy }, /* @__PURE__ */ react_default.createElement(Icon, { name: "edit" })), editable && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn", title: "\u522A\u9664", "aria-label": "\u522A\u9664", onClick: onDelete, disabled: busy }, /* @__PURE__ */ react_default.createElement(Icon, { name: "trash" })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-icon-btn", title: "\u95DC\u9589", "aria-label": "\u95DC\u9589", onClick: onClose }, /* @__PURE__ */ react_default.createElement(Icon, { name: "x" }))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-dbody" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-cardtitle" }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-box solid", style: { "--c": color } }), /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement("h3", null, r.title), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cardwhen" }, +d.slice(5, 7), " \u6708 ", +d.slice(8, 10), " \u65E5\uFF08", WEEKDAYS[dow(d)], "\uFF09\u30FB ", hm(r.start_time), " \u2013 ", hm(r.end_time)))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-detailhead" }, /* @__PURE__ */ react_default.createElement(StatusTag, { status: r.status }), r.overdue && /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag overdue" }, "\u903E\u671F\u5F85\u6838\u51C6"), r.rule_id && /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag plain" }, "\u5B9A\u671F")), /* @__PURE__ */ react_default.createElement("dl", { className: "tv-bkdetail open" }, /* @__PURE__ */ react_default.createElement("dt", null, "\u5834\u5730"), /* @__PURE__ */ react_default.createElement("dd", null, r.space_name), r.requester_name && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u4EBA"), /* @__PURE__ */ react_default.createElement("dd", null, r.requester_name)), r.org_unit && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u501F\u7528\u55AE\u4F4D"), /* @__PURE__ */ react_default.createElement("dd", null, r.org_unit)), (r.contact_name || r.contact_phone) && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u806F\u7D61\u4EBA"), /* @__PURE__ */ react_default.createElement("dd", null, r.contact_name, r.contact_phone && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, " ", /* @__PURE__ */ react_default.createElement("a", { href: `tel:${r.contact_phone}` }, r.contact_phone)))), r.note && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u5099\u8A3B"), /* @__PURE__ */ react_default.createElement("dd", { className: "tv-pre" }, r.note)), r.review_note && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u5BE9\u67E5\u8AAA\u660E"), /* @__PURE__ */ react_default.createElement("dd", { className: "tv-pre" }, r.review_note)), /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u6642\u9593"), /* @__PURE__ */ react_default.createElement("dd", null, fmtDateTime(r.created_at))), r.status === "pending" && r.series_id && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: goReview }, "\u9019\u662F\u591A\u65E5\u7533\u8ACB\uFF0C\u5230\u5BE9\u67E5\u9801\u6574\u6279\u8655\u7406"), (r.status === "rejected" || r.status === "cancelled") && /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u6642\u6BB5\u5DF2\u91CB\u51FA")), r.status === "pending" && /* @__PURE__ */ react_default.createElement("div", { className: "tv-dfoot" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", onClick: onApprove, disabled: busy }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 14 }), "\u6838\u51C6"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn danger", onClick: onReject, disabled: busy }, "\u9000\u56DE"))));
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
  function ReviewTab({ api, pending, loading, error, colorOf, onChanged, notify, rev }) {
    const [cat, setCat] = useState("pending");
    const [rejected, setRejected] = useState([]);
    const [q, setQ] = useState("");
    const [onlyOverdue, setOnlyOverdue] = useState(false);
    const [picked, setPicked] = useState(() => /* @__PURE__ */ new Set());
    const [dialog, setDialog] = useState(null);
    const [busyKey, setBusyKey] = useState(null);
    useEffect(() => {
      let alive = true;
      const t = todayStr();
      api.listBookings(addDays(t, -90), addDays(t, 366)).then((r) => {
        if (alive) setRejected(r.filter((x) => x.status === "rejected"));
      }).catch(() => {
      });
      return () => {
        alive = false;
      };
    }, [api, rev]);
    const rejGroups = useMemo(() => groupPending(rejected), [rejected]);
    const groups = useMemo(() => groupPending(pending), [pending]);
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const match = (g) => {
      if (!words.length) return true;
      const hay = g.items.map((i) => `${i.booking_date} ${mdLabel(i.booking_date)} ${fullLabel(i.booking_date)}`).join(" ") + ` ${g.first.title} ${g.first.space_name} ${g.first.requester_name || ""} ${g.first.contact_name || ""} ${g.first.contact_phone || ""} ${g.first.org_unit || ""} ${g.first.note || ""} ${g.first.review_note || ""} ${hm(g.first.start_time)} ${hm(g.first.end_time)}`;
      const h = hay.toLowerCase();
      return words.every((w) => h.includes(w));
    };
    const rejShown = rejGroups.filter(match);
    const shown = (onlyOverdue ? groups.filter((g) => g.overdue) : groups).filter(match);
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
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-review" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, "\u5BE9\u67E5\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, cat === "rejected" ? rejGroups.length === 0 ? "" : `${rejGroups.length} \u4EF6\u7533\u8ACB\uFF0C\u5171 ${rejected.length} \u5834` : groups.length === 0 ? "" : `${groups.length} \u4EF6\u7533\u8ACB\uFF0C\u5171 ${pending.length} \u5834`)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolright" }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-search" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "search", size: 16 }), /* @__PURE__ */ react_default.createElement("input", { type: "search", value: q, onChange: (e) => setQ(e.target.value), placeholder: "\u641C\u5C0B", "aria-label": "\u641C\u5C0B\u7533\u8ACB" })), cat === "pending" && overdueN > 0 && /* @__PURE__ */ react_default.createElement("button", { type: "button", className: `tv-pill red${onlyOverdue ? " on" : ""}`, "aria-pressed": onlyOverdue, onClick: () => setOnlyOverdue(!onlyOverdue) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 14 }), "\u53EA\u770B\u903E\u671F\uFF08", overdueN, "\uFF09"))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cats", role: "tablist", "aria-label": "\u7533\u8ACB\u5206\u985E" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", role: "tab", "aria-selected": cat === "pending", className: `tv-cat${cat === "pending" ? " on" : ""}`, onClick: () => setCat("pending") }, "\u5F85\u5BE9\u67E5", groups.length > 0 ? `\uFF08${groups.length}\uFF09` : ""), /* @__PURE__ */ react_default.createElement("button", { type: "button", role: "tab", "aria-selected": cat === "rejected", className: `tv-cat${cat === "rejected" ? " on" : ""}`, onClick: () => setCat("rejected") }, "\u5DF2\u9000\u56DE", rejGroups.length > 0 ? `\uFF08${rejGroups.length}\uFF09` : "")), cat === "rejected" && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, rejShown.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: words.length ? "search" : "check", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, words.length ? "\u627E\u4E0D\u5230\u7B26\u5408\u7684\u7533\u8ACB" : "\u6C92\u6709\u5DF2\u9000\u56DE\u7684\u7533\u8ACB")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cards" }, rejShown.map((g) => {
      const f = g.first, multi = g.items.length > 1;
      return /* @__PURE__ */ react_default.createElement("article", { key: g.key, className: "tv-card tv-rv rejected", style: { "--c": colorOf(f.space_id) } }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvbody" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvtop" }, /* @__PURE__ */ react_default.createElement("h3", null, f.title), /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag rejected" }, "\u5DF2\u9000\u56DE")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvwhen" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-rvplace" }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot", style: { background: colorOf(f.space_id) } }), f.space_name), /* @__PURE__ */ react_default.createElement("span", null, hm(f.start_time), "\u2013", hm(f.end_time)), !multi && /* @__PURE__ */ react_default.createElement("span", null, fullLabel(f.booking_date))), multi && /* @__PURE__ */ react_default.createElement("div", { className: "tv-datechips" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u5171 ", g.items.length, " \u5834\uFF1A"), g.items.slice(0, 10).map((i) => /* @__PURE__ */ react_default.createElement("span", { key: i.id, className: "tv-dchip plain" }, mdLabel(i.booking_date), "\uFF08", WEEKDAYS[dow(i.booking_date)], "\uFF09")), g.items.length > 10 && /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u2026\u9084\u6709 ", g.items.length - 10, " \u5834")), /* @__PURE__ */ react_default.createElement("dl", { className: "tv-bkdetail inline" }, f.requester_name && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u4EBA"), /* @__PURE__ */ react_default.createElement("dd", null, f.requester_name)), /* @__PURE__ */ react_default.createElement("dt", null, "\u9000\u56DE\u539F\u56E0"), /* @__PURE__ */ react_default.createElement("dd", { className: "tv-pre" }, f.review_note || "\uFF08\u6C92\u6709\u586B\u5BEB\uFF09"))));
    }))), cat === "pending" && overdueN > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "status" }, "\u6709 ", overdueN, " \u4EF6\u7533\u8ACB\u5DF2\u7B49\u5F85\u8D85\u904E ", OVERDUE_DAYS, " \u5929\u3002\u7533\u8ACB\u4EBA\u9084\u5728\u7B49\u56DE\u8986\uFF0C\u8ACB\u76E1\u5FEB\u6838\u51C6\uFF0C\u6216\u9000\u56DE\u91CB\u51FA\u6642\u6BB5\u3002"), cat === "pending" && shown.length > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-bulk" }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-check" }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: allPicked, onChange: toggleAll }), "\u5168\u9078"), pickedGroups.length > 0 && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u5DF2\u9078 ", pickedGroups.length, " \u4EF6"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm primary", disabled: busyKey === "*", onClick: () => approve(pickedGroups) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 14 }), "\u6838\u51C6"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", disabled: busyKey === "*", onClick: () => setDialog({ groups: pickedGroups }) }, "\u9000\u56DE"))), cat === "pending" && loading && pending.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, "\u8B80\u53D6\u4E2D\u2026"), cat === "pending" && !loading && groups.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u6C92\u6709\u5F85\u5BE9\u67E5\u7684\u7533\u8ACB")), cat === "pending" && groups.length > 0 && shown.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "search", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u627E\u4E0D\u5230\u7B26\u5408\u7684\u7533\u8ACB")), cat === "pending" && /* @__PURE__ */ react_default.createElement("div", { className: "tv-cards" }, shown.map((g) => {
      const f = g.first;
      const wait = daysSince(g.created);
      const multi = g.items.length > 1;
      return /* @__PURE__ */ react_default.createElement("article", { key: g.key, className: `tv-card tv-rv${g.overdue ? " overdue" : ""}`, style: { "--c": colorOf(f.space_id) } }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-rvpick" }, /* @__PURE__ */ react_default.createElement("input", { type: "checkbox", checked: picked.has(g.key), onChange: () => togglePick(g.key), "aria-label": `\u9078\u53D6 ${f.title}` })), /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvbody" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvtop" }, /* @__PURE__ */ react_default.createElement("h3", null, f.title), g.overdue ? /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag overdue" }, "\u5DF2\u7B49\u5F85 ", wait, " \u5929") : /* @__PURE__ */ react_default.createElement("span", { className: "tv-tag pending" }, wait === 0 ? "\u4ECA\u5929\u7533\u8ACB" : `\u5DF2\u7B49\u5F85 ${wait} \u5929`)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvwhen" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-rvplace" }, /* @__PURE__ */ react_default.createElement("i", { className: "tv-dot", style: { background: colorOf(f.space_id) } }), f.space_name), /* @__PURE__ */ react_default.createElement("span", null, hm(f.start_time), "\u2013", hm(f.end_time)), !multi && /* @__PURE__ */ react_default.createElement("span", null, fullLabel(f.booking_date))), multi && /* @__PURE__ */ react_default.createElement("div", { className: "tv-datechips", "aria-label": "\u7533\u8ACB\u7684\u65E5\u671F" }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u5171 ", g.items.length, " \u5834\uFF1A"), g.items.slice(0, 10).map((i) => /* @__PURE__ */ react_default.createElement("span", { key: i.id, className: "tv-dchip plain" }, mdLabel(i.booking_date), "\uFF08", WEEKDAYS[dow(i.booking_date)], "\uFF09")), g.items.length > 10 && /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u2026\u9084\u6709 ", g.items.length - 10, " \u5834")), /* @__PURE__ */ react_default.createElement("dl", { className: "tv-bkdetail inline" }, f.requester_name && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u4EBA"), /* @__PURE__ */ react_default.createElement("dd", null, f.requester_name)), f.org_unit && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u501F\u7528\u55AE\u4F4D"), /* @__PURE__ */ react_default.createElement("dd", null, f.org_unit)), (f.contact_name || f.contact_phone) && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u806F\u7D61\u4EBA"), /* @__PURE__ */ react_default.createElement("dd", null, f.contact_name, " ", f.contact_phone && /* @__PURE__ */ react_default.createElement("a", { href: `tel:${f.contact_phone}` }, f.contact_phone))), f.note && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("dt", null, "\u5099\u8A3B"), /* @__PURE__ */ react_default.createElement("dd", { className: "tv-pre" }, f.note)), /* @__PURE__ */ react_default.createElement("dt", null, "\u7533\u8ACB\u6642\u9593"), /* @__PURE__ */ react_default.createElement("dd", null, fmtDateTime(g.created))), /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkfoot" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm primary", disabled: busyKey === g.key, onClick: () => approve([g]) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "check", size: 14 }), "\u6838\u51C6", multi ? `\uFF08${g.items.length} \u5834\uFF09` : ""), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", disabled: busyKey === g.key, onClick: () => setDialog({ groups: [g] }) }, "\u9000\u56DE"))));
    })), dialog && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u9000\u56DE\u7533\u8ACB",
        danger: true,
        compact: true,
        confirmLabel: "\u9000\u56DE",
        withNote: true,
        noteLabel: "\u539F\u56E0\uFF08\u9078\u586B\uFF09",
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
    const [q, setQ] = useState("");
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
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const shownRules = words.length ? rules.filter((r) => {
      const swaps = Object.values(r.swap_nth || {}).map((id) => spaceName[id] || "").join(" ");
      const hay = `${r.title} ${spaceName[r.space_id] || ""} ${swaps} \u6BCF\u9031${weekdaysLabel(r.week_days)} ${hm(r.start_time)} ${hm(r.end_time)} ${r.is_active ? "\u555F\u7528" : "\u505C\u7528"}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    }) : rules;
    const reload = () => {
      setLocal((n) => n + 1);
      onChanged();
    };
    const toggleActive = async (r, on) => {
      try {
        await api.saveRule({ ...fromRow(r), is_active: on });
        notify(on ? "\u5DF2\u555F\u7528\u30FB\u9810\u7D04\u5DF2\u5EFA\u7ACB" : "\u5DF2\u505C\u7528\uFF0C\u9810\u7D04\u5DF2\u79FB\u9664");
        reload();
      } catch (e) {
        notify(e.message, "err");
      }
    };
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-rules" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, "\u5B9A\u671F\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, "\u5171 ", rules.length, " \u500B\uFF0C\u555F\u7528\u4E2D ", rules.filter((r) => r.is_active).length, " \u500B")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolright" }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-search" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "search", size: 16 }), /* @__PURE__ */ react_default.createElement("input", { type: "search", value: q, onChange: (e) => setQ(e.target.value), placeholder: "\u641C\u5C0B", "aria-label": "\u641C\u5C0B\u5B9A\u671F\u9810\u7D04" })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", disabled: !spaces.some((s) => s.is_active), onClick: () => setDialog({ type: "edit", rule: blankRule(spaces) }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "plus", size: 16 }), "\u65B0\u589E\u5B9A\u671F\u9810\u7D04"))), err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err), loading && rules.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, "\u8B80\u53D6\u4E2D\u2026"), !loading && !err && rules.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "history", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u5C1A\u672A\u5EFA\u7ACB\u5B9A\u671F\u9810\u7D04")), rules.length > 0 && shownRules.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "search", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u627E\u4E0D\u5230\u7B26\u5408\u7684\u5B9A\u671F\u9810\u7D04")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cards" }, shownRules.map((r) => {
      const conflicts = r.last_conflict_dates || [];
      return /* @__PURE__ */ react_default.createElement("article", { key: r.id, className: `tv-card tv-rule${r.is_active ? "" : " off"}` }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-rulehead" }, /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement("h3", null, r.title), /* @__PURE__ */ react_default.createElement("div", { className: "tv-rvwhen" }, /* @__PURE__ */ react_default.createElement("span", null, "\u6BCF\u9031", weekdaysLabel(r.week_days), "\u3000", hm(r.start_time), "\u2013", hm(r.end_time)), /* @__PURE__ */ react_default.createElement("span", null, spaceName[r.space_id] || "\uFF08\u5834\u5730\u5DF2\u522A\u9664\uFF09"))), /* @__PURE__ */ react_default.createElement(Switch, { on: r.is_active, label: r.is_active ? "\u505C\u7528" : "\u555F\u7528", onChange: (on) => on ? toggleActive(r, true) : setDialog({ type: "pause", rule: r }) })), /* @__PURE__ */ react_default.createElement("div", { className: "tv-tags" }, (r.skip_nth || []).map((n) => /* @__PURE__ */ react_default.createElement("span", { key: `s${n}`, className: "tv-tag overdue-soft" }, "\u7B2C ", n, " \u9031\u66AB\u505C")), Object.keys(r.swap_nth || {}).sort().map((n) => /* @__PURE__ */ react_default.createElement("span", { key: `w${n}`, className: "tv-tag info" }, "\u7B2C ", n, " \u9031\u4F7F\u7528", spaceName[r.swap_nth[n]] || "\u5176\u4ED6\u5834\u5730"))), conflicts.length > 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note warn", role: "status" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 14 }), " \u6709 ", conflicts.length, " \u5929\u56E0\u70BA\u5834\u5730\u5DF2\u88AB\u5360\u7528\uFF0C\u6C92\u6709\u6392\u9032\u53BB\uFF1A", conflicts.slice(0, 8).map(mdLabel).join("\u3001"), conflicts.length > 8 ? "\u2026" : "", /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u8ACB\u5230\u65E5\u66C6\u78BA\u8A8D\uFF0C\u5FC5\u8981\u6642\u8ABF\u6574\u90A3\u5929\u7684\u9810\u7D04\u6216\u9019\u500B\u5B9A\u671F\u9810\u7D04\u3002")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u671F\u9593\uFF1A", r.start_date, r.until_date ? ` \uFF5E ${r.until_date}` : " \u8D77", r.last_generated_to && /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, "\u3000\u5DF2\u6392\u5230 ", r.last_generated_to)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-bkfoot" }, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm", onClick: () => setDialog({ type: "edit", rule: fromRow(r) }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "edit", size: 14 }), "\u7DE8\u8F2F"), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn sm danger", onClick: () => setDialog({ type: "delete", rule: r }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "trash", size: 14 }), "\u522A\u9664")));
    })), dialog && dialog.type === "edit" && /* @__PURE__ */ react_default.createElement(RuleDialog, { api, spaces, initial: dialog.rule, onClose: () => setDialog(null), onSaved: reload, notify }), dialog && dialog.type === "pause" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u505C\u7528\u5B9A\u671F\u9810\u7D04",
        danger: true,
        compact: true,
        confirmLabel: "\u505C\u7528",
        message: "\u522A\u9664\u5C1A\u672A\u958B\u59CB\u7684\u6240\u6709\u9810\u7D04",
        onConfirm: async () => {
          await toggleActive(dialog.rule, false);
        },
        onClose: () => setDialog(null)
      }
    ), dialog && dialog.type === "delete" && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u522A\u9664\u5B9A\u671F\u9810\u7D04",
        danger: true,
        compact: true,
        confirmLabel: "\u522A\u9664",
        message: "\u522A\u9664\u5C1A\u672A\u958B\u59CB\u7684\u6240\u6709\u9810\u7D04",
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
        footerClass: "split",
        footer: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u53D6\u6D88"), /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: "tv-btn primary", disabled: busy }, "\u5132\u5B58"))
      },
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u6D3B\u52D5\u540D\u7A31", required: true, error: show("title") }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.title, onChange: (e) => set("title", e.target.value), maxLength: 200, placeholder: "\u4F8B\u5982\uFF1A\u4E3B\u65E5\u5D07\u62DC\u3001\u8A69\u73ED\u7DF4\u7FD2", "data-autofocus": true })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5834\u5730", required: true, error: show("space") }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: f.space_id, onChange: (e) => set("space_id", e.target.value) }, spaces.map((s) => /* @__PURE__ */ react_default.createElement("option", { key: s.id, value: s.id, disabled: !s.is_active && s.id !== initial.space_id }, s.name, s.is_active ? "" : "\uFF08\u5DF2\u505C\u7528\uFF09")))),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5728\u9019\u5E7E\u5929\u91CD\u8907", required: true, error: show("days") }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-days", role: "group", "aria-label": "\u661F\u671F" }, WEEKDAYS.map((w, d) => /* @__PURE__ */ react_default.createElement("button", { key: d, type: "button", className: "tv-daybtn", "aria-pressed": f.week_days.includes(d), onClick: () => toggleDay(d) }, w)))),
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-grid2" }, /* @__PURE__ */ react_default.createElement(Field, { label: "\u958B\u59CB", required: true }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: f.start_time, onChange: (e) => set("start_time", e.target.value), "aria-label": "\u958B\u59CB\u6642\u9593" }, TIME_OPTIONS.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t)))), /* @__PURE__ */ react_default.createElement(Field, { label: "\u7D50\u675F", required: true }, /* @__PURE__ */ react_default.createElement("select", { className: "tv-select", value: f.end_time, onChange: (e) => set("end_time", e.target.value), "aria-label": "\u7D50\u675F\u6642\u9593" }, TIME_OPTIONS.map((t) => /* @__PURE__ */ react_default.createElement("option", { key: t, value: t }, t))))),
      show("time") && /* @__PURE__ */ react_default.createElement("div", { className: "tv-err", role: "alert", style: { marginTop: -8, marginBottom: 12 } }, show("time")),
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-switchrow" }, /* @__PURE__ */ react_default.createElement(Switch, { on: f.is_active, onChange: (v) => set("is_active", v), label: "\u555F\u7528\uFF08\u81EA\u52D5\u7E8C\u6392\uFF09" }), /* @__PURE__ */ react_default.createElement("span", { className: "tv-switchlabel" }, "\u555F\u7528\uFF08\u81EA\u52D5\u7E8C\u6392\uFF09")),
      /* @__PURE__ */ react_default.createElement(Collapse, { title: "\u4F8B\u5916\u5B89\u6392", hint: "\u66AB\u505C\u3001\u63DB\u5834\u5730", defaultOpen: f.skip_nth.length > 0 || Object.keys(f.swap_nth).length > 0 }, NTH2.map((n) => /* @__PURE__ */ react_default.createElement("div", { className: "tv-weekrow", key: n }, /* @__PURE__ */ react_default.createElement("span", { className: "tv-weeklabel" }, "\u7B2C ", n, " \u9031"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-seg", role: "group", "aria-label": `\u7B2C ${n} \u9031` }, [["normal", "\u6B63\u5E38"], ["skip", "\u66AB\u505C"], ["swap", "\u63DB\u5834\u5730"]].map(([m, label]) => /* @__PURE__ */ react_default.createElement("button", { key: m, type: "button", "aria-pressed": modeOf(n) === m, className: m === "skip" ? "skip" : "", onClick: () => setMode(n, m) }, label))), modeOf(n) === "swap" && /* @__PURE__ */ react_default.createElement("select", { className: "tv-select slim", value: f.swap_nth[n] || "", onChange: (e) => setSwapSpace(n, e.target.value), "aria-label": `\u7B2C ${n} \u9031\u4F7F\u7528\u7684\u5834\u5730` }, spaces.map((s) => /* @__PURE__ */ react_default.createElement("option", { key: s.id, value: s.id }, s.name)))))),
      /* @__PURE__ */ react_default.createElement(Collapse, { title: "\u671F\u9593", hint: "\u4E0D\u586B\u65E5\u671F\uFF1D\u5F9E\u4ECA\u5929\u8D77\u6301\u7E8C\u6392\u73ED", defaultOpen: !!f.start_date || !!f.until_date }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-grid2" }, /* @__PURE__ */ react_default.createElement(Field, { label: "\u958B\u59CB\u65E5\u671F" }, /* @__PURE__ */ react_default.createElement("input", { type: "date", className: "tv-input", value: f.start_date, onChange: (e) => set("start_date", e.target.value) })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u7D50\u675F\u65E5\u671F", error: show("until") }, /* @__PURE__ */ react_default.createElement("input", { type: "date", className: "tv-input", value: f.until_date, min: f.start_date || void 0, onChange: (e) => set("until_date", e.target.value) })))),
      /* @__PURE__ */ react_default.createElement(Collapse, { title: "\u806F\u7D61\u8CC7\u8A0A\u8207\u5099\u8A3B" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-grid2" }, /* @__PURE__ */ react_default.createElement(Field, { label: "\u501F\u7528\u55AE\u4F4D" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.org_unit, onChange: (e) => set("org_unit", e.target.value), maxLength: 100 })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u4EBA" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.contact_name, onChange: (e) => set("contact_name", e.target.value), maxLength: 50 }))), /* @__PURE__ */ react_default.createElement(Field, { label: "\u806F\u7D61\u96FB\u8A71" }, /* @__PURE__ */ react_default.createElement("input", { type: "tel", inputMode: "tel", className: "tv-input", value: f.contact_phone, onChange: (e) => set("contact_phone", e.target.value), maxLength: 30 })), /* @__PURE__ */ react_default.createElement(Field, { label: "\u5099\u8A3B" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: f.note, onChange: (e) => set("note", e.target.value), maxLength: 500 }))),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }

  // src/venue/SpacesTab.jsx
  function SpacesTab({ api, spaces, colorOf, onSpacesChanged, notify }) {
    const [dialog, setDialog] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [busy, setBusy] = useState(false);
    const [q, setQ] = useState("");
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const shown = words.length ? spaces.filter((s) => {
      const hay = `${s.name} ${s.note || ""} ${s.is_active ? "\u958B\u653E" : "\u505C\u7528"}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    }) : spaces;
    const save = async (s) => {
      await api.saveSpace(s);
      await onSpacesChanged();
    };
    const toggle = async (s) => {
      setBusy(true);
      try {
        await save({ ...s, is_active: !s.is_active });
        notify(s.is_active ? "\u5DF2\u505C\u7528" : "\u5DF2\u958B\u653E");
      } catch (e) {
        notify(e.message, "err");
      } finally {
        setBusy(false);
      }
    };
    return /* @__PURE__ */ react_default.createElement("div", { className: "tv-spaces" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolbar" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-navs" }, /* @__PURE__ */ react_default.createElement("h2", { className: "tv-monthtitle" }, "\u5834\u5730\u8A2D\u5B9A"), /* @__PURE__ */ react_default.createElement("span", { className: "tv-sub" }, words.length ? `\u7B26\u5408 ${shown.length} \u500B\uFF0C\u5171 ${spaces.length} \u500B\u5834\u5730` : `${spaces.length} \u500B\u5834\u5730`)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-toolright" }, /* @__PURE__ */ react_default.createElement("label", { className: "tv-search" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "search", size: 16 }), /* @__PURE__ */ react_default.createElement("input", { type: "search", value: q, onChange: (e) => setQ(e.target.value), placeholder: "\u641C\u5C0B", "aria-label": "\u641C\u5C0B\u5834\u5730" })), /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn primary", onClick: () => setDialog({ space: { id: null, name: "", note: "", is_active: true, public_visible: true, sort_order: (spaces.length + 1) * 10 } }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "plus", size: 16 }), "\u65B0\u589E\u5834\u5730"))), spaces.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "pin", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u5C1A\u672A\u5EFA\u7ACB\u5834\u5730"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u5148\u65B0\u589E\u5834\u5730\uFF08\u4F8B\u5982\uFF1A\u5927\u5802\u3001\u526F\u5802\u3001\u4E8C\u6A13\u6559\u5BA4\uFF09\uFF0C\u624D\u80FD\u9810\u7D04\u8207\u6392\u5B9A\u671F\u9810\u7D04\u3002")), spaces.length > 0 && shown.length === 0 && /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "search", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u627E\u4E0D\u5230\u7B26\u5408\u7684\u5834\u5730")), /* @__PURE__ */ react_default.createElement("div", { className: "tv-cards" }, shown.map((s) => /* @__PURE__ */ react_default.createElement("article", { key: s.id, className: `tv-card tv-space${s.is_active ? "" : " off"}`, style: { "--space-color": colorOf(s.id) } }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacerow" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacemain" }, /* @__PURE__ */ react_default.createElement("h3", null, s.name)), /* @__PURE__ */ react_default.createElement("div", { className: "tv-spacectl2" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-btngroup", role: "group", "aria-label": `${s.name} \u64CD\u4F5C` }, /* @__PURE__ */ react_default.createElement("button", { type: "button", disabled: busy, title: "\u7DE8\u8F2F", "aria-label": `\u7DE8\u8F2F ${s.name}`, onClick: () => setDialog({ space: s }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "edit", size: 18 })), /* @__PURE__ */ react_default.createElement("button", { type: "button", disabled: busy, title: "\u522A\u9664", "aria-label": `\u522A\u9664 ${s.name}`, onClick: () => setConfirm({ space: s }) }, /* @__PURE__ */ react_default.createElement(Icon, { name: "trash", size: 18 }))), /* @__PURE__ */ react_default.createElement("span", { title: s.is_active ? "\u958B\u653E" : "\u505C\u7528" }, /* @__PURE__ */ react_default.createElement(Switch, { on: s.is_active, disabled: busy, label: `${s.name} \u958B\u653E\uFF0F\u505C\u7528`, onChange: () => toggle(s) })))), s.note && /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub tv-spacenote" }, s.note)))), dialog && /* @__PURE__ */ react_default.createElement(SpaceDialog, { space: dialog.space, onSave: save, onClose: () => setDialog(null), notify }), confirm && /* @__PURE__ */ react_default.createElement(
      ConfirmDialog,
      {
        title: "\u522A\u9664\u5834\u5730",
        danger: true,
        compact: true,
        confirmLabel: "\u522A\u9664",
        message: "",
        onConfirm: async () => {
          await api.deleteSpace(confirm.space.id);
          await onSpacesChanged();
          notify("\u5DF2\u522A\u9664\u5834\u5730");
        },
        onClose: () => setConfirm(null)
      }
    ));
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
        footerClass: "split",
        footer: /* @__PURE__ */ react_default.createElement(react_default.Fragment, null, /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-btn", onClick: onClose, disabled: busy }, "\u53D6\u6D88"), /* @__PURE__ */ react_default.createElement("button", { type: "submit", className: "tv-btn primary", disabled: busy }, busy ? "\u5132\u5B58\u4E2D\u2026" : "\u5132\u5B58"))
      },
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5834\u5730\u540D\u7A31", required: true, error: tried ? nameErr : "" }, /* @__PURE__ */ react_default.createElement("input", { className: "tv-input", value: f.name, onChange: (e) => setF({ ...f, name: e.target.value }), maxLength: 60, placeholder: "\u4F8B\u5982\uFF1A\u5927\u5802", "data-autofocus": true })),
      /* @__PURE__ */ react_default.createElement(Field, { label: "\u5099\u8A3B" }, /* @__PURE__ */ react_default.createElement("textarea", { className: "tv-textarea", value: f.note, onChange: (e) => setF({ ...f, note: e.target.value }), maxLength: 300 })),
      /* @__PURE__ */ react_default.createElement("div", { className: "tv-switchrow" }, /* @__PURE__ */ react_default.createElement(Switch, { on: f.is_active, onChange: (v) => setF({ ...f, is_active: v }), label: "\u958B\u653E" }), /* @__PURE__ */ react_default.createElement("span", { className: "tv-switchlabel" }, f.is_active ? "\u958B\u653E" : "\u505C\u7528")),
      err && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, err)
    );
  }

  // src/venue/VenueApp.jsx
  var TAB_IDS = ["calendar", "review", "rules", "spaces"];
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
    const pendingCount = new Set(pending.map((p) => p.series_id || p.id)).size;
    const overdueCount = new Set(pending.filter((p) => p.overdue).map((p) => p.series_id || p.id)).size;
    useEffect(() => {
      window.dispatchEvent(new CustomEvent("tbc-venue-badge", { detail: { n: pendingCount, red: overdueCount > 0 } }));
    }, [pendingCount, overdueCount]);
    if (!allowed) {
      return /* @__PURE__ */ react_default.createElement("div", { className: "tbc-venue" }, /* @__PURE__ */ react_default.createElement("div", { className: "tv-empty", style: { margin: "auto" } }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 28 }), /* @__PURE__ */ react_default.createElement("div", null, "\u6B0A\u9650\u4E0D\u8DB3"), /* @__PURE__ */ react_default.createElement("div", { className: "tv-sub" }, "\u5834\u5730\u9810\u7D04\u5F8C\u53F0\u9650\u7267\u8005\u3001\u884C\u653F\u8207\u7BA1\u7406\u54E1\u4F7F\u7528\u3002")));
    }
    const overdueN = new Set(pending.filter((p) => p.overdue).map((p) => p.series_id || p.id)).size;
    const loadErr = spacesErr;
    return /* @__PURE__ */ react_default.createElement("div", { className: "tbc-venue" }, /* @__PURE__ */ react_default.createElement("h1", { className: "tv-sr" }, "\u5834\u5730\u9810\u7D04"), /* @__PURE__ */ react_default.createElement("main", { className: "tv-body" }, loadErr && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad", role: "alert" }, loadErr), overdueN > 0 && tab !== "review" && /* @__PURE__ */ react_default.createElement("div", { className: "tv-note bad tv-banner", role: "status" }, /* @__PURE__ */ react_default.createElement(Icon, { name: "alert", size: 16 }), "\u6709 ", overdueN, " \u4EF6\u7533\u8ACB\u5DF2\u7B49\u5F85\u8D85\u904E ", OVERDUE_DAYS, " \u5929\u6C92\u6709\u8655\u7406\u3002", /* @__PURE__ */ react_default.createElement("button", { type: "button", className: "tv-link", onClick: () => go("review") }, "\u524D\u5F80\u5BE9\u67E5")), tab === "calendar" && /* @__PURE__ */ react_default.createElement(CalendarTab, { api, spaces, colorOf, rev, onChanged, notify, goReview: () => go("review"), userName: identity && identity.name || "" }), tab === "review" && /* @__PURE__ */ react_default.createElement(ReviewTab, { api, pending, loading: pendingLoading, error: pendingErr, colorOf, onChanged, notify, rev }), tab === "rules" && /* @__PURE__ */ react_default.createElement(RulesTab, { api, spaces, rev, onChanged, notify }), tab === "spaces" && /* @__PURE__ */ react_default.createElement(SpacesTab, { api, spaces, colorOf, onSpacesChanged: loadSpaces, notify })), toast && /* @__PURE__ */ react_default.createElement("div", { className: `tv-toast ${toast.kind}`, role: "status" }, toast.msg));
  }

  // src/styles/venue.css.js
  var venue_css_default = '.tbc-venue,.tbc-venue *,.tbc-venue *:before,.tbc-venue *:after{box-sizing:border-box}.tbc-venue{--tv-primary: #0070d5;--tv-primary-h: #005cb0;--tv-tint: #eef6fd;--tv-ink-blue: #004a8f;--tv-line: #e8e8e8;--tv-line2: #d9d9d9;--tv-ink: #262626;--tv-sub: #595959;--tv-mute: #8c8c8c;--tv-bg: #f7f9fa;--tv-red: #d4101b;--tv-red-bg: #fdecee;--tv-red-line: #f3c3c7;--tv-amber: #8a5300;--tv-amber-bg: #fff4df;--tv-amber-line: #f1d49b;--tv-green: #1f6f43;--tv-green-bg: #e6f4ec;height:100%;display:flex;flex-direction:column;background:var(--tv-bg);color:var(--tv-ink);font-size:14px;line-height:1.5;letter-spacing:0}.tbc-venue h1,.tbc-venue h2,.tbc-venue h3,.tbc-venue p,.tbc-venue dl,.tbc-venue dd{margin:0}.tbc-venue button{cursor:pointer;font:inherit;color:inherit;background:none;border:0;padding:0}.tbc-venue button:disabled{cursor:not-allowed}.tbc-venue :focus-visible{outline:2px solid var(--tv-primary);outline-offset:2px}.tbc-venue .tv-icon{flex:none}.tbc-venue .tv-pre{white-space:pre-wrap;word-break:break-word}.tbc-venue .tv-sub{color:var(--tv-sub);font-size:13px}.tbc-venue a{color:var(--tv-primary);text-decoration:none}.tbc-venue a:hover{text-decoration:underline}.tbc-venue .tv-head{display:flex;align-items:center;flex-wrap:wrap;gap:12px 24px;background:#fff;border-bottom:1px solid var(--tv-line);padding:14px 24px;flex:none}.tbc-venue .tv-title{display:flex;align-items:center;gap:8px;font-size:22px;font-weight:600}.tbc-venue .tv-title .tv-icon{color:var(--tv-primary)}.tbc-venue .tv-tabs{display:flex;gap:4px;margin-left:auto;overflow-x:auto;max-width:100%}.tbc-venue .tv-tab{height:36px;padding:0 16px;border-radius:9999px;color:var(--tv-sub);display:inline-flex;align-items:center;gap:6px;white-space:nowrap;transition:background .15s}.tbc-venue .tv-tab:hover{background:#f5f5f5}.tbc-venue .tv-tab[aria-selected=true]{background:var(--tv-tint);color:var(--tv-primary);font-weight:600}.tbc-venue .tv-badge{min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--tv-primary);color:#fff;font-size:11px;font-weight:600;display:inline-flex;align-items:center;justify-content:center}.tbc-venue .tv-badge.red{background:var(--tv-red)}.tbc-venue .tv-body{flex:1;min-height:0;overflow:auto;padding:20px 24px 72px}.tbc-venue .tv-banner{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:16px}.tbc-venue .tv-btn{height:40px;padding:0 16px;border-radius:9999px;border:1px solid var(--tv-line2);background:#fff;color:var(--tv-ink);display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;transition:background-color .15s}.tbc-venue .tv-btn:hover:not(:disabled){background:#f5f5f5}.tbc-venue .tv-btn.sm{height:32px;padding:0 12px;font-size:13px}.tbc-venue .tv-btn.primary{background:var(--tv-primary);border-color:var(--tv-primary);color:#fff}.tbc-venue .tv-btn.primary:hover:not(:disabled){background:var(--tv-primary-h)}.tbc-venue .tv-btn.danger{color:var(--tv-red);border-color:var(--tv-red-line)}.tbc-venue .tv-btn.danger:hover:not(:disabled){background:var(--tv-red-bg)}.tbc-venue .tv-btn.danger.fill{background:var(--tv-red);border-color:var(--tv-red);color:#fff}.tbc-venue .tv-btn.danger.fill:hover:not(:disabled){background:#b30d17}.tbc-venue .tv-btn:disabled{opacity:.4}.tbc-venue .tv-icon-btn{width:36px;height:36px;border-radius:9999px;display:inline-flex;align-items:center;justify-content:center;color:var(--tv-sub);flex:none}.tbc-venue .tv-icon-btn:hover:not(:disabled){background:#f0f0f0}.tbc-venue .tv-icon-btn.bordered{border:1px solid var(--tv-line2);background:#fff;width:34px;height:34px}.tbc-venue .tv-icon-btn:disabled{opacity:.35}.tbc-venue .tv-link{color:var(--tv-primary);text-decoration:underline;font-size:13px}.tbc-venue .tv-input,.tbc-venue .tv-select,.tbc-venue .tv-textarea{width:100%;height:42px;padding:0 12px;font:inherit;font-size:15px;color:var(--tv-ink);background:#fff;border:1px solid var(--tv-line2);border-radius:8px;outline:none}.tbc-venue .tv-textarea{height:auto;min-height:84px;padding:10px 12px;resize:vertical}.tbc-venue .tv-input:focus,.tbc-venue .tv-select:focus,.tbc-venue .tv-textarea:focus{border-color:var(--tv-primary);box-shadow:0 0 0 3px #0070d529}.tbc-venue .tv-field.invalid .tv-input,.tbc-venue .tv-field.invalid .tv-select{border-color:var(--tv-red)}.tbc-venue .tv-select.slim{height:36px;width:auto;min-width:140px;font-size:14px}.tbc-venue .tv-num{width:64px;text-align:center;padding:0 6px}.tbc-venue .tv-field{margin-bottom:16px}.tbc-venue .tv-label{display:block;margin-bottom:6px;font-weight:600;font-size:14px}.tbc-venue .tv-req{color:var(--tv-red);margin-left:2px}.tbc-venue .tv-hint{margin-top:4px;font-size:12px;color:var(--tv-mute)}.tbc-venue .tv-err{margin-top:4px;font-size:13px;color:var(--tv-red);font-weight:500}.tbc-venue .tv-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.tbc-venue .tv-row .tv-input{flex:1;min-width:120px}.tbc-venue .tv-row .tv-select:not(.slim){flex:1;width:auto;min-width:110px}.tbc-venue .tv-row .tv-num{flex:none;min-width:0}.tbc-venue .tv-inline{display:inline-flex;align-items:center;gap:6px;color:var(--tv-sub);font-size:13px}.tbc-venue .tv-dash{color:var(--tv-mute)}.tbc-venue .tv-grid2{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}.tbc-venue .tv-check{display:inline-flex;align-items:center;gap:8px;cursor:pointer}.tbc-venue .tv-check input{width:16px;height:16px;accent-color:var(--tv-primary)}.tbc-venue .tv-switch{width:44px;height:24px;border-radius:9999px;background:#d0d0d0;position:relative;flex:none;transition:background-color .15s}.tbc-venue .tv-switch span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .15s}.tbc-venue .tv-switch.on{background:var(--tv-primary)}.tbc-venue .tv-switch.on span{transform:translate(20px)}.tbc-venue .tv-switch:disabled{opacity:.5}.tbc-venue .tv-switchrow{display:flex;align-items:center;gap:10px;margin:12px 0}.tbc-venue .tv-switchrow.compact{margin:0;gap:8px;font-size:13px;color:var(--tv-sub)}.tbc-venue .tv-pill{height:32px;padding:0 12px;border-radius:9999px;border:1px solid var(--tv-line2);background:#fff;display:inline-flex;align-items:center;gap:6px;font-size:13px;white-space:nowrap}.tbc-venue .tv-pill:hover{background:#f5f5f5}.tbc-venue .tv-pill.on{background:var(--tv-tint);border-color:var(--tv-primary);color:var(--tv-primary);font-weight:600}.tbc-venue .tv-pill.red{color:var(--tv-red);border-color:var(--tv-red-line)}.tbc-venue .tv-pill.red.on{background:var(--tv-red-bg);border-color:var(--tv-red);color:var(--tv-red)}.tbc-venue .tv-collapse{border-top:1px solid var(--tv-line)}.tbc-venue .tv-collapse summary{display:flex;align-items:center;gap:12px;padding:16px 2px;cursor:pointer;list-style:none}.tbc-venue .tv-collapse summary::-webkit-details-marker{display:none}.tbc-venue .tv-collapse summary::marker{content:""}.tbc-venue .tv-ctitle{font-weight:700;font-size:15px;color:var(--tv-ink-blue);white-space:nowrap}.tbc-venue .tv-chint{flex:1;min-width:0;text-align:center;font-size:12px;color:var(--tv-sub);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tbc-venue .tv-cplus{margin-left:auto;width:20px;text-align:center;font-size:22px;line-height:1;color:var(--tv-primary)}.tbc-venue .tv-chint+.tv-cplus{margin-left:0}.tbc-venue .tv-cplus:before{content:"+"}.tbc-venue .tv-collapse[open]>summary .tv-cplus:before{content:"\\2212"}.tbc-venue .tv-cbody{padding:0 2px 8px}.tbc-venue .tv-switchlabel{font-weight:600}.tbc-venue .tv-dfoot.split{gap:12px}.tbc-venue .tv-dfoot.split .tv-btn{flex:1;height:48px;font-size:15px;justify-content:center}.tbc-venue .tv-spacerow{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.tbc-venue .tv-btngroup{display:inline-flex;gap:2px;background:transparent}.tbc-venue .tv-btngroup button{height:34px;padding:0 16px;font-size:14px;color:#262626;background:transparent;border-radius:6px}.tbc-venue .tv-btngroup button:hover:not(:disabled){background:#f3f4f6}.tbc-venue .tv-btngroup button:disabled{opacity:.5}.tbc-venue .tv-days{display:flex;gap:6px;flex-wrap:wrap}.tbc-venue .tv-daybtn{width:40px;height:40px;border-radius:50%;border:1px solid var(--tv-line2);background:#fff;font-weight:600}.tbc-venue .tv-daybtn[aria-pressed=true]{background:var(--tv-primary);border-color:var(--tv-primary);color:#fff}.tbc-venue .tv-weekrow{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 0;border-top:1px solid var(--tv-line)}.tbc-venue .tv-weeklabel{width:52px;font-weight:600}.tbc-venue .tv-seg{display:inline-flex;border:1px solid var(--tv-line2);border-radius:9999px;overflow:hidden;background:#fff}.tbc-venue .tv-seg button{height:32px;padding:0 14px;font-size:13px}.tbc-venue .tv-seg button+button{border-left:1px solid var(--tv-line2)}.tbc-venue .tv-seg button[aria-pressed=true]{background:var(--tv-primary);color:#fff;font-weight:600}.tbc-venue .tv-seg button.skip[aria-pressed=true]{background:var(--tv-red)}.tbc-venue .tv-datechips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;align-items:center}.tbc-venue .tv-dchip{display:inline-flex;align-items:center;gap:4px;height:28px;padding:0 6px 0 10px;border-radius:9999px;background:var(--tv-tint);color:var(--tv-ink-blue);font-size:13px}.tbc-venue .tv-dchip.plain{padding:0 10px}.tbc-venue .tv-dchip.bad{background:var(--tv-amber-bg);color:var(--tv-amber)}.tbc-venue .tv-dchip button{width:20px;height:20px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center}.tbc-venue .tv-dchip button:hover{background:#00000014}.tbc-venue .tv-note{padding:10px 12px;border-radius:8px;font-size:13px;margin-bottom:14px}.tbc-venue .tv-note.info{background:var(--tv-tint);color:var(--tv-ink-blue)}.tbc-venue .tv-note.warn{background:var(--tv-amber-bg);color:var(--tv-amber);border:1px solid var(--tv-amber-line)}.tbc-venue .tv-note.bad{background:var(--tv-red-bg);color:var(--tv-red);border:1px solid var(--tv-red-line)}.tbc-venue .tv-note .tv-check{margin-top:8px;display:flex}.tbc-venue .tv-tag{display:inline-flex;align-items:center;height:20px;padding:0 8px;border-radius:9999px;font-size:12px;font-weight:500;white-space:nowrap;margin-left:0}.tbc-venue .tv-tag.pending{background:var(--tv-amber-bg);color:var(--tv-amber)}.tbc-venue .tv-tag.approved{background:var(--tv-green-bg);color:var(--tv-green)}.tbc-venue .tv-tag.rejected{background:var(--tv-red-bg);color:var(--tv-red)}.tbc-venue .tv-tag.cancelled,.tbc-venue .tv-tag.plain{background:#f0f0f0;color:var(--tv-sub)}.tbc-venue .tv-tag.overdue{background:var(--tv-red);color:#fff}.tbc-venue .tv-tag.overdue-soft{background:var(--tv-red-bg);color:var(--tv-red)}.tbc-venue .tv-tag.info{background:var(--tv-tint);color:var(--tv-ink-blue)}.tbc-venue h3 .tv-tag{margin-left:8px;vertical-align:middle}.tbc-venue .tv-dot{display:inline-block;width:10px;height:10px;border-radius:50%;flex:none}.tbc-venue .tv-dot.big{width:14px;height:14px}.tbc-venue .tv-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:56px 16px;color:var(--tv-mute);text-align:center}.tbc-venue .tv-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px}.tbc-venue .tv-navs{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.tbc-venue .tv-monthtitle{font-size:20px;font-weight:600;min-width:112px}.tbc-venue .tv-loading{color:var(--tv-mute);font-size:12px}.tbc-venue .tv-filters{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}.tbc-venue .tv-pills{display:flex;gap:6px;flex-wrap:wrap}.tbc-venue .tv-cal{display:block}.tbc-venue .tv-month{background:#fff;border:1px solid var(--tv-line);border-radius:8px;overflow:hidden}.tbc-venue .tv-weekhead{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));background:var(--tv-bg);border-bottom:1px solid var(--tv-line)}.tbc-venue .tv-weekhead div{padding:8px 0;text-align:center;font-size:13px;color:var(--tv-sub);font-weight:600}.tbc-venue .tv-weeks{display:grid;grid-template-columns:repeat(7,minmax(0,1fr))}.tbc-venue .tv-day{position:relative;min-height:108px;padding:6px;border-right:1px solid var(--tv-line);border-bottom:1px solid var(--tv-line);cursor:pointer;overflow:hidden}.tbc-venue .tv-day:nth-child(7n){border-right:0}.tbc-venue .tv-day:hover{background:#fafcfe}.tbc-venue .tv-day.out{background:#fafafa;color:var(--tv-mute)}.tbc-venue .tv-day.sel{background:var(--tv-tint);box-shadow:inset 0 0 0 2px var(--tv-primary)}.tbc-venue .tv-daynum{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;border-radius:13px;font-size:13px;font-weight:500}.tbc-venue .tv-day.today .tv-daynum{background:var(--tv-primary);color:#fff;font-weight:600}.tbc-venue .tv-overdue-dot{position:absolute;top:9px;right:9px;width:8px;height:8px;border-radius:50%;background:var(--tv-red)}.tbc-venue .tv-chips{margin-top:2px}.tbc-venue .tv-chip{margin-top:2px;padding:0 6px;border-radius:4px;border-left:3px solid var(--c);background:color-mix(in srgb,var(--c) 13%,#fff);font-size:12px;line-height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--tv-ink)}.tbc-venue .tv-chip b{font-weight:600;font-variant-numeric:tabular-nums}.tbc-venue .tv-chip.pending{background:#fff;border:1px dashed var(--c);border-left:3px solid var(--c)}.tbc-venue .tv-chip.overdue{border-color:var(--tv-red);border-left-color:var(--tv-red);color:var(--tv-red);background:var(--tv-red-bg)}.tbc-venue .tv-chip.rejected,.tbc-venue .tv-chip.cancelled{background:#f5f5f5;border-left-color:#bbb;color:var(--tv-mute);text-decoration:line-through}.tbc-venue .tv-more-count{margin-top:2px;font-size:12px;color:var(--tv-sub);padding-left:6px}.tbc-venue .tv-dots{display:none;gap:3px;flex-wrap:wrap;margin-top:4px}.tbc-venue .tv-dots .tv-dot{width:7px;height:7px}.tbc-venue .tv-dots .tv-dot.pending{background:transparent!important;box-shadow:inset 0 0 0 1.5px var(--tv-mute)}.tbc-venue .tv-legend{display:flex;gap:16px;flex-wrap:wrap;margin-top:10px;font-size:12px;color:var(--tv-sub)}.tbc-venue .tv-legend span{display:inline-flex;align-items:center;gap:6px}.tbc-venue .tv-legend-solid,.tbc-venue .tv-legend-dash{width:22px;height:12px;border-radius:3px;border-left:3px solid var(--tv-primary);background:color-mix(in srgb,var(--tv-primary) 13%,#fff);display:inline-block}.tbc-venue .tv-legend-dash{background:#fff;border:1px dashed var(--tv-primary);border-left:3px solid var(--tv-primary)}.tbc-venue .tv-legend-dash.red{border-color:var(--tv-red);background:var(--tv-red-bg)}.tbc-venue .tv-panel{background:#fff;border:1px solid var(--tv-line);border-radius:8px;padding:16px;position:sticky;top:0;max-height:calc(100dvh - 150px);overflow:auto}.tbc-venue .tv-panelhead{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:12px}.tbc-venue .tv-panelhead h3{font-size:17px;font-weight:600}.tbc-venue .tv-tl{margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--tv-line)}.tbc-venue .tv-tl-row{display:grid;grid-template-columns:88px minmax(0,1fr);gap:8px;align-items:center;margin:5px 0}.tbc-venue .tv-tl-name{display:flex;align-items:center;gap:6px;font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tbc-venue .tv-tl-track{position:relative;height:20px;border-radius:4px;background-color:#f3f3f3;background-image:linear-gradient(to right,#e1e1e1 1px,transparent 1px);background-repeat:repeat-x}.tbc-venue .tv-tl-bar{position:absolute;top:2px;bottom:2px;border-radius:3px;background:var(--c);min-width:3px}.tbc-venue .tv-tl-bar.pending{background:repeating-linear-gradient(45deg,var(--c),var(--c) 3px,color-mix(in srgb,var(--c) 35%,#fff) 3px,color-mix(in srgb,var(--c) 35%,#fff) 6px)}.tbc-venue .tv-tl-bar.overdue{outline:2px solid var(--tv-red)}.tbc-venue .tv-tl-row.axis{margin-top:2px}.tbc-venue .tv-tl-axis{position:relative;height:14px;font-size:11px;color:var(--tv-mute)}.tbc-venue .tv-tl-axis span{position:absolute;transform:translate(-50%)}.tbc-venue .tv-bklist{display:flex;flex-direction:column;gap:8px}.tbc-venue .tv-bk{border:1px solid var(--tv-line);border-left:4px solid var(--c);border-radius:8px;padding:0 10px}.tbc-venue .tv-bk.pending{border-style:dashed;border-left-style:solid}.tbc-venue .tv-bk.overdue{border-color:var(--tv-red);background:snow}.tbc-venue .tv-bk.rejected,.tbc-venue .tv-bk.cancelled{opacity:.7}.tbc-venue .tv-bkhead{width:100%;display:flex;align-items:flex-start;gap:10px;padding:10px 0;text-align:left}.tbc-venue .tv-bktime{font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap;padding-top:1px}.tbc-venue .tv-bkmain{flex:1;min-width:0}.tbc-venue .tv-bktitle{font-weight:600;word-break:break-word}.tbc-venue .tv-bkmeta{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:4px;font-size:12px;color:var(--tv-sub)}.tbc-venue .tv-bkdetail{display:grid;grid-template-columns:72px 1fr;gap:4px 8px;padding:8px 0 10px;border-top:1px solid var(--tv-line);font-size:13px}.tbc-venue .tv-bkdetail dt{color:var(--tv-mute)}.tbc-venue .tv-bkdetail.inline{border-top:0;padding-top:4px}.tbc-venue .tv-bkfoot{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:0 0 10px}.tbc-venue .tv-bkfoot.muted{color:var(--tv-mute);font-size:12px}.tbc-venue .tv-cards{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(min(100%,420px),1fr));align-items:start}.tbc-venue .tv-card{background:#fff;border:1px solid var(--tv-line);border-radius:8px;padding:16px}.tbc-venue .tv-card h3{font-size:16px;font-weight:600;word-break:break-word}.tbc-venue .tv-bulk{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px;padding:8px 12px;background:#fff;border:1px solid var(--tv-line);border-radius:8px}.tbc-venue .tv-rv{display:flex;gap:12px;border-left:4px solid var(--c)}.tbc-venue .tv-rv.overdue{border-color:var(--tv-red);background:snow;border-left-color:var(--tv-red)}.tbc-venue .tv-rvpick{padding-top:2px}.tbc-venue .tv-rvpick input{width:18px;height:18px;accent-color:var(--tv-primary)}.tbc-venue .tv-rvbody{flex:1;min-width:0}.tbc-venue .tv-rvtop{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}.tbc-venue .tv-rvwhen{display:flex;flex-wrap:wrap;gap:4px 14px;margin:6px 0 8px;color:var(--tv-sub);font-size:13px}.tbc-venue .tv-rvplace{display:inline-flex;align-items:center;gap:6px}.tbc-venue .tv-rulehead{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.tbc-venue .tv-rule.off{background:#fafafa}.tbc-venue .tv-rule.off h3{color:var(--tv-sub)}.tbc-venue .tv-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}.tbc-venue .tv-tags:empty{display:none}.tbc-venue .tv-rule .tv-note{margin:8px 0}.tbc-venue .tv-rule .tv-bkfoot{padding:10px 0 0}.tbc-venue .tv-space{display:flex;flex-direction:column;gap:12px}.tbc-venue .tv-space.off{background:#fafafa}.tbc-venue .tv-spacemain{display:flex;gap:10px;align-items:flex-start}.tbc-venue .tv-spacetext{min-width:0}.tbc-venue .tv-spacectl{display:flex;align-items:center;gap:14px;flex-wrap:wrap;border-top:1px solid var(--tv-line);padding-top:12px}.tbc-venue .tv-ctlbtns{display:flex;gap:6px;align-items:center;margin-left:auto}.tbc-venue .tv-overlay{position:fixed;inset:0;z-index:100;background:#0006;display:flex;justify-content:center;align-items:flex-start;padding:5vh 16px;overflow:auto}.tbc-venue .tv-dialog{width:100%;max-width:460px;background:#fff;border-radius:12px;display:flex;flex-direction:column}.tbc-venue .tv-dialog.wide{max-width:580px}.tbc-venue .tv-dhead{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 8px}.tbc-venue .tv-dhead h3{font-size:18px;font-weight:600}.tbc-venue .tv-dform{display:flex;flex-direction:column;min-height:0}.tbc-venue .tv-dbody{padding:8px 20px 4px}.tbc-venue .tv-dfoot{display:flex;justify-content:flex-end;gap:8px;padding:12px 20px 16px;border-top:1px solid var(--tv-line);margin-top:8px}.tbc-venue .tv-toast{position:fixed;left:50%;bottom:32px;transform:translate(-50%);z-index:120;max-width:calc(100vw - 32px);padding:10px 20px;border-radius:9999px;background:#262626;color:#fff;font-size:14px}.tbc-venue .tv-toast.err{background:var(--tv-red)}.tbc-venue .tv-quick{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}.tbc-venue .tv-qbtn{height:36px;padding:0 16px;border-radius:9999px;border:1px solid var(--tv-line2);background:#fff;font-size:14px}.tbc-venue .tv-qbtn:hover{background:#f5f5f5}.tbc-venue .tv-qbtn.on,.tbc-venue .tv-qbtn[aria-pressed=true]{background:var(--tv-primary);border-color:var(--tv-primary);color:#fff;font-weight:600}.tbc-venue .tv-qbtn.skip[aria-pressed=true]{background:var(--tv-red);border-color:var(--tv-red)}.tbc-venue .tv-timebox{margin-top:10px}.tbc-venue .tv-bigtime{font-size:28px;font-weight:700;letter-spacing:.5px;font-variant-numeric:tabular-nums;color:var(--tv-ink-blue)}.tbc-venue .tv-tlwrap{margin-top:12px}.tbc-venue .tv-tl-track.tall{height:28px;border-radius:6px}.tbc-venue .tv-tl-bar.busy{top:3px;bottom:3px;background:#b8b8b8}.tbc-venue .tv-tl-bar.busy.pending{background:repeating-linear-gradient(45deg,#b8b8b8,#b8b8b8 3px,#e2e2e2 3px 6px)}.tbc-venue .tv-tl-bar.mine{top:0;bottom:0;background:color-mix(in srgb,var(--tv-primary) 80%,transparent);border:2px solid var(--tv-primary);border-radius:4px}.tbc-venue .tv-tl-bar.mine.bad{background:color-mix(in srgb,var(--tv-red) 55%,transparent);border-color:var(--tv-red)}.tbc-venue .tv-tl-axis.wide{margin-top:3px;height:16px}.tbc-venue .tv-tlnote{margin-top:4px;font-size:12px;color:var(--tv-sub)}.tbc-venue .tv-tlnote b.good{color:var(--tv-primary)}.tbc-venue .tv-tlnote b.bad{color:var(--tv-red)}.tbc-venue .tv-lg{display:inline-block;width:12px;height:8px;border-radius:2px;margin-right:4px;vertical-align:middle}.tbc-venue .tv-lg.busy{background:#b8b8b8}.tbc-venue .tv-lg.mine{background:var(--tv-primary)}.tbc-venue .tv-repeatrow{gap:8px}.tbc-venue .tv-repeatrow .tv-select.slim{min-width:72px}.tbc-venue .tv-confirmwrap{display:flex;flex-direction:column;gap:8px;width:100%}.tbc-venue .tv-confirm{width:100%;min-height:56px;padding:8px 16px;border-radius:14px;background:var(--tv-primary);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}.tbc-venue .tv-confirm strong{font-size:17px;font-weight:600}.tbc-venue .tv-confirm span{font-size:12px;opacity:.9}.tbc-venue .tv-confirm:hover:not(:disabled){background:var(--tv-primary-h)}.tbc-venue .tv-confirm:disabled{opacity:.45}@media(max-width:1100px){.tbc-venue .tv-cal{grid-template-columns:minmax(0,1fr)}.tbc-venue .tv-panel{position:static;max-height:none}}@media(max-width:640px){.tbc-venue .tv-head{padding:12px 16px}.tbc-venue .tv-body{padding:16px 12px 72px}.tbc-venue .tv-tabs{margin-left:0}.tbc-venue .tv-day{min-height:58px;padding:4px}.tbc-venue .tv-chips{display:none}.tbc-venue .tv-dots{display:flex}.tbc-venue .tv-grid2{grid-template-columns:1fr}.tbc-venue .tv-input,.tbc-venue .tv-select,.tbc-venue .tv-textarea{font-size:16px}.tbc-venue .tv-overlay{padding:0;align-items:flex-end}.tbc-venue .tv-dialog,.tbc-venue .tv-dialog.wide{max-width:none;border-radius:12px 12px 0 0;max-height:94dvh;overflow:auto}}@media(prefers-reduced-motion:reduce){.tbc-venue *{transition:none!important}}.tbc-venue .tv-toolright{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.tbc-venue .tv-search{display:flex;align-items:center;gap:8px;height:40px;padding:0 14px;border-radius:9999px;background:#f3f4f6;color:var(--tv-sub);min-width:240px}.tbc-venue .tv-search input{flex:1;min-width:0;border:0;outline:0;background:transparent;font-size:14px;color:var(--tv-ink)}.tbc-venue .tv-search:focus-within{box-shadow:0 0 0 2px var(--tv-primary)}.tbc-venue .tv-spacectl2{display:flex;align-items:center;gap:14px}.tbc-venue .tv-spacemain h3{display:flex;align-items:center;gap:8px}.tbc-venue .tv-spacenote{margin:6px 0 0 26px;white-space:pre-wrap}.tbc-venue .tv-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.tbc-venue .tv-space{position:relative;padding-left:28px;overflow:hidden}.tbc-venue .tv-space:before{content:"";position:absolute;left:0;top:0;bottom:0;width:12px;background:var(--space-color, #8c8c8c)}.tbc-venue .tv-space.off:before{opacity:.45}.tbc-venue .tv-space .tv-spacenote{margin-left:0}.tbc-venue .tv-space .tv-btngroup button{height:28px;width:32px;padding:0;display:inline-flex;align-items:center;justify-content:center}.tbc-venue .tv-space .tv-switch{height:22px;width:40px}.tbc-venue .tv-space .tv-switch span{top:3px;left:3px;width:16px;height:16px}.tbc-venue .tv-space .tv-switch.on span{transform:translate(18px)}.tbc-venue .tv-toolright{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.tbc-venue .tv-calwrap{display:grid;grid-template-columns:252px minmax(0,1fr);gap:24px;align-items:start}.tbc-venue .tv-side{position:sticky;top:0}.tbc-venue .tv-minihead{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;font-size:14px}.tbc-venue .tv-icon-btn.sm{width:28px;height:28px}.tbc-venue .tv-minigrid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px 0;justify-items:center}.tbc-venue .tv-miniw{font-size:12px;color:var(--tv-sub);height:26px;line-height:26px}.tbc-venue .tv-minid{position:relative;width:32px;height:32px;border-radius:50%;font-size:12px}.tbc-venue .tv-minid:hover{background:#eee}.tbc-venue .tv-minid.out{color:var(--tv-mute)}.tbc-venue .tv-minid.pastday{color:#b8b8b8}.tbc-venue .tv-minid.today{color:#fff}.tbc-venue .tv-minid.today{background:var(--tv-primary);color:#fff;font-weight:600}.tbc-venue .tv-minid.sel{box-shadow:inset 0 0 0 2px var(--tv-primary)}.tbc-venue .tv-minid.has:after{content:"";position:absolute;left:50%;bottom:3px;width:4px;height:4px;margin-left:-2px;border-radius:50%;background:var(--tv-primary)}.tbc-venue .tv-minid.today.has:after{background:#fff}.tbc-venue .tv-spacelist{margin-top:20px}.tbc-venue .tv-spacelisthead{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;font-size:14px}.tbc-venue .tv-spacelisthead span{display:inline-flex;gap:12px}.tbc-venue .tv-spaceitem{position:relative;display:flex;align-items:center;gap:10px;padding:6px 2px;font-size:14px;cursor:pointer}.tbc-venue .tv-spaceitem input{position:absolute;opacity:0;width:18px;height:18px;margin:0}.tbc-venue .tv-box{width:18px;height:18px;border-radius:4px;border:2px solid var(--c, #8c8c8c);flex:none;display:inline-flex;align-items:center;justify-content:center}.tbc-venue .tv-box.gray{--c: #9aa0a6}.tbc-venue .tv-box.solid{background:var(--c)}.tbc-venue .tv-spaceitem input:checked+.tv-box{background:var(--c)}.tbc-venue .tv-spaceitem input:checked+.tv-box:after{content:"";width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg) translate(-1px,-1px)}.tbc-venue .tv-spaceitem input:focus-visible+.tv-box{outline:2px solid var(--tv-primary);outline-offset:2px}.tbc-venue .tv-spaceitem.plain{margin-top:6px;border-top:1px solid var(--tv-line);padding-top:12px;color:var(--tv-sub)}.tbc-venue .tv-agenda{background:#fff;border:1px solid var(--tv-line);border-radius:8px;min-width:0}.tbc-venue .tv-agenda .tv-empty{padding:40px 0}.tbc-venue .tv-agday{display:grid;grid-template-columns:132px minmax(0,1fr);gap:4px;padding:10px 12px;border-bottom:1px solid var(--tv-line);scroll-margin-top:8px}.tbc-venue .tv-agday:last-child{border-bottom:0}.tbc-venue .tv-agdate{display:flex;align-items:center;gap:10px;align-self:start;padding-top:4px}.tbc-venue .tv-agdate b{width:34px;height:34px;line-height:34px;text-align:center;border-radius:50%;font-size:18px;font-weight:500}.tbc-venue .tv-agdate span{white-space:nowrap;font-size:12px;color:var(--tv-sub)}.tbc-venue .tv-agday.today .tv-agdate b{background:var(--tv-primary);color:#fff}.tbc-venue .tv-agday.today .tv-agdate span{color:var(--tv-primary)}.tbc-venue .tv-aglist{list-style:none;margin:0;padding:0}.tbc-venue .tv-agitem{width:100%;display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;text-align:left;font-size:14px}.tbc-venue .tv-agitem:hover{background:#f1f3f4}.tbc-venue .tv-agtime{flex:none;width:108px;font-variant-numeric:tabular-nums}.tbc-venue .tv-agfill{flex:1}.tbc-venue .tv-agtitle{flex:none;min-width:0;width:120px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tbc-venue .tv-agspace{flex:0 1 auto;min-width:0;color:var(--tv-sub);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tbc-venue .tv-agday.past .tv-agitem{color:var(--tv-mute)}.tbc-venue .tv-agitem.adhoc{background:#f2f4cd}.tbc-venue .tv-agitem.adhoc:hover{background:#e8ebb8}.tbc-venue .tv-agitem.pending .tv-agtitle{font-style:italic}.tbc-venue .tv-agitem.rejected,.tbc-venue .tv-agitem.cancelled{color:var(--tv-mute);text-decoration:line-through}.tbc-venue .tv-agitem.overdue .tv-agtime{color:var(--tv-red)}.tbc-venue .tv-bcard{position:relative;max-width:440px}.tbc-venue .tv-cardtools{display:flex;justify-content:flex-end;gap:2px;padding:8px 12px 0}.tbc-venue .tv-cardtitle{display:flex;gap:14px;align-items:flex-start;margin-bottom:12px}.tbc-venue .tv-cardtitle .tv-box{margin-top:6px;width:20px;height:20px}.tbc-venue .tv-cardtitle h3{font-size:20px;font-weight:500;word-break:break-word}.tbc-venue .tv-cardwhen{margin-top:4px;font-size:14px;color:var(--tv-sub)}.tbc-venue .tv-pre{white-space:pre-wrap}.tbc-venue .tv-detailhead{display:flex;gap:6px;align-items:center;margin-bottom:10px}.tbc-venue .tv-bkdetail.open{border-top:0;grid-template-columns:72px 1fr;font-size:14px}.tbc-venue .tv-cats{display:flex;gap:8px;margin-bottom:14px}.tbc-venue .tv-cat{height:40px;padding:0 18px;border-radius:9999px;border:1px solid var(--tv-line2);background:#fff;font-size:15px}.tbc-venue .tv-cat.on{background:#1a1a1a;border-color:#1a1a1a;color:#fff;font-weight:600}.tbc-venue .tv-rv.rejected{border-left-color:#bbb}.tbc-venue .tv-qresults{margin-top:6px}.tbc-venue .tv-qsummary{font-size:14px;margin-bottom:8px;color:var(--tv-sub)}.tbc-venue .tv-qsummary b{color:var(--tv-ink)}.tbc-venue .tv-qrow{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:10px 12px;margin-bottom:8px;border:1px solid var(--tv-line);border-left:6px solid var(--c);border-radius:8px}.tbc-venue .tv-qrow.busy{background:#fafafa}.tbc-venue .tv-qmain{min-width:0;flex:1}.tbc-venue .tv-qname{display:flex;align-items:center;gap:8px;font-weight:600}.tbc-venue .tv-qok{color:var(--tv-primary);font-size:13px;margin-top:2px}.tbc-venue .tv-qno{color:var(--tv-red);font-size:13px;margin-top:2px}.tbc-venue .tv-qalts{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:6px}.tbc-venue .tv-qbtn.sm{height:28px;padding:0 10px;font-size:13px}.tbc-venue .tv-search.wide{width:100%}.tbc-venue .tv-search.wide input{flex:1;min-width:0}.tbc-venue .tv-qbtn.good{border-color:var(--tv-green);color:var(--tv-green);background:var(--tv-green-bg)}.tbc-venue .tv-qbtn.good:hover{background:#d7f0df}@media(max-width:800px){.tbc-venue .tv-calwrap{grid-template-columns:minmax(0,1fr)}.tbc-venue .tv-side{position:static}.tbc-venue .tv-agday{grid-template-columns:minmax(0,1fr)}.tbc-venue .tv-agitem{flex-wrap:wrap;row-gap:2px}.tbc-venue .tv-agtitle{flex-basis:100%;order:3;white-space:normal}.tbc-venue .tv-qrow{flex-direction:column;align-items:stretch}}.tbc-venue .tv-spacepick{display:flex;align-items:center;justify-content:space-between;width:100%;text-align:left;cursor:pointer}.tbc-venue .tv-spacepanel{margin-top:8px;padding:10px 12px;border:1px solid var(--tv-line2);border-radius:8px;background:#fff}.tbc-venue .tv-spacepanel .tv-spacelisthead{margin-bottom:4px}.tbc-venue .tv-cbox{position:relative;width:min(340px,calc(100vw - 32px));padding:36px 24px 24px;text-align:center;display:flex;flex-direction:column;gap:10px}.tbc-venue .tv-cbox h3{font-size:20px;font-weight:600;margin:4px 0 10px}.tbc-venue .tv-cboxx{position:absolute;top:8px;right:8px}.tbc-venue .tv-btn.block{width:100%;height:44px;justify-content:center}@media(max-width:800px){.tbc-venue .tv-agtitle{width:auto}}.tbc-venue .tv-cbox .tv-cnote{display:flex;flex-direction:column;gap:6px;text-align:left;font-size:14px;font-weight:600}.tbc-venue .tv-cbox .tv-cnote textarea{font-weight:400;min-height:84px}.tbc-venue .tv-cbox .tv-cmsg{margin:-6px 0 6px;font-size:14px}\n';

  // src/venue/entry.jsx
  var st = document.createElement("style");
  st.setAttribute("data-tbc", "venue");
  st.textContent = venue_css_default;
  document.head.appendChild(st);
  window.TBC_VENUE = { Root: VenueApp };
  window.dispatchEvent(new Event("tbc-venue-ready"));
})();
