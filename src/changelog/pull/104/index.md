---
title: "Pull Request #104"
description: "Check for pending kill / GC in GSCCoreComponent shutdown"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_104
  title: "6.2.2 - PR #104"
  excerpt: "Check for pending kill / GC in GSCCoreComponent shutdown"
layout: layouts/markdown
---

*[on May 4th, 2026](https://github.com/GASCompanion/GASCompanion-Plugin/pull/104)*

## Check for pending kill / GC in GSCCoreComponent shutdown

and refactor strong owner refs with weak pointers in GSCCoreComponent.

*   Remove OwnerPawn and OwnerCharacter members (unused)
*   Update SetupOwner() to store weak references
*   Update all accessors to use IsValid()/Get() patterns
*   Add const qualifier to IsUsingAbilityByTags()
*   Use IsValid() check in ShutdownAbilitySystemDelegates()
*   Clean up includes and forward declarations

Thanks to johnm on discord.

<!-- codesmith:footer -->

***

<a href="https://app.blacksmith.sh/GASCompanion/codesmith/GASCompanion-Plugin/pr/104"><picture><source media="(prefers-color-scheme: dark)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-light.svg"><img alt="View in Codesmith" src="https://pr-comments-assets.blacksmith.sh/codesmith/view-in-codesmith-dark.svg"></picture></a> <sup>Need help on this PR? Tag <code>[**@codesmith**](https://github.com/codesmith)</code> with what you need.</sup>

*   [ ] Let Codesmith autofix CI failures and bot reviews

<!-- /codesmith:footer -->

