---
Name: GSCDeveloperSettings
layout: layouts/api
eleventyNavigation:
  key: GSCDeveloperSettings
  parent: Core/Settings
IncludePath: Core/Settings/GSCDeveloperSettings.h
Description: General Settings for GAS Companion Plugin.
---


# GSCDeveloperSettings

General Settings for GAS Companion Plugin.

## Properties

### bPreventGlobalDataInitialization

**Type** `bool`

Prevent Global Data Initialization:
Turn this on to prevent GAS Companion module to initialize UAbilitySystemGlobals (InitGlobalData) in the plugin StartupModule method.

InitGlobalData() might be invoked a bit too early otherwise (with GAS Companion's StartupModule). It is expected that if you set this option to true to use
an AssetManager subclass where `UAbilitySystemGlobals::Get().InitGlobalData()` is called in \`StartInitialLoading\`\`

You'll need to update `Project Settings -> Engine > General Settings > Asset Manager Class` to use your AssetManager subclass.

GAS Companion provides one `GSCAssetManager` and the editor should ask you if you want to update the `Asset Manager Class` to use it if the current Manager class
is using engine's default one.
    
