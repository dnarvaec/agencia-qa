# Node Description Batch 24 of 41

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

- "assets_defaultsettingsview_d31xz8zv_ta_onmouseleave": "._onMouseLeave()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), ._ignoreOverlayEvent()]
- "assets_defaultsettingsview_d31xz8zv_ta_onmousemove": "._onMouseMove()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), ._ignoreOverlayEvent()]
- "assets_defaultsettingsview_d31xz8zv_ta_onmouseup": "._onMouseUp()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), ._ignoreOverlayEvent()]
- "assets_defaultsettingsview_d31xz8zv_ta_onpointerdown": "._onPointerDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), ._ignoreOverlayEvent()]
- "assets_defaultsettingsview_d31xz8zv_ta_onpointerup": "._onPointerUp()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), ._ignoreOverlayEvent()]
- "assets_defaultsettingsview_d31xz8zv_ta_onscroll": "._onScroll()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), .hideActionPoint()]
- "assets_defaultsettingsview_d31xz8zv_ta_setoverlaystate": ".setOverlayState()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[.onMouseMove(), tA()]
- "assets_defaultsettingsview_d31xz8zv_ta_switchcurrenttool": "._switchCurrentTool()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), .setUIState()]
- "assets_defaultsettingsview_d31xz8zv_ta_updatehighlight": ".updateHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), ._updateHighlight()]
- "assets_defaultsettingsview_d31xz8zv_tb": "tb" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, dT()]
- "assets_defaultsettingsview_d31xz8zv_tr_add": ".add()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L177 | neighbors=[Tr, ps()]
- "assets_defaultsettingsview_d31xz8zv_tr_get": ".get()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L177 | neighbors=[Tr, ps()]
- "assets_defaultsettingsview_d31xz8zv_tr_set": ".set()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L177 | neighbors=[Tr, ps()]
- "assets_defaultsettingsview_d31xz8zv_tr_tostring": ".toString()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L177 | neighbors=[Tr, .hasAllNullValues()]
- "assets_defaultsettingsview_d31xz8zv_tt_tojson": ".toJSON()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L167 | neighbors=[tT(), rS()]
- "assets_defaultsettingsview_d31xz8zv_tx": "Tx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, Ex()]
- "assets_defaultsettingsview_d31xz8zv_u_quote": ".quote()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[u_, mc()]
- "assets_defaultsettingsview_d31xz8zv_ua": "Ua()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, at()]
- "assets_defaultsettingsview_d31xz8zv_ue_tojson": ".toJSON()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[uE(), yn()]
- "assets_defaultsettingsview_d31xz8zv_ui_from": ".from()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[Ui, ll()]
- "assets_defaultsettingsview_d31xz8zv_ui_set": ".set()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[Ui, Wv()]
- "assets_defaultsettingsview_d31xz8zv_ui_tojson": ".toJSON()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[Ui, yn()]
- "assets_defaultsettingsview_d31xz8zv_ui_tostring": ".toString()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[Ui, aS()]
- "assets_defaultsettingsview_d31xz8zv_uo": "Uo()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, hs()]
- "assets_defaultsettingsview_d31xz8zv_ux": "ux()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, m2()]
- "assets_defaultsettingsview_d31xz8zv_v2": "v2" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, ._sendMessage()]
- "assets_defaultsettingsview_d31xz8zv_va_promiseawarejsonvaluenothrow": "._promiseAwareJsonValueNoThrow()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[Va(), .evaluate()]
- "assets_defaultsettingsview_d31xz8zv_vb": "Vb()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L124 | neighbors=[defaultSettingsView-D31xz8zv.js, Ja()]
- "assets_defaultsettingsview_d31xz8zv_vd": "vd" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_vite_mapdeps": "__vite__mapDeps()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L1 | neighbors=[defaultSettingsView-D31xz8zv.js, ar()]
- "assets_defaultsettingsview_d31xz8zv_vt_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[vt, ct()]
- "assets_defaultsettingsview_d31xz8zv_wt_delete": ".delete()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[wt, ps()]
- "assets_defaultsettingsview_d31xz8zv_wt_get": ".get()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[wt, ps()]
- "assets_defaultsettingsview_d31xz8zv_wt_has": ".has()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[wt, ps()]
- "assets_defaultsettingsview_d31xz8zv_wt_tojson": ".toJSON()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[wt, rS()]
- "assets_defaultsettingsview_d31xz8zv_xa_installobserverifneeded": "._installObserverIfNeeded()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._updateModelForHoveredElement()]
- "assets_defaultsettingsview_d31xz8zv_xa_onmousedown": ".onMouseDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._consumeWhenAboutToPerform()]
- "assets_defaultsettingsview_d31xz8zv_xa_onmouseup": ".onMouseUp()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._consumeWhenAboutToPerform()]
- "assets_defaultsettingsview_d31xz8zv_xa_onpointerdown": ".onPointerDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._consumeWhenAboutToPerform()]
- "assets_defaultsettingsview_d31xz8zv_xa_onpointerup": ".onPointerUp()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._consumeWhenAboutToPerform()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-023.json

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
