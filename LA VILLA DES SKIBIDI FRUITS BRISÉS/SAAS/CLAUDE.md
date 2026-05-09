# CLAUDE.md — Gen M (SaaS Client TikTok AI Tools)

Source : `C:\Users\maths\GenM` (copié ici pour contexte projet série VSFB).
Live : https://robot-validation-produit.web.app/dashboard.html
Firebase project : `robot-validation-produit`

---

## ⚠️ Périmètre

**SAAS = produit client.** Ici uniquement les **tools payants** vendus aux utilisateurs (génération vidéo Veo, scripts Gemini, hashtags, scraper TikTok, marketplace).

**PAS** de module "Studio Série / bible personnages / pipeline VSFB" ici. Ça c'est **privé Mathieu** → géré ailleurs (dossier parent `LA VILLA DES SKIBIDI FRUITS BRISÉS/` + War Room `SGRR&LAW/SAAS/index.html`).

Règle : tout ce qui est **production interne de la série** ne touche pas à `dashboard.html` client.

---

## Projet : Gen M

SaaS génération vidéos TikTok IA via **Veo 3.1 Fast** + tools IA. Économie GenCoins (GC) — débit atomique côté Cloud Functions.

### Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML/CSS/JS vanilla + Firebase JS SDK 11 (modules ESM) |
| Auth | Firebase Auth (email/password) |
| DB | Firestore |
| Hosting | Firebase Hosting |
| Backend API | Cloudflare Workers (`workers/`) → `https://genm-api.ertidiscord.workers.dev` |
| Cloud Functions | Veo, Gemini, scraper, Stripe |
| Paiement | Stripe checkout + webhook |

### Fichiers

```
SAAS/
├── index.html           # Landing
├── pricing.html         # Pricing
├── dashboard.html       # ⭐ Espace client (1434 lignes) — UNIQUEMENT tools clients
├── legal.html
├── tiktok-callback.html
├── css/style.css
├── js/
│   ├── firebase-config.js   # config + COSTS + PLANS + GEM_PACKS + API_BASE
│   ├── auth.js
│   └── dashboard.js
├── functions/index.js       # Veo, Gemini, scraper, Stripe webhook
├── workers/                 # Cloudflare Workers
├── firebase.json / firestore.rules / firestore.indexes.json
```

### Économie GenCoins

| Item | GC |
|------|----|
| Vidéo 8s | 100 |
| Vidéo 16s | 200 |
| Vidéo 24s | 300 |
| Script gen | 10 |
| Scraper TikTok | 10 |
| Description+Hashtags | 10 |

**Plans** : Pro 97€/mois (500 GC) · Elite 1200€ lifetime (3000 GC)
**Refill** : Starter 4.99€ / Creator 12.99€ / Studio 29.99€ / Legendary 79.99€

Toute génération passe par Cloud Functions : auth → solde → API externe → débit atomique → historique.

---

## Theme

```css
--ink: #fff; --ink-2: #b4b4c8; --ink-3: #6e6e85;
--bg: #0a0014; --bg-1: #14002a; --bg-2: #1d0040;
--c-electric: #00E0FF;
--c-magenta:  #FF00A8;
--c-purple:   #9C27FF;
--c-gold:     #FFD600;
--c-green:    #00FF88;
```

Fonts : `Bebas Neue` (display), `Russo One` (bold), `Geist` (body).

---

## Workflow déploiement

```bash
firebase emulators:start          # local dev
firebase deploy                   # tout
firebase deploy --only hosting
firebase deploy --only functions
firebase deploy --only firestore:rules
```

⚠️ Domaines auth autorisés à valider dans console Firebase :
https://console.firebase.google.com/project/robot-validation-produit/authentication/settings

---

## Secrets (Cloud Functions)

```bash
firebase functions:secrets:set KIE_API_KEY        # Veo via Kie.ai
firebase functions:secrets:set GEMINI_API_KEY
firebase functions:secrets:set STRIPE_SECRET
firebase functions:secrets:set STRIPE_WEBHOOK_SECRET
firebase functions:secrets:set APP_URL
```

---

## Sécurité

- `firestore.rules` : users **ne peuvent pas modifier** leur propre `gcBalance` ni `plan`. Seules les Cloud Functions y ont accès (admin SDK).
- Pas d'API keys côté client. Tout passe par Workers ou Functions.
- Stripe webhook valide via `STRIPE_WEBHOOK_SECRET` avant crédit GC.

---

## Roadmap tools client (à venir)

- Marketplace transactions (Stripe Connect)
- Affiliation 30% commission sur recharges parrainées
- Templates Veo prompts par niche
- Auto-posting TikTok via API officielle (déjà callback prêt : `tiktok-callback.html`)
- App mobile (React Native + Firebase)

---

## Studio Série — décisions UX

### Architecture vues (ordre + rôle)
1. **Vidéo IA** (`view-generate`) — one-shot quick-gen (prompt → vidéo, pas de série)
2. **Mes Histoires** (`view-series`) — hub principal, contient en haut un CTA "Créer une vidéo (assistant)" qui amène au wizard. Sans série, propose création.
3. **Mes Persos** / **Mes Épisodes** / **Mes Scènes** — gestion bible
4. **Logos & Sons** — bibliothèque
5. **Créer une Vidéo** (`view-pipeline`) — wizard étapes 1→5. Pas dans sidebar (accessible depuis Mes Histoires + depuis chaque scène)

### Règles UX
- **Aucun emoji décoratif** dans le texte UI (👆 🚀 🎉 etc.) → SVG ou texte pur. Les emojis OK uniquement comme avatars choisis par user (perso/série).
- **Pas de `prompt()` / `alert()` natif** pour la saisie. Utiliser modale custom `#ui-modal` cohérente avec theme.
- **Information critique visible**: solde Gems, quota vidéos restantes, coût total wizard → pill grande taille, neon glow magenta.
- **Tap targets** ≥ 48px, border-radius ≥ 14px, 3D button effect (shadow décalée).
- **Mascot helper** uniquement sur wizard (`view-pipeline`), tips contextuels.
- **Confetti** uniquement sur action de complétion finale (génération vidéo lancée).

### Affichage version (admin only — bottom-left)
- Badge fixé en bas à gauche, visible uniquement si user a `plan === 'elite'` ou flag `admin === true` dans Firestore `users/{uid}`.
- Affiche : VERSION courante (lue depuis `VERSION.json` à la racine, généré par CI) + commit short SHA + lien vers `CHANGELOG.md`.
- Click ouvre modale changelog des 5 dernières versions.
- Pas visible pour les users normaux (pas de bruit visuel).

```js
// Pseudocode
if (user.plan === 'elite' || user.admin) {
  fetch('/VERSION.json?t=' + Date.now()).then(r => r.json()).then(v => {
    document.getElementById('admin-ver-badge').textContent = `v${v.short} · ${v.date}`;
  });
}
```

### Modale custom UI
- Pattern : un seul `<div id="ui-modal" class="hidden">` réutilisable
- Champs construits dynamiquement par appel JS : `openModal({ title, fields: [...], onSubmit })`
- Animation `pop-in` à l'ouverture, fade out à la fermeture
- Fermeture: ESC, click backdrop, bouton X
- Theme: même border-radius/colors que le studio

---

## Permissions

Tout pré-autorisé : git, npm, node, firebase CLI, read/write fichiers locaux.
