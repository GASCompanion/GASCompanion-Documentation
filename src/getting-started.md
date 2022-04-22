---
title: Getting Started
description: Getting Started
eleventyNavigation:
    parent: Home
    key: Getting Started
    order: 2
layout: layouts/markdown
---

# {{ title }}

{{ collections.all | eleventyNavigation(eleventyNavigation.key) | eleventyNavigationToMarkdown({ showExcerpt: true }) | safe  }}