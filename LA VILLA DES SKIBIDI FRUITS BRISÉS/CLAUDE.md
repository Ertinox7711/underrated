# CLAUDE.md — VSFB Production Context

**Projet :** LA VILLA DES SKIBIDI FRUITS BRISÉS (VSFB)
**Format :** Série TikTok animée IA, parodie Too Hot to Handle / Séduction Haute Tension
**Durée cible :** ~60s par épisode | Upload 21h

---

## STACK PRODUCTION

| Outil | Usage |
|-------|-------|
| **Grok Image** | Générer les 11 personnages (design sheets) |
| **GPT Image** (ChatGPT) | Créer images fixes des plans (perso + décor) |
| **Veo 3.1 Fast** | Animer image fixe + dialogue + lip sync |
| **ElevenLabs v3** | Voix françaises avec émotions (clone perso) |
| **Suno / Udio** | Musique intro + ambiance |
| **CapCut** | Montage final, sous-titres, effets |

---

## RÈGLES PROMPTS

- **PAS de "vertical 9:16"** dans les prompts (utilisateur active manuellement)
- **PAS de durées** (5 seconds, 8 seconds) ni timestamps (0-2s, Beat 1)
- **Format dialogue** : `@PERSO [ÉMOTION + body language] : "réplique"`
- **Toujours** : `Pixar/DreamWorks 3D cartoon, ultra realistic CGI, 8K Hollywood quality, perfect French lip sync, HYPER EXPRESSIVE animated face`
- **Argot/lexique VSFB** : voir `00-REFS/VOCABULAIRE/LEXIQUE-VSFB.md`

---

## STYLE VISUEL — 2 versions disponibles

**v1 — Corps fruit** (silhouette pulpeuse, courbée, etc.)
**v2 — Corps humain + tête fruit** (style Tentafruit) ← actuellement utilisé

Tous les persos = corps humain avec **types variés** (curvy/lean/buff/skinny/athletic) + tête forme fruit + peau teintée fruit.

---

## CAST — 11 PERSONNAGES

| Perso | Fruit | Rôle | Body type |
|-------|-------|------|-----------|
| 🍑 PECHITA | Pêche | Diva charmeuse | Hourglass curvy pulpy |
| 🍋 LIMONO | Citron | Alpha cool Marseille | Grand mince athlétique |
| 🍇 UVALIA | Raisin | Femme fatale méchante | Top model fine grande |
| 🍅 SANDINO | Tomate | Méchant souriant manipulateur | Gros baraqué dad bod |
| 🍊 NARITA | Orange | Drama queen joyeuse | Plus-size curvy pulpy |
| 🍌 BANITO | Banane | Comic relief loser | Petit maigre |
| 🍓 FRÉSIO | Fraise | Love interest doux | Grand musclé doux |
| 🫐 MYRTANA | Myrtille | Mystérieuse silencieuse | Petite très mince |
| 🥥 KOKONA | Coco | Surfeur charmeur | Surfer ripped |
| 🥝 KIWILA | Kiwi | Sportive directe | Tonique fit |
| 🍐 POÏRINA | Poire | Présentatrice journaliste | Pear curvy |

---

## STRUCTURE FICHIERS

```
LA VILLA DES SKIBIDI FRUITS BRISÉS/
├── CLAUDE.md (ce fichier)
├── 00-REFS/
│   ├── PROMPTS-MASTER.md (prompts persos individuels)
│   ├── persos/[nom]/[nom].md + neutre.png
│   ├── VOCABULAIRE/LEXIQUE-VSFB.md (argot complet)
│   ├── seeds/SEEDS-VEO.md (seeds par décor)
│   ├── voix/VOIX-VEO-LOCKED.md (voix par perso)
│   ├── templates-gpt/TEMPLATE-IMAGE-SCENE.md (template scènes)
│   ├── decors/ (images de référence des décors)
│   └── persos/TOUS-NEUTRE/ (toutes images neutres)
├── 01-SCRIPTS/
│   └── E01-LA-VILLA.md (épisode 1 complet)
├── 02-VIDEOS/
│   └── E01/ (vidéos générées Veo, nommées PLAN-XX-NOM-action.mp4)
└── 03-AUDIO/ (voix ElevenLabs + musique)
```

---

## WORKFLOW PAR PLAN

1. **GPT Image** → générer image fixe (perso + décor) avec prompt template
2. **Télécharger** image
3. **Upload Veo** en first frame
4. **Veo prompt** = animation + dialogue avec format `@PERSO [ÉMOTION] : "..."`
5. **Note le seed** Veo si rendu cohérent → sauvegarde dans SEEDS-VEO.md
6. **Sauvegarde vidéo** dans `02-VIDEOS/E01/PLAN-XX-NOM-action.mp4`
7. **(Optionnel)** Voix ElevenLabs séparée si besoin clone parfait
8. **CapCut** : assemble plans + sous-titres + emoji + musique

---

## SEEDS LOCKÉS

| Décor | Seed |
|-------|------|
| Plage sunset Poïrina | `0d54b1d0-49ee-11f1-9ad0-ee5e7f4fc03a` |
| Entrée villa golden hour | *(à définir)* |
| Salon villa intérieur | *(à définir)* |
| Piscine jour | *(à définir)* |
| Piscine nuit | *(à définir)* |

---

## ÉPISODE 1 — STATUT

| Plan | Perso | Status |
|------|-------|--------|
| PLAN 1 | POÏRINA intro plage | ✅ Vidéo générée |
| PLAN 2 | PECHITA arrive villa | ✅ Vidéo générée |
| PLAN 3 | LIMONO arrive villa | ✅ Vidéo générée |
| PLAN 4 | UVALIA arrive villa | ✅ Vidéo générée |
| PLAN 5 | SANDINO arrive villa | ⏳ En cours |
| PLAN 6 | NARITA présentation | ⏳ |
| PLAN 7 | BANITO présentation | ⏳ |
| PLAN 8 | Intérieur villa découverte | ⏳ |
| PLAN 9 | Règle Poïrina | ⏳ |
| PLAN 10 | Réactions règle | ⏳ |
| PLAN 11 | PECHITA × LIMONO piscine (HOOK) | ⏳ |
| PLAN 12 | SANDINO nuit murmure | ⏳ |
| PLAN 13 | POÏRINA cliffhanger | ⏳ |

---

## NOTES

- **Caveman mode** activé en conversation (drop articles, fragments OK)
- **Censure Veo** : éviter "zebi", "wallah" si bloqué → "putain", "frérot"
- **Seeds** = visuel uniquement, pas l'audio
- **Style Tentafruit** confirmé (corps humain + tête fruit)
- **Musique intro** = Tropical House addictif avec hook "WAY-OH"
