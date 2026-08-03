# Node Description Batch 9 of 41

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

- "trace_sw_bundle_ts": "Ts" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .init(), .readUint8Array(), .size()]
- "trace_sw_bundle_ua": "ua" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor(), .init(), .readUint8Array()]
- "trace_uimode_c2efnu2p_de": "de" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .constructor(), .setStartTimeNumber(), .startTime(), ._createTestResult()]
- "trace_uimode_c2efnu2p_gt_mergesuiteinto": "._mergeSuiteInto()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._absoluteLocation(), tt, ._addSuite(), ._onProject()]
- "trace_uimode_c2efnu2p_gt_mergetestinto": "._mergeTestInto()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._absoluteLocation(), ._updateTest(), le, ._addTest()]
- "assets_codemirrormodule_ds_h_9yq_nf": "nf()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt(), rf(), Ya()]
- "assets_codemirrormodule_ds_h_9yq_po": "po()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L31 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, ff(), mt(), uf()]
- "assets_codemirrormodule_ds_h_9yq_uf": "uf()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L31 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, Ja(), mt(), po()]
- "assets_codemirrormodule_ds_h_9yq_ya": "Ya()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, nf(), Vu(), mt()]
- "assets_defaultsettingsview_d31xz8zv_a2": "a2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, i0(), ri(), .createRelativeUrl()]
- "assets_defaultsettingsview_d31xz8zv_ac_tojson": ".toJSON()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[ac(), .resolve(), Wo(), yn()]
- "assets_defaultsettingsview_d31xz8zv_ae": "aE" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L95 | neighbors=[defaultSettingsView-D31xz8zv.js, .generatePlaywrightRequestCall(), .stringLiteral(), lE()]
- "assets_defaultsettingsview_d31xz8zv_ar": "ar()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, __vite__mapDeps(), ys(), m2()]
- "assets_defaultsettingsview_d31xz8zv_bh_elementhasvalue": "._elementHasValue()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._generateAction(), .onMouseDown(), .onMouseMove()]
- "assets_defaultsettingsview_d31xz8zv_bh_onmousemove": ".onMouseMove()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._elementHasValue(), .generateSelector(), .deepEventTarget()]
- "assets_defaultsettingsview_d31xz8zv_bv_ariasnapshot": ".ariaSnapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[._generateAction(), bv, .incrementalAriaSnapshot(), .elementPicked()]
- "assets_defaultsettingsview_d31xz8zv_bv_ariasnapshotforexpect": "._ariaSnapshotForExpect()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._renderAriaSnapshot(), ni(), .expect()]
- "assets_defaultsettingsview_d31xz8zv_bv_ariasnapshotforrecorder": ".ariaSnapshotForRecorder()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[._ariaSnapshot(), bv, br(), yr()]
- "assets_defaultsettingsview_d31xz8zv_bv_eval": ".eval()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .constructor(), .extend(), .evaluate()]
- "assets_defaultsettingsview_d31xz8zv_bv_expectarray": ".expectArray()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .createStacklessError(), ._matchSequentially(), ._expectCore()]
- "assets_defaultsettingsview_d31xz8zv_bv_expecthittarget": ".expectHitTarget()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .previewNode(), tv(), .setupHitTargetInterceptor()]
- "assets_defaultsettingsview_d31xz8zv_bv_previewnode": ".previewNode()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .expectHitTarget(), Ho(), lb()]
- "assets_defaultsettingsview_d31xz8zv_bv_renderariasnapshot": "._renderAriaSnapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ariaSnapshotForExpect(), br(), yr()]
- "assets_defaultsettingsview_d31xz8zv_ca": "CA()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[defaultSettingsView-D31xz8zv.js, .parseSelector(), .querySelectorAll(), .setUIState()]
- "assets_defaultsettingsview_d31xz8zv_cc_skipwhitespace": "._skipWhitespace()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, .parse(), ._readAttributes(), ._isWhitespace()]
- "assets_defaultsettingsview_d31xz8zv_cr_normalize": ".normalize()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[cr, .constructor(), .matches(), ut()]
- "assets_defaultsettingsview_d31xz8zv_cx": "cx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, .dispatchEvent(), ed(), Jh()]
- "assets_defaultsettingsview_d31xz8zv_d_generatelocator": ".generateLocator()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[d_, ac(), .toHasNotText(), Ze()]
- "assets_defaultsettingsview_d31xz8zv_dd": "dd()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, ._generateSelectors(), xc(), zb()]
- "assets_defaultsettingsview_d31xz8zv_dh_addelementhighlight": ".addElementHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[.addHighlight(), Dh(), ._ensureElementHighlightRaf(), gn()]
- "assets_defaultsettingsview_d31xz8zv_dh_hideactionpoint": ".hideActionPoint()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[.setScreencastAnnotation(), Dh(), ._onScroll(), .setUIState()]
- "assets_defaultsettingsview_d31xz8zv_dh_install": ".install()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .appendChild(), ._bringToFront(), .contains()]
- "assets_defaultsettingsview_d31xz8zv_dh_tooltipposition": ".tooltipPosition()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[._showTextDialog(), Dh(), .updateHighlight(), ._showActionListDialog()]
- "assets_defaultsettingsview_d31xz8zv_dv": "dv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, ct(), cv(), xt()]
- "assets_defaultsettingsview_d31xz8zv_e2": "e2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, ri(), Zh(), T2]
- "assets_defaultsettingsview_d31xz8zv_ea_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), .appendChild(), ._refreshListeners(), ._updateVisualPosition()]
- "assets_defaultsettingsview_d31xz8zv_ea_flashtoolsucceeded": ".flashToolSucceeded()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[._commitAssertValue(), ._showDialog(), eA(), ._commit()]
- "assets_defaultsettingsview_d31xz8zv_ea_install": ".install()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), .appendChild(), ._refreshListeners(), ._updateVisualPosition()]
- "assets_defaultsettingsview_d31xz8zv_ea_setuistate": ".setUIState()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), ._hideOverlay(), ._showOverlay(), ._updateVisualPosition()]
- "assets_defaultsettingsview_d31xz8zv_ed": "ed()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L50 | neighbors=[defaultSettingsView-D31xz8zv.js, ad(), ax(), cx()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-008.json

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
