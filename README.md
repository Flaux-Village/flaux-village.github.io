# Maintaining this website

Markdown: http://ouyaah.legtux.org/appendix/markdown.html

## Layouts

### default

Front page.

### page

Normal page on the website.

### section

Similar to a page, but with a modified breadcrumb and title structure.

## Collections

Collections in Jekyll are a means of grouping sets of content, like blog posts,
news items, etc.

### Actualités

À la une page uses this collection to automatically populate itself
(see actualites.md). It also gets used to populate news blocks on the front page
and in the footer.

### Comptes

Each compte rendu can have its own page in here and it will automatically make
a list on comptes.html under La mairie (see comptes.md).

## Images

Making images responsive - important for banners:

```
![image-title-here](/path/to/image.jpg){:class="img-responsive"}
```

Making text wrap around left-aligned images:

```
![image-title-here](/path/to/image.jpg){:class="lead-illus"}
```

### Article images
355 x 237

### Menu images
300 x 183

### Banners
940 x 250

### Front page tab
525 x 320

### Small thumbnail
182 x 108

## Included components

- banner.html - the title bar
- footer.html - the footer and site map
- gouv.html - (not used) optional extra news bar
- header.html - page metadata, scripts, CSS, etc.
- nav.html - the main menu
