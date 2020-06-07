---
layout: section
titre: Actualités | La mairie de Flaux
description: Actualités du village de Flaux
keywords: mairie, commune, flaux, gard, actualités
titre_page: À la une
---

{% assign sorted = (site.actualites | sort: 'date') | reverse %}
<ul>
  {% for article in sorted %}
  <li><h2><a href="{{ article.url }}">{{ article.titre_page }}</a></h2>
   - {{ article.date_texte }}</li>
  {% endfor %}
</ul>
