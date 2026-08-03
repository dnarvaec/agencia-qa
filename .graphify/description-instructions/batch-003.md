# Node Description Batch 4 of 41

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

- "assets_defaultsettingsview_d31xz8zv_ls_pushcount": ".pushCount()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L256 | neighbors=[lS, .parseBlockStart(), .parseDocument(), .parseFlowCollection(), .parseLineStart(), .parseStream()]
- "assets_defaultsettingsview_d31xz8zv_n2": "n2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, .close(), .constructor(), .onclose(), .onerror(), .onmessage()]
- "assets_defaultsettingsview_d31xz8zv_or": "Or()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, al(), B_(), hv(), .querySelector(), tv()]
- "assets_defaultsettingsview_d31xz8zv_ot": "OT" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, .add(), .atDocument(), .clone(), .constructor(), .tagName()]
- "assets_defaultsettingsview_d31xz8zv_tr": "Tr" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L177 | neighbors=[defaultSettingsView-D31xz8zv.js, .add(), .constructor(), .from(), .get(), .set()]
- "assets_defaultsettingsview_d31xz8zv_uc": "uc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, ct(), ni(), Hi(), iv(), Nr()]
- "assets_defaultsettingsview_d31xz8zv_vs": "vs()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L124 | neighbors=[defaultSettingsView-D31xz8zv.js, c_(), .toJS(), ll(), Qv(), Ss()]
- "assets_defaultsettingsview_d31xz8zv_vt": "vt" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), qE(), ut(), .constructor(), .toJSON()]
- "assets_defaultsettingsview_d31xz8zv_wx": "wx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L42 | neighbors=[defaultSettingsView-D31xz8zv.js, .resolve(), .dispatchEvent(), bx(), Jh(), Sx()]
- "assets_defaultsettingsview_d31xz8zv_xa_ondblclick": ".onDblClick()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, el(), Gh(), nl(), ._actionInProgress(), ._cancelPendingClickAction()]
- "assets_defaultsettingsview_d31xz8zv_xd_flowcollection": ".flowCollection()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L260 | neighbors=[Xd, fr(), Go(), .flowScalar(), .lineEnd(), .pop()]
- "assets_defaultsettingsview_d31xz8zv_xd_startblockvalue": ".startBlockValue()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[Xd, .blockMap(), .blockSequence(), .document(), .flowCollection(), fr()]
- "assets_defaultsettingsview_d31xz8zv_xn": "xn()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L239 | neighbors=[defaultSettingsView-D31xz8zv.js, .continueScalar(), .parseBlockStart(), .parseFlowCollection(), .parseLineStart(), .parsePlainScalar()]
- "assets_defaultsettingsview_d31xz8zv_yn": "yn()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[defaultSettingsView-D31xz8zv.js, .toJSON(), .toJSON(), .toJS(), .toJS(), rS()]
- "pages_index_dashboardpage": "DashboardPage" | kind=code-symbol | source=tests/Automatizacion web/1033/pages/index.ts:L90 | neighbors=[fixtures.ts, index.ts, .clickCambiarModulo(), .constructor(), .hoverOpcionesDeAusencia(), .verifyCambiarModuloEnabled()]
- "pages_index_myticketspage": "MyTicketsPage" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L107 | neighbors=[fixtures.ts, index.ts, .clickCrearTicket(), .constructor(), .getEnProgresoCount(), .navigate()]
- "services_mcpmanager": "mcpManager.js" | kind=code-symbol | source=server/services/mcpManager.js:L1 | neighbors=[agentRunner.js, mcpClient.js, detectNeededServers(), MCP_SERVER_CONFIGS, MCPClient, MCPManager]
- "services_mcpmanager_mcpmanager": "MCPManager" | kind=code-symbol | source=server/services/mcpManager.js:L45 | neighbors=[mcpManager.js, .callTool(), .cleanup(), .constructor(), .getAllTools(), .getServerTools()]
- "trace_sw_bundle_dr": "dr" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[sw.bundle.js, .constructor(), .getOrCompute(), ft(), read_buf(), read_byte()]
- "trace_sw_bundle_ss": "ss()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Ai(), Oi(), Ci(), Ii(), J()]
- "trace_sw_bundle_st": "St()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Bn, is(), En(), os(), .append()]
- "trace_sw_bundle_tr": "tr" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js, .addFrameSnapshot(), .closestScreenshot(), .constructor(), .render(), .resourceByUrl()]
- "trace_uimode_c2efnu2p_me": "me" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .asModel(), .constructor(), ._createReporter(), ._handleOnError(), .processGlobalReport()]
- "1033_fixtures": "fixtures.ts" | kind=code-symbol | source=tests/Automatizacion web/1033/fixtures.ts:L1 | neighbors=[test, index.ts, DashboardPage, LoginPage, RolPage, cambiar-modulo.steps.ts]
- "1069_1069_api_spec": "1069.api.spec.ts" | kind=code-symbol | source=tests/Automatizacion api/1069/1069.api.spec.ts:L1 | neighbors=[lakehouses, PIPELINES, pollPipelineStatus(), TABLE_PATTERNS, tableExistsInAnyLakehouse(), api-helper.ts]
- "assets_defaultsettingsview_d31xz8zv_a_ariasnapshot": "._ariaSnapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), .ariaSnapshotForRecorder(), .generateSelector(), .onClick(), .onContextMenu(), .onInput()]
- "assets_defaultsettingsview_d31xz8zv_bc": "bc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, at(), .compose(), .streamInfo(), pc(), Xd]
- "assets_defaultsettingsview_d31xz8zv_bh_commitassertvalue": "._commitAssertValue()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, ._generateAction(), .flashToolSucceeded(), .recordAction(), .setMode(), .onClick()]
- "assets_defaultsettingsview_d31xz8zv_bh_showdialog": "._showDialog()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bh, .onClick(), ._generateAction(), ._showTextDialog(), .flashToolSucceeded(), .recordAction()]
- "assets_defaultsettingsview_d31xz8zv_bi": "Bi()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L124 | neighbors=[defaultSettingsView-D31xz8zv.js, cr, fv(), Qv(), Ss(), Vh()]
- "assets_defaultsettingsview_d31xz8zv_br": "br()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, ab(), mT(), xv(), .ariaSnapshotForRecorder(), .incrementalAriaSnapshot()]
- "assets_defaultsettingsview_d31xz8zv_bv_queryselector": ".querySelector()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .checkDeprecatedSelectorUsage(), .querySelectorAll(), .strictModeViolationError(), ._querySelector(), Or()]
- "assets_defaultsettingsview_d31xz8zv_bv_retarget": ".retarget()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .elementState(), .expectSingleElement(), .fill(), .selectOptions(), .selectText()]
- "assets_defaultsettingsview_d31xz8zv_cc_eof": "._eof()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._isWhitespace(), .parse(), ._readAttributes(), ._readIdentifier(), ._readRegex()]
- "assets_defaultsettingsview_d31xz8zv_cc_parse": ".parse()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L101 | neighbors=[cc, ._eof(), ._readAttributes(), ._readIdentifier(), ._readStringOrRegex(), ._skipWhitespace()]
- "assets_defaultsettingsview_d31xz8zv_fs": "fs()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, c_(), gn(), Qa(), Ra(), u0]
- "assets_defaultsettingsview_d31xz8zv_hi": "Hi()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, at(), fv(), iv(), pn(), uc()]
- "assets_defaultsettingsview_d31xz8zv_hv": "hv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, cv(), Ih(), mA(), Or(), yA()]
- "assets_defaultsettingsview_d31xz8zv_k2_sendmessagenoreply": "._sendMessageNoReply()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[k2, .openNoReply(), .pingNoReply(), .resizeTerminalNoReply(), ._sendMessage(), .stopTestsNoReply()]
- "assets_defaultsettingsview_d31xz8zv_ls_parseblockscalar": ".parseBlockScalar()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L248 | neighbors=[lS, .continueScalar(), .parseLineStart(), .pushToIndex(), .setNext(), .parseDocument()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-003.json

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
