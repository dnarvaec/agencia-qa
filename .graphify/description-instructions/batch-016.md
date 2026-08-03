# Node Description Batch 17 of 41

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

- "services_powerbiclient_discover": "discover()" | kind=code-symbol | source=server/services/powerbiClient.js:L50 | neighbors=[powerbiClient.js, get(), getToken()]
- "services_powerbiclient_getdataset": "getDataset()" | kind=code-symbol | source=server/services/powerbiClient.js:L103 | neighbors=[powerbiClient.js, get(), getToken()]
- "services_powerbiclient_getrefreshhistory": "getRefreshHistory()" | kind=code-symbol | source=server/services/powerbiClient.js:L66 | neighbors=[powerbiClient.js, get(), getToken()]
- "services_workspacetools_createdirectory": "createDirectory()" | kind=code-symbol | source=server/services/workspaceTools.js:L242 | neighbors=[workspaceTools.js, callWorkspaceTool(), safePath()]
- "services_workspacetools_listdirectory": "listDirectory()" | kind=code-symbol | source=server/services/workspaceTools.js:L257 | neighbors=[workspaceTools.js, callWorkspaceTool(), safePath()]
- "services_workspacetools_readfile": "readFile()" | kind=code-symbol | source=server/services/workspaceTools.js:L203 | neighbors=[workspaceTools.js, callWorkspaceTool(), safePath()]
- "services_workspacetools_renamefile": "renameFile()" | kind=code-symbol | source=server/services/workspaceTools.js:L248 | neighbors=[workspaceTools.js, callWorkspaceTool(), safePath()]
- "services_workspacetools_writefile": "writeFile()" | kind=code-symbol | source=server/services/workspaceTools.js:L211 | neighbors=[workspaceTools.js, callWorkspaceTool(), safePath()]
- "steps_cambiar_modulo_steps": "cambiar-modulo.steps.ts" | kind=code-symbol | source=tests/Automatizacion web/1033/steps/cambiar-modulo.steps.ts:L1 | neighbors=[fixtures.ts, test, { Given, When, Then }]
- "steps_crear_ticket_steps": "crear-ticket.steps.ts" | kind=code-symbol | source=tests/Automatizacion web/1121/steps/crear-ticket.steps.ts:L1 | neighbors=[fixtures.ts, test, { Given, When, Then }]
- "trace_sw_bundle_a": "_a" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .readUint8Array()]
- "trace_sw_bundle_aa": "aa" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .readUint8Array()]
- "trace_sw_bundle_ai": "Ai()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, J(), ss()]
- "trace_sw_bundle_crypt": "_crypt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, decrypt(), encrypt()]
- "trace_sw_bundle_cs": "cs()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]
- "trace_sw_bundle_de": "De()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getEntriesGenerator(), .getData()]
- "trace_sw_bundle_di": "di()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), rs()]
- "trace_sw_bundle_dn": "Dn" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .getEntriesGenerator()]
- "trace_sw_bundle_dr_getorcompute": ".getOrCompute()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[dr, .get(), .render()]
- "trace_sw_bundle_ds": "ds()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, gi, .constructor()]
- "trace_sw_bundle_eo": "Eo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L5 | neighbors=[sw.bundle.js, .get(), yo()]
- "trace_sw_bundle_finalize": "finalize()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, _block(), reset()]
- "trace_sw_bundle_ge": "Ge()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ki, yi]
- "trace_sw_bundle_gi": "gi" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ds(), Zi()]
- "trace_sw_bundle_gs": "gs()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]
- "trace_sw_bundle_hr_appendtrace": ".appendTrace()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[hr, ._appendEvent(), .load()]
- "trace_sw_bundle_hr_modernize_event_4_to_5": "._modernize_event_4_to_5()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._modernize_4_to_5(), .get()]
- "trace_sw_bundle_hr_pageentry": "._pageEntry()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._innerAppendEvent(), .get()]
- "trace_sw_bundle_inccounter": "incCounter()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, calculate(), incWord()]
- "trace_sw_bundle_inflateend": "inflateEnd()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, fr(), mr()]
- "trace_sw_bundle_io": "io()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, B(), Vs()]
- "trace_sw_bundle_is": "is()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, St(), Ve]
- "trace_sw_bundle_it": "it" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .writeUint8Array()]
- "trace_sw_bundle_it_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[it, ds(), ji]
- "trace_sw_bundle_je": "Je" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .init()]
- "trace_sw_bundle_ji": "ji" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]
- "trace_sw_bundle_ke": "Ke" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]
- "trace_sw_bundle_ki": "ki" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Ge(), .constructor()]
- "trace_sw_bundle_la": "la" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .getData()]
- "trace_sw_bundle_ls": "ls()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-016.json

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
