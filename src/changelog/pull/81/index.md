---
title: "Pull Request #81"
description: "Changes for 5.3-preview"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_81
  title: "6.0.1 - PR #81"
  excerpt: "Changes for 5.3-preview"
layout: layouts/markdown
---

*[on August 2nd, 2023](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81)*

## Changes for 5.3-preview

Update CI windows workflow to build against 5.1, 5.2, 5.3

Note: GameplayEffect went through some major refactoring with the introduction of GEComponents, have to check GameplayEffects created via Context Menu and GSC Gameplay Effect Template are still working properly in 5.3

*   CI: windows change matrix to 5.1, 5.2, 5.3
*   GSCTemplate\_GameplayEffectDefinition: Disable deprecation warnings with PRAGMA\_DISABLE\_DEPRECATION\_WARNINGS
*   Specs: Add missing include for UWorld in 5.3
*   Fixes for 5.3 around DataValidation in GameFeature actions and GSCNativeAnimInstance
*   Fix 5.3 GSCNativeAnimInstance missing declaration of FDataValidationContext and WITH\_EDITOR wrapper in header
*   GameplayEffects: Handle upgrade of pre-5.3 GE Template definitions to post-5.3 and the GEComponents introduced
*   GameplayEffects: Make sure to reset all deprecated properties that were copied from GSC Template, to avoid GE components being re-created on further compiles.

