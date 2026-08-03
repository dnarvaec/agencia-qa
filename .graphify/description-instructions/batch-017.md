# Node Description Batch 18 of 41

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

- "trace_sw_bundle_lt": "lt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[sw.bundle.js, .addFrameSnapshot(), .addResource()]
- "trace_sw_bundle_mn": "mn" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), Zn()]
- "trace_sw_bundle_mo_readfile": "._readFile()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[mo, .constructor(), ._readEntry()]
- "trace_sw_bundle_ne": "Ne()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ns(), ss()]
- "trace_sw_bundle_oi": "Oi()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ss(), Tt()]
- "trace_sw_bundle_os": "os()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, as(), St()]
- "trace_sw_bundle_pa": "pa()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, bs(), Vn()]
- "trace_sw_bundle_pi": "Pi" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]
- "trace_sw_bundle_po_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[po, ._resolveTraceURI(), .getEntries()]
- "trace_sw_bundle_pr_resourceforsha1": ".resourceForSha1()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[pr, .get(), yo()]
- "trace_sw_bundle_qs_close": ".close()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Qs(), .getData(), yi]
- "trace_sw_bundle_qs_getentries": ".getEntries()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[.constructor(), Qs(), .getEntriesGenerator()]
- "trace_sw_bundle_r_snapshotbyname": ".snapshotByName()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[_r, .get(), ._snapshot()]
- "trace_sw_bundle_ri": "Ri" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]
- "trace_sw_bundle_rs": "rs()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, di(), .constructor()]
- "trace_sw_bundle_si": "Si" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .constructor()]
- "trace_sw_bundle_so": "so" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .get()]
- "trace_sw_bundle_tr_render": ".render()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[tr, .getOrCompute(), .serveSnapshot()]
- "trace_sw_bundle_tr_snapshot": ".snapshot()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[tr, .closestScreenshot(), .serveSnapshotInfo()]
- "trace_sw_bundle_ts_constructor": ".constructor()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Ts, fa, ua]
- "trace_sw_bundle_tt": "Tt()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, ns(), Oi()]
- "trace_sw_bundle_v": "V()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .getEntriesGenerator(), .getData()]
- "trace_sw_bundle_ve_append": ".append()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[Ln(), St(), Ve]
- "trace_sw_bundle_vn": "Vn()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, pa(), .constructor()]
- "trace_sw_bundle_wi": "Wi" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, qi(), .constructor()]
- "trace_sw_bundle_ws": "ws" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, .constructor(), .getData()]
- "trace_sw_bundle_ye": "ye()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, lo(), .getEntriesGenerator()]
- "trace_sw_bundle_yn": "yn()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, as(), St()]
- "trace_sw_bundle_zn": "Zn()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, mn, oe()]
- "trace_sw_bundle_zs": "zs()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js, bo(), .get()]
- "trace_uimode_c2efnu2p_gt_absolutepath": "._absolutePath()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._absoluteLocation(), ._parseProject()]
- "trace_uimode_c2efnu2p_gt_onconfigure": "._onConfigure()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch(), ._parseConfig()]
- "trace_uimode_c2efnu2p_gt_onend": "._onEnd()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, .dispatch(), fe()]
- "trace_uimode_c2efnu2p_gt_parseconfig": "._parseConfig()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[gt, ._onConfigure(), pe()]
- "trace_uimode_c2efnu2p_le_createtestresult": "._createTestResult()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[._onTestBegin(), le, de]
- "trace_uimode_c2efnu2p_le_outcome": ".outcome()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[le, .ok(), he()]
- "trace_uimode_c2efnu2p_me_processglobalreport": ".processGlobalReport()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[me, gt, .dispatch()]
- "trace_uimode_c2efnu2p_mt_addchild": "._addChild()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[mt, ._defaultDescribeItem(), ._fileItem()]
- "trace_uimode_c2efnu2p_mt_defaultdescribeitem": "._defaultDescribeItem()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[mt, .constructor(), ._addChild()]
- "trace_uimode_c2efnu2p_mt_fileitem": "._fileItem()" | kind=code-symbol | source=playwright-report/web-1033/trace/uiMode.C2Efnu2P.js:L2 | neighbors=[mt, .constructor(), ._addChild()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-017.json

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
