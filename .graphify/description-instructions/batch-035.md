# Node Description Batch 36 of 41

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

- "pages_index_myticketspage_constructor": ".constructor()" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L108 | neighbors=[MyTicketsPage]
- "pages_index_myticketspage_getenprogresocount": ".getEnProgresoCount()" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L132 | neighbors=[MyTicketsPage]
- "pages_index_myticketspage_navigate": ".navigate()" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L110 | neighbors=[MyTicketsPage]
- "pages_index_myticketspage_verifypageloaded": ".verifyPageLoaded()" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L125 | neighbors=[MyTicketsPage]
- "pages_index_myticketspage_verifyticketcountincreased": ".verifyTicketCountIncreased()" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L148 | neighbors=[MyTicketsPage]
- "pages_index_rolpage_constructor": ".constructor()" | kind=code-symbol | source=tests/Automatizacion web/1033/pages/index.ts:L47 | neighbors=[RolPage]
- "pages_index_rolpage_selectrol": ".selectRol()" | kind=code-symbol | source=tests/Automatizacion web/1033/pages/index.ts:L56 | neighbors=[RolPage]
- "pages_index_rolpage_verifynoalerts": ".verifyNoAlerts()" | kind=code-symbol | source=tests/Automatizacion web/1033/pages/index.ts:L71 | neighbors=[RolPage]
- "pages_index_rolpage_verifyvisible": ".verifyVisible()" | kind=code-symbol | source=tests/Automatizacion web/1033/pages/index.ts:L62 | neighbors=[RolPage]
- "pages_index_rolpage_waitforload": ".waitForLoad()" | kind=code-symbol | source=tests/Automatizacion web/1033/pages/index.ts:L49 | neighbors=[RolPage]
- "playwright_config_bddweb1033testdir": "bddWeb1033TestDir" | kind=code-symbol | source=playwright.config.ts:L22 | neighbors=[playwright.config.ts]
- "playwright_config_bddweb1037testdir": "bddWeb1037TestDir" | kind=code-symbol | source=playwright.config.ts:L4 | neighbors=[playwright.config.ts]
- "playwright_config_bddweb1121testdir": "bddWeb1121TestDir" | kind=code-symbol | source=playwright.config.ts:L13 | neighbors=[playwright.config.ts]
- "public_app_activityfeed": "activityFeed" | kind=code-symbol | source=public/app.js:L22 | neighbors=[app.js]
- "public_app_activityidle": "activityIdle" | kind=code-symbol | source=public/app.js:L19 | neighbors=[app.js]
- "public_app_activityresult": "activityResult" | kind=code-symbol | source=public/app.js:L21 | neighbors=[app.js]
- "public_app_activityrunning": "activityRunning" | kind=code-symbol | source=public/app.js:L20 | neighbors=[app.js]
- "public_app_agentcard": "agentCard" | kind=code-symbol | source=public/app.js:L12 | neighbors=[app.js]
- "public_app_agents": "agents" | kind=code-symbol | source=public/app.js:L29 | neighbors=[app.js]
- "public_app_agentselect": "agentSelect" | kind=code-symbol | source=public/app.js:L11 | neighbors=[app.js]
- "public_app_clearbtn": "clearBtn" | kind=code-symbol | source=public/app.js:L16 | neighbors=[app.js]
- "public_app_downloadsbar": "downloadsBar" | kind=code-symbol | source=public/app.js:L17 | neighbors=[app.js]
- "public_app_downloadslist": "downloadsList" | kind=code-symbol | source=public/app.js:L18 | neighbors=[app.js]
- "public_app_feed_types": "FEED_TYPES" | kind=code-symbol | source=public/app.js:L56 | neighbors=[app.js]
- "public_app_loadagents": "loadAgents()" | kind=code-symbol | source=public/app.js:L114 | neighbors=[app.js]
- "public_app_promptinput": "promptInput" | kind=code-symbol | source=public/app.js:L13 | neighbors=[app.js]
- "public_app_resultdesc": "resultDesc" | kind=code-symbol | source=public/app.js:L26 | neighbors=[app.js]
- "public_app_resulticon": "resultIcon" | kind=code-symbol | source=public/app.js:L24 | neighbors=[app.js]
- "public_app_resulttitle": "resultTitle" | kind=code-symbol | source=public/app.js:L25 | neighbors=[app.js]
- "public_app_runbtn": "runBtn" | kind=code-symbol | source=public/app.js:L14 | neighbors=[app.js]
- "public_app_socket": "socket" | kind=code-symbol | source=public/app.js:L33 | neighbors=[app.js]
- "public_app_spinner_labels": "SPINNER_LABELS" | kind=code-symbol | source=public/app.js:L43 | neighbors=[app.js]
- "public_app_spinnerlabel": "spinnerLabel" | kind=code-symbol | source=public/app.js:L23 | neighbors=[app.js]
- "public_app_statusdot": "statusDot" | kind=code-symbol | source=public/app.js:L9 | neighbors=[app.js]
- "public_app_statuslabel": "statusLabel" | kind=code-symbol | source=public/app.js:L10 | neighbors=[app.js]
- "public_app_stopbtn": "stopBtn" | kind=code-symbol | source=public/app.js:L15 | neighbors=[app.js]
- "server_index_activeruns": "activeRuns" | kind=code-symbol | source=server/index.js:L112 | neighbors=[index.js]
- "server_index_app": "app" | kind=code-symbol | source=server/index.js:L16 | neighbors=[index.js]
- "server_index_express": "express" | kind=code-symbol | source=server/index.js:L5 | neighbors=[index.js]
- "server_index_fabricclient": "fabricClient" | kind=code-symbol | source=server/index.js:L13 | neighbors=[index.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-035.json

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
