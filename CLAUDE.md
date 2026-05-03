# SGRR&LAW — Série IA Virale + Formation

## Projet
Série IA virale TikTok/YouTube Shorts + formation payante.
Deux personnes : toi + ton pote.
Inspiration : Skibidi Tentafruit/Fruit Love Island — mais meilleure histoire + meilleure conversion.

## Stack
- Frontend : HTML/CSS/JS vanilla — `index.html` (Notion-like app collaborative)
- Auth + DB : Firebase (projet SGRR-LAW — en attente création)
- Hébergement : GitHub Pages
- IA prod : ChatGPT, Gemini, outils génération image/vidéo

## Fichiers clés
- `index.html` — app collaborative complète (login, éditeur de blocs, mobile-first)
- `.claude/settings.json` — permissions projet

## Firebase (TODO)
Quand projet SGRR-LAW créé sur console.firebase.google.com :
1. Copier `firebaseConfig` dans `index.html` → variable `FIREBASE_CONFIG`
2. Passer `FIREBASE_ENABLED = true`
3. Activer Authentication (Email/Password)
4. Activer Firestore Database

## Features app actuelles
- Login/signup (localStorage tant que Firebase absent)
- Pages multiples avec emoji custom
- Éditeur de blocs slash menu (`/` → titre, liste, todo, citation, callout, séparateur)
- Auto-save localStorage
- Mobile-first, dark mode, sidebar swipeable iOS/Android

## Genres série validés (potentiel viral décroissant)
1. Survie/Jeux mortels — tension max, cliffhangers, 15-45 ans
2. Romance/Drama — audience féminine fidèle, rewatching élevé  
3. Thriller/Crime — mystery = rétention parfaite
4. Action/Underdog — universel
5. Fantasy/Surnaturel — meilleur TikTok, visuels IA naturellement partageables
6. Catastrophe/Survie — décors IA spectaculaires

## Workflow production (référence Charles & Clara)
- 1 épisode/jour → algo TikTok boosté
- ~7h travail/épisode, coût : quelques dizaines €
- Tools : ChatGPT + Gemini + image gen + montage vidéo

## Modèle revenus
1. Brand deals (30-70k€ deal majeur type Oasis)
2. Formation/méthode (97-300€, bio TikTok)
3. TikTok Creator Fund (secondaire, ~0.05-0.10€/1000 vues)

## Skills Claude à utiliser automatiquement
- `marketing:campaign-plan` → plan de lancement série/épisodes
- `marketing:email-sequence` → séquences email pour vendre la formation
- `marketing:draft-content` → posts TikTok, YouTube, newsletters
- `sales:create-an-asset` → landing page formation
- `sales:draft-outreach` → outreach pour brand deals
- `frontend-design:frontend-design` → amélioration UI app/site
- `product-management:write-spec` → spec de la formation
- `data:build-dashboard` → dashboard analytics vues/revenus
- `engineering:documentation` → docs techniques

## Deploy & Versioning — IMPORTANT (à appliquer toujours)

### Comment deploy (workflow standard)
À chaque modification importante, faire un commit + push, le déploiement se fait automatiquement :

```bash
git add .
git commit -m "feat: description du changement"
git push
```

GitHub Actions (`.github/workflows/deploy.yml`) se déclenche sur push vers `main` :
1. Génère `VERSION.json` (commit SHA, message, date FR)
2. Ajoute une entrée en haut de `CHANGELOG.md`
3. Push VERSION + CHANGELOG sur le repo (avec `[skip ci]` pour éviter boucle)
4. Deploy sur GitHub Pages

**URL live : https://ertinox7711.github.io/sgrr-law/**
**Repo : https://github.com/Ertinox7711/sgrr-law**

### Format des messages de commit
Utiliser format conventionnel pour clarté :
- `feat:` nouvelle fonctionnalité
- `fix:` correction de bug
- `chore:` maintenance, config
- `docs:` documentation
- `style:` UI/CSS

Exemples :
- `feat: add real-time Firestore sync for blocks`
- `fix: mobile sidebar swipe glitch on iOS`
- `style: improve sidebar footer version badge`

### Affichage version dans l'app
- Badge en bas de sidebar (cliquable → ouvre changelog)
- Badge sur écran de login
- Charge depuis `VERSION.json` (cache-busted avec `?t=timestamp`)

### Fichiers générés automatiquement (ne pas éditer manuellement)
- `VERSION.json` — généré par CI à chaque deploy
- `CHANGELOG.md` — auto-rempli par CI (le titre `# Changelog` reste, entrées ajoutées sous)

### Setup déjà fait (référence)
1. ✅ `git init`, repo créé : `gh repo create sgrr-law --public`
2. ✅ GitHub Pages activé via API : `gh api -X POST repos/Ertinox7711/sgrr-law/pages -f build_type=workflow`
3. ✅ Workflow auto-deploy en place

### ⚠️ Firebase Auth — domaines autorisés (à faire manuellement UNE FOIS)
Le login Firebase ne fonctionne en prod QUE si le domaine est autorisé :
1. Aller sur https://console.firebase.google.com/project/robot-validation-produit/authentication/settings
2. Onglet "Domaines autorisés"
3. Ajouter : `ertinox7711.github.io`
4. (`localhost` est déjà autorisé par défaut)

Sans ça : login marche en local mais erreur en prod.

## Permissions
Tout pré-autorisé : git, npm, node, firebase, read/write fichiers, browser, Notion MCP, Firebase MCP.
