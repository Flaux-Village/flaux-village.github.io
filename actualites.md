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
## Les déchèteries du SICTOMU (Uzès + Fournès + Lussan + Vallabrix) et Garrigues Ste Eulalie seront exceptionnellement fermées l'après-midi MERCREDI 26 OCTOBRE 2022 de 14h à 17h15. Pour rappel les déchèteries sont également fermées tous les jours fériés. Pour tout renseignement, le SICTOMU se tient à votre disposition au 04 66 22 13 70.<br>

## La bibliothèque sera fermée pendant les vacances scolaires de Toussaint, du lundi 24 octobre au dimanche 6 novembre inclus.<br>

{% assign sorted = (site.actualites | sort: 'date') | reverse %}
<ul>
  {% for article in sorted %}
  <li><h2><a href="{{ article.url }}">{{ article.titre_page }}</a></h2>
   - {{ article.date_texte }}</li>
  {% endfor %}
</ul>
