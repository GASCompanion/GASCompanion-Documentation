---
title: Configuration
description: Configuration
eleventyNavigation:
    parent: Home
    key: Configuration
    order: 3
layout: layouts/markdown_home
---

# {{ title }}

{{ collections.all | eleventyNavigation(eleventyNavigation.key) | eleventyNavigationToMarkdown({ showExcerpt: true }) | safe  }}