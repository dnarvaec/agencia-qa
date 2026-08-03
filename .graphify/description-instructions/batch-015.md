# Node Description Batch 16 of 41

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

- "assets_defaultsettingsview_d31xz8zv_xa_shouldgeneratekeypressfor": "._shouldGenerateKeyPressFor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .deepEventTarget(), tl()]
- "assets_defaultsettingsview_d31xz8zv_xd_atindentedcomment": ".atIndentedComment()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[Xd, .blockMap(), .blockSequence()]
- "assets_defaultsettingsview_d31xz8zv_xd_blockscalar": ".blockScalar()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[Xd, .pop(), .step()]
- "assets_defaultsettingsview_d31xz8zv_xd_documentend": ".documentEnd()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[Xd, .pop(), .step()]
- "assets_defaultsettingsview_d31xz8zv_xo": "Xo()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), Zn()]
- "assets_defaultsettingsview_d31xz8zv_xr": "xr()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L140 | neighbors=[defaultSettingsView-D31xz8zv.js, a_(), Tc()]
- "assets_defaultsettingsview_d31xz8zv_xv": "xv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, br(), yr()]
- "assets_defaultsettingsview_d31xz8zv_y": "y_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, m2(), rd()]
- "assets_defaultsettingsview_d31xz8zv_yb": "yb" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[defaultSettingsView-D31xz8zv.js, ._throwError(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_ye": "yE()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L101 | neighbors=[defaultSettingsView-D31xz8zv.js, B_(), mE()]
- "assets_defaultsettingsview_d31xz8zv_yh_onmouseleave": ".onMouseLeave()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[yh, .deepEventTarget(), ._reset()]
- "assets_defaultsettingsview_d31xz8zv_yh_onmousemove": ".onMouseMove()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[yh, .generateSelector(), .deepEventTarget()]
- "assets_defaultsettingsview_d31xz8zv_yh_reset": "._reset()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[yh, .onMouseLeave(), .onScroll()]
- "assets_defaultsettingsview_d31xz8zv_yo": "Yo" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_yv": "yv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, ct(), xt()]
- "assets_defaultsettingsview_d31xz8zv_yx": "yx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L26 | neighbors=[defaultSettingsView-D31xz8zv.js, bx(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_za": "Za()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, al(), rl()]
- "assets_defaultsettingsview_d31xz8zv_zn": "Zn()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), Xo()]
- "assets_defaultsettingsview_d31xz8zv_zs": "zS()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, bc(), us]
- "assets_urlmatch_byqriqwr": "urlMatch-BYQrIQwR.js" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/urlMatch-BYQrIQwR.js:L1 | neighbors=[c(), n(), s()]
- "playwright_config": "playwright.config.ts" | kind=code-symbol | source=playwright.config.ts:L1 | neighbors=[bddWeb1033TestDir, bddWeb1037TestDir, bddWeb1121TestDir]
- "public_app_handleprogress": "handleProgress()" | kind=code-symbol | source=public/app.js:L74 | neighbors=[app.js, escHtml(), friendlyToolMessage()]
- "public_app_renderdownloads": "renderDownloads()" | kind=code-symbol | source=public/app.js:L233 | neighbors=[app.js, finishRun(), escHtml()]
- "public_app_setstatus": "setStatus()" | kind=code-symbol | source=public/app.js:L273 | neighbors=[app.js, finishRun(), startRun()]
- "public_app_showstate": "showState()" | kind=code-symbol | source=public/app.js:L222 | neighbors=[app.js, finishRun(), startRun()]
- "public_app_startrun": "startRun()" | kind=code-symbol | source=public/app.js:L178 | neighbors=[app.js, setStatus(), showState()]
- "services_agentreader_getagent": "getAgent()" | kind=code-symbol | source=server/services/agentReader.js:L80 | neighbors=[agentReader.js, getAgents(), agentRunner.js]
- "services_agentreader_getagents": "getAgents()" | kind=code-symbol | source=server/services/agentReader.js:L61 | neighbors=[index.js, agentReader.js, getAgent()]
- "services_agentreader_getskill": "getSkill()" | kind=code-symbol | source=server/services/agentReader.js:L124 | neighbors=[agentReader.js, getSkills(), getSkillContent()]
- "services_agentreader_getskillcontent": "getSkillContent()" | kind=code-symbol | source=server/services/agentReader.js:L135 | neighbors=[agentReader.js, getSkill(), workspaceTools.js]
- "services_agentreader_getskills": "getSkills()" | kind=code-symbol | source=server/services/agentReader.js:L93 | neighbors=[agentReader.js, getSkill(), agentRunner.js]
- "services_agentrunner_extractmcptext": "extractMCPText()" | kind=code-symbol | source=server/services/agentRunner.js:L55 | neighbors=[agentRunner.js, stripHtml(), runAgent()]
- "services_fabricclient_explore": "explore()" | kind=code-symbol | source=server/services/fabricClient.js:L67 | neighbors=[fabricClient.js, get(), getToken()]
- "services_fabricclient_getlakehousetables": "getLakehouseTables()" | kind=code-symbol | source=server/services/fabricClient.js:L151 | neighbors=[fabricClient.js, get(), getToken()]
- "services_fabricclient_getpipelineruns": "getPipelineRuns()" | kind=code-symbol | source=server/services/fabricClient.js:L138 | neighbors=[fabricClient.js, get(), getToken()]
- "services_fabricclient_health": "health()" | kind=code-symbol | source=server/services/fabricClient.js:L103 | neighbors=[fabricClient.js, get(), getToken()]
- "services_fabricclient_runpipeline": "runPipeline()" | kind=code-symbol | source=server/services/fabricClient.js:L129 | neighbors=[fabricClient.js, getToken(), postJson()]
- "services_mcpclient_mcpclient_initialize": "._initialize()" | kind=code-symbol | source=server/services/mcpClient.js:L112 | neighbors=[MCPClient, ._notify(), ._request()]
- "services_mcpclient_mcpclient_request": "._request()" | kind=code-symbol | source=server/services/mcpClient.js:L143 | neighbors=[MCPClient, .callTool(), ._initialize()]
- "services_mcpmanager_mcpmanager_initializeforagent": ".initializeForAgent()" | kind=code-symbol | source=server/services/mcpManager.js:L56 | neighbors=[MCPManager, detectNeededServers(), MCPClient]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-015.json

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
