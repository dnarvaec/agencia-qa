# Node Description Batch 28 of 41

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

- "trace_uimode_c2efnu2p_gt_onattach": "._onAttach()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch()]
- "trace_uimode_c2efnu2p_gt_onbegin": "._onBegin()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch()]
- "trace_uimode_c2efnu2p_gt_onerror": "._onError()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch()]
- "trace_uimode_c2efnu2p_gt_onexit": "._onExit()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch()]
- "trace_uimode_c2efnu2p_gt_onstdio": "._onStdIO()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch()]
- "trace_uimode_c2efnu2p_gt_onstepend": "._onStepEnd()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch()]
- "trace_uimode_c2efnu2p_gt_ontestpaused": "._onTestPaused()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch()]
- "trace_uimode_c2efnu2p_gt_parseattachments": "._parseAttachments()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._onTestEnd()]
- "trace_uimode_c2efnu2p_gt_reset": ".reset()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .processListReport()]
- "trace_uimode_c2efnu2p_he": "he()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .outcome()]
- "trace_uimode_c2efnu2p_kt": "kt()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .constructor()]
- "trace_uimode_c2efnu2p_le_ok": ".ok()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[le, .outcome()]
- "trace_uimode_c2efnu2p_me_asmodel": ".asModel()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[me, tt]
- "trace_uimode_c2efnu2p_me_createreporter": "._createReporter()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[me, .constructor()]
- "trace_uimode_c2efnu2p_me_processtestreportevent": ".processTestReportEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[me, .dispatch()]
- "trace_uimode_c2efnu2p_mt_collecttestids": ".collectTestIds()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[mt, ge()]
- "trace_uimode_c2efnu2p_mt_sortandpropagatestatus": ".sortAndPropagateStatus()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[mt, Bt()]
- "trace_uimode_c2efnu2p_pe": "pe()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, ._parseConfig()]
- "trace_uimode_c2efnu2p_se": "Se()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js, xe()]
- "trace_uimode_c2efnu2p_tt_addtest": "._addTest()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[._mergeTestInto(), tt]
- "trace_uimode_c2efnu2p_tt_alltests": ".allTests()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[.processListReport(), tt]
- "trace_uimode_c2efnu2p_tt_entries": ".entries()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[be(), tt]
- "trace_uimode_c2efnu2p_vite_mapdeps": "__vite__mapDeps()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L1 | neighbors=[uiMode.C2Efnu2P.js, _e()]
- "trace_uimode_c2efnu2p_xe": "xe()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js, Se()]
- "1069_1069_api_spec_lakehouses": "lakehouses" | kind=code-symbol | source=tests/Automatizacion api/1069/1069.api.spec.ts:L50 | neighbors=[1069.api.spec.ts]
- "1069_1069_api_spec_pipelines": "PIPELINES" | kind=code-symbol | source=tests/Automatizacion api/1069/1069.api.spec.ts:L32 | neighbors=[1069.api.spec.ts]
- "1069_1069_api_spec_pollpipelinestatus": "pollPipelineStatus()" | kind=code-symbol | source=tests/Automatizacion api/1069/1069.api.spec.ts:L55 | neighbors=[1069.api.spec.ts]
- "1069_1069_api_spec_table_patterns": "TABLE_PATTERNS" | kind=code-symbol | source=tests/Automatizacion api/1069/1069.api.spec.ts:L41 | neighbors=[1069.api.spec.ts]
- "1069_1069_api_spec_tableexistsinanylakehouse": "tableExistsInAnyLakehouse()" | kind=code-symbol | source=tests/Automatizacion api/1069/1069.api.spec.ts:L101 | neighbors=[1069.api.spec.ts]
- "1121_global_setup": "global.setup.ts" | kind=code-symbol | source=tests/Automatizacion web/1121/global.setup.ts:L1 | neighbors=[AUTH_FILE]
- "1121_global_setup_auth_file": "AUTH_FILE" | kind=code-symbol | source=tests/Automatizacion web/1121/global.setup.ts:L19 | neighbors=[global.setup.ts]
- "assets_codemirrormodule_ds_h_9yq_hf": "hf" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js]
- "assets_defaultsettingsview_d31xz8zv_0_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[_0]
- "assets_defaultsettingsview_d31xz8zv_2": "_2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js]
- "assets_defaultsettingsview_d31xz8zv_a_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_()]
- "assets_defaultsettingsview_d31xz8zv_a_install": ".install()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_()]
- "assets_defaultsettingsview_d31xz8zv_a_uninstall": ".uninstall()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_()]
- "assets_defaultsettingsview_d31xz8zv_a0_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[a0]
- "assets_defaultsettingsview_d31xz8zv_aa": "aA()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js]
- "assets_defaultsettingsview_d31xz8zv_ac_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[ac()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-027.json

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
