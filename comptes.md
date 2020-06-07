---
layout: page
titre: Comptes rendus | La mairie de Flaux
description: Les comptes rendus des conseils municipaux.
keywords: mairie, commune, flaux, gard, comptes rendus
titre_page: Comptes rendus des conseils municipaux
section: La mairie
addresse_section: /mairie.html
---
{% assign sorted = (site.comptes | sort: 'date') | reverse %}
<ul>
  {% for compte in sorted %}
  <li><h2><a href="{{ compte.url }}">{{ compte.titre_page }}</a></h2>
   - {{ compte.date_texte }}</li>
  {% endfor %}
</ul>
