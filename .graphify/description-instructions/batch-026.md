# Node Description Batch 27 of 41

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

- "trace_sw_bundle_ni": "Ni()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ns()]
- "trace_sw_bundle_nr": "nr" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js, read_byte()]
- "trace_sw_bundle_o": "_o()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, fo()]
- "trace_sw_bundle_oe": "oe()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Zn()]
- "trace_sw_bundle_po_readblob": ".readBlob()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[po, .get()]
- "trace_sw_bundle_po_readtext": ".readText()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[po, .get()]
- "trace_sw_bundle_po_resolvetraceuri": "._resolveTraceURI()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[po, .constructor()]
- "trace_sw_bundle_pr_storage": ".storage()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[bo(), pr]
- "trace_sw_bundle_precompute": "_precompute()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, constructor()]
- "trace_sw_bundle_qi": "qi()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, Wi]
- "trace_sw_bundle_qs_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Qs(), Vn()]
- "trace_sw_bundle_r_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[_r, dr]
- "trace_sw_bundle_r_hasresourceoverride": ".hasResourceOverride()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[_r, .serveResource()]
- "trace_sw_bundle_read_buf": "read_buf()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, dr]
- "trace_sw_bundle_rs_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[rs(), Ke]
- "trace_sw_bundle_s": "$s()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js, .serveResource()]
- "trace_sw_bundle_so_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[so, .getEntriesGenerator()]
- "trace_sw_bundle_tr_resourcebyurl": ".resourceByUrl()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[tr, .serveResource()]
- "trace_sw_bundle_tr_viewport": ".viewport()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[tr, .serveSnapshotInfo()]
- "trace_sw_bundle_ua_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ua, gs()]
- "trace_sw_bundle_ua_init": ".init()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ua, bs()]
- "trace_sw_bundle_ua_readuint8array": ".readUint8Array()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ua, ys()]
- "trace_sw_bundle_uo": "uo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ys()]
- "trace_sw_bundle_vi": "Vi()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, yi]
- "trace_sw_bundle_wr": "wr()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, bo()]
- "trace_sw_bundle_wt": "Wt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .load()]
- "trace_sw_bundle_xi": "Xi()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getData()]
- "trace_sw_bundle_xn_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Xn, Ve]
- "trace_sw_bundle_xo": "xo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L5 | neighbors=[sw.bundle.js, bo()]
- "trace_sw_bundle_xs_respondwithjson": "._respondWithJson()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[Xs, .serveSnapshotInfo()]
- "trace_sw_bundle_zi": "Zi()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, gi]
- "trace_uimode_c2efnu2p_be": "be()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .entries()]
- "trace_uimode_c2efnu2p_bt": "Bt()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .sortAndPropagateStatus()]
- "trace_uimode_c2efnu2p_ct": "ct()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, ._parseProject()]
- "trace_uimode_c2efnu2p_de_setstarttimenumber": ".setStartTimeNumber()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[de, ._onTestBegin()]
- "trace_uimode_c2efnu2p_e": "_e()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, __vite__mapDeps()]
- "trace_uimode_c2efnu2p_ee": "Ee()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L4 | neighbors=[uiMode.C2Efnu2P.js, .project()]
- "trace_uimode_c2efnu2p_fe": "fe()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, ._onEnd()]
- "trace_uimode_c2efnu2p_ge": "ge()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[uiMode.C2Efnu2P.js, .collectTestIds()]
- "trace_uimode_c2efnu2p_gt_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, tt]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-026.json

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
