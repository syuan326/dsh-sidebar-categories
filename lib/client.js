window.__ModuleLoader__.load({id:"dsh-plugin-sidebar-categories",factory:require=>{var module={exports:{}};var exports=module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.jsx
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var import_react = __toESM(require("react"), 1);
var import_dsh_client_ui_slots = require("@deepseek-ai/dsh-client-ui-slots");

// src/model.mjs
var GROUPS = Object.freeze(["work", "manage", "develop"]);
var STORAGE_KEY = "dsh-sidebar-categories:v1";
function defaultGroup(panel) {
  const text = `${panel.id} ${panel.label}`.toLowerCase();
  if (/forge|terminal|debug|developer|开发|终端|调试/.test(text)) return "develop";
  if (/^(plugins|skills|skill-center)$/.test(panel.id) || /插件|技能中心|skill center/.test(text)) return "manage";
  return "work";
}
function groupFor(panel, assignments) {
  const value = Object.hasOwn(assignments, panel.id) ? assignments[panel.id] : void 0;
  return GROUPS.includes(value) ? value : defaultGroup(panel);
}
function parsePreferences(raw) {
  const fallback = { selected: "work", assignments: {} };
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value !== "object") return fallback;
    return {
      selected: GROUPS.includes(value.selected) ? value.selected : "work",
      assignments: Object.fromEntries(Object.entries(value.assignments && typeof value.assignments === "object" && !Array.isArray(value.assignments) ? value.assignments : {}).filter(([, group]) => GROUPS.includes(group)))
    };
  } catch {
    return fallback;
  }
}
function hiddenLabels(panels, preferences) {
  const counts = /* @__PURE__ */ new Map();
  for (const panel of panels) counts.set(panel.label, (counts.get(panel.label) ?? 0) + 1);
  return panels.filter((panel) => counts.get(panel.label) === 1 && groupFor(panel, preferences.assignments) !== preferences.selected).map((panel) => panel.label);
}
function cssString(value) {
  return '"' + String(value).replace(/[\x00-\x1f\x7f"\\]/g, (character) => "\\" + character.charCodeAt(0).toString(16) + " ") + '"';
}

// src/style.css
var style_default = ".dsc-session-stack { display:flex; flex:1 1 auto; flex-direction:column; width:100%; min-width:0; gap:9px; }\n.dsc-original-session { display:flex; align-items:center; gap:6px; width:100%; }\n.dsc-original-session > [data-slot] { display:flex; flex:1; min-width:0; gap:6px; }\n.dsc-categories { display:flex; align-items:center; gap:4px; width:100%; }\n.dsc-tabs { display:flex; flex:1; min-width:0; padding:3px; gap:2px; border-radius:12px; background:var(--dsw-alias-interactive-bg-hover); }\n.dsc-tabs button, .dsc-config { border:0; background:transparent; color:var(--dsw-alias-label-secondary); cursor:pointer; }\n.dsc-tabs button { display:flex; flex:1; align-items:center; justify-content:center; gap:5px; min-width:0; padding:7px 3px; border-radius:9px; font:inherit; font-size:13px; white-space:nowrap; }\n.dsc-tabs button[aria-pressed=true] { background:var(--dsw-alias-button-elevated-fill); color:var(--dsw-alias-label-primary); box-shadow:0 1px 3px var(--dsw-alias-border-l3); font-weight:550; }\n.dsc-tabs button:hover, .dsc-config:hover { color:var(--dsw-alias-label-primary); background:var(--dsw-alias-interactive-bg-hover); }\n.dsc-config { flex:none; display:grid; place-items:center; width:27px; height:30px; border-radius:8px; }\n.dsc-session-stack button:focus-visible, .dsc-dialog select:focus-visible { outline:2px solid var(--dsw-alias-label-primary); outline-offset:2px; }\n.dsc-empty { padding:6px 8px; color:var(--dsw-alias-label-secondary); font-size:12px; }\n.dsc-dialog { box-sizing:border-box; width:min(460px,calc(100vw - 32px)); max-height:80vh; padding:24px; border:1px solid var(--dsw-alias-border-l3); border-radius:18px; background:var(--dsw-alias-button-elevated-fill); color:var(--dsw-alias-label-primary); font:inherit; }\n.dsc-dialog::backdrop { background:rgb(0 0 0 / 30%); }\n.dsc-dialog h2 { margin:0 0 12px; font-size:19px; font-weight:600; }\n.dsc-dialog p { margin:0 0 20px; font-size:13px; line-height:1.65; color:var(--dsw-alias-label-secondary); }\n.dsc-assignments { max-height:45vh; overflow:auto; }\n.dsc-assignment { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:10px 0; font-size:14px; }\n.dsc-assignment span { overflow:hidden; text-overflow:ellipsis; }\n.dsc-dialog select { flex:none; padding:6px 12px; border:1px solid var(--dsw-alias-border-l3); border-radius:8px; color:inherit; background:var(--dsw-alias-button-elevated-fill); font:inherit; }\n.dsc-dialog-actions { display:flex; justify-content:space-between; gap:12px; padding-top:22px; }\n.dsc-dialog-actions button { padding:8px 14px; border:1px solid var(--dsw-alias-border-l3); border-radius:9px; font:inherit; font-size:13px; background:transparent; color:inherit; cursor:pointer; }\n.dsc-dialog-actions .dsc-done { background:var(--dsw-alias-interactive-bg-hover); font-weight:550; }\n";

// src/client.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var NS = "sidebar-categories";
var zh = { work: "\u5DE5\u4F5C", manage: "\u4E2A\u4EBA", develop: "\u5F00\u53D1", categories: "\u529F\u80FD\u5206\u7C7B", settings: "\u8BBE\u7F6E\u5165\u53E3\u5206\u7C7B", title: "\u5165\u53E3\u5206\u7C7B", hint: "\u4E3A\u6BCF\u4E2A\u5165\u53E3\u9009\u62E9\u5206\u7C7B\u3002\u65B0\u5165\u53E3\u9ED8\u8BA4\u5F52\u5165\u5DE5\u4F5C\uFF1B\u8BBE\u7F6E\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002", done: "\u5B8C\u6210", reset: "\u6062\u590D\u9ED8\u8BA4\u5206\u7C7B", storage: "\u6D4F\u89C8\u5668\u672A\u5141\u8BB8\u4FDD\u5B58\uFF0C\u4E0B\u6B21\u6253\u5F00\u65F6\u53EF\u80FD\u6062\u590D\u9ED8\u8BA4\u3002" };
var en = { work: "Work", manage: "Personal", develop: "Develop", categories: "Navigation categories", settings: "Organize entries", title: "Organize entries", hint: "Choose a category for each entry. New entries default to Work. Preferences are saved in this browser.", done: "Done", reset: "Reset categories", storage: "Storage is unavailable. Preferences may reset next time." };
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "sidebar-categories:locale");
  const t = ctx.locale.bind(NS);
  ctx.slots.inject("sidebar.session.action", () => {
    let snapshot = [];
    const listeners = /* @__PURE__ */ new Set();
    const sync = () => {
      const next = ctx.slots.entriesOfSlot("sidebar.panellist").map(({ options }) => ({
        id: options.id,
        label: (0, import_dsh_client_ui_slots.resolveSlotLabel)(options.label) ?? options.id,
        order: options.order ?? 0
      })).sort((a, b) => a.order - b.order);
      if (JSON.stringify(snapshot) === JSON.stringify(next)) return;
      snapshot = next;
      for (const listener of listeners) listener();
    };
    const panelsSource = { subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }, getSnapshot: () => snapshot };
    sync();
    const unsubscribePanels = ctx.slots.subscribe("sidebar.panellist", sync);
    const unsubscribeLocale = ctx.locale.subscribe(sync);
    const subscribeLocale = (listener) => ctx.locale.subscribe(listener);
    const localeSnapshot = () => ctx.locale.getSnapshot();
    function CategoryNavigation({ children, wide, usePanelInfo }) {
      (0, import_react.useSyncExternalStore)(subscribeLocale, localeSnapshot);
      const allPanels = (0, import_react.useSyncExternalStore)(panelsSource.subscribe, panelsSource.getSnapshot);
      const activePanel = usePanelInfo((info) => info.activePanelId);
      const [preferences, setPreferences] = (0, import_react.useState)(() => {
        try {
          return parsePreferences(localStorage.getItem(STORAGE_KEY));
        } catch {
          return parsePreferences(null);
        }
      });
      const [storageFailed, setStorageFailed] = (0, import_react.useState)(false);
      const [editing, setEditing] = (0, import_react.useState)(false);
      const dialog = (0, import_react.useRef)(null);
      const launcher = (0, import_react.useRef)(null);
      const group = preferences.selected;
      (0, import_react.useEffect)(() => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
          setStorageFailed(false);
        } catch {
          setStorageFailed(true);
        }
      }, [preferences]);
      (0, import_react.useEffect)(() => {
        const syncStorage = (event) => {
          if (event.key === STORAGE_KEY) setPreferences(parsePreferences(event.newValue));
        };
        window.addEventListener("storage", syncStorage);
        return () => window.removeEventListener("storage", syncStorage);
      }, []);
      (0, import_react.useEffect)(() => {
        const panel = allPanels.find((panel2) => panel2.id === activePanel);
        if (panel) setPreferences((previous) => ({ ...previous, selected: groupFor(panel, previous.assignments) }));
      }, [activePanel]);
      (0, import_react.useEffect)(() => {
        if (editing) dialog.current?.showModal();
      }, [editing]);
      (0, import_react.useEffect)(() => {
        if (!wide) {
          dialog.current?.close();
          setEditing(false);
        }
      }, [wide]);
      const closeEditor = () => {
        dialog.current?.close();
        setEditing(false);
        launcher.current?.focus();
      };
      const selectGroup = (selected) => setPreferences((previous) => ({ ...previous, selected }));
      const filterCss = wide ? hiddenLabels(allPanels, preferences).map(
        (label) => `[data-sidebar-scrollport] > nav > div:has(button[aria-label=${cssString(label)}]){display:none!important}`
      ).join("\n") : "";
      if (!wide) return children;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsc-session-stack", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: style_default + "\n" + filterCss }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dsc-original-session", children }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsc-categories", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dsc-tabs", role: "group", "aria-label": t("categories"), children: GROUPS.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              type: "button",
              "aria-pressed": key === group,
              "data-category": key,
              onClick: () => selectGroup(key),
              onKeyDown: (event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                const next = event.key === "Home" ? 0 : event.key === "End" ? 2 : (index + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                selectGroup(GROUPS[next]);
                event.currentTarget.parentElement.querySelectorAll("button")[next].focus();
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: ["\u2637", "\u25A6", "\u2039\u203A"][index] }),
                t(key)
              ]
            },
            key
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsc-config", ref: launcher, "aria-label": t("settings"), title: t("settings"), onClick: () => setEditing(true), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 17h16" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "9", cy: "7", r: "3", fill: "var(--dsw-alias-button-elevated-fill)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "15", cy: "17", r: "3", fill: "var(--dsw-alias-button-elevated-fill)" })
          ] }) })
        ] }),
        editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dialog", { ref: dialog, className: "dsc-dialog", "aria-labelledby": "dsc-title", onCancel: (event) => {
          event.preventDefault();
          closeEditor();
        }, onClose: () => {
          setEditing(false);
          launcher.current?.focus();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { id: "dsc-title", children: t("title") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("hint") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "dsc-assignments", children: allPanels.map((panel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "dsc-assignment", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { title: panel.id, children: panel.label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", { "aria-label": panel.label, value: groupFor(panel, preferences.assignments), onChange: (event) => {
              const value = event.target.value;
              setPreferences((previous) => ({ ...previous, assignments: { ...previous.assignments, [panel.id]: value } }));
            }, children: GROUPS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: key, children: t(key) }, key)) })
          ] }, panel.id)) }),
          storageFailed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "status", children: t("storage") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dsc-dialog-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => setPreferences((previous) => ({ ...previous, assignments: {} })), children: t("reset") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "dsc-done", onClick: closeEditor, children: t("done") })
          ] })
        ] })
      ] });
    }
    let unregister;
    try {
      unregister = ctx.slots.register({ name: "sidebar.session.action", id: "sidebar-categories", order: -100, locale: NS }, CategoryNavigation);
    } catch (error) {
      unsubscribePanels();
      unsubscribeLocale();
      throw error;
    }
    return () => {
      unregister();
      unsubscribePanels();
      unsubscribeLocale();
      listeners.clear();
    };
  });
}
return module.exports;}});
//# sourceMappingURL=client.js.map
