---
title: Attributes
description: Attributes
eleventyNavigation:
    parent: Home
    key: Attributes
    order: 4
layout: layouts/markdown
---

# {{ title }}

{{ collections.all | eleventyNavigation(eleventyNavigation.key) | eleventyNavigationToMarkdown({ showExcerpt: true }) | safe  }}