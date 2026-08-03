# Node Description Batch 13 of 41

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

- "assets_defaultsettingsview_d31xz8zv_bv_checkelementstates": ".checkElementStates()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, ._checkElementIsStable(), .elementState()]
- "assets_defaultsettingsview_d31xz8zv_bv_createhighlight": ".createHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .hideHighlight(), .constructor()]
- "assets_defaultsettingsview_d31xz8zv_bv_expect": ".expect()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ariaSnapshotForExpect(), ._expectCore()]
- "assets_defaultsettingsview_d31xz8zv_bv_focusnode": ".focusNode()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, ._activelyFocused(), .createStacklessError()]
- "assets_defaultsettingsview_d31xz8zv_bv_getallelementsmatchingexpectariatemplate": ".getAllElementsMatchingExpectAriaTemplate()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, pT(), .setUIState()]
- "assets_defaultsettingsview_d31xz8zv_bv_maskselectors": ".maskSelectors()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, .querySelectorAll(), .maskElements()]
- "assets_defaultsettingsview_d31xz8zv_bv_queryengineall": "._queryEngineAll()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L109 | neighbors=[bv, .createStacklessError(), .querySelectorAll()]
- "assets_defaultsettingsview_d31xz8zv_bv_removehighlight": ".removeHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[bv, ._ensureHighlight(), .removeElementHighlight()]
- "assets_defaultsettingsview_d31xz8zv_bv_selecttext": ".selectText()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .fill(), .retarget()]
- "assets_defaultsettingsview_d31xz8zv_bv_setuphittargetinterceptor": ".setupHitTargetInterceptor()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L114 | neighbors=[bv, .expectHitTarget(), .retarget()]
- "assets_defaultsettingsview_d31xz8zv_bx": "bx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L26 | neighbors=[defaultSettingsView-D31xz8zv.js, yx(), wx()]
- "assets_defaultsettingsview_d31xz8zv_c2": "c2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, b2(), St()]
- "assets_defaultsettingsview_d31xz8zv_cc_applyattribute": "._applyAttribute()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._assert(), ._readAttributes()]
- "assets_defaultsettingsview_d31xz8zv_cc_assert": "._assert()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L105 | neighbors=[cc, ._applyAttribute(), ._throwError()]
- "assets_defaultsettingsview_d31xz8zv_cr_matchesclasslist": ".matchesClassList()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[.expectSingleElement(), cr, .createStacklessError()]
- "assets_defaultsettingsview_d31xz8zv_d_tohasnottext": ".toHasNotText()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[d_, .generateLocator(), Ze()]
- "assets_defaultsettingsview_d31xz8zv_dh_adduseroverlay": ".addUserOverlay()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Dh(), .querySelectorAll(), .appendChild()]
- "assets_defaultsettingsview_d31xz8zv_dh_removeelementhighlight": ".removeElementHighlight()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[.removeHighlight(), Dh(), gn()]
- "assets_defaultsettingsview_d31xz8zv_dh_showactionpoint": ".showActionPoint()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[.setScreencastAnnotation(), Dh(), .setUIState()]
- "assets_defaultsettingsview_d31xz8zv_dr": "dr()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, jT, zv()]
- "assets_defaultsettingsview_d31xz8zv_dx": "Dx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, p0(), Rx()]
- "assets_defaultsettingsview_d31xz8zv_e0": "E0" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, .constructor(), g0()]
- "assets_defaultsettingsview_d31xz8zv_ea_onmousemove": ".onMouseMove()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), ._updateVisualPosition(), .setOverlayState()]
- "assets_defaultsettingsview_d31xz8zv_ea_refreshlisteners": "._refreshListeners()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), .constructor(), .install()]
- "assets_defaultsettingsview_d31xz8zv_ea_showoverlay": "._showOverlay()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L120 | neighbors=[eA(), .setUIState(), ._updateVisualPosition()]
- "assets_defaultsettingsview_d31xz8zv_es_hasallnullvalues": ".hasAllNullValues()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L125 | neighbors=[eS, .toString(), .toString()]
- "assets_defaultsettingsview_d31xz8zv_ex": "Ex()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L51 | neighbors=[defaultSettingsView-D31xz8zv.js, c0(), Tx()]
- "assets_defaultsettingsview_d31xz8zv_fa_generatelocator": "._generateLocator()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Fa, .generateSelectorSimple(), Di()]
- "assets_defaultsettingsview_d31xz8zv_fa_queryselectorall": "._querySelectorAll()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[Fa, .parseSelector(), .querySelectorAll()]
- "assets_defaultsettingsview_d31xz8zv_fe": "fE()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L98 | neighbors=[defaultSettingsView-D31xz8zv.js, g0(), Gt()]
- "assets_defaultsettingsview_d31xz8zv_g": "g_()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[defaultSettingsView-D31xz8zv.js, at(), uiMode.C2Efnu2P.js]
- "assets_defaultsettingsview_d31xz8zv_gv": "gv()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L107 | neighbors=[defaultSettingsView-D31xz8zv.js, ct(), xt()]
- "assets_defaultsettingsview_d31xz8zv_gx": "gx()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L18 | neighbors=[defaultSettingsView-D31xz8zv.js, .contains(), Nh()]
- "assets_defaultsettingsview_d31xz8zv_h_generatelocator": ".generateLocator()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[h_, ac(), Ze()]
- "assets_defaultsettingsview_d31xz8zv_h_tocallwithexact": ".toCallWithExact()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L52 | neighbors=[h_, ac(), Ze()]
- "assets_defaultsettingsview_d31xz8zv_h2": "h2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, Ah(), d2()]
- "assets_defaultsettingsview_d31xz8zv_he": "hE()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L98 | neighbors=[defaultSettingsView-D31xz8zv.js, Gt(), ri()]
- "assets_defaultsettingsview_d31xz8zv_hr_tojs": ".toJS()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L180 | neighbors=[Hr, wr(), yn()]
- "assets_defaultsettingsview_d31xz8zv_i2": "i2()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L262 | neighbors=[defaultSettingsView-D31xz8zv.js, .pop(), T2]
- "assets_defaultsettingsview_d31xz8zv_ih": "Ih()" | kind=code-symbol | source=playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js:L108 | neighbors=[defaultSettingsView-D31xz8zv.js, Ba, hv()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: C:\Users\dnarvaec\OneDrive - NTT DATA EMEAL\Documents\Proyectos AUTO\Ecopetrol\Proyectos Ecopetrol\auto-ia-ecopetrol\.graphify\description-instructions\batch-012.json

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
