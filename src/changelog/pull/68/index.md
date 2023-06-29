---
title: "Pull Request #68"
description: "Remove deprecated GSCTemplate definitions and get rid of class viewer warning in output log"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_68
  title: "6.0.0 - PR #68"
  excerpt: "Remove deprecated GSCTemplate definitions and get rid of class viewer warning in output log"
layout: layouts/markdown
---

*[on April 12th, 2023](https://github.com/GASCompanion/GASCompanion-Plugin/pull/68)*

## Remove deprecated GSCTemplate definitions and get rid of class viewer warning in output log

This will get rid of warnings in output log whenever a class picker was used in the editor.

This includes the removal of all /GASCompanion/Templates/GameplayEffects/\*.uasset and the UDeprecated parent class `UDEPRECATED_GSCDeprecatedGameplayEffectTemplate`

This is related to [Gameplay Effect Definitions](https://gascompanion.github.io/config/ge-definitions/).

