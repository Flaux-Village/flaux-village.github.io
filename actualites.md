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

##REUNION PUBLIQUE

#BILAN Annuel de l’action de l’Association CHAVAMIEUX sur la commune de FLAUX<br>

Vendredi 29 septembre 2023, à 18h30 au château<br>


{% assign sorted = (site.actualites | sort: 'date') | reverse %}
<ul>
  {% for article in sorted %}
  <li><h2><a href="{{ article.url }}">{{ article.titre_page }}</a></h2>
   - {{ article.date_texte }}</li>
  {% endfor %}
</ul>
