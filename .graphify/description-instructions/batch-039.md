# Node Description Batch 40 of 41

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

- "trace_sw_bundle_rr": "rr()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_si_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Si]
- "trace_sw_bundle_sr": "sr" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_ss_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ss()]
- "trace_sw_bundle_t": "_t()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_to": "to" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_tr_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[tr]
- "trace_sw_bundle_ts_init": ".init()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Ts]
- "trace_sw_bundle_ts_readuint8array": ".readUint8Array()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Ts]
- "trace_sw_bundle_ts_size": ".size()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Ts]
- "trace_sw_bundle_ue": "ue" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_ui": "ui()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_un": "Un" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_ut": "ut" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_ve_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Ve]
- "trace_sw_bundle_vr": "vr" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_wi_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Wi]
- "trace_sw_bundle_wn": "Wn" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_ws_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ws]
- "trace_sw_bundle_ws_getdata": ".getData()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ws]
- "trace_sw_bundle_xe": "Xe" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_xs_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[Xs]
- "trace_sw_bundle_xt": "Xt" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_z": "Z" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_sw_bundle_ze": "Ze" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js]
- "trace_uimode_c2efnu2p_a": "A" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js]
- "trace_uimode_c2efnu2p_ce_annotations": ".annotations()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[ce]
- "trace_uimode_c2efnu2p_ce_attachments": ".attachments()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[ce]
- "trace_uimode_c2efnu2p_ce_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[ce]
- "trace_uimode_c2efnu2p_ce_starttime": ".startTime()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[ce]
- "trace_uimode_c2efnu2p_ce_titlepath": ".titlePath()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[ce]
- "trace_uimode_c2efnu2p_de_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[de]
- "trace_uimode_c2efnu2p_de_starttime": ".startTime()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[de]
- "trace_uimode_c2efnu2p_et": "et" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js]
- "trace_uimode_c2efnu2p_ie": "Ie()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js]
- "trace_uimode_c2efnu2p_it": "It" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js]
- "trace_uimode_c2efnu2p_je": "je()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js]
- "trace_uimode_c2efnu2p_jt": "jt()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js]
- "trace_uimode_c2efnu2p_ke": "ke()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js]
- "trace_uimode_c2efnu2p_le_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[le]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-039.json

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
