# Node Description Batch 19 of 41

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

- "trace_uimode_c2efnu2p_tt_addsuite": "._addSuite()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[._mergeSuiteInto(), ._onProject(), tt]
- "trace_uimode_c2efnu2p_tt_project": ".project()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[Ee(), .constructor(), tt]
- "assets_codemirrormodule_ds_h_9yq_af": "af()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt()]
- "assets_codemirrormodule_ds_h_9yq_ef": "ef()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt()]
- "assets_codemirrormodule_ds_h_9yq_lf": "lf()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt()]
- "assets_codemirrormodule_ds_h_9yq_of": "of()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt()]
- "assets_codemirrormodule_ds_h_9yq_sf": "sf()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt()]
- "assets_codemirrormodule_ds_h_9yq_tf": "tf()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt()]
- "assets_defaultsettingsview_d31xz8zv_a_iseditable": "._isEditable()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), ._shouldGenerateKeyPressFor()]
- "assets_defaultsettingsview_d31xz8zv_a_shouldignoremouseevent": "._shouldIgnoreMouseEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), .deepEventTarget()]
- "assets_defaultsettingsview_d31xz8zv_a0": "a0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_av": "av()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, ov()]
- "assets_defaultsettingsview_d31xz8zv_ax": "ax()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L2 | neighbors=[defaultSettingsView-D31xz8zv.js, ed()]
- "assets_defaultsettingsview_d31xz8zv_b2": "b2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, c2()]
- "assets_defaultsettingsview_d31xz8zv_ba": "Ba" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, Ih()]
- "assets_defaultsettingsview_d31xz8zv_bh_onkeydown": ".onKeyDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, .setMode()]
- "assets_defaultsettingsview_d31xz8zv_bh_onpointerup": ".onPointerUp()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._commitAssertValue()]
- "assets_defaultsettingsview_d31xz8zv_bh_rendervalue": "._renderValue()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._showTextDialog()]
- "assets_defaultsettingsview_d31xz8zv_bo": "Bo()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[defaultSettingsView-D31xz8zv.js, ut()]
- "assets_defaultsettingsview_d31xz8zv_bs": "bs()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .generateSelectorSimple()]
- "assets_defaultsettingsview_d31xz8zv_bv_adduseroverlay": ".addUserOverlay()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ensureHighlight()]
- "assets_defaultsettingsview_d31xz8zv_bv_blurnode": ".blurNode()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .createStacklessError()]
- "assets_defaultsettingsview_d31xz8zv_bv_checkelementisstable": "._checkElementIsStable()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .checkElementStates()]
- "assets_defaultsettingsview_d31xz8zv_bv_createariarefengine": "._createAriaRefEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createattributeengine": "._createAttributeEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createcontrolengine": "._createControlEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createcssengine": "._createCSSEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createdescribeengine": "._createDescribeEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createhasengine": "._createHasEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createhasnotengine": "._createHasNotEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createinternalchainengine": "._createInternalChainEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createinternalhasnottextengine": "._createInternalHasNotTextEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createinternalhastextengine": "._createInternalHasTextEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createinternallabelengine": "._createInternalLabelEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createnamedattributeengine": "._createNamedAttributeEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createtextengine": "._createTextEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_createvisibleengine": "._createVisibleEngine()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_extend": ".extend()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .eval()]
- "assets_defaultsettingsview_d31xz8zv_bv_getuseroverlay": ".getUserOverlay()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ensureHighlight()]
- "assets_defaultsettingsview_d31xz8zv_bv_hidehighlight": ".hideHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .createHighlight()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-018.json

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
