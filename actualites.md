---
layout: section
titre: Actualités | La mairie de Flaux
description: Actualités du village de Flaux
keywords: mairie, commune, flaux, gard, actualités
titre_page: À la une
illustration: /assets/illustrations/940_250_flauxcaillou_3591.jpg
description_illustration: La Mairie de Flaux.
documents:
- fiche: PLU vote pour garder la gestion communale
  date_texte: 19 Novembre 2020
  addresse: /assets/images/articlespress/articleoctobre2020PLU.pdf
  type: pdf
- fiche: Rhéabilitation du lavoir des Auvis-Patrimoine culturel
  date_texte: 25 Novembre 2020
  addresse: /assets/images/articlespress/reabilitationlavoirauvis2020article.pdf
  type: pdf
---

{% assign sorted = (site.actualites | sort: 'date') | reverse %}
<ul>
  {% for article in sorted %}
  <li><h2><a href="{{ article.url }}">{{ article.titre_page }}</a></h2>
   - {{ article.date_texte }}</li>
  {% endfor %}
</ul>
