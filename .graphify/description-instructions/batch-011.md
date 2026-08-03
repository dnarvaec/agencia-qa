# Node Description Batch 12 of 41

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

- "trace_sw_bundle_j": "J()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Ai(), ns(), ss()]
- "trace_sw_bundle_nn": "Nn()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, bs(), Nt(), .get()]
- "trace_sw_bundle_nt": "Nt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, es, Nn(), Xs]
- "trace_sw_bundle_oa": "oa" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .getData(), .writeUint8Array()]
- "trace_sw_bundle_oo": "oo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, B(), Y(), Vs()]
- "trace_sw_bundle_qe": "qe()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Ln(), ba(), .getEntriesGenerator()]
- "trace_sw_bundle_r_addresource": ".addResource()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[._innerAppendEvent(), _r, lt(), ._ensureResourcesForContext()]
- "trace_sw_bundle_r_ensureresourcesforcontext": "._ensureResourcesForContext()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[_r, .addFrameSnapshot(), .addResource(), .get()]
- "trace_sw_bundle_read_byte": "read_byte()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, dr, fr(), nr]
- "trace_sw_bundle_ro": "ro" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getEntriesGenerator(), .constructor(), .getData()]
- "trace_sw_bundle_tr_closestscreenshot": ".closestScreenshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[tr, Mt(), .snapshot(), .serveClosestScreenshot()]
- "trace_sw_bundle_xn": "Xn" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor(), .constructor()]
- "trace_sw_bundle_xs_serveclosestscreenshot": ".serveClosestScreenshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[Xs, .closestScreenshot(), ._snapshot(), yo()]
- "trace_sw_bundle_xs_servesnapshot": ".serveSnapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[Xs, .render(), ._snapshot(), yo()]
- "trace_sw_bundle_yi": "yi" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Ge(), .close(), Vi()]
- "trace_uimode_c2efnu2p_gt_absoluteannotationlocationsinplace": "._absoluteAnnotationLocationsInplace()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._absoluteLocation(), ._onTestEnd(), ._updateTest()]
- "trace_uimode_c2efnu2p_gt_onstepbegin": "._onStepBegin()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch(), ce, ._absoluteLocation()]
- "trace_uimode_c2efnu2p_gt_ontestbegin": "._onTestBegin()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch(), .setStartTimeNumber(), ._createTestResult()]
- "trace_uimode_c2efnu2p_gt_ontestend": "._onTestEnd()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch(), ._absoluteAnnotationLocationsInplace(), ._parseAttachments()]
- "trace_uimode_c2efnu2p_gt_parseproject": "._parseProject()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._onProject(), ct(), ._absolutePath()]
- "trace_uimode_c2efnu2p_gt_updatetest": "._updateTest()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._mergeTestInto(), ._absoluteAnnotationLocationsInplace(), ._absoluteLocation()]
- "trace_uimode_c2efnu2p_me_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[me, gt, kt(), ._createReporter()]
- "trace_uimode_c2efnu2p_me_processlistreport": ".processListReport()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[me, .dispatch(), .reset(), .allTests()]
- "trace_uimode_c2efnu2p_mt_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[mt, ._defaultDescribeItem(), ._fileItem(), .project()]
- "1033_fixtures_test": "test" | kind=code-symbol | source=tests/Automatizacion web/1033/fixtures.ts:L4 | neighbors=[fixtures.ts, cambiar-modulo.steps.ts, hooks.ts]
- "1121_fixtures_test": "test" | kind=code-symbol | source=tests/Automatizacion web/1121/fixtures.ts:L9 | neighbors=[fixtures.ts, crear-ticket.steps.ts, hooks.ts]
- "assets_codemirrormodule_ds_h_9yq_ff": "ff()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L32 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt(), po()]
- "assets_codemirrormodule_ds_h_9yq_ja": "Ja()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L25 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt(), uf()]
- "assets_codemirrormodule_ds_h_9yq_qa": "Qa()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt(), Vu()]
- "assets_codemirrormodule_ds_h_9yq_rf": "rf()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, nf(), mt()]
- "assets_codemirrormodule_ds_h_9yq_xa": "Xa()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, Vu(), mt()]
- "assets_defaultsettingsview_d31xz8zv_0": "_0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor(), g0()]
- "assets_defaultsettingsview_d31xz8zv_a_shouldgeneratekeypressfor": "._shouldGenerateKeyPressFor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), ._isEditable(), .deepEventTarget()]
- "assets_defaultsettingsview_d31xz8zv_ah": "Ah()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, h2(), ys()]
- "assets_defaultsettingsview_d31xz8zv_as": "aS()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L167 | neighbors=[defaultSettingsView-D31xz8zv.js, .toString(), .toString()]
- "assets_defaultsettingsview_d31xz8zv_bh_commit": "._commit()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, .recordAction(), .setMode()]
- "assets_defaultsettingsview_d31xz8zv_bh_onclick": ".onClick()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._commitAssertValue(), ._showDialog()]
- "assets_defaultsettingsview_d31xz8zv_bh_onmousedown": ".onMouseDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._elementHasValue(), .deepEventTarget()]
- "assets_defaultsettingsview_d31xz8zv_bv_activelyfocused": "._activelyFocused()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .expectSingleElement(), .focusNode()]
- "assets_defaultsettingsview_d31xz8zv_bv_addhighlight": ".addHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ensureHighlight(), .addElementHighlight()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-011.json

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
