---
layout: section
titre: Actualités | La mairie de Flaux
description: Actualités du village de Flaux
keywords: mairie, commune, flaux, gard, actualités
titre_page: À la une
illustration: /assets/illustrations/940_250_flauxbanner_3595.jpg
description_illustration: La Mairie de Flaux.
documents:



---

## La boulangerie Épis Flûte sera fermée exceptionnellement du dimanche 25 au jeudi 29 septembre inclus. Nous serons de retour vendredi 30 septembre aux horaires habituels, Merci, Suzy et Rémy

## Des travaux de goudronnage vont être effectués sur la D4
### Entre mardi30/08 et jeudi01/09

### La D4 sera coupée de Flaux (Madone) au Centaure, la circulation sera
### déviée sur Saint Hippolyte de Montaigu.

{% assign sorted = (site.actualites | sort: 'date') | reverse %}
<ul>
  {% for article in sorted %}
  <li><h2><a href="{{ article.url }}">{{ article.titre_page }}</a></h2>
   - {{ article.date_texte }}</li>
  {% endfor %}
</ul>
