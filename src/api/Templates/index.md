---
eleventyNavigation:
  key: Templates
  parent: API
layout: layouts/api
---
# Templates

{{ collections.all | eleventyNavigation("Templates") | eleventyNavigationToMarkdown | safe }}
