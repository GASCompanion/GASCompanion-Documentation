---
title: "Pull Request #96"
description: "Editor: Deprecated UGSCAssetManager and removed code dealing with UAbilitySystemGlobals InitGlobalData() call (not required anymore since 5.3)"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_96
  title: "6.2.0 - PR #96"
  excerpt: "Editor: Deprecated UGSCAssetManager and removed code dealing with UAbilitySystemGlobals InitGlobalData() call (not required anymore since 5.3)"
layout: layouts/markdown
---

*[on December 5th, 2024](https://github.com/GASCompanion/GASCompanion-Plugin/pull/96)*

## Editor: Deprecated UGSCAssetManager and removed code dealing with UAbilitySystemGlobals InitGlobalData() call (not required anymore since 5.3)

*   Runtime: Deprecated UGSCAssetManager now that `UAbilitySystemGlobals::Get().InitGlobalData()` is not required to be called by user code anymore (since 5.3)
*   Runtime: Removed UGSCDeveloperSettings and its `bPreventGlobalDataInitialization` config.
*   Runtime: Removed UGSCDeveloperSettings handling in main module, e.g. updating AssetManagerClassName when `bPreventGlobalDataInitialization` value was changed.
*   Editor: Renamed EDITOR\_LOG macro to GSC\_EDITOR\_LOG and introduced GSC\_EDITOR\_PLOG (to prefix log with function name)
*   Editor: Handle GSCAssetManager deprecation with a slate notification on project startup, allowing user to reset Engine.AssetManagerClassName to its default value (`/Script/Engine.AssetManager`)
*   Editor: Fixing open settings in GAS Companion combo menu for first entry

