---
layout: page
titre: Comptes rendus | La mairie de Flaux
description: Les comptes rendus des conseils municipaux.
keywords: mairie, commune, flaux, gard, comptes rendus
titre_page: Comptes rendus des conseils municipaux
section: La mairie
addresse_section: /mairie.html
illustration: /assets/illustrations/940_250_Flauxbanner4_3596.jpg
description_illustration: Mairie de Flaux.
menu_secondaire:
- titre: Horaires secrétariat
  addresse: /mairie.html
- titre: Les élus
  addresse: /elus.html
- titre: Comptes rendus
  addresse: /comptes.html
- titre: Documents divers
  addresse: /divers.html
---
{% assign sorted = (site.comptes | sort: 'date') | reverse %}
<ul>
  {% for compte in sorted %}
  <li><h2><a href="{{ compte.url }}">{{ compte.titre_page }}</a></h2>
   - {{ compte.date_texte }}</li>
  {% endfor %}
</ul>
