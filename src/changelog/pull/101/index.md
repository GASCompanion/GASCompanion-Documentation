---
title: "Pull Request #101"
description: "Make sure both CommitAbilityCooldown and CommitAbilityCost behave the same as CommitAbility"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_101
  title: "6.2.1 - PR #101"
  excerpt: "Make sure both CommitAbilityCooldown and CommitAbilityCost behave the same as CommitAbility"
layout: layouts/markdown
---

*[on August 17th, 2025](https://github.com/GASCompanion/GASCompanion-Plugin/pull/101)*

## Make sure both CommitAbilityCooldown and CommitAbilityCost behave the same as CommitAbility

Introduced K2\_CommitAbilityCost and K2\_CommitAbilityCooldown overrides in UGSCGameplayAbility.

This fix is more of a workaround for what could be considered an engine issue.

This change ensures the same behavior for any commit-related delegates (such as OnAbilityCommit, OnCooldownStart, OnCooldownEnd, etc. in both UGSCCoreComponent and UGSCUserWidget) where information like Time Remaining, Duration etc. are not properly calculated when CommitAbilityCooldown or Cost are used instead of CommitAbility.

The reason being NotifyAbilityCommit is called in engine:

*   after commit happens for CommitAbility
*   but before for both K2\_CommitAbilityCooldown and K2\_CommitAbilityCost

This results in methods such as UGameplayAbility::GetCooldownTimeRemaining() returning a 0 value (since commit didn't happen yet for any synchronous delegate called this frame).

