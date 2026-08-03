# Node Description Batch 6 of 41

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

- "assets_defaultsettingsview_d31xz8zv_bv_setscreencastannotation": ".setScreencastAnnotation()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ensureHighlight(), .hideActionPoint(), .hideActionTitle(), .showActionPoint(), .showActionTitle()]
- "assets_defaultsettingsview_d31xz8zv_bv_strictmodeviolationerror": ".strictModeViolationError()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .querySelector(), .createStacklessError(), ._generateSelectors(), Di(), gn()]
- "assets_defaultsettingsview_d31xz8zv_c": "c_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, Hr, vs(), fs(), index.BCnMPevh.js, uiMode.C2Efnu2P.js]
- "assets_defaultsettingsview_d31xz8zv_c0": "c0()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L50 | neighbors=[defaultSettingsView-D31xz8zv.js, ad(), .constructor(), .toSource(), .toString(), Ex()]
- "assets_defaultsettingsview_d31xz8zv_cc_readidentifier": "._readIdentifier()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, .parse(), ._readAttributes(), ._eof(), ._peek(), ._throwError()]
- "assets_defaultsettingsview_d31xz8zv_cc_readstringorregex": "._readStringOrRegex()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, .parse(), ._next(), ._peek(), ._readRegex(), ._readString()]
- "assets_defaultsettingsview_d31xz8zv_dc": "dc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L174 | neighbors=[defaultSettingsView-D31xz8zv.js, .clone(), .constructor(), ii(), Fa, yA()]
- "assets_defaultsettingsview_d31xz8zv_ds": "ds()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[defaultSettingsView-D31xz8zv.js, ii(), Fa, Ga, oc(), yA()]
- "assets_defaultsettingsview_d31xz8zv_ea_updatevisualposition": "._updateVisualPosition()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), .constructor(), .install(), .onMouseMove(), .setUIState(), ._showOverlay()]
- "assets_defaultsettingsview_d31xz8zv_el": "el()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[defaultSettingsView-D31xz8zv.js, .onClick(), .onContextMenu(), .onClick(), .onDblClick(), ._showActionListDialog()]
- "assets_defaultsettingsview_d31xz8zv_et": "et" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor(), .toJSON(), .toSource(), .toString(), yd()]
- "assets_defaultsettingsview_d31xz8zv_fv": "fv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L106 | neighbors=[defaultSettingsView-D31xz8zv.js, Bi(), cv(), Hi(), Rr(), pn()]
- "assets_defaultsettingsview_d31xz8zv_fx": "fx" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor(), .getObject(), .getString(), .setObject(), .setString()]
- "assets_defaultsettingsview_d31xz8zv_hc": "hc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[defaultSettingsView-D31xz8zv.js, .addIn(), .setIn(), ll(), .set(), .setIn()]
- "assets_defaultsettingsview_d31xz8zv_hr_createnode": ".createNode()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L180 | neighbors=[cr, Ga, Hr, .constructor(), ll(), .createPair()]
- "assets_defaultsettingsview_d31xz8zv_ii": "ii()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[defaultSettingsView-D31xz8zv.js, dc(), ds(), Ga, oc(), yA()]
- "assets_defaultsettingsview_d31xz8zv_je": "Je()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, jT, nA(), oA(), od(), zT]
- "assets_defaultsettingsview_d31xz8zv_ka": "Ka()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, .querySelectorAll(), ti(), zv(), os(), zb()]
- "assets_defaultsettingsview_d31xz8zv_ll": "ll()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[defaultSettingsView-D31xz8zv.js, hc(), .createNode(), vs(), rd(), .from()]
- "assets_defaultsettingsview_d31xz8zv_ls_pushnewline": ".pushNewline()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L256 | neighbors=[lS, .parseDocument(), .parseFlowCollection(), .parseStream(), .charAt(), .pushCount()]
- "assets_defaultsettingsview_d31xz8zv_ls_pushtoindex": ".pushToIndex()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L256 | neighbors=[lS, .parseBlockScalar(), .parsePlainScalar(), .parseQuotedScalar(), .pushTag(), .pushUntil()]
- "assets_defaultsettingsview_d31xz8zv_ls_pushuntil": ".pushUntil()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L258 | neighbors=[lS, .parseBlockScalarHeader(), .parseDocument(), .parseFlowCollection(), .pushIndicators(), .pushToIndex()]
- "assets_defaultsettingsview_d31xz8zv_m0": "m0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), .constructor(), .toJSON(), .toSource(), .toString()]
- "assets_defaultsettingsview_d31xz8zv_mc": "mc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .quote(), .quote(), .quote(), kS(), .quote()]
- "assets_defaultsettingsview_d31xz8zv_me": "mE()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L98 | neighbors=[defaultSettingsView-D31xz8zv.js, ._apiRequestContextId(), .constructor(), .contextId(), ._pageId(), yE()]
- "assets_defaultsettingsview_d31xz8zv_n0": "N0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), .constructor(), .toJSON(), .toSource(), .toString()]
- "assets_defaultsettingsview_d31xz8zv_nl": "nl()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[defaultSettingsView-D31xz8zv.js, .onClick(), .onInput(), .onClick(), .onDblClick(), .onInput()]
- "assets_defaultsettingsview_d31xz8zv_nt_begin": ".begin()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[._generateSelectors(), .querySelectorAll(), nT, .matches(), .query(), zb()]
- "assets_defaultsettingsview_d31xz8zv_pl": "pl()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L188 | neighbors=[defaultSettingsView-D31xz8zv.js, ac(), fc(), .next(), Tc(), TS()]
- "assets_defaultsettingsview_d31xz8zv_r2": "r2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, i0(), rd(), ri(), .createRelativeUrl(), ys()]
- "assets_defaultsettingsview_d31xz8zv_re": "rE" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L87 | neighbors=[defaultSettingsView-D31xz8zv.js, lE(), .generatePlaywrightRequestCall(), .prettyPrintObject(), .stringLiteral(), .toFunctionName()]
- "assets_defaultsettingsview_d31xz8zv_rl": "rl()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, .expectSingleElement(), ct(), xt(), Za(), zT]
- "assets_defaultsettingsview_d31xz8zv_se": "sE" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L76 | neighbors=[defaultSettingsView-D31xz8zv.js, lE(), .generatePlaywrightRequestCall(), .indent(), .prettyPrintObject(), .stringLiteral()]
- "assets_defaultsettingsview_d31xz8zv_tl": "tl()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L123 | neighbors=[defaultSettingsView-D31xz8zv.js, .onClick(), .onKeyDown(), .onClick(), .onKeyDown(), ._shouldGenerateKeyPressFor()]
- "assets_defaultsettingsview_d31xz8zv_u_regextosourcestring": ".regexToSourceString()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[u_, .generateLocator(), yc(), .toCallWithExact(), .toHasText(), .toTestIdValue()]
- "assets_defaultsettingsview_d31xz8zv_w": "w_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, s_(), eE(), St(), index.BCnMPevh.js, uiMode.C2Efnu2P.js]
- "assets_defaultsettingsview_d31xz8zv_xa_onkeydown": ".onKeyDown()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, .deepEventTarget(), tl(), ._actionInProgress(), ._consumedDueWrongTarget(), ._performAction()]
- "assets_defaultsettingsview_d31xz8zv_xa_performaction": "._performAction()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[xA, ._commitPendingClickAction(), .onClick(), .onDblClick(), .onKeyDown(), .performAction()]
- "assets_defaultsettingsview_d31xz8zv_xd_lineend": ".lineEnd()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[Xd, .document(), .flowCollection(), .pop(), .step(), .scalar()]
- "assets_defaultsettingsview_d31xz8zv_yc": "yc()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, .regexToString(), .regexToString(), .regexToString(), .regexToSourceString(), ys()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-005.json

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
