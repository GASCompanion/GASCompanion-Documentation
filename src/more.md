---
title: More
description: More
eleventyNavigation:
  parent: Home
  key: More
  order: 4
layout: layouts/page
---

# {{ title }}

{{ collections.all | eleventyNavigation(eleventyNavigation.key) | eleventyNavigationToMarkdown({ showExcerpt: true }) | safe  }}