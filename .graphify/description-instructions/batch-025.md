# Node Description Batch 26 of 41

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

- "services_workspacetools_textsearch": "textSearch()" | kind=code-symbol | source=server/services/workspaceTools.js:L281 | neighbors=[workspaceTools.js, callWorkspaceTool()]
- "services_workspacetools_workspace_tool_defs": "WORKSPACE_TOOL_DEFS" | kind=code-symbol | source=server/services/workspaceTools.js:L45 | neighbors=[agentRunner.js, workspaceTools.js]
- "trace_sw_bundle_at": "at()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getEntriesGenerator()]
- "trace_sw_bundle_ba": "ba()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, qe()]
- "trace_sw_bundle_bi": "bi" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor()]
- "trace_sw_bundle_ca": "ca" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor()]
- "trace_sw_bundle_ce": "Ce()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ns()]
- "trace_sw_bundle_ci": "Ci()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ss()]
- "trace_sw_bundle_da": "da" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor()]
- "trace_sw_bundle_decrypt": "decrypt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, _crypt()]
- "trace_sw_bundle_dt_readuint8array": ".readUint8Array()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[dt(), q()]
- "trace_sw_bundle_e": "_e" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .readable()]
- "trace_sw_bundle_en": "En()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, St()]
- "trace_sw_bundle_es": "es" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Nt()]
- "trace_sw_bundle_f": "_f()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, _block()]
- "trace_sw_bundle_fa_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[fa, gs()]
- "trace_sw_bundle_fa_init": ".init()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[fa, bs()]
- "trace_sw_bundle_fa_readuint8array": ".readUint8Array()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[fa, ys()]
- "trace_sw_bundle_fi": "fi()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getEntriesGenerator()]
- "trace_sw_bundle_fn": "Fn()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, yo()]
- "trace_sw_bundle_ft": "ft()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, dr]
- "trace_sw_bundle_gn": "Gn()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, mr()]
- "trace_sw_bundle_go": "go()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, yo()]
- "trace_sw_bundle_hr_actions": ".actions()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, .load()]
- "trace_sw_bundle_hr_modernize": "._modernize()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._appendEvent()]
- "trace_sw_bundle_hr_modernize_3_to_4": "._modernize_3_to_4()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._modernize_event_3_to_4()]
- "trace_sw_bundle_hr_modernize_4_to_5": "._modernize_4_to_5()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._modernize_event_4_to_5()]
- "trace_sw_bundle_hr_modernize_6_to_7": "._modernize_6_to_7()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._processedContextCreatedEvent()]
- "trace_sw_bundle_hr_modernize_event_3_to_4": "._modernize_event_3_to_4()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._modernize_3_to_4()]
- "trace_sw_bundle_hr_processedcontextcreatedevent": "._processedContextCreatedEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[hr, ._modernize_6_to_7()]
- "trace_sw_bundle_ii": "Ii()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ss()]
- "trace_sw_bundle_incword": "incWord()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, incCounter()]
- "trace_sw_bundle_inflate": "inflate()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, mr()]
- "trace_sw_bundle_inflateinit": "inflateInit()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, mr()]
- "trace_sw_bundle_js": "Js()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js, .load()]
- "trace_sw_bundle_li": "li" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor()]
- "trace_sw_bundle_mo_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[mo, ._readFile()]
- "trace_sw_bundle_mo_readblob": ".readBlob()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[mo, ._readEntry()]
- "trace_sw_bundle_mo_readtext": ".readText()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[mo, ._readEntry()]
- "trace_sw_bundle_mt": "Mt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js, .closestScreenshot()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-025.json

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
