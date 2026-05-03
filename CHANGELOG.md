# Changelog

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
