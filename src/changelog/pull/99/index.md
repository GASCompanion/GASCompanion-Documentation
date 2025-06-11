---
title: "Pull Request #99"
description: "Configurable combo menu location in level editor toolbar and status bar"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_99
  title: "6.2.0 - PR #99"
  excerpt: "Configurable combo menu location in level editor toolbar and status bar"
layout: layouts/markdown
---

*[on June 11th, 2025](https://github.com/GASCompanion/GASCompanion-Plugin/pull/99)*

## Configurable combo menu location in level editor toolbar and status bar

And fixing 5.6 specifically that was missing proper toolbar registration, after toolbar layout rework that happened in 5.6.

A developer setting for both location has been added that when set to false will prevent GAS Companion module from adding the combo button in toolbar and / or status bar.

A new entry has also been added (no config option, always available) in the File Menu "Tools" right after "Revision Control" section.

***

in the toolbar:
![image](./f5357a3b-4127-498f-b7d4-f9a682251025.png)

status bar:
![image](./f3cb674e-17b3-4d9c-adc4-1be5a1e2cd1e.png)

and tools menu:
![image](./54a2f01c-9ecb-4e64-b158-29ae6b530fc1.png)

with ability to control whether toolbar / status bar button should be enabled (submenu in tools file menu always enabled though):
![image](./dd28edf7-c1ac-4826-88f1-0a50eff75017.png)

