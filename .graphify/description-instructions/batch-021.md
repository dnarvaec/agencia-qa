# Node Description Batch 22 of 41

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "assets_defaultsettingsview_d31xz8zv_jb": "jb()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_jc": "jc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[defaultSettingsView-D31xz8zv.js, us]
- "assets_defaultsettingsview_d31xz8zv_js": "jS()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L237 | neighbors=[defaultSettingsView-D31xz8zv.js, .next()]
- "assets_defaultsettingsview_d31xz8zv_k": "k_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L59 | neighbors=[defaultSettingsView-D31xz8zv.js, uiMode.C2Efnu2P.js]
- "assets_defaultsettingsview_d31xz8zv_k0_tosource": ".toSource()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[k0, j0()]
- "assets_defaultsettingsview_d31xz8zv_k2_checkbrowsers": ".checkBrowsers()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_clearcache": ".clearCache()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_closegracefully": ".closeGracefully()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_dispatchevent": "._dispatchEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, .fire()]
- "assets_defaultsettingsview_d31xz8zv_k2_findrelatedtestfiles": ".findRelatedTestFiles()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_initialize": ".initialize()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_installbrowsers": ".installBrowsers()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_listfiles": ".listFiles()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_listtests": ".listTests()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_open": ".open()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_opennoreply": ".openNoReply()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessageNoReply()]
- "assets_defaultsettingsview_d31xz8zv_k2_ping": ".ping()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_pingnoreply": ".pingNoReply()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessageNoReply()]
- "assets_defaultsettingsview_d31xz8zv_k2_resizeterminal": ".resizeTerminal()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_resizeterminalnoreply": ".resizeTerminalNoReply()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessageNoReply()]
- "assets_defaultsettingsview_d31xz8zv_k2_runglobalsetup": ".runGlobalSetup()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_runglobalteardown": ".runGlobalTeardown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_runtests": ".runTests()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_stoptests": ".stopTests()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_stoptestsnoreply": ".stopTestsNoReply()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessageNoReply()]
- "assets_defaultsettingsview_d31xz8zv_k2_watch": ".watch()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_k2_watchnoreply": ".watchNoReply()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, ._sendMessageNoReply()]
- "assets_defaultsettingsview_d31xz8zv_kd_streaminfo": ".streamInfo()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L228 | neighbors=[bc(), kd()]
- "assets_defaultsettingsview_d31xz8zv_ke": "kE()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L101 | neighbors=[defaultSettingsView-D31xz8zv.js, St()]
- "assets_defaultsettingsview_d31xz8zv_kr": "kr" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_kv": "kv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, .querySelectorAll()]
- "assets_defaultsettingsview_d31xz8zv_kx": "kx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_lr": "lr()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, at()]
- "assets_defaultsettingsview_d31xz8zv_ls_atlineend": ".atLineEnd()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L241 | neighbors=[lS, .parseStream()]
- "assets_defaultsettingsview_d31xz8zv_lv": "lv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, GE()]
- "assets_defaultsettingsview_d31xz8zv_lx": "lx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L10 | neighbors=[defaultSettingsView-D31xz8zv.js, ox()]
- "assets_defaultsettingsview_d31xz8zv_m": "m_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, uiMode.C2Efnu2P.js]
- "assets_defaultsettingsview_d31xz8zv_ma": "mA()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, hv()]
- "assets_defaultsettingsview_d31xz8zv_mb": "mb()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L101 | neighbors=[defaultSettingsView-D31xz8zv.js, nE()]
- "assets_defaultsettingsview_d31xz8zv_md": "md" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, .contains()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-021.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
