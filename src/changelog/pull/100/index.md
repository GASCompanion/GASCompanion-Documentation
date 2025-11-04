---
title: "Pull Request #100"
description: "Ensure to query ASC before trying to activate queued ability"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_100
  title: "6.2.1 - PR #100"
  excerpt: "Ensure to query ASC before trying to activate queued ability"
layout: layouts/markdown
---

*[on August 17th, 2025](https://github.com/GASCompanion/GASCompanion-Plugin/pull/100)*

## Ensure to query ASC before trying to activate queued ability

Instead of relying on a locally cached pointer to Owner ASC, that was set on BeginPlay. For PlayerState owned ASC and on clients, the ASC is not yet valid when BeginPlay is called.

This resulted in failed attempts to activate queued ability due to cached OwnerASC being nullptr on clients.

*   Removed the SetupOwner method and its associated logic from BeginPlay
*   Removed OwnerPawn and OwnerAbilitySystemComponent properties
*   Introduced GetOwnerAbilitySystemComponent method to encapsulate the logic of retrieving the ability system component

Thanks to Iphy on discord for the feedback.

