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
## Le secrétariat sera FERMÉ du 19 au 23 avril 2021

## D'ici peu nous aurons une nouvelle BOULANGERIE dans le centre de Flaux!

{% assign sorted = (site.actualites | sort: 'date') | reverse %}
<ul>
  {% for article in sorted %}
  <li><h2><a href="{{ article.url }}">{{ article.titre_page }}</a></h2>
   - {{ article.date_texte }}</li>
  {% endfor %}
</ul>
