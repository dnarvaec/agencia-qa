# Node Description Batch 25 of 41

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

- "assets_defaultsettingsview_d31xz8zv_xa_onscroll": ".onScroll()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._resetHoveredModel()]
- "assets_defaultsettingsview_d31xz8zv_xa_shouldignoremouseevent": "._shouldIgnoreMouseEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .deepEventTarget()]
- "assets_defaultsettingsview_d31xz8zv_xd_end": ".end()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[Xd, .pop()]
- "assets_defaultsettingsview_d31xz8zv_xd_parse": ".parse()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[Xd, .lex()]
- "assets_defaultsettingsview_d31xz8zv_xd_stream": ".stream()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[Xd, .step()]
- "assets_defaultsettingsview_d31xz8zv_xh": "xh()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L188 | neighbors=[defaultSettingsView-D31xz8zv.js, fc()]
- "assets_defaultsettingsview_d31xz8zv_xs": "xS" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L180 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor()]
- "assets_defaultsettingsview_d31xz8zv_xx": "xx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L50 | neighbors=[defaultSettingsView-D31xz8zv.js, wx()]
- "assets_defaultsettingsview_d31xz8zv_y2": "y2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, Gt()]
- "assets_defaultsettingsview_d31xz8zv_yh_onkeydown": ".onKeyDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[yh, .setMode()]
- "assets_defaultsettingsview_d31xz8zv_yh_onscroll": ".onScroll()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[yh, ._reset()]
- "assets_defaultsettingsview_d31xz8zv_yt": "yT()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, lc()]
- "assets_defaultsettingsview_d31xz8zv_yy": "Yy()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, .appendChild()]
- "assets_defaultsettingsview_d31xz8zv_zx_tosource": ".toSource()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[zx(), ul()]
- "assets_urlmatch_byqriqwr_n": "n()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/urlMatch-BYQrIQwR.js:L1 | neighbors=[urlMatch-BYQrIQwR.js, s()]
- "assets_urlmatch_byqriqwr_s": "s()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/urlMatch-BYQrIQwR.js:L1 | neighbors=[urlMatch-BYQrIQwR.js, n()]
- "helpers_api_helper_maskheaders": "maskHeaders()" | kind=code-symbol | source=tests/Automatizacion api/helpers/api-helper.ts:L3 | neighbors=[api-helper.ts, apiStep()]
- "helpers_api_helper_tryjson": "tryJson()" | kind=code-symbol | source=tests/Automatizacion api/helpers/api-helper.ts:L12 | neighbors=[api-helper.ts, apiStep()]
- "public_app_friendlytoolmessage": "friendlyToolMessage()" | kind=code-symbol | source=public/app.js:L58 | neighbors=[app.js, handleProgress()]
- "public_app_renderagentcard": "renderAgentCard()" | kind=code-symbol | source=public/app.js:L152 | neighbors=[app.js, escHtml()]
- "services_agentreader_parsefrontmatter": "parseFrontmatter()" | kind=code-symbol | source=server/services/agentReader.js:L12 | neighbors=[agentReader.js, resolveEnvVars()]
- "services_agentreader_resolveenvvars": "resolveEnvVars()" | kind=code-symbol | source=server/services/agentReader.js:L47 | neighbors=[agentReader.js, parseFrontmatter()]
- "services_agentrunner_mcpmanager": "MCPManager" | kind=code-symbol | source=server/services/agentRunner.js:L17 | neighbors=[agentRunner.js, runAgent()]
- "services_agentrunner_striphtml": "stripHtml()" | kind=code-symbol | source=server/services/agentRunner.js:L35 | neighbors=[agentRunner.js, extractMCPText()]
- "services_fabricclient_post": "post()" | kind=code-symbol | source=server/services/fabricClient.js:L10 | neighbors=[fabricClient.js, getToken()]
- "services_fabricclient_postjson": "postJson()" | kind=code-symbol | source=server/services/fabricClient.js:L37 | neighbors=[fabricClient.js, runPipeline()]
- "services_mcpclient_mcpclient_calltool": ".callTool()" | kind=code-symbol | source=server/services/mcpClient.js:L172 | neighbors=[MCPClient, ._request()]
- "services_mcpclient_mcpclient_notify": "._notify()" | kind=code-symbol | source=server/services/mcpClient.js:L160 | neighbors=[MCPClient, ._initialize()]
- "services_mcpclient_mcpclient_stop": ".stop()" | kind=code-symbol | source=server/services/mcpClient.js:L93 | neighbors=[MCPClient, .stopAll()]
- "services_mcpclient_mcpclient_stopall": ".stopAll()" | kind=code-symbol | source=server/services/mcpClient.js:L103 | neighbors=[MCPClient, .stop()]
- "services_mcpmanager_detectneededservers": "detectNeededServers()" | kind=code-symbol | source=server/services/mcpManager.js:L27 | neighbors=[mcpManager.js, .initializeForAgent()]
- "services_mcpmanager_mcpclient": "MCPClient" | kind=code-symbol | source=server/services/mcpManager.js:L9 | neighbors=[mcpManager.js, .initializeForAgent()]
- "services_mcpmanager_mcpmanager_getalltools": ".getAllTools()" | kind=code-symbol | source=server/services/mcpManager.js:L99 | neighbors=[MCPManager, .toOpenAITools()]
- "services_mcpmanager_mcpmanager_toopenaitools": ".toOpenAITools()" | kind=code-symbol | source=server/services/mcpManager.js:L118 | neighbors=[MCPManager, .getAllTools()]
- "services_powerbiclient_executedax": "executeDax()" | kind=code-symbol | source=server/services/powerbiClient.js:L86 | neighbors=[powerbiClient.js, getToken()]
- "services_powerbiclient_post": "post()" | kind=code-symbol | source=server/services/powerbiClient.js:L8 | neighbors=[powerbiClient.js, getToken()]
- "services_powerbiclient_triggerrefresh": "triggerRefresh()" | kind=code-symbol | source=server/services/powerbiClient.js:L72 | neighbors=[powerbiClient.js, getToken()]
- "services_workspacetools_fetchurl": "fetchUrl()" | kind=code-symbol | source=server/services/workspaceTools.js:L315 | neighbors=[workspaceTools.js, callWorkspaceTool()]
- "services_workspacetools_filesearch": "fileSearch()" | kind=code-symbol | source=server/services/workspaceTools.js:L267 | neighbors=[workspaceTools.js, callWorkspaceTool()]
- "services_workspacetools_loadskill": "loadSkill()" | kind=code-symbol | source=server/services/workspaceTools.js:L353 | neighbors=[workspaceTools.js, callWorkspaceTool()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-024.json

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
