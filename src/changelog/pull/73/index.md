---
title: "Pull Request #73"
description: "Ability Sets further improvements"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_73
  title: "6.0.0 - PR #73"
  excerpt: "Ability Sets further improvements"
layout: layouts/markdown
---

*[on May 7th, 2023](https://github.com/GASCompanion/GASCompanion-Plugin/pull/73)*

## Ability Sets further improvements

on going work on Ability Set.

Continuation of [#62](/changelog/pull/62)

Worth nothing:

*   [`19d97aa`](https://github.com/GASCompanion/GASCompanion-Plugin/commit/19d97aa22b909681ae268524c17943150c1a63a4) Deprecation of UGSCAbilitySystemComponent::GrantAbility()
*   [`bdb984c`](https://github.com/GASCompanion/GASCompanion-Plugin/commit/bdb984caaae1a8dea337a9629bdfdc515134ad98) Added Level to grant the ability at

TODO:

*   [x] Unit / Functional tests
*   [x] Addition of `TArray<UGSCAbilitySet>` in `GSCAbiltiySystemComponent` next to existing Granted Attributes / Abilities / Effects.
*   [x] Addition of `TArray<UGSCAbilitySet>` in Game Feature Action `UGSCGameFeatureAction_AddAbilities` next to existing Granted Attributes / Abilities / Effects.

Notes:

*   Includes preliminary work on GrantAbilityWithInput that needs to be further tuned in another PR
*   BP exposed way to grant an Ability Set needs rework to be simpler and only called from Authority (like GiveAbility)

