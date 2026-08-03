# Node Description Batch 11 of 41

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

- "assets_defaultsettingsview_d31xz8zv_sc": "sc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, at(), Gt(), ys()]
- "assets_defaultsettingsview_d31xz8zv_sd": "sd" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), .constructor(), .toString()]
- "assets_defaultsettingsview_d31xz8zv_sv": "sv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, pn(), xt(), uc()]
- "assets_defaultsettingsview_d31xz8zv_ta_performaction": ".performAction()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[tA(), .generateSelector(), ._captureAutoExpectSnapshot(), ._performAction()]
- "assets_defaultsettingsview_d31xz8zv_ti": "ti()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, jT, Ka(), zT]
- "assets_defaultsettingsview_d31xz8zv_ub": "ub()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .fill(), Di(), Pa()]
- "assets_defaultsettingsview_d31xz8zv_v0": "v0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), at(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_vv": "vv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, fc(), GE(), rT()]
- "assets_defaultsettingsview_d31xz8zv_wo": "Wo()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[defaultSettingsView-D31xz8zv.js, .toJSON(), .resolve(), Bi()]
- "assets_defaultsettingsview_d31xz8zv_x0": "x0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), sl(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_xa_cancelpendingclickaction": "._cancelPendingClickAction()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._commitPendingClickAction(), .onClick(), .onDblClick()]
- "assets_defaultsettingsview_d31xz8zv_xa_consumedduetonomodel": "._consumedDueToNoModel()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .onClick(), .onContextMenu(), .onDblClick()]
- "assets_defaultsettingsview_d31xz8zv_xa_consumedduewrongtarget": "._consumedDueWrongTarget()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .deepEventTarget(), .onInput(), .onKeyDown()]
- "assets_defaultsettingsview_d31xz8zv_xa_oncontextmenu": ".onContextMenu()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._actionInProgress(), ._consumedDueToNoModel(), ._showActionListDialog()]
- "assets_defaultsettingsview_d31xz8zv_xa_onfocus": ".onFocus()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .generateSelector(), ._onFocus(), ._updateModelForHoveredElement()]
- "assets_defaultsettingsview_d31xz8zv_xa_updatehighlight": "._updateHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[.updateHighlight(), xA, ._resetHoveredModel(), ._updateModelForHoveredElement()]
- "assets_defaultsettingsview_d31xz8zv_xb": "xb()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, ov(), pd(), xt()]
- "assets_defaultsettingsview_d31xz8zv_xd_flowscalar": ".flowScalar()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L260 | neighbors=[Xd, .blockMap(), .flowCollection(), .startBlockValue()]
- "assets_defaultsettingsview_d31xz8zv_xd_next": ".next()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[Xd, jS(), .pop(), .step()]
- "assets_defaultsettingsview_d31xz8zv_zh": "Zh()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, e2(), f_, oE()]
- "assets_defaultsettingsview_d31xz8zv_zv": "zv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, jT, Ka(), dr()]
- "helpers_api_helper": "api-helper.ts" | kind=code-symbol | source=tests/Automatizacion api/helpers/api-helper.ts:L1 | neighbors=[1069.api.spec.ts, apiStep(), maskHeaders(), tryJson()]
- "helpers_api_helper_apistep": "apiStep()" | kind=code-symbol | source=tests/Automatizacion api/helpers/api-helper.ts:L16 | neighbors=[1069.api.spec.ts, api-helper.ts, maskHeaders(), tryJson()]
- "pages_index_microsoftoauthpage": "MicrosoftOAuthPage" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L8 | neighbors=[fixtures.ts, index.ts, .constructor(), .login()]
- "public_app_eschtml": "escHtml()" | kind=code-symbol | source=public/app.js:L278 | neighbors=[app.js, handleProgress(), renderAgentCard(), renderDownloads()]
- "public_app_finishrun": "finishRun()" | kind=code-symbol | source=public/app.js:L197 | neighbors=[app.js, renderDownloads(), setStatus(), showState()]
- "services_agentrunner_runagent": "runAgent()" | kind=code-symbol | source=server/services/agentRunner.js:L90 | neighbors=[index.js, agentRunner.js, extractMCPText(), MCPManager]
- "services_powerbiclient_get": "get()" | kind=code-symbol | source=server/services/powerbiClient.js:L22 | neighbors=[powerbiClient.js, discover(), getDataset(), getRefreshHistory()]
- "trace_sw_bundle_as": "as()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, os(), Bn, yn()]
- "trace_sw_bundle_block": "_block()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, _f(), finalize(), update()]
- "trace_sw_bundle_calculate": "calculate()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, encrypt(), incCounter(), update()]
- "trace_sw_bundle_co": "co()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, B(), be(), Vs()]
- "trace_sw_bundle_constructor": "constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, _precompute(), reset(), update()]
- "trace_sw_bundle_ct": "Ct" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .readUint8Array(), .getEntriesGenerator()]
- "trace_sw_bundle_digest": "digest()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, reset(), update(), encrypt()]
- "trace_sw_bundle_dt": "dt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .init(), .readUint8Array()]
- "trace_sw_bundle_fo": "fo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, B(), _o(), .getEntriesGenerator()]
- "trace_sw_bundle_fr": "fr()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[sw.bundle.js, inflateEnd(), read_byte(), reset()]
- "trace_sw_bundle_ha": "ha" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getData(), .init(), .writeUint8Array()]
- "trace_sw_bundle_hr_appendevent": "._appendEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._innerAppendEvent(), ._modernize(), .appendTrace()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-010.json

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
