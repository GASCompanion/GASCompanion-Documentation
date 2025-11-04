---
title: "Pull Request #102"
description: "Accomodate for Add or RemoveReplicatedLooseGameplayTags removal in 5.7"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_102
  title: "6.2.1 - PR #102"
  excerpt: "Accomodate for Add or RemoveReplicatedLooseGameplayTags removal in 5.7"
layout: layouts/markdown
---

*[on November 4th, 2025](https://github.com/GASCompanion/GASCompanion-Plugin/pull/102)*

## Accomodate for Add or RemoveReplicatedLooseGameplayTags removal in 5.7

Small fix to make plugin compile on 5.7

Add and RemoveReplicatedLooseGameplayTags has been removed in 5.7

Note: Can't use `UE_VERSION_NEWER_THAN_OR_EQUAL` yet as it was introduced in 5.6 (<https://github.com/EpicGames/UnrealEngine/blob/5.6.1-release/Engine/Source/Runtime/Core/Public/Misc/EngineVersionComparison.h>), so can't rely on it until 5.5 is out of support (in 5.8)

