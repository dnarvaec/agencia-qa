# Graph Report - .  (2026-07-22)

## Corpus Check
- Corpus is ~36.405 words - fits in a single context window. You may not need a graph.

## Summary
- 1622 nodes · 3082 edges · 117 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: calls: 1415 · method: 812 · contains: 786 · imports: 52 · imports_from: 17


## Input Scope
- Requested: all
- Resolved: all (source: configured-default)
- Included files: 28 · Candidates: recursive
- Excluded: 0 untracked · 0 ignored · 0 sensitive · 0 missing committed

## Graph Freshness
- Built from Git commit: `ef51bc9`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `bv` - 74 edges
2. `xA` - 37 edges
3. `tA()` - 33 edges
4. `Dh()` - 31 edges
5. `g0()` - 29 edges
6. `k2` - 28 edges
7. `gt` - 28 edges
8. `lS` - 27 edges
9. `Hr` - 25 edges
10. `Xd` - 23 edges

## Surprising Connections (you probably didn't know these)
- `a_()` --calls--> `kc()`  [EXTRACTED]
  playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js → playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js  _Bridges community 35 → community 24_
- `a_()` --calls--> `xr()`  [EXTRACTED]
  playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js → playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js  _Bridges community 35 → community 21_
- `ab()` --calls--> `br()`  [EXTRACTED]
  playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js → playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js  _Bridges community 51 → community 33_
- `ac()` --calls--> `Hr`  [EXTRACTED]
  playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js → playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js  _Bridges community 3 → community 7_
- `ac()` --calls--> `Nr()`  [EXTRACTED]
  playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js → playwright-report/web-1033/trace/assets/defaultSettingsView-D31xz8zv.js  _Bridges community 3 → community 10_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.02
Nodes (52): a0, bd, bn, Ch, Da, db, dT(), ev (+44 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (59): Ar, bi, _block(), ca, calculate(), constructor(), Cr, _crypt() (+51 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (14): dr, Eo(), Fn(), ft(), go(), lt(), Mt(), _r (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (8): ac(), d_, f_, h_, mc(), u_, yc(), Ze()

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (14): bc(), cb(), fr(), Go(), hT(), jc(), jS(), kd() (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.09
Nodes (3): k2, n2(), v2

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (31): activityFeed, activityIdle, activityResult, activityRunning, agentCard, agents, agentSelect, clearBtn (+23 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (4): eS, hc(), Hr, Jv()

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (25): ao(), at(), B(), ba(), be(), co(), Ct, De() (+17 more)

### Community 9 - "Community 9"
Cohesion: 0.09
Nodes (27): a2(), Ah(), ar(), cE(), d2(), e2(), f0, fE() (+19 more)

### Community 10 - "Community 10"
Cohesion: 0.10
Nodes (28): al(), av(), ct(), dv(), Eb(), fc(), GE(), gv() (+20 more)

### Community 11 - "Community 11"
Cohesion: 0.28
Nodes (2): lS, xn()

### Community 12 - "Community 12"
Cohesion: 0.09
Nodes (10): _allClients, MCPClient, readline, { spawn }, detectNeededServers(), MCP_SERVER_CONFIGS, MCPClient, MCPManager (+2 more)

### Community 13 - "Community 13"
Cohesion: 0.09
Nodes (24): ad(), at(), ax(), b2(), c0(), c2(), ed(), eE() (+16 more)

### Community 14 - "Community 14"
Cohesion: 0.08
Nodes (8): d0(), i2(), id, kx(), N0, T2, ul(), zx()

### Community 15 - "Community 15"
Cohesion: 0.08
Nodes (19): k_(), m_(), p_, A, _e(), et, fe(), It (+11 more)

### Community 16 - "Community 16"
Cohesion: 0.14
Nodes (2): bv, jb()

### Community 17 - "Community 17"
Cohesion: 0.17
Nodes (2): ct(), gt

### Community 18 - "Community 18"
Cohesion: 0.16
Nodes (2): Ha(), nT

### Community 19 - "Community 19"
Cohesion: 0.16
Nodes (2): qb, tA()

### Community 20 - "Community 20"
Cohesion: 0.10
Nodes (14): cs(), Ge(), ki, li, ls(), pa(), Pi, Qs() (+6 more)

### Community 21 - "Community 21"
Cohesion: 0.13
Nodes (17): Bi(), c_(), dl(), En(), fv(), ll(), qd(), Qv() (+9 more)

### Community 22 - "Community 22"
Cohesion: 0.16
Nodes (1): bh

### Community 23 - "Community 23"
Cohesion: 0.13
Nodes (2): cr, kv()

### Community 24 - "Community 24"
Cohesion: 0.13
Nodes (7): Eh(), hl(), il(), kc(), kS(), Nc(), yh

### Community 25 - "Community 25"
Cohesion: 0.12
Nodes (10): bs(), es, fa, gs(), Nn(), Nt(), Ts, ua (+2 more)

### Community 26 - "Community 26"
Cohesion: 0.14
Nodes (3): hr, Js(), Wt()

### Community 27 - "Community 27"
Cohesion: 0.25
Nodes (18): af(), ef(), ff(), hf, Ja(), lf(), mt(), nf() (+10 more)

### Community 28 - "Community 28"
Cohesion: 0.13
Nodes (5): Bo(), fx, iT(), l_(), ut()

### Community 29 - "Community 29"
Cohesion: 0.29
Nodes (3): cc, Gb(), yb

### Community 30 - "Community 30"
Cohesion: 0.15
Nodes (2): Dh(), Yy()

### Community 31 - "Community 31"
Cohesion: 0.16
Nodes (2): iS(), xA

### Community 32 - "Community 32"
Cohesion: 0.19
Nodes (18): callWorkspaceTool(), createDirectory(), fetchUrl(), fileSearch(), fs, { getSkillContent }, glob, http (+10 more)

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (11): br(), dd(), hd(), mT(), ni(), pT(), wc(), xc() (+3 more)

### Community 34 - "Community 34"
Cohesion: 0.12
Nodes (6): bo(), po, pr, wr(), xo(), zs()

### Community 35 - "Community 35"
Cohesion: 0.19
Nodes (4): a_(), Gh(), nl(), tl()

### Community 36 - "Community 36"
Cohesion: 0.15
Nodes (4): Bt(), Ee(), ge(), mt

### Community 37 - "Community 37"
Cohesion: 0.17
Nodes (16): Ba, cv(), ei(), Hi(), hv(), Ih(), iv(), mA() (+8 more)

### Community 38 - "Community 38"
Cohesion: 0.14
Nodes (4): Di(), gn(), Pa(), ub()

### Community 39 - "Community 39"
Cohesion: 0.15
Nodes (15): cs(), dr(), gC(), hs(), Je(), jT, Ka(), nA() (+7 more)

### Community 40 - "Community 40"
Cohesion: 0.14
Nodes (5): md, nv(), OT, r_(), Va()

### Community 41 - "Community 41"
Cohesion: 0.18
Nodes (2): bs(), Fa

### Community 42 - "Community 42"
Cohesion: 0.14
Nodes (12): activeRuns, app, express, fabricClient, { getAgents }, http, io, MCPClient (+4 more)

### Community 43 - "Community 43"
Cohesion: 0.15
Nodes (4): aE, iE, lE(), sE

### Community 44 - "Community 44"
Cohesion: 0.27
Nodes (1): eA()

### Community 46 - "Community 46"
Cohesion: 0.29
Nodes (1): el()

### Community 47 - "Community 47"
Cohesion: 0.23
Nodes (11): AGENTS_DIR, fs, getAgent(), getAgents(), getSkill(), getSkillContent(), getSkills(), parseFrontmatter() (+3 more)

### Community 48 - "Community 48"
Cohesion: 0.21
Nodes (11): Ai(), Ce(), Ci(), Ii(), J(), Ne(), Ni(), ns() (+3 more)

### Community 49 - "Community 49"
Cohesion: 0.21
Nodes (2): be(), tt

### Community 50 - "Community 50"
Cohesion: 0.20
Nodes (3): de, he(), le

### Community 51 - "Community 51"
Cohesion: 0.25
Nodes (9): ab(), Bt(), E0, g0(), Ko(), Mh, rb(), Xo() (+1 more)

### Community 52 - "Community 52"
Cohesion: 0.20
Nodes (9): bx(), cx(), Jh(), Sx(), td, vx(), wx(), xx() (+1 more)

### Community 53 - "Community 53"
Cohesion: 0.18
Nodes (1): CrearTicketDialog

### Community 54 - "Community 54"
Cohesion: 0.38
Nodes (10): explore(), get(), getLakehouseTables(), getPipelineRuns(), getToken(), health(), https, post() (+2 more)

### Community 55 - "Community 55"
Cohesion: 0.24
Nodes (8): as(), Bn, En(), is(), os(), St(), Ve, yn()

### Community 56 - "Community 56"
Cohesion: 0.27
Nodes (6): lakehouses, PIPELINES, TABLE_PATTERNS, apiStep(), maskHeaders(), tryJson()

### Community 57 - "Community 57"
Cohesion: 0.24
Nodes (6): B_(), Dx(), mE(), p0(), Rx(), yE()

### Community 58 - "Community 58"
Cohesion: 0.22
Nodes (1): CA()

### Community 59 - "Community 59"
Cohesion: 0.29
Nodes (8): dc(), ds(), Ga, ii(), nS(), oc(), Sh(), yA()

### Community 60 - "Community 60"
Cohesion: 0.24
Nodes (10): fl(), fs(), Ja(), o_(), Qa(), qt, Ra(), u0 (+2 more)

### Community 61 - "Community 61"
Cohesion: 0.24
Nodes (2): ps(), Tr

### Community 62 - "Community 62"
Cohesion: 0.20
Nodes (2): Ui, Wv()

### Community 63 - "Community 63"
Cohesion: 0.40
Nodes (9): discover(), executeDax(), get(), getDataset(), getRefreshHistory(), getToken(), https, post() (+1 more)

### Community 64 - "Community 64"
Cohesion: 0.22
Nodes (2): kt(), me

### Community 65 - "Community 65"
Cohesion: 0.31
Nodes (8): { AzureOpenAI }, extractMCPText(), { getAgent, getSkills }, MCPManager, runAgent(), stripHtml(), { WORKSPACE_TOOL_DEFS,
  callWorkspaceTool }, WORKSPACE_TOOL_DEFS

### Community 66 - "Community 66"
Cohesion: 0.33
Nodes (1): mo

### Community 67 - "Community 67"
Cohesion: 0.32
Nodes (3): test, MicrosoftOAuthPage, { Given, When, Then }

### Community 68 - "Community 68"
Cohesion: 0.29
Nodes (4): e_(), J_(), t_, N

### Community 69 - "Community 69"
Cohesion: 0.25
Nodes (6): gx(), jx(), kh(), mx(), Nh(), w2()

### Community 70 - "Community 70"
Cohesion: 0.29
Nodes (3): ld(), wr(), yn()

### Community 71 - "Community 71"
Cohesion: 0.25
Nodes (3): j0(), k0, sd

### Community 72 - "Community 72"
Cohesion: 0.25
Nodes (2): rS(), tT()

### Community 73 - "Community 73"
Cohesion: 0.25
Nodes (5): ds(), gi, it, ji, Zi()

### Community 74 - "Community 74"
Cohesion: 0.38
Nodes (4): test, { Given, When, Then }, { Before, After, AfterStep }, pageLogs

### Community 75 - "Community 75"
Cohesion: 0.29
Nodes (1): DashboardPage

### Community 76 - "Community 76"
Cohesion: 0.29
Nodes (1): MyTicketsPage

### Community 77 - "Community 77"
Cohesion: 0.33
Nodes (3): Ho(), lb(), tv()

### Community 78 - "Community 78"
Cohesion: 0.33
Nodes (2): Er, gS()

### Community 79 - "Community 79"
Cohesion: 0.33
Nodes (2): qE(), vt

### Community 80 - "Community 80"
Cohesion: 0.33
Nodes (1): wt

### Community 81 - "Community 81"
Cohesion: 0.33
Nodes (1): HomePage

### Community 82 - "Community 82"
Cohesion: 0.33
Nodes (1): RolPage

### Community 83 - "Community 83"
Cohesion: 0.33
Nodes (3): di(), Ke, rs()

### Community 84 - "Community 84"
Cohesion: 0.33
Nodes (1): ce

### Community 85 - "Community 85"
Cohesion: 0.40
Nodes (1): aS()

### Community 86 - "Community 86"
Cohesion: 0.40
Nodes (1): et

### Community 87 - "Community 87"
Cohesion: 0.40
Nodes (1): m0

### Community 88 - "Community 88"
Cohesion: 0.40
Nodes (1): o0

### Community 89 - "Community 89"
Cohesion: 0.50
Nodes (1): rE

### Community 90 - "Community 90"
Cohesion: 0.50
Nodes (1): Mr

### Community 91 - "Community 91"
Cohesion: 0.50
Nodes (1): rc

### Community 92 - "Community 92"
Cohesion: 0.50
Nodes (1): uE()

### Community 93 - "Community 93"
Cohesion: 0.67
Nodes (2): n(), s()

### Community 94 - "Community 94"
Cohesion: 0.50
Nodes (1): LoginPage

### Community 95 - "Community 95"
Cohesion: 0.50
Nodes (3): bddWeb1033TestDir, bddWeb1037TestDir, bddWeb1121TestDir

### Community 96 - "Community 96"
Cohesion: 0.50
Nodes (1): dt()

### Community 97 - "Community 97"
Cohesion: 0.50
Nodes (1): ha

### Community 98 - "Community 98"
Cohesion: 0.50
Nodes (1): oa

### Community 99 - "Community 99"
Cohesion: 0.67
Nodes (1): b0

### Community 100 - "Community 100"
Cohesion: 0.67
Nodes (1): Fo

### Community 101 - "Community 101"
Cohesion: 0.67
Nodes (2): sl(), x0

### Community 102 - "Community 102"
Cohesion: 0.67
Nodes (1): y0

### Community 103 - "Community 103"
Cohesion: 0.67
Nodes (1): aa

### Community 104 - "Community 104"
Cohesion: 0.67
Nodes (1): _a

### Community 105 - "Community 105"
Cohesion: 0.67
Nodes (1): Je

### Community 106 - "Community 106"
Cohesion: 0.67
Nodes (1): la

### Community 107 - "Community 107"
Cohesion: 0.67
Nodes (1): ws

### Community 108 - "Community 108"
Cohesion: 1.00
Nodes (1): AUTH_FILE

### Community 109 - "Community 109"
Cohesion: 1.00
Nodes (1): _0

### Community 110 - "Community 110"
Cohesion: 1.00
Nodes (1): nd

### Community 111 - "Community 111"
Cohesion: 1.00
Nodes (1): px

### Community 112 - "Community 112"
Cohesion: 1.00
Nodes (1): s0

### Community 113 - "Community 113"
Cohesion: 1.00
Nodes (1): T0

### Community 114 - "Community 114"
Cohesion: 1.00
Nodes (1): vd

### Community 115 - "Community 115"
Cohesion: 1.00
Nodes (1): w0

### Community 116 - "Community 116"
Cohesion: 1.00
Nodes (1): xS

### Community 117 - "Community 117"
Cohesion: 1.00
Nodes (1): Yo

## Knowledge Gaps
- **144 isolated node(s):** `hf`, `Ch`, `Wh`, `_x`, `Ia` (+139 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 11`** (2 nodes): `lS`, `xn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `bv`, `jb()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (2 nodes): `ct()`, `gt`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (2 nodes): `Ha()`, `nT`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (2 nodes): `qb`, `tA()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `bh`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (2 nodes): `cr`, `kv()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (2 nodes): `Dh()`, `Yy()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (2 nodes): `iS()`, `xA`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (2 nodes): `bs()`, `Fa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `eA()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `el()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (2 nodes): `be()`, `tt`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `CrearTicketDialog`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `CA()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (2 nodes): `ps()`, `Tr`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (2 nodes): `Ui`, `Wv()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (2 nodes): `kt()`, `me`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `mo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (2 nodes): `rS()`, `tT()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `DashboardPage`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `MyTicketsPage`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (2 nodes): `Er`, `gS()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (2 nodes): `qE()`, `vt`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `wt`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (1 nodes): `HomePage`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (1 nodes): `RolPage`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 84`** (1 nodes): `ce`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (1 nodes): `aS()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 86`** (1 nodes): `et`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 87`** (1 nodes): `m0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 88`** (1 nodes): `o0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 89`** (1 nodes): `rE`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (1 nodes): `Mr`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 91`** (1 nodes): `rc`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 92`** (1 nodes): `uE()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 93`** (2 nodes): `n()`, `s()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (1 nodes): `LoginPage`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (1 nodes): `dt()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (1 nodes): `ha`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (1 nodes): `oa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 99`** (1 nodes): `b0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 100`** (1 nodes): `Fo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 101`** (2 nodes): `sl()`, `x0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 102`** (1 nodes): `y0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 103`** (1 nodes): `aa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (1 nodes): `_a`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 105`** (1 nodes): `Je`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (1 nodes): `la`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (1 nodes): `ws`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (1 nodes): `AUTH_FILE`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 109`** (1 nodes): `_0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (1 nodes): `nd`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 111`** (1 nodes): `px`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (1 nodes): `s0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (1 nodes): `T0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (1 nodes): `vd`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 115`** (1 nodes): `w0`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (1 nodes): `xS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (1 nodes): `Yo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `bv` connect `Community 16` to `Community 0`, `Community 23`, `Community 38`, `Community 22`, `Community 33`, `Community 28`, `Community 77`, `Community 45`, `Community 41`, `Community 58`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `v_()` connect `Community 9` to `Community 27`, `Community 0`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `xA` connect `Community 31` to `Community 0`, `Community 19`, `Community 59`, `Community 46`, `Community 45`, `Community 35`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `hf`, `Ch`, `Wh` to the rest of the system?**
  _144 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.02421972534332085 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.035298035298035296 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08292682926829269 - nodes in this community are weakly interconnected._