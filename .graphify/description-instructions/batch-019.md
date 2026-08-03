# Node Description Batch 20 of 41

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

- "assets_defaultsettingsview_d31xz8zv_bv_marktargetelements": ".markTargetElements()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .dispatchEvent()]
- "assets_defaultsettingsview_d31xz8zv_bv_matchsequentially": "._matchSequentially()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .expectArray()]
- "assets_defaultsettingsview_d31xz8zv_bv_querylayoutselector": "._queryLayoutSelector()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .querySelectorAll()]
- "assets_defaultsettingsview_d31xz8zv_bv_querynth": "._queryNth()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .querySelectorAll()]
- "assets_defaultsettingsview_d31xz8zv_bv_removeuseroverlay": ".removeUserOverlay()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ensureHighlight()]
- "assets_defaultsettingsview_d31xz8zv_bv_setinputfiles": ".setInputFiles()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .dispatchEvent()]
- "assets_defaultsettingsview_d31xz8zv_bv_setupgloballistenersremovaldetection": "._setupGlobalListenersRemovalDetection()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_setuphittargetinterceptors": "._setupHitTargetInterceptors()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_setuseroverlaysvisible": ".setUserOverlaysVisible()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ensureHighlight()]
- "assets_defaultsettingsview_d31xz8zv_bv_viewportratio": ".viewportRatio()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .expectSingleElement()]
- "assets_defaultsettingsview_d31xz8zv_c0_tosource": ".toSource()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[c0(), ul()]
- "assets_defaultsettingsview_d31xz8zv_cb": "cb()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, kd()]
- "assets_defaultsettingsview_d31xz8zv_ce": "cE()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L98 | neighbors=[defaultSettingsView-D31xz8zv.js, ri()]
- "assets_defaultsettingsview_d31xz8zv_cr_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[cr, .normalize()]
- "assets_defaultsettingsview_d31xz8zv_cr_matches": ".matches()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[cr, .normalize()]
- "assets_defaultsettingsview_d31xz8zv_d_quote": ".quote()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[d_, mc()]
- "assets_defaultsettingsview_d31xz8zv_d_regextostring": ".regexToString()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[d_, yc()]
- "assets_defaultsettingsview_d31xz8zv_d_tocallwithexact": ".toCallWithExact()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[d_, Ze()]
- "assets_defaultsettingsview_d31xz8zv_d_tohastext": ".toHasText()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[d_, Ze()]
- "assets_defaultsettingsview_d31xz8zv_d_totestidvalue": ".toTestIdValue()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[d_, Ze()]
- "assets_defaultsettingsview_d31xz8zv_d0": "d0()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, .renderActionTree()]
- "assets_defaultsettingsview_d31xz8zv_d2": "d2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, h2()]
- "assets_defaultsettingsview_d31xz8zv_dc_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L177 | neighbors=[dc(), Sh()]
- "assets_defaultsettingsview_d31xz8zv_dh_bringtofront": "._bringToFront()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .install()]
- "assets_defaultsettingsview_d31xz8zv_dh_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .appendChild()]
- "assets_defaultsettingsview_d31xz8zv_dh_createhighlightelement": "._createHighlightElement()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .updateHighlight()]
- "assets_defaultsettingsview_d31xz8zv_dh_ensureelementhighlightraf": "._ensureElementHighlightRaf()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .addElementHighlight()]
- "assets_defaultsettingsview_d31xz8zv_dh_firstbox": ".firstBox()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[._showTextDialog(), Dh()]
- "assets_defaultsettingsview_d31xz8zv_dh_firsttooltipbox": ".firstTooltipBox()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), ._showActionListDialog()]
- "assets_defaultsettingsview_d31xz8zv_dh_hideactiontitle": ".hideActionTitle()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[.setScreencastAnnotation(), Dh()]
- "assets_defaultsettingsview_d31xz8zv_dh_highlightisuptodate": "._highlightIsUpToDate()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .updateHighlight()]
- "assets_defaultsettingsview_d31xz8zv_dh_maskelements": ".maskElements()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[.maskSelectors(), Dh()]
- "assets_defaultsettingsview_d31xz8zv_dh_setlanguage": ".setLanguage()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .setUIState()]
- "assets_defaultsettingsview_d31xz8zv_dh_showactiontitle": ".showActionTitle()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[.setScreencastAnnotation(), Dh()]
- "assets_defaultsettingsview_d31xz8zv_dl": "dl()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L177 | neighbors=[defaultSettingsView-D31xz8zv.js, qd()]
- "assets_defaultsettingsview_d31xz8zv_dt": "dT()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, tb]
- "assets_defaultsettingsview_d31xz8zv_ea_hideoverlay": "._hideOverlay()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), .setUIState()]
- "assets_defaultsettingsview_d31xz8zv_eb": "Eb()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, ct()]
- "assets_defaultsettingsview_d31xz8zv_ee": "eE()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L65 | neighbors=[defaultSettingsView-D31xz8zv.js, w_()]
- "assets_defaultsettingsview_d31xz8zv_eh": "Eh()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L236 | neighbors=[defaultSettingsView-D31xz8zv.js, kc()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-019.json

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
