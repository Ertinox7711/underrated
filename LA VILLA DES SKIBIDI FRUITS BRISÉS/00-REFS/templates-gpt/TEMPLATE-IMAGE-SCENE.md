# TEMPLATE IMAGE SCÈNE — GPT/Grok Image

Template pour générer les images fixes des plans VSFB (à upload ensuite dans Veo en first frame).

**Variables à remplacer :**
- `[SETTING]` → décor de la scène
- `[PERSO]` → nom du perso
- `[HEAD DESC]` → description tête fruit
- `[BODY DESC]` → description corps humain + tinted skin
- `[OUTFIT]` → tenue
- `[POSE]` → pose + expression

---

## TEMPLATE BRUT

```
Setting: [SETTING — décrire décor complet : lieu, lumière, ambiance, éléments visuels]

Place [PERSO] alone center frame, [angle/cadrage]:

- HEAD [forme fruit + skin texture + stem/leaves]
- BODY human female/male Pixar proportions, [BODY TYPE] (détails silhouette), [color]-tinted smooth skin
- [HAIR — couleur, longueur, mouvement]
- Big expressive cartoon eyes, [makeup/details face]
- [OUTFIT — vêtements + accessoires détaillés]

Pose: [POSE + expression + état émotionnel]

3D Disney/Pixar animated style, ultra realistic CGI, 8K Hollywood quality.
Cinematic depth of field, [type lighting], magazine cover quality.
```

---

## EXEMPLE — PECHITA villa entrée golden hour

```
Setting: front entrance of a luxury Mediterranean villa — white marble steps, palm trees, white luxury car parked nearby, golden hour sunset, warm orange-pink sky.

Place PECHITA alone center frame, just stepped out of the white car, low angle:

- HEAD shaped like a perfect peach, coral-pink fuzzy peach skin texture with visible peach fuzz, subtle vertical crease, small woody stem with two green leaves on top
- BODY human female Pixar proportions, HOURGLASS CURVY voluptuous figure (full chest, tiny waist, wide hips, thick thighs), coral-pink tinted smooth skin
- Long wavy caramel hair with golden highlights flowing in breeze
- Big expressive cartoon eyes, soft pink blush, glossy coral lips
- Coral satin slip dress with high side slit, gold strappy heels, gold hoop earrings, gold bracelet stack

Pose: looking up at the villa with genuine awe, mouth slightly open, hand to chest, eyes wide.

3D Disney/Pixar animated style, ultra realistic CGI, 8K Hollywood quality.
Cinematic depth of field, golden volumetric light, magazine cover quality.
```

---

## DÉCORS RÉCURRENTS VSFB (copier-coller la ligne Setting)

### Plage sunset Poïrina
```
Setting: tropical luxury beach at golden sunset — turquoise crystal ocean, palm trees swaying, white Mediterranean villa visible in distance, warm orange-pink sky, golden volumetric light, soft sand foreground, lens flare from setting sun.
```

### Entrée villa golden hour
```
Setting: front entrance of a luxury Mediterranean villa — white marble steps leading up, palm trees, luxury car parked nearby, lush tropical plants, golden hour sunset, warm orange-pink sky.
```

### Salon villa intérieur soir
```
Setting: luxury Mediterranean villa salon at night — white marble floor, high ceilings, large windows showing pool glowing electric blue, warm amber interior lights, modern luxury sofas, tropical décor.
```

### Bord piscine jour
```
Setting: infinity pool of luxury villa during daytime — turquoise water, sunloungers with white cushions, palm trees, ocean view in background, bright tropical sunlight, vibrant colors.
```

### Bord piscine nuit
```
Setting: infinity pool of luxury villa at night — pool glowing electric blue, warm amber pathway lights, palm trees in shadow, starry night sky, distant ocean dark, romantic mysterious atmosphere.
```

### Salle confessionnal ITV
```
Setting: dark luxurious confessional booth — black leather chair, dramatic single spotlight overhead, dark blurred background, intimate close framing, cinematic noir mood.
```

### Plage nuit
```
Setting: tropical beach at night — sand foreground, dark ocean with moon reflection, palm trees silhouettes, deep blue sky with stars, distant villa lights blurred.
```

---

## RÈGLES UTILISATION

1. **Garde le format identique** pour cohérence cross-plans
2. **Réutilise les mêmes décors** (mots exacts) dans tous les plans qui s'y passent
3. **Note le seed Veo** quand le rendu plaît → réutilise pour mêmes décors
4. **Toujours finir par** `3D Disney/Pixar animated style, ultra realistic CGI, 8K Hollywood quality. Cinematic depth of field.`
