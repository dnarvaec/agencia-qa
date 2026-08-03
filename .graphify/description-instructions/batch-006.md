# Node Description Batch 7 of 41

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

- "assets_defaultsettingsview_d31xz8zv_z0": "z0()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, ad(), rd(), fl(), fs(), o_()]
- "assets_defaultsettingsview_d31xz8zv_zx": "zx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor(), .constructor(), .toJSON(), .toSource(), .toString()]
- "services_mcpclient": "mcpClient.js" | kind=code-symbol | source=server/services/mcpClient.js:L1 | neighbors=[index.js, _allClients, MCPClient, readline, { spawn }, mcpManager.js]
- "services_workspacetools_safepath": "safePath()" | kind=code-symbol | source=server/services/workspaceTools.js:L33 | neighbors=[workspaceTools.js, createDirectory(), listDirectory(), readFile(), renameFile(), writeFile()]
- "steps_hooks": "hooks.ts" | kind=code-symbol | source=tests/Automatizacion web/1121/steps/hooks.ts:L1 | neighbors=[fixtures.ts, test, fixtures.ts, test, { Before, After, AfterStep }, pageLogs]
- "trace_sw_bundle_bs": "bs()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Nn(), pa(), .get(), .init(), .init()]
- "trace_sw_bundle_ki_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ki, cs(), ls(), Pi, Ri, Xn]
- "trace_sw_bundle_lo": "lo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, B(), H(), q(), ye(), .getData()]
- "trace_sw_bundle_mr": "mr()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Gn(), inflate(), inflateEnd(), inflateInit(), .load()]
- "trace_sw_bundle_r_addframesnapshot": ".addFrameSnapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[._innerAppendEvent(), _r, lt(), ._ensureResourcesForContext(), tr, .get()]
- "trace_sw_bundle_reset": "reset()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, constructor(), digest(), dr, finalize(), fr()]
- "trace_sw_bundle_xs_serveresource": ".serveResource()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[Xs, .hasResourceOverride(), $s(), .resourceByUrl(), .get(), yo()]
- "trace_sw_bundle_xs_servesnapshotinfo": ".serveSnapshotInfo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[Xs, .snapshot(), .viewport(), ._respondWithJson(), ._snapshot(), yo()]
- "trace_sw_bundle_xs_snapshot": "._snapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[Xs, .serveClosestScreenshot(), .serveSnapshot(), .serveSnapshotInfo(), .snapshotByName(), .get()]
- "trace_sw_bundle_y": "Y()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ao(), oo(), .getEntriesGenerator(), Vs(), ys()]
- "trace_sw_bundle_ys": "ys()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .readUint8Array(), .readUint8Array(), H(), uo(), Y()]
- "trace_uimode_c2efnu2p_gt_onproject": "._onProject()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch(), ._mergeSuiteInto(), ._parseProject(), tt, ._addSuite()]
- "assets_codemirrormodule_ds_h_9yq_vu": "Vu()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/codeMirrorModule-Ds_H_9Yq.js:L24 | neighbors=[codeMirrorModule-Ds_H_9Yq.js, mt(), Qa(), Xa(), Ya()]
- "assets_defaultsettingsview_d31xz8zv_a_oncontextmenu": ".onContextMenu()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), ._ariaSnapshot(), el(), .deepEventTarget(), .recordAction()]
- "assets_defaultsettingsview_d31xz8zv_a_oninput": ".onInput()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), ._ariaSnapshot(), nl(), .deepEventTarget(), .recordAction()]
- "assets_defaultsettingsview_d31xz8zv_a_onkeydown": ".onKeyDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), ._ariaSnapshot(), .deepEventTarget(), .recordAction(), tl()]
- "assets_defaultsettingsview_d31xz8zv_al": "al()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, Or(), Za(), .expectSingleElement(), zT]
- "assets_defaultsettingsview_d31xz8zv_bh_showtextdialog": "._showTextDialog()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._showDialog(), ._renderValue(), .firstBox(), .tooltipPosition()]
- "assets_defaultsettingsview_d31xz8zv_bt": "Bt()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, ab(), l_(), g0(), rb()]
- "assets_defaultsettingsview_d31xz8zv_bv_expectcore": "._expectCore()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .expect(), .expectArray(), .expectSingleElement(), cr]
- "assets_defaultsettingsview_d31xz8zv_bv_generateselectorsimple": ".generateSelectorSimple()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bs(), bv, zb(), ._generateLocator(), ._selector()]
- "assets_defaultsettingsview_d31xz8zv_bv_incrementalariasnapshot": ".incrementalAriaSnapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .ariaSnapshot(), br(), .createStacklessError(), yr()]
- "assets_defaultsettingsview_d31xz8zv_cc_iswhitespace": "._isWhitespace()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._eof(), ._peek(), ._readAttributes(), ._skipWhitespace()]
- "assets_defaultsettingsview_d31xz8zv_cc_next": "._next()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._readAttributes(), ._readRegex(), ._readString(), ._readStringOrRegex()]
- "assets_defaultsettingsview_d31xz8zv_cc_peek": "._peek()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._isWhitespace(), ._readAttributes(), ._readIdentifier(), ._readStringOrRegex()]
- "assets_defaultsettingsview_d31xz8zv_cc_readregex": "._readRegex()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._eof(), ._next(), ._throwError(), ._readStringOrRegex()]
- "assets_defaultsettingsview_d31xz8zv_cc_readstring": "._readString()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._eof(), ._next(), ._throwError(), ._readStringOrRegex()]
- "assets_defaultsettingsview_d31xz8zv_cs": "cs()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, .resolve(), TS(), os(), zb()]
- "assets_defaultsettingsview_d31xz8zv_cv": "cv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, hv(), ut(), dv(), fv()]
- "assets_defaultsettingsview_d31xz8zv_dh_updatehighlight": ".updateHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .appendChild(), ._createHighlightElement(), ._highlightIsUpToDate(), .tooltipPosition()]
- "assets_defaultsettingsview_d31xz8zv_di": "Di()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .checkDeprecatedSelectorUsage(), .strictModeViolationError(), ._generateLocator(), ub()]
- "assets_defaultsettingsview_d31xz8zv_fo": "Fo" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, e_(), .constructor(), .toSource(), g0()]
- "assets_defaultsettingsview_d31xz8zv_fr": "fr()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[defaultSettingsView-D31xz8zv.js, .blockMap(), .flowCollection(), .scalar(), .startBlockValue()]
- "assets_defaultsettingsview_d31xz8zv_ie": "iE" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L69 | neighbors=[defaultSettingsView-D31xz8zv.js, .generatePlaywrightRequestCall(), .prettyPrintObject(), .stringLiteral(), lE()]
- "assets_defaultsettingsview_d31xz8zv_iv": "iv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, .appendChild(), Hi(), pn(), uc()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-006.json

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
