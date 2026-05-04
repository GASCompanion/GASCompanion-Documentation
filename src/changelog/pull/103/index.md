---
title: "Pull Request #103"
description: "Respect ability set tag replication and update loose tag API for UE 5.7"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_103
  title: "6.2.2 - PR #103"
  excerpt: "Respect ability set tag replication and update loose tag API for UE 5.7"
layout: layouts/markdown
---

*[on May 4th, 2026](https://github.com/GASCompanion/GASCompanion-Plugin/pull/103)*

## Respect ability set tag replication and update loose tag API for UE 5.7

Fix ability set tag replication handling and update for UE 5.7 loose tag API changes, plus indentation cleanup and CI improvement.

## AbilitySet tag replication

*   `GrantToAbilitySystem` and `RemoveFromAbilitySystem` now respect `UAbilitySystemGlobals::Get().ShouldReplicateActivationOwnedTags()` when adding/removing owned gameplay tags
*   Replication flag is passed through to `AddLooseGameplayTagsUnique` / `RemoveLooseGameplayTagsUnique`

## UE 5.7 API migration

*   `AddLooseGameplayTagsUnique` and `RemoveLooseGameplayTagsUnique` updated to use the new UE 5.7 `AddLooseGameplayTags`/`RemoveLooseGameplayTags` overloads with `EGameplayTagReplicationState` parameter
*   Replaces the deprecated `AddReplicatedLooseGameplayTags`/`RemoveReplicatedLooseGameplayTags` in UE 5.7+

<!-- codesmith:footer -->

***

<a href="https://app.blacksmith.sh/GASCompanion/codesmith/GASCompanion-Plugin/pr/103"><picture><source media="(prefers-color-scheme: dark)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-light.svg"><img alt="View in Codesmith" src="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-dark.svg"></picture></a> <sup>Need help on this PR? Tag <code>[**@codesmith**](https://github.com/codesmith)</code> with what you need.</sup>

*   [ ] Let Codesmith autofix CI failures and bot reviews

<!-- /codesmith:footer -->

