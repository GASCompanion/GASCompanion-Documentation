---
title: "Pull Request #105"
description: "Defer ability set handle assignment until success"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_105
  title: "6.2.2 - PR #105"
  excerpt: "Defer ability set handle assignment until success"
layout: layouts/markdown
---

*[on May 4th, 2026](https://github.com/GASCompanion/GASCompanion-Plugin/pull/105)*

## Defer ability set handle assignment until success

## Summary

When `GiveAbilitySet` is called multiple times through the same Blueprint event/node, the `OutHandle.Abilities` array accumulates handles from previous calls instead of being replaced.

This causes `ClearAbilitySet` to remove abilities from unrelated sets that leaked into the handle.

Fixes [GASCompanion/GASCompanion-Documentation#33](https://github.com/GASCompanion/GASCompanion-Documentation/issues/33)

Fixed by deferring assignment to a local handle and move it to OutAbilitySetHandle only at the end, so stale handles are never carried over.

<!-- codesmith:footer -->

***

<a href="https://app.blacksmith.sh/GASCompanion/codesmith/GASCompanion-Plugin/pr/105"><picture><source media="(prefers-color-scheme: dark)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-light.svg"><img alt="View in Codesmith" src="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-dark.svg"></picture></a> <sup>Need help on this PR? Tag <code>[**@codesmith**](https://github.com/codesmith)</code> with what you need.</sup>

*   [ ] Let Codesmith autofix CI failures and bot reviews

<!-- /codesmith:footer -->

