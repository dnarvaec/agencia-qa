# Node Description Batch 3 of 41

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

- "trace_sw_bundle_pr_load": ".load()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[bo(), pr, hr, .actions(), .appendTrace(), Js()]
- "trace_sw_bundle_r": "_r" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L2 | neighbors=[sw.bundle.js, .load(), .addFrameSnapshot(), .addResource(), .constructor(), ._ensureResourcesForContext()]
- "trace_sw_bundle_ro_getdata": ".getData()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[ro, B(), De(), H(), lo(), q()]
- "trace_sw_bundle_xs": "Xs" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L1 | neighbors=[sw.bundle.js, bo(), Nt(), .constructor(), ._respondWithJson(), .serveClosestScreenshot()]
- "trace_sw_bundle_yo": "yo()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L5 | neighbors=[sw.bundle.js, Eo(), Fn(), go(), .resourceForSha1(), .get()]
- "assets_defaultsettingsview_d31xz8zv_bv_dispatchevent": ".dispatchEvent()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .fill(), .markTargetElements(), .selectOptions(), .setInputFiles(), cx()]
- "assets_defaultsettingsview_d31xz8zv_bv_generateselector": ".generateSelector()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[._ariaSnapshot(), ._generateAction(), .onMouseMove(), bv, zb(), .performAction()]
- "assets_defaultsettingsview_d31xz8zv_ea_contains": ".contains()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[Dh(), .install(), eA(), gx(), md, r_()]
- "assets_defaultsettingsview_d31xz8zv_es": "eS" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[defaultSettingsView-D31xz8zv.js, .addIn(), .clone(), .constructor(), .deleteIn(), .getIn()]
- "assets_defaultsettingsview_d31xz8zv_fl": "fl()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .parseSelector(), e_(), n_(), qt, s_()]
- "assets_defaultsettingsview_d31xz8zv_h": "h_" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .chainLocators(), .generateLocator(), .quote(), .regexToString(), .toCallWithExact()]
- "assets_defaultsettingsview_d31xz8zv_ls_charat": ".charAt()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L243 | neighbors=[ac(), lS, .parseFlowCollection(), .parseLineStart(), .parseQuotedScalar(), .pushIndicators()]
- "assets_defaultsettingsview_d31xz8zv_ls_parsestream": ".parseStream()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L246 | neighbors=[lS, .parseNext(), .atLineEnd(), .getLine(), .parseLineStart(), .pushCount()]
- "assets_defaultsettingsview_d31xz8zv_ls_pushindicators": ".pushIndicators()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L256 | neighbors=[lS, .parseDocument(), .parseFlowCollection(), .charAt(), .pushCount(), .pushSpaces()]
- "assets_defaultsettingsview_d31xz8zv_ls_setnext": ".setNext()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L246 | neighbors=[lS, .parseBlockScalar(), .parseBlockStart(), .parseDocument(), .parseFlowCollection(), .parseLineStart()]
- "assets_defaultsettingsview_d31xz8zv_m2": "m2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, ar(), at(), Gt(), mx(), q0()]
- "assets_defaultsettingsview_d31xz8zv_nt_cached": "._cached()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[nT, ._callMatches(), ._callQuery(), .matches(), ._matchesParents(), ._matchesSimple()]
- "assets_defaultsettingsview_d31xz8zv_ps": "ps()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[defaultSettingsView-D31xz8zv.js, Rr(), .add(), .get(), .set(), .add()]
- "assets_defaultsettingsview_d31xz8zv_va": "Va()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, .contains(), nv(), .tagString(), .constructor(), .evaluate()]
- "assets_defaultsettingsview_d31xz8zv_ys": "ys()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, ar(), i0(), l2(), n_(), r2()]
- "assets_defaultsettingsview_d31xz8zv_zt": "zT" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, al(), hs(), Je(), lc(), qh()]
- "pages_index": "index.ts" | kind=code-symbol | source=tests/Automatizacion web/1121/pages/index.ts:L1 | neighbors=[fixtures.ts, fixtures.ts, CrearTicketDialog, DashboardPage, HomePage, LoginPage]
- "trace_sw_bundle_ln": "Ln()" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, B(), be(), H(), qe(), Ve]
- "trace_sw_bundle_po": "po" | kind=code-symbol | source=playwright-report/web-1033/trace/sw.bundle.js:L3 | neighbors=[sw.bundle.js, bo(), .constructor(), .entryNames(), .hasEntry(), .isLive()]
- "1121_fixtures": "fixtures.ts" | kind=code-symbol | source=tests/Automatizacion web/1121/fixtures.ts:L1 | neighbors=[test, index.ts, CrearTicketDialog, HomePage, MicrosoftOAuthPage, MyTicketsPage]
- "assets_defaultsettingsview_d31xz8zv_a_onclick": ".onClick()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[a_(), ._ariaSnapshot(), el(), Gh(), nl(), .deepEventTarget()]
- "assets_defaultsettingsview_d31xz8zv_ac_resolve": ".resolve()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[ac(), Ss(), .toJSON(), cr, cs(), Vh()]
- "assets_defaultsettingsview_d31xz8zv_bv_ensurehighlight": "._ensureHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .addHighlight(), .addUserOverlay(), .getUserOverlay(), .removeHighlight(), .removeUserOverlay()]
- "assets_defaultsettingsview_d31xz8zv_bv_fill": ".fill()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[b0, bv, .createStacklessError(), .dispatchEvent(), .retarget(), .selectText()]
- "assets_defaultsettingsview_d31xz8zv_bv_generateselectors": "._generateSelectors()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .checkDeprecatedSelectorUsage(), dd(), hd(), .begin(), wc()]
- "assets_defaultsettingsview_d31xz8zv_bv_parseselector": ".parseSelector()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, fl(), i_(), CA(), ._querySelector(), ._querySelectorAll()]
- "assets_defaultsettingsview_d31xz8zv_cc_throwerror": "._throwError()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._assert(), .parse(), ._readAttributes(), ._readIdentifier(), ._readRegex()]
- "assets_defaultsettingsview_d31xz8zv_e": "e_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, Fo, g0(), .dispose(), qt, fl()]
- "assets_defaultsettingsview_d31xz8zv_fc": "fc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, .elementState(), ct(), Nr(), ol(), pl()]
- "assets_defaultsettingsview_d31xz8zv_gn": "gn()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .checkDeprecatedSelectorUsage(), .querySelectorAll(), .strictModeViolationError(), .addElementHighlight(), .removeElementHighlight()]
- "assets_defaultsettingsview_d31xz8zv_i": "i_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .parseSelector(), at(), hx(), Po(), q_()]
- "assets_defaultsettingsview_d31xz8zv_jt": "jT" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, dr(), hs(), Je(), qh(), ti()]
- "assets_defaultsettingsview_d31xz8zv_kc": "kc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L134 | neighbors=[defaultSettingsView-D31xz8zv.js, a_(), il(), Eh(), Gt(), hl()]
- "assets_defaultsettingsview_d31xz8zv_ls_parseplainscalar": ".parsePlainScalar()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L253 | neighbors=[lS, .parseDocument(), .parseFlowCollection(), .parseNext(), .continueScalar(), .pushToIndex()]
- "assets_defaultsettingsview_d31xz8zv_ls_parsequotedscalar": ".parseQuotedScalar()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L246 | neighbors=[lS, .parseDocument(), .parseFlowCollection(), .parseNext(), .charAt(), .continueScalar()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-002.json

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
