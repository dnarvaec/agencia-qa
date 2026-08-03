# Node Description Batch 5 of 41

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

- "assets_defaultsettingsview_d31xz8zv_ls_parseblockstart": ".parseBlockStart()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L246 | neighbors=[lS, .pushCount(), .pushSpaces(), .setNext(), xn(), .parseLineStart()]
- "assets_defaultsettingsview_d31xz8zv_ls_pushspaces": ".pushSpaces()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[lS, .parseBlockStart(), .parseDocument(), .parseFlowCollection(), .parseLineStart(), .parseStream()]
- "assets_defaultsettingsview_d31xz8zv_nc": "Nc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L134 | neighbors=[defaultSettingsView-D31xz8zv.js, a_(), il(), hl(), kS(), Tc()]
- "assets_defaultsettingsview_d31xz8zv_os": "os()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, .parseSelector(), .querySelectorAll(), cs(), Dh(), Ka()]
- "assets_defaultsettingsview_d31xz8zv_pn": "pn()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, n_(), fv(), Hi(), iv(), sv()]
- "assets_defaultsettingsview_d31xz8zv_s": "s_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, fl(), ad(), Ro(), St(), w_()]
- "assets_defaultsettingsview_d31xz8zv_ss": "Ss()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L124 | neighbors=[defaultSettingsView-D31xz8zv.js, .resolve(), Jv(), .toString(), Bi(), vr()]
- "assets_defaultsettingsview_d31xz8zv_st": "St()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, c2(), kE(), m2(), rd(), s_()]
- "assets_defaultsettingsview_d31xz8zv_ta_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[tA(), bh, .createHighlight(), qb, .installListeners(), xA]
- "assets_defaultsettingsview_d31xz8zv_ta_setmode": ".setMode()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[._commit(), ._commitAssertValue(), .onKeyDown(), ._showDialog(), tA(), ._commit()]
- "assets_defaultsettingsview_d31xz8zv_ta_setuistate": ".setUIState()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), .getAllElementsMatchingExpectAriaTempla…, CA(), .hideActionPoint(), .setLanguage(), .showActionPoint()]
- "assets_defaultsettingsview_d31xz8zv_tc": "Tc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L124 | neighbors=[defaultSettingsView-D31xz8zv.js, kc(), Nc(), pl(), Sr(), vs()]
- "assets_defaultsettingsview_d31xz8zv_tt": "tT()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, .elementState(), .clone(), .constructor(), .toJSON(), .toString()]
- "assets_defaultsettingsview_d31xz8zv_ul": "ul()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .toSource(), .toSource(), .toSource(), .toSource(), td]
- "assets_defaultsettingsview_d31xz8zv_us": "us" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, En(), jc(), .compose(), pc(), Xd]
- "assets_defaultsettingsview_d31xz8zv_ut": "ut()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, Bo(), .selectOptions(), .normalize(), ct(), cv()]
- "assets_defaultsettingsview_d31xz8zv_xa_showactionlistdialog": "._showActionListDialog()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .onClick(), .onContextMenu(), .appendChild(), .firstTooltipBox(), .tooltipPosition()]
- "assets_defaultsettingsview_d31xz8zv_xa_updatemodelforhoveredelement": "._updateModelForHoveredElement()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .onFocus(), .onMouseLeave(), .onMouseMove(), .generateSelector(), ._installObserverIfNeeded()]
- "assets_defaultsettingsview_d31xz8zv_xc": "xc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, ._generateSelectors(), at(), dd(), .tagString(), yr()]
- "assets_defaultsettingsview_d31xz8zv_xd_blockmap": ".blockMap()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L260 | neighbors=[Xd, fr(), .atIndentedComment(), .flowScalar(), .pop(), .startBlockValue()]
- "pages_index_homepage": "HomePage" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L62 | neighbors=[fixtures.ts, index.ts, .constructor(), .expandSupportMenu(), .navigate(), .verifySupportButtonVisible()]
- "pages_index_rolpage": "RolPage" | kind=code-symbol | source=tests/Automatizacion web/1033/pages/index.ts:L46 | neighbors=[fixtures.ts, index.ts, .constructor(), .selectRol(), .verifyNoAlerts(), .verifyVisible()]
- "services_fabricclient_gettoken": "getToken()" | kind=code-symbol | source=server/services/fabricClient.js:L52 | neighbors=[fabricClient.js, explore(), getLakehouseTables(), getPipelineRuns(), post(), health()]
- "services_powerbiclient_gettoken": "getToken()" | kind=code-symbol | source=server/services/powerbiClient.js:L36 | neighbors=[powerbiClient.js, discover(), executeDax(), getDataset(), getRefreshHistory(), post()]
- "trace_sw_bundle_h": "H()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Ln(), lo(), .getEntriesGenerator(), .getData(), Vs()]
- "trace_sw_bundle_hr_innerappendevent": "._innerAppendEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._appendEvent(), Bn, ._pageEntry(), .addFrameSnapshot(), .addResource()]
- "trace_sw_bundle_ns": "ns()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Ce(), J(), Ne(), Ni(), Tt()]
- "trace_sw_bundle_pr": "pr" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, bo(), .constructor(), .hasEntry(), .load(), .resourceForSha1()]
- "trace_sw_bundle_update": "update()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, constructor(), digest(), encrypt(), ns(), _block()]
- "trace_sw_bundle_ve": "Ve" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, is(), Ln(), .append(), .constructor(), .get()]
- "trace_uimode_c2efnu2p_ce": "ce" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .annotations(), .attachments(), .constructor(), .startTime(), .titlePath()]
- "trace_uimode_c2efnu2p_gt_absolutelocation": "._absoluteLocation()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._absoluteAnnotationLocationsInplace(), ._absolutePath(), ._mergeSuiteInto(), ._mergeTestInto(), ._onStepBegin()]
- "trace_uimode_c2efnu2p_le": "le" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, ._mergeTestInto(), .constructor(), ._createTestResult(), .ok(), .outcome()]
- "assets_defaultsettingsview_d31xz8zv_ab": "ab()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, br(), Bt(), Ko(), yr(), g0()]
- "assets_defaultsettingsview_d31xz8zv_ad": "ad()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, c0(), ed(), z0(), rd(), s_()]
- "assets_defaultsettingsview_d31xz8zv_b": "B_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L59 | neighbors=[defaultSettingsView-D31xz8zv.js, .querySelectorAll(), Or(), yE(), index.BCnMPevh.js, uiMode.C2Efnu2P.js]
- "assets_defaultsettingsview_d31xz8zv_b0": "b0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, at(), .constructor(), .toSource(), .fill(), g0()]
- "assets_defaultsettingsview_d31xz8zv_bh_generateaction": "._generateAction()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._commitAssertValue(), ._elementHasValue(), .ariaSnapshot(), .generateSelector(), ._showDialog()]
- "assets_defaultsettingsview_d31xz8zv_bv_checkdeprecatedselectorusage": ".checkDeprecatedSelectorUsage()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L117 | neighbors=[bv, .createStacklessError(), ._generateSelectors(), Di(), gn(), .querySelector()]
- "assets_defaultsettingsview_d31xz8zv_bv_selectoptions": ".selectOptions()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .createStacklessError(), .dispatchEvent(), .elementState(), .retarget(), ut()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-004.json

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
