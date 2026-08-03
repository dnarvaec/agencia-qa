# Node Description Batch 2 of 41

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

- "trace_uimode_c2efnu2p_tt": "tt" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .constructor(), ._mergeSuiteInto(), ._onProject(), .asModel(), ._addSuite()]
- "assets_defaultsettingsview_d31xz8zv_bv_createstacklesserror": ".createStacklessError()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .blurNode(), .checkDeprecatedSelectorUsage(), .elementState(), .expectArray(), .expectSingleElement()]
- "assets_defaultsettingsview_d31xz8zv_ct": "ct()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, dv(), Eb(), fc(), gv(), mv()]
- "assets_defaultsettingsview_d31xz8zv_fa": "Fa" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, dc(), ds(), .constructor(), ._generateLocator(), ._inspect()]
- "assets_defaultsettingsview_d31xz8zv_ls_parseflowcollection": ".parseFlowCollection()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L246 | neighbors=[lS, .charAt(), .getLine(), .parseLineStart(), .parsePlainScalar(), .parseQuotedScalar()]
- "services_agentreader": "agentReader.js" | kind=code-symbol | source=server/services/agentReader.js:L1 | neighbors=[index.js, AGENTS_DIR, fs, getAgent(), getAgents(), getSkill()]
- "assets_defaultsettingsview_d31xz8zv_bv_expectsingleelement": ".expectSingleElement()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._expectCore(), al(), ._activelyFocused(), .createStacklessError(), .elementState()]
- "assets_defaultsettingsview_d31xz8zv_ls_parselinestart": ".parseLineStart()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L246 | neighbors=[lS, .parseBlockScalar(), .parseDocument(), .parseFlowCollection(), .charAt(), .hasChars()]
- "trace_uimode_c2efnu2p_mt": "mt" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, ._addChild(), .collectTestIds(), .constructor(), ._defaultDescribeItem(), ._fileItem()]
- "assets_defaultsettingsview_d31xz8zv_ac": "ac()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor(), .resolve(), .toJSON(), .toString(), Hr]
- "assets_defaultsettingsview_d31xz8zv_f": "f_" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .chainLocators(), .generateLocator(), .quote(), .regexToString(), .toCallWithExact()]
- "assets_defaultsettingsview_d31xz8zv_ui": "Ui" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[defaultSettingsView-D31xz8zv.js, gS(), .add(), .constructor(), .delete(), .from()]
- "assets_defaultsettingsview_d31xz8zv_xd_pop": ".pop()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[i2(), Xd, .blockMap(), .blockScalar(), .blockSequence(), .document()]
- "assets_defaultsettingsview_d31xz8zv_xd_step": ".step()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[Xd, .blockMap(), .blockScalar(), .blockSequence(), .document(), .flowCollection()]
- "pages_index_crearticketdialog": "CrearTicketDialog" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L166 | neighbors=[fixtures.ts, index.ts, .cancel(), .clickCrearTicket(), .constructor(), .dialog()]
- "trace_sw_bundle_vs": "Vs()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getEntriesGenerator(), .getData(), ao(), B(), co()]
- "assets_defaultsettingsview_d31xz8zv_cr": "cr" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[defaultSettingsView-D31xz8zv.js, ._expectCore(), .expectSingleElement(), .resolve(), Bi(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_dh_appendchild": ".appendChild()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .addUserOverlay(), .constructor(), .install(), .updateHighlight(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_ta_recordaction": ".recordAction()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[.onClick(), .onContextMenu(), .onInput(), .onKeyDown(), ._commit(), ._commitAssertValue()]
- "assets_defaultsettingsview_d31xz8zv_wt": "wt" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, .add(), .constructor(), .delete(), .from(), .get()]
- "assets_defaultsettingsview_d31xz8zv_xa_onclick": ".onClick()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, el(), Gh(), nl(), .deepEventTarget(), tl()]
- "services_fabricclient": "fabricClient.js" | kind=code-symbol | source=server/services/fabricClient.js:L1 | neighbors=[index.js, explore(), get(), getLakehouseTables(), getPipelineRuns(), getToken()]
- "services_workspacetools_callworkspacetool": "callWorkspaceTool()" | kind=code-symbol | source=server/services/workspaceTools.js:L185 | neighbors=[agentRunner.js, workspaceTools.js, createDirectory(), fetchUrl(), fileSearch(), listDirectory()]
- "trace_sw_bundle_b": "B()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ao(), co(), fo(), io(), Ln()]
- "assets_defaultsettingsview_d31xz8zv_bv_elementstate": ".elementState()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .checkElementStates(), .createStacklessError(), .retarget(), fc(), iT()]
- "assets_defaultsettingsview_d31xz8zv_cc_readattributes": "._readAttributes()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, .parse(), ._applyAttribute(), ._eof(), ._isWhitespace(), ._next()]
- "assets_defaultsettingsview_d31xz8zv_d": "d_" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .chainLocators(), .generateLocator(), .quote(), .regexToString(), .toCallWithExact()]
- "assets_defaultsettingsview_d31xz8zv_gt": "Gt()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, fE(), .getObject(), hE(), Ja(), kc()]
- "assets_defaultsettingsview_d31xz8zv_kd": "kd()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, cb(), hT(), .compose(), .constructor(), .decorate()]
- "assets_defaultsettingsview_d31xz8zv_ls_parsenext": ".parseNext()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L246 | neighbors=[lS, .lex(), .parseBlockScalar(), .parseBlockStart(), .parseDocument(), .parseFlowCollection()]
- "assets_defaultsettingsview_d31xz8zv_n": "n_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, fl(), ei(), gn(), hv(), pn()]
- "assets_defaultsettingsview_d31xz8zv_rd": "rd()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, r2(), ad(), at(), ll(), q0()]
- "assets_defaultsettingsview_d31xz8zv_ri": "ri()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L59 | neighbors=[defaultSettingsView-D31xz8zv.js, a2(), cE(), e2(), f_, hE()]
- "assets_defaultsettingsview_d31xz8zv_t2": "T2" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, e2(), i2(), .constructor(), .createRelativeUrl(), ._errorDescriptorsFromActions()]
- "assets_defaultsettingsview_d31xz8zv_u": "u_" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .chainLocators(), .constructor(), .generateLocator(), .quote(), .regexToSourceString()]
- "assets_defaultsettingsview_d31xz8zv_yr": "yr()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, ab(), .ariaSnapshotForRecorder(), .incrementalAriaSnapshot(), ._renderAriaSnapshot(), pT()]
- "services_mcpclient_mcpclient": "MCPClient" | kind=code-symbol | source=server/services/mcpClient.js:L16 | neighbors=[mcpClient.js, .callTool(), .constructor(), ._handleMessage(), ._initialize(), ._notify()]
- "services_powerbiclient": "powerbiClient.js" | kind=code-symbol | source=server/services/powerbiClient.js:L1 | neighbors=[index.js, discover(), executeDax(), get(), getDataset(), getRefreshHistory()]
- "trace_sw_bundle_bo": "bo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, mo, po, pr, .load(), .storage()]
- "trace_sw_bundle_mo": "mo" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, bo(), .constructor(), .entryNames(), .hasEntry(), .isLive()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-001.json

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
