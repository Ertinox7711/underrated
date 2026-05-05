# Changelog

## 05/05/2026 08:03 — `75c51b7`
feat: equipe page - admin can edit member card role + tasks inline

## 05/05/2026 07:57 — `ae00e82`
style: animations plus lentes, shimmer sur item sidebar actif

## 05/05/2026 07:55 — `95446fd`
feat: top bar shimmer + animations ambiantes (float, pulse, dot breathe)

## 05/05/2026 07:54 — `8f02423`
fix: reset credentials v3 - force pseudo=mdp pour tout le monde

## 05/05/2026 07:53 — `e5c5eb6`
feat: add task modal - plus de prompt, sélecteur personne inline

## 05/05/2026 07:49 — `b7567cf`
feat: changelog panel slide-in, plus de window.open

## 05/05/2026 07:45 — `19c6495`
feat: phases dynamiques, couleur perso par membre, addTask auto-personne

## 05/05/2026 07:38 — `38ac84e`
feat: admin - tabs par membre, member preview éditable, sous-menu sidebar

## 05/05/2026 07:34 — `81edae9`
fix: code review - admin guard, dead CSS, type=password, saveTaskEdit live idx

## 05/05/2026 07:30 — `d4d234b`
feat: login simplifié - pseudo + mdp, admin gère les mots de passe

## 05/05/2026 07:27 — `3a0408f`
feat: login - toggle connexion/créer un compte, credentials en localStorage

## 05/05/2026 07:23 — `3c083e4`
feat: login system - person selector, email/password auth, admin panel, personalized views

## 05/05/2026 07:16 — `0bc3a9f`
fix: CSS-only reveals (no blank page), add phases sub-menu par personne

## 05/05/2026 07:09 — `b5b32c3`
feat: dashboard SPA 6 pages - Home, Equipe, Phases, Tools+Serie, Audit, Strategie

## 05/05/2026 06:56 — `bf0c2f6`
feat: add dashboard war room + audit stratégique

## 04/05/2026 18:35 — `f2bba19`
fix: tasks board - scope localStorage per user, sync done/status, fix date timezone, prevent focus loss on date edit

## 04/05/2026 18:21 — `4769013`
fix: mobile layout - sidebar position:fixed !important, toolbar scroll, title size, cover, touch resize

## 04/05/2026 18:14 — `487b68a`
fix: image block resize - fix draggable conflict, add touch support, handle always visible

## 04/05/2026 18:11 — `ee76b64`
feat: Monday-style task board - sidebar button, groups, statuts En cours/Fait/Bloqué, échéances, drag-to-check, add/delete tasks & groups

## 04/05/2026 17:58 — `ae6d7fa`
fix: workspace isolation audit - graph view, mentions, favs, recent, backlinks, cmdK, daily note now strictly filter by currentWorkspaceId; createPage tags new pages; new pagesInWs() helper + window.wsMatchPage; graph layout improved (tree clustering)

## 04/05/2026 17:54 — `1ac0733`
feat: Database block (Notion+Monday) - 5 views (Table/Board/Gallery/Calendar/List), 14 column types (status/select/multi/date/person/checkbox/url/email/phone/rating...), filter/sort/group/hide, popovers, detail modal, CSV export

## 04/05/2026 17:40 — `4a29083`
fix: page-switch only on real navigation (no blur on typing), drop image as image block, resizable images, SVG favicon (lightning bolt)

## 04/05/2026 17:35 — `58eff17`
feat: Notion-like cover actions - Changer / Repositionner (drag) / Supprimer with SVG icons (no emoji)

## 04/05/2026 17:32 — `4a4f43b`
remove magnetic buttons and custom cursor (UX feedback)

## 04/05/2026 17:29 — `7430542`
fix: remove cover parallax + cursor ring (keep just gold dot)

## 04/05/2026 17:23 — `e678f49`
feat: immersive motion system - aurora topbar, custom cursor with lag, magnetic buttons, page transitions, parallax cover, focus glow, title shimmer

## 04/05/2026 17:19 — `8dc2783`
feat: Unsplash cover picker - 28 category chips + auto-load default photos + landscape orientation + photographer attribution

## 04/05/2026 17:12 — `dedf170`
fix: store icon as lucide:name + re-render at context size (sidebar 16px, banner 60px)

## 04/05/2026 17:04 — `e6fab89`
fix: cover picker module-scope binding override + lucide icon picker for page banner (no emojis)

## 04/05/2026 16:56 — `995d316`
feat: toolbar SVG icons (lucide), move toolbar below page meta, harden icon picker click handler

## 04/05/2026 16:50 — `1e0416b`
feat: cover picker modal+backdrop, Google Docs-style toolbar (undo/redo, paint, zoom, +/- size, comment, image, table, checklist, indent, line spacing)

## 04/05/2026 16:42 — `9e3c4bd`
fix: emoji picker categories stay open + save button + Ctrl+S shortcut

## 04/05/2026 16:40 — `311fef0`
feat: remove whiteboard/mindmap, add persistent Word-style toolbar on every page

## 04/05/2026 16:29 — `cbb32ec`
fix: AI block configure button, navigator.platform deprecation, URL escaping, CI push guard

## 04/05/2026 06:26 — `3d0a0b0`
feat: mindmap visible toolbar (boutons cliquables) + fix calendar/sheet/form render hook

## 04/05/2026 06:20 — `f2e862e`
fix: end-add-btn stopPropagation + drawio infinite canvas + mindmap hints

## 04/05/2026 06:14 — `90a0324`
polish: more UX wins

## 04/05/2026 06:12 — `0eff908`
fix: critical batch from agents audit

## 04/05/2026 05:58 — `fc872d2`
fix: drawio whiteboard config (dark, single page, grid, better defaults)

## 04/05/2026 05:53 — `4617896`
feat: whiteboard block via drawio embed (formes, flèches, sticky, dessin, full-section)

## 04/05/2026 05:46 — `d39bcc6`
fix: mermaid render id sanitize (Math.random dots broke querySelector)

## 04/05/2026 05:42 — `e6ced78`
fix: end-add-btn ephemeral cleanup (auto-remove abandoned / blocks)

## 04/05/2026 05:35 — `79c1969`
fix: HIGH-severity null-derefs + mindmap centering + Storage corruption surface

## 04/05/2026 05:21 — `ccf43af`
style: lighter canvas + Inter font + soft shadows on mindmap nodes

## 04/05/2026 05:14 — `646ca75`
feat: add Mindmap card to + Nouveau picker (creates page with mindmap block)

## 04/05/2026 05:01 — `202c35e`
feat: mindmap as full-width section (escape editor max-width, 680px tall)

## 04/05/2026 04:49 — `5601213`
fix: use mind-elixir IIFE bundle so window.MindElixir is exposed

## 04/05/2026 04:45 — `74a7cc3`
fix: end-add-btn pre-fills / and positions caret so slash menu stays open while typing

## 04/05/2026 04:42 — `05e9bb8`
feat: interactive mindmap block via mind-elixir (Whimsical-like)

## 04/05/2026 04:22 — `38128a4`
feat: end-of-page + button + mindmap block (Whimsical-style mermaid mindmap)

## 04/05/2026 04:17 — `adbf3cb`
fix: slash menu hides when typing query (only triggered on bare /)

## 04/05/2026 04:14 — `9b60b28`
fix: slash menu icons missing (lucide not hydrated after render)

## 04/05/2026 04:12 — `d261d51`
fix: popup positioning (cover picker, slash menu, emoji picker, +button)

## 04/05/2026 04:01 — `5f8caf6`
fix: slash menu position fixed (was hidden offscreen due to scrollY math)

## 04/05/2026 03:55 — `473e105`
fix: + button doesn't fire global hide; remove demo button

## 04/05/2026 03:46 — `8fca177`
fix: icon picker reliable + cover clickable + block + button + demo auto-import

## 04/05/2026 03:37 — `e35544e`
feat(notion-parity): Cmd+P quick find, page menu (style/width/lock), share, columns, highlight, db view switcher, @date mention

## 04/05/2026 02:18 — `e374563`
data: re-import with rich markdown conversion (callouts, bold, links, tables)

## 04/05/2026 02:14 — `61050af`
feat: rich Notion-style templates + harden page mode picker

## 04/05/2026 02:02 — `dc9b671`
fix: demo bypasses showApp (was overwriting seed via Storage.load + cloudLoad)

## 04/05/2026 01:59 — `f908349`
fix: render-time emoji-to-SVG strip for stored icons (workspace/page/folder)

## 04/05/2026 01:51 — `27e39a0`
design: match Glass — replace static emoji UI with inline SVG icons

## 04/05/2026 01:44 — `6324875`
feat: demo button seeds 3 pages from design (Stratégie/Roadmap/Notes) — exact match

## 04/05/2026 01:41 — `91a54bd`
fix: demo button matches design exactly (✦ VOIR UNE DÉMO uppercase + accent style)

## 04/05/2026 01:40 — `f19ff35`
fix: logo SVG matches design (36px stroke-1.2 inline) instead of Lucide 22px

## 04/05/2026 01:29 — `92862ca`
fix: restore exact page-title CSS rule (was placeholder comment)

## 04/05/2026 01:24 — `73e2fda`
feat: add Voir une démo button on login (auto-creates demo account)

## 04/05/2026 01:21 — `0950836`
fix: remove duplicate page-title CSS override (was forcing weight 500, design uses 700)

## 04/05/2026 01:14 — `4d5a3c2`
design: pixel-exact CSS port from standalone-source.html

## 04/05/2026 01:04 — `a26e341`
design: full Glass port - login hero, lux topbar, system emojis stripped

## 04/05/2026 00:47 — `636aa9c`
design: Glass theme - CSS tokens + component polish (layout preserved)

## 04/05/2026 00:14 — `90da33b`
Revert "design: implement Underrated Glass theme (visual refresh, all features preserved)"

## 04/05/2026 00:11 — `d428f38`
design: implement Underrated Glass theme (visual refresh, all features preserved)

## 03/05/2026 22:59 — `af8a398`
fix: cover picker Unsplash tab uses Openverse API (no key, replaces deprecated source.unsplash.com)

## 03/05/2026 22:55 — `d9bc356`
feat: visual DnD indicators - line above/below = sibling, glow inside = nest

## 03/05/2026 22:50 — `c81b918`
feat: drag pages/folders into folders + drop on root to unparent

## 03/05/2026 22:46 — `e1d26dc`
fix: remove Drive card from page mode picker (already in sidebar nav)

## 03/05/2026 22:44 — `80c5b83`
feat: add Dossier card to + page mode picker

## 03/05/2026 22:38 — `c67f338`
fix: strict workspace filter on pages + folders (no leak across workspaces)

## 03/05/2026 22:29 — `8944924`
data: add import-script.js for content ingestion

## 03/05/2026 22:27 — `95148d5`
feat: expose state/Storage/renderPages on window for import scripts

## 03/05/2026 16:53 — `c5db7bf`
feat: Drive entry in sidebar nav + global drag-drop on app (auto-upload to current page)

## 03/05/2026 16:48 — `5e0a9b2`
feat: Drive add button + clickable dropzone opens native file picker

## 03/05/2026 16:42 — `8be5b7a`
fix: QR code via api.qrserver.com (no JS lib needed, always works)

## 03/05/2026 16:40 — `31569c2`
fix: QR code via toDataURL, replace 📁 + 👤 default with SVG, clarify invite link is public

## 03/05/2026 16:33 — `40a0f3d`
fix: remove MutationObserver loop that froze renderer on login

## 03/05/2026 16:26 — `740483e`
feat: replace system UI emojis with Lucide SVG icons (user emoji picker preserved)

## 03/05/2026 16:14 — `1a0c891`
feat: Workspace Suite — Word/Sheets/Slides/Drive/Forms/Calendar built-in

## 03/05/2026 16:04 — `1eccdf3`
feat: workspaces + invite link + team mgmt + profile + folder confirmed

## 03/05/2026 15:55 — `26b3fe9`
feat: Notion-like cover picker - 24 colors + 20 gradients + 12 textures + Unsplash search (no key needed) + Supprimer

## 03/05/2026 13:57 — `bc95baa`
feat: cover picker tabs - Galerie/Importer/URL/Aleatoire (upload, paste URL, Picsum)

## 03/05/2026 08:42 — `b4af590`
fix: buildCmdK extension reassigns module-level var (extras now show in palette)

## 03/05/2026 08:40 — `0bca77e`
fix: remove duplicate Templates sidebar button + use MOD constant in seed content

## 03/05/2026 08:36 — `7dce985`
fix: buildPageTree + search filter out deleted pages (so trash actually hides them)

## 03/05/2026 08:30 — `fdac463`
fix: remove blocking confirm() on softDelete + folder delete (restorable from trash)

## 03/05/2026 08:22 — `2bc2c32`
fix: folder UI selector - use page-list closest section instead of broken :last-of-type

## 03/05/2026 08:18 — `21eadc6`
fix: ctx menu lookup index now matches actual array position (separators caused off-by-one)

## 03/05/2026 08:15 — `ed33497`
feat: folder system + 6 free APIs + settings panel + bug fixes

## 03/05/2026 08:03 — `709b5fd`
feat: template preview modal+hover popover, right-click context menus on pages and blocks

## 03/05/2026 08:00 — `7fd13ed`
feat: detect OS, show Ctrl+ on Windows instead of mac symbol

## 03/05/2026 07:57 — `6138ac2`
fix: move FAB above version badge to avoid overlap

## 03/05/2026 07:52 — `0deb423`
fix: page icon properly overlaps cover banner like Notion

## 03/05/2026 07:46 — `01c0c59`
feat: complete Notion-killer rebuild with 25+ features

## 03/05/2026 07:26 — `1597f4d`
feat: rename project to Underrated

## 03/05/2026 07:24 — `a03fd85`
docs: add live URL and Firebase Auth domain setup note

## 03/05/2026 07:23 — `4a45dc5`
init: SGRR&LAW workspace with Firebase + auto-deploy

## Initial — Premier deploy
Setup Firebase Auth + Firestore, app collaborative, GitHub Pages auto-deploy.
