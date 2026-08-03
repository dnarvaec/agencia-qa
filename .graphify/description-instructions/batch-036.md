# Node Description Batch 37 of 41

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

- "server_index_getagents": "{ getAgents }" | kind=code-symbol | source=server/index.js:L10 | neighbors=[index.js]
- "server_index_gracefulshutdown": "gracefulShutdown()" | kind=code-symbol | source=server/index.js:L167 | neighbors=[index.js]
- "server_index_http": "http" | kind=code-symbol | source=server/index.js:L6 | neighbors=[index.js]
- "server_index_io": "io" | kind=code-symbol | source=server/index.js:L18 | neighbors=[index.js]
- "server_index_mcpclient": "MCPClient" | kind=code-symbol | source=server/index.js:L12 | neighbors=[index.js]
- "server_index_path": "path" | kind=code-symbol | source=server/index.js:L8 | neighbors=[index.js]
- "server_index_powerbiclient": "powerbiClient" | kind=code-symbol | source=server/index.js:L14 | neighbors=[index.js]
- "server_index_runagent": "{ runAgent }" | kind=code-symbol | source=server/index.js:L11 | neighbors=[index.js]
- "server_index_server": "{ Server }" | kind=code-symbol | source=server/index.js:L7 | neighbors=[index.js]
- "services_agentreader_agents_dir": "AGENTS_DIR" | kind=code-symbol | source=server/services/agentReader.js:L6 | neighbors=[agentReader.js]
- "services_agentreader_fs": "fs" | kind=code-symbol | source=server/services/agentReader.js:L3 | neighbors=[agentReader.js]
- "services_agentreader_path": "path" | kind=code-symbol | source=server/services/agentReader.js:L4 | neighbors=[agentReader.js]
- "services_agentreader_skills_dir": "SKILLS_DIR" | kind=code-symbol | source=server/services/agentReader.js:L7 | neighbors=[agentReader.js]
- "services_agentrunner_azureopenai": "{ AzureOpenAI }" | kind=code-symbol | source=server/services/agentRunner.js:L14 | neighbors=[agentRunner.js]
- "services_agentrunner_getagent_getskills": "{ getAgent, getSkills }" | kind=code-symbol | source=server/services/agentRunner.js:L16 | neighbors=[agentRunner.js]
- "services_agentrunner_workspace_tool_defs_callworkspacetool": "{ WORKSPACE_TOOL_DEFS,\r\n  callWorkspaceTool }" | kind=code-symbol | source=server/services/agentRunner.js:L18 | neighbors=[agentRunner.js]
- "services_fabricclient_https": "https" | kind=code-symbol | source=server/services/fabricClient.js:L7 | neighbors=[fabricClient.js]
- "services_mcpclient_allclients": "_allClients" | kind=code-symbol | source=server/services/mcpClient.js:L14 | neighbors=[mcpClient.js]
- "services_mcpclient_mcpclient_constructor": ".constructor()" | kind=code-symbol | source=server/services/mcpClient.js:L24 | neighbors=[MCPClient]
- "services_mcpclient_mcpclient_handlemessage": "._handleMessage()" | kind=code-symbol | source=server/services/mcpClient.js:L127 | neighbors=[MCPClient]
- "services_mcpclient_mcpclient_start": ".start()" | kind=code-symbol | source=server/services/mcpClient.js:L40 | neighbors=[MCPClient]
- "services_mcpclient_readline": "readline" | kind=code-symbol | source=server/services/mcpClient.js:L9 | neighbors=[mcpClient.js]
- "services_mcpclient_spawn": "{ spawn }" | kind=code-symbol | source=server/services/mcpClient.js:L8 | neighbors=[mcpClient.js]
- "services_mcpmanager_mcp_server_configs": "MCP_SERVER_CONFIGS" | kind=code-symbol | source=server/services/mcpManager.js:L16 | neighbors=[mcpManager.js]
- "services_mcpmanager_mcpmanager_calltool": ".callTool()" | kind=code-symbol | source=server/services/mcpManager.js:L152 | neighbors=[MCPManager]
- "services_mcpmanager_mcpmanager_cleanup": ".cleanup()" | kind=code-symbol | source=server/services/mcpManager.js:L181 | neighbors=[MCPManager]
- "services_mcpmanager_mcpmanager_constructor": ".constructor()" | kind=code-symbol | source=server/services/mcpManager.js:L46 | neighbors=[MCPManager]
- "services_mcpmanager_mcpmanager_getservertools": ".getServerTools()" | kind=code-symbol | source=server/services/mcpManager.js:L91 | neighbors=[MCPManager]
- "services_mcpmanager_path": "path" | kind=code-symbol | source=server/services/mcpManager.js:L8 | neighbors=[mcpManager.js]
- "services_mcpmanager_workspace_root": "WORKSPACE_ROOT" | kind=code-symbol | source=server/services/mcpManager.js:L11 | neighbors=[mcpManager.js]
- "services_powerbiclient_https": "https" | kind=code-symbol | source=server/services/powerbiClient.js:L6 | neighbors=[powerbiClient.js]
- "services_workspacetools_fs": "fs" | kind=code-symbol | source=server/services/workspaceTools.js:L20 | neighbors=[workspaceTools.js]
- "services_workspacetools_getskillcontent": "{ getSkillContent }" | kind=code-symbol | source=server/services/workspaceTools.js:L25 | neighbors=[workspaceTools.js]
- "services_workspacetools_glob": "glob" | kind=code-symbol | source=server/services/workspaceTools.js:L22 | neighbors=[workspaceTools.js]
- "services_workspacetools_http": "http" | kind=code-symbol | source=server/services/workspaceTools.js:L24 | neighbors=[workspaceTools.js]
- "services_workspacetools_https": "https" | kind=code-symbol | source=server/services/workspaceTools.js:L23 | neighbors=[workspaceTools.js]
- "services_workspacetools_path": "path" | kind=code-symbol | source=server/services/workspaceTools.js:L21 | neighbors=[workspaceTools.js]
- "services_workspacetools_workspace_root": "WORKSPACE_ROOT" | kind=code-symbol | source=server/services/workspaceTools.js:L27 | neighbors=[workspaceTools.js]
- "steps_cambiar_modulo_steps_given_when_then": "{ Given, When, Then }" | kind=code-symbol | source=tests/Automatizacion web/1033/steps/cambiar-modulo.steps.ts:L5 | neighbors=[cambiar-modulo.steps.ts]
- "steps_crear_ticket_steps_given_when_then": "{ Given, When, Then }" | kind=code-symbol | source=tests/Automatizacion web/1121/steps/crear-ticket.steps.ts:L5 | neighbors=[crear-ticket.steps.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-036.json

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
