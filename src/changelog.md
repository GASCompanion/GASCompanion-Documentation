---
title: Changelog
description: GAS Companion Changelog
eleventyNavigation:
  parent: More
  key: Changelog
layout: layouts/markdown
---

> Note on future releases and versioning:
> - 5.0.0 version for GAS Companion will match UE 5.0 official release with UE 5.0 as a target platform. All classes marked as deprecated since 3.0.0 are removed in this version.
> - 4.0.0 version for GAS Companion will be the equivalent of 5.0.0, but for 4.27. Deprecated classes removal and API will happen at that moment (and will probably de delayed until UE 5.1 hits).

---

[Full Changelog](https://github.com/GASCompanion/GASCompanion-Documentation/blob/master/CHANGELOG.md)

## 5.3.2 (2022-11-27)

Patch version to fix an issue with selection of a new datatable for attributes initialization (in ASC class default Granted Attributes).

RequiredAssetDataTags metadata specifier needs to use the long form script name in 5.1, eg. 

![image](https://user-images.githubusercontent.com/113832/204157316-669eabff-d142-4a8a-8e9d-784466ece0fe.png)

Also added the filter in GameFeature action (was not an issue, but wasn't filtering datatables on AttributeMetaData row structure)

##### New Features

*  Filter initialization Datatable in GameFeature Action to only display AttributeMetaData ([90ccfce7](https://github.com/GASCompanion/GASCompanion-Plugin/commit/90ccfce7bc4fb94381fc80efc9b98237a4e715ab))

##### Bug Fixes

*  Adjust RequiredAssetDataTags Rowstructure for 5.1 ([fc6358be](https://github.com/GASCompanion/GASCompanion-Plugin/commit/fc6358becc83bace9b1c2e01e227e0b7e336c601))

## 5.3.1 (2022-11-17)

Patch for Unreal 5.1 release. Includes fixes for compilation / warnings happening on 5.1.

* Fix compilation errors / warnings for 5.1 by in [#60](https://github.com/GASCompanion/GASCompanion-Plugin/pull/60)

##### Continuous Integration

*  Linux, switch image to dev-slim-5.1 ([5fbea8fd](https://github.com/GASCompanion/GASCompanion-Plugin/commit/5fbea8fdc71587ad9b9e067654dc64c0932f5fed))

##### Other Changes

*  Fix `Editor.GSCCreationMenu` functional tests ([6b532152](https://github.com/GASCompanion/GASCompanion-Plugin/commit/6b5321520f4ab435624a77e403a200d99122bbe9))
*  Fix `GameFeature` functional tests ([f0c3667c](https://github.com/GASCompanion/GASCompanion-Plugin/commit/f0c3667c22a48a5db1bde6c143e6890522b8d1f1))
*  Fix `Ability Input Binding` spec ([7f973a92](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7f973a92630e68b3ec7e13c502664d629247f1f5))

## 5.3.0 (2022-08-16)

This release includes improvements to the HUD widget, a new BP exposed OnInitAbilityActorInfo event in GSCAbilitySystemComponent / GSCCoreComponent to help in initialization of aforedmentioned HUD, and tweaks to GameFeature AddAbilities action that is now able to Apply / Remove Gameplay Effects on feature activation / deactivation along fixes for Ability Input binding via Game Feature and respawn of Player State characters.

* HUD Lazy ASC init and Addition of OnInitAbilityActorInfo event on ASC & Core Component in [#57](https://github.com/GASCompanion/GASCompanion-Plugin/pull/57)
* Game Feature - Adding Effects and Player State input binding fix by in [#58](https://github.com/GASCompanion/GASCompanion-Plugin/pull/58)

**Full Changelog**: https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.2.3...5.3.0

##### New Features

*  Add ability to grant GameplayEffects from Game Features ([89610a3c](https://github.com/GASCompanion/GASCompanion-Plugin/commit/89610a3c165ae1df712608aa5c3c8412dc60f21e))
*  Addition of `OnInitAbilityActorInfo` event for both ASC and Core Component ([4d939735](https://github.com/GASCompanion/GASCompanion-Plugin/commit/4d9397350dc09b3b3e16b8cef70522163a3ee87a))
*  HUD now support lazy initialization ([56f8e396](https://github.com/GASCompanion/GASCompanion-Plugin/commit/56f8e39697b2066eeed149265c57b7729993d192))

##### Bug Fixes

*  Ensure Game Feature Action ability input binding works across respawns for Player State ASC ([7a0e543b](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7a0e543bf74d57a6e4ad5d8adf8a45e7121fad71))
*  Ensure InputBindingComponent is added to Pawn Avatar in Game Feature Action ([110f2042](https://github.com/GASCompanion/GASCompanion-Plugin/commit/110f2042ffb9c080d9229d4443f848e202c58cd1))
*  Fixed FGSCGameplayEffectExecuteData default value for DeltaValue / ClampMinimumValue ([e86afb72](https://github.com/GASCompanion/GASCompanion-Plugin/commit/e86afb72ece8229ee6afe1e0c8eb6282366b7112))
*  Make sure to register delegates only once for Core Component ([a961ceea](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a961ceea82bf2da2cfc313daff14adedb3994704))

##### Other Changes

*  Update Game Feature functional test to check ability input after respawn ([f85a2dda](https://github.com/GASCompanion/GASCompanion-Plugin/commit/f85a2dda2860a323876f89c24b4e10dfcee6557a))
*  AddInfo method in test blueprint library ([ba697c9d](https://github.com/GASCompanion/GASCompanion-Plugin/commit/ba697c9d8d713bdfcb64f1f751e8c49aa88205a9))
*  Add Blueprint library with helper to programmatically apply an enhanced input action ([db11adeb](https://github.com/GASCompanion/GASCompanion-Plugin/commit/db11adeb4bd33321723e50b6369313a03e485445))
*  Add test suite for core component, now checking only OnAttributeChanged behavior ([a5643a26](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a5643a260f2ec851cf81884aea4b3d5b28bce54a))
*  Convert modular characters suite to spec flavor ([01c58516](https://github.com/GASCompanion/GASCompanion-Plugin/commit/01c5851686f7bf31efcfea51952807c68a6a8c0f))
*  Convert ability input binding suite to spec flavor ([a1e2f82f](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a1e2f82fe62b66cb88408e234de2b6ed4cf96e54))
*  Add FGASCompanionTestsUtils helper class ([7ad35c77](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7ad35c77982d6c06510d967602a28ef470793cf2))

##### Refactors

*  Add `HasAbility` helper to UGSCGameFeatureAction_AddAbilities ([66575104](https://github.com/GASCompanion/GASCompanion-Plugin/commit/66575104505373519d5d56ebbf78fe181083041b))
*  Add note on requirement AGSCModularPlayerController for Game Feature AddInputMappingContext action ([e3d783fe](https://github.com/GASCompanion/GASCompanion-Plugin/commit/e3d783fe24ba892b3e0f44961ff579d97263ef79))
*  Remove GetBoolText helper ([c79a81cd](https://github.com/GASCompanion/GASCompanion-Plugin/commit/c79a81cdcc056b66576c4d313a0daca291bc2eae))

## 5.2.3 (2022-07-17)

##### Bug Fixes

* Creation Menu: Make sure parent class of the created BP is the correct one
    * The fix for osx support introduced a regression here. This patch release aims to fix that.

##### Tests

*  Setup automated test spec for GSCCreationMenu

## 5.2.2 (2022-07-10)

##### What's Changed

* OSx support
    * Fix for OSx ambiguous return value in GSCCreationMenu.h
    * Fix for NetCore module dependency (specific to OSx)
    * Adding `Mac` in PlatformAllowList
* Linux support & Remove all LaunchPad related code
    * Fixup loop variable Wrange-loop-construct compilation errors on 4.27
    * Add Linux to .uplugin PlatformAllowList
    * Removed all LaunchPad related code
        * LaunchPad if re-added back will be done in a standalone plugin or module.

Internal: Setting up CI/CD process on github to check package build is successful on each supported platform (CI on Windows / Linux for now)

## 5.2.1 (2022-06-04)

##### Bug Fixes

* **Effect Templates:**  Ensure FInheritedTagContainer (containers with Combined Tags) are properly updated when templates are edited
    * This will make sure GE created from a templates have the Combined Tags container properly initialized.

## 5.2.0 (2022-05-20)

##### New Features

* **AbilitySystemComponent:** Expose bResetAbilitiesOnSpawn / bResetAttributesOnSpawn to make it possible to persist attributes or abilities across respawns or possessions.
    * See [Topics > Reset Attributes / Abilities configuration]({{ "/reset-attributes-abilities/" | url }})
* **Animations:** Add Gameplay Tag Blueprint Property Mapping support. Added UGSCNativeAnimInstance and IGSCNativeAnimInstanceInterface.
    * See [Topics > Anim Instance]({{ "/animations/" | url }})

##### Bug Fixes

* **Combo Manager:** Combo ability and component had an issue when used with ASC living on PlayerState.

## 5.1.0 (2022-04-14)

##### New Features

* **User Widgets:**  Refactored user widgets to make it easier to use UGSCUserWidget for Widget Components

##### Bug Fixes

* **PlayMontageWaitForEvent:**  Fix task loosing prediction key when EventReceived is triggered. Use network sync point task before broadcast of EventReceived delegate.

##### Refactors

* **Commands:**  Handle multiple PIE instances with UGSCConsoleManagerSubsystem and console commands (for debug widgets)

## 5.0.0 (2022-04-07)

**See [v5 Upgrade Guide]({{ "/upgrade-guide/" | url }})**

**Noteworthy changes**

- All deprecated classes and API have been removed
- Most classes, removed or renamed, are handled via class redirects (example: a Blueprint previously created using `GSCPlayerCharacter` or `MGCModularCharacter` as a parent class will now use `GSCModularCharacter` and won't need to be reparented or recreated)
- Runtime modules have been consolidated into a single one. `ModularGASCompanion` module has been removed and all classes from that module moved to `GASCompanion` module.
- All MGC prefixed classes have been renamed and now prefixed with GSC.
- `ModularGASCompanionEditor` module removed. Only existed to backport ue5 functionality related to Game Features (now handled in engine directly)
- Mac temporarily removed from TargetPlatforms (as well as PS4, XboxOne). Win64 is the only supported platform for ue5 builds at the moment.
  - Mac build has a compile issue when submitting for Marketplace (See `GSCCreationMenu.h`)
- Creation Menu for Gameplay Effects reworked.
  - If you were using Gameplay Effect created with it before, you need to reparent those created GE Blueprint to `GameplayEffect`
  - If you have `[/Script/GASCompanionEditor.GSCGameplayEffectCreationMenu]` section in your DefaultGame.ini, you need to remove the whole ini section for plugin default to be picked up again.


##### New Features

*  Gameplay Effect Creation Menu now creates GE Blueprint as direct child of UGameplayEffect
*  Add ModularActor actor class, direct child of AActor (supports extension by Game Features and implements IAbilitySystemInterface) 
*  Add ModularDefaultPawn actor class, direct child of ADefaultPawn (supports extension by Game Features and implements IAbilitySystemInterface) 

##### Bug Fixes

* **Game Features - Add Abilities:**
  *  Handle adding abilities / attributes for Player State ASC using either Avatar or Owner as Game Feature target actor 
  *  Make sure to go through IAbilitySystemInterface::GetAbilitySystemComponent() to handle target pawn using ASC on Player State 
* **Game Features:**  Make sure LinkAnimLayersComponent is able to link layers even when Game Feature initial state is active 

##### Other Changes

###### Deprecation

*  Remove deprecated AGSCHUD and setup class redirect to Engine.HUD 
*  Remove MinimumValues and other Attribute Set related configuration from `UGSCDeveloperSettings` (GAS Companion Plugin Settings in Editor) 
* Remove `UGSCAttributeSetBase::GetCharactersFromContext()` (Use GetExecutionDataFromMod() instead and read SourceActor / TargetActor from returned structure (FGSCAttributeSetExecutionData)) 
* Remove `UGSCCoreComponent::GetHUDWidget()` 
* Remove GetAbilitySystemComponentFromActor deprecated method from GSCBlueprintFunctionLibrary. (Use `UAbilitySystemBlueprintLibrary::GetAbilitySystemComponent()` instead) 
* Remove deprecated Startup Abilities / Attributes / Effects from GSCCoreComponent 

###### Attributes

*  Make `UGSCAttributeSetBase` Abstract 

##### Refactors

*  Temporarily remove Mac from target platforms
* **Creation Menu:**  Rework Gameplay Effect creation menu to create GE Blueprint asset using UGameplayEffect as parent class, and using template CDO, instead of inheriting directly ([9ff93ccc](https://github.com/GASCompanion/GASCompanion-Plugin/commit/9ff93cccb2f50518193cff847b4a2b8f998e87bb))
* **GSCPlayerControlsComponent:**  Remove BlueprintSpawnableComponent from class specifiers. Not meant to be added in Blueprints but rather use as a base class (parent of GSCAbilityInputBindingComponent) 
* **GSCCoreComponent:**  Change ActivateAbilityByClass log from warning to verbose when unable to return activated ability instance 
*  Use delegates to notify Ability Queue debug widget and remove coupling with AGSCHUD 
*  Remove Restarted delegates backported for 4.27 (now in engine APawn) 
*  Remove ModularGASCompanion runtime module 
*  Move ModularGASCompanion classes to GASCompanion runtime module (Game Features Actions) 
*  Move ModularGASCompanion classes to GASCompanion runtime module ((ModularActor, ModularAIController, ModularGameModeBase, ModularGameMode, ModularGameStateBase, ModularGameState, ModularPlayerController, ModularPlayerState, ModularPlayerStateCharacter)) 
*  Move ModularGASCompanion classes to GASCompanion runtime module  (ModularPawn, ModularDefaultPawn) 
*  Removed MGCGameFrameworkExtensionManager (no use in ue5) 
*  Merge MGC Blueprint Function Library into GSCBlueprintFunctionLibrary 
*  Move ModularGASCompanion classes to GASCompanion runtime module (MGCConsoleManagerSubsystem) 
*  Removed EMGCGameFeaturePluginState (no use in ue5) 
*  Move ModularGASCompanion classes to GASCompanion runtime module (ModularCharacter, MGCPlayerControlsComponent, MGCAbilitySystemComponent, MGCAbilityInputBindingComponent) 
*  Rename GSC module folder for runtime module to match module name (GASCompanion) 
*  Filter initialization Datatable in `MGCAbilitySystemComponent` to only display AttributeMetaData 
* **UGSCConsoleManagerSubsystem:**  Change from UEngineSubsystem to ULocalPlayerSubsystem and remove coupling with AGSCHUD 
* **ModularGameMode:**  Make default class for Player State engine's default and switch DefaultPawnClass to AModularCharacter for ASC setup on Pawn. For ASC living on PlayerState, game mode PlayerStateClass needs to be changed to a BP subclass of AModularPlayerState anyway. This prevents an issue with ASC debugger for users with ASC living on Pawn and using AModularGameMode as a base class for Game Modes. 
* **ModularPawn:**  Convert constructor using FObjectInitializer 
* **ModularPlayerStateCharacter:**  Use `UAbilitySystemGlobals::GetAbilitySystemComponentFromActor()` to not rely on specific character subclass 

## 3.4.0 (2022-04-04)

##### New Features

*  Add TargetInputConfirm / TargetInputCancel input action properties in MGCAbilityInputBindingComponent to handle input confirm / cancel binding for Target Actors

##### Other Changes

*  Disable launch pad button in dropdown menu. It'll be reworked and added back in a future release.
*  Mark AGSCHUD as deprecated. Setup DeprecationMessage to display warnings in Blueprints.
*  Make `UGSCAttributeSetBase` Abstract
    * Hiding it in both dropdowns and details view. Base class meant to be inherited and not used directly, prevents issue when trying to grant it from Blueprints details panel.

## 3.3.0 (2022-02-07)

##### Bug Fixes

* **Attribute Set:**
  *  Simplify and fix formula used in AdjustAttributeForMaxChange (PreAttributeChange)
  *  Remove clamping in pre attribute change, should happen solely in PostGameplayEffectExecute
* **HUD:**
  *  Use final attribute value instead of base for bound widgets
  *  Fix `OnCooldownEnd` event not being triggered in HUD User Widget
* **MGCAbilitySystemComponent:**  Prevent granting of attributes twice for Player State ASC on remote clients
* **Game Features:**  Add Abilities action now properly supporting Player State as a target actor for the game feature action

##### Other Changes

* Change runtime modules loading phase from `Default` to `PreDefault` / Change `ModularGASCompanionEditor` loading phase from `Default` to `PostEngineInit`
* Move `InitGlobalData()` to PostEngineInit. This is a failsafe measure to ensure `InitGlobalData()` happens late enough even when not using an Asset Manager subclass to handle it.
* Add deprecated notice to all GSC prefixed actors from 2.0
* Store custom class layout class names so as to avoid issue in shutdown with -stompmalloc

##### Refactors

*  change default pawn class in both `AModularGameMode` and `AModularGameModeBase` to be `AModularPlayerStateCharacter`
* **Game Features:**  Split `AddActorAbilities()` into sub-methods

## 3.2.0 (2021-12-28)

##### New Features

* **AbilityInputBinding:**
  *  UMGCAbilityInputBindingComponent now provides a way to get back the InputAction that is bound to a given Gameplay Ability
      * Added `UMGCAbilityInputBindingComponent::GetBoundInputActionForAbility()` Blueprint exposed method
      * Designed to be called from within a Gameplay Ability event graph, passing self reference for the Gameplay Ability parameter.

<div style="max-width: 720px; margin: auto;">

[![get_bound_input_action_for_ability](https://user-images.githubusercontent.com/113832/147612511-6839877a-f044-48c3-abac-6dafc69a6383.png)](https://user-images.githubusercontent.com/113832/147612511-6839877a-f044-48c3-abac-6dafc69a6383.png)

</div>


* Add `GetAbilityInputBindingComponent` helper in Blueprint Function Library
* Added TriggerEvent param to Blueprint exposed `UMGCAbilityInputBindingComponent::SetInputBinding`
* Expose property to specify the input trigger event for ability activation
  * Added TriggerEvent property on Granted Abilities structure for MGCAbilitySystemComponent and Game Feature Action (AddAbilities). TriggerEvent property only appear when InputAction is defined

<div style="max-width: 720px; margin: auto;">

[![image](https://user-images.githubusercontent.com/113832/147611909-77965724-d872-4e7f-956d-8ccf124ed6e8.png)](https://user-images.githubusercontent.com/113832/147611909-77965724-d872-4e7f-956d-8ccf124ed6e8.png)

</div>



> The most common trigger types are likely to be Started for actions that happen once, immediately upon pressing a button, and Triggered for continuous actions that happen every frame while holding an input. <br /> <br />
> ***Warning***: *The Triggered value should only be used for Input Actions that you know only trigger once. If your action triggered event happens on every tick, this might lead to issues with ability activation (since you'll be trying to activate abilities every frame). When in doubt, use the default Started value.*

*  Add `UGSCAssetManager` to handle InitGlobalData and expose a setting to prevent GlobalData initialization from GAS Companion StartupModule
    *  New Plugin Setting: `Project Settings > Game > GAS Companion > Prevent Ability System Global Data Initialization in Startup Module`
    *  Turning on this option will disable the initialisation from happening in companion runtime module to let you handle it in either your AssetManager class or GameInstance. Also adding in UGSCAssetManager to handle that (the editor should prompt you if you'd like to use it when you turn on bPreventGlobalDataInitialization, notif should only appear if the Asset Manager Class Name is set to engine's default)


<div style="max-width: 720px; margin: auto;">

[![gsc_asset_manager](https://user-images.githubusercontent.com/113832/147612285-4cd743fb-21f5-45e8-bf8f-1cc4543c0ab6.gif)](https://user-images.githubusercontent.com/113832/147612285-4cd743fb-21f5-45e8-bf8f-1cc4543c0ab6.gif)


</div>

##### Bug Fixes

* **GSCTargetTypeUseEventData:**  Extract hit results from EventData's target data
* **Core Component:**  Pass down bAllowRemoteActivation in ActivateAbilityByClass to ASC's TryActivateAbilityByClass method

##### Other Changes

*  Make GrantDefaultAbilitiesAndAttributes public and virtual
*  Move AttributeSets plugin settings to AdvancedDisplay to clearly indicate it is deprecated

## 3.1.1 (2021-12-09)

##### Bug Fixes

*  Fix Gameplay Cue related methods in UGSCBlueprintFunctionLibrary to not rely on UGSCAbilitySystemComponent (was failing for 3.x versions due to not using this ASC anymore)
*  Fixes both Behavior Tree Tasks to activate ability (via class or tags), now using GSCCoreComponent to activate abilities, instead of old GSCAbilitySystemComponent
*  fix various structs initialization warnings
*  Remove WB_HUD_AttributesDebug umg widget (no longer used) and fix warning

##### Other Changes

* **Deprecation:**
  *  Deprecated `UGSCAbilitySystemComponent`
  *  Deprecated `GetAbilitySystemComponentFromActor` in UGSCBlueprintFunctionLibrary
  *  Deprecated GetCharactersFromContext() in UGSCAttributeSetBase. Use GetExecutionDataFromMod() instead and read SourceActor / TargetActor from returned structure (FGSCAttributeSetExecutionData)
* **Attributes Class Wizard:**
  *  Update class template file to remove reference to GSCCharacterBase and tweak generated PostGameplayEffectExecute method content
  *  Move file templates out of Content/Templates directory to Templates/ClassTemplates

## 3.1.0 (2021-11-07)

##### New Features

*  Change Modular Characters constructor to use ObjectInitializer and allow child classes to override default subobject classes (VaultIt Integration)

## 3.0.2 (2021-09-16)

##### Bug Fixes

*  Make sure OnAttributeChange doesn't trigger twice for Health/Stamina/Mana 

## 3.0.1 (2021-09-16)

##### Bug Fixes

* **CoreComponent:**  Fix triggering of events for ASC delegates, only those triggered from AttributeSet were active 
* **Packaging:**
  *  change commented out section in console manager subsystem (-Werror, -Wcomment) 
  *  Adding whitelist platforms to ModularGASCompanionEditor in .uplugin 
  *  Fix packaging for Mac in AddInputMappingContext Action (-Werror… …,-Wlogical-not-parentheses) 
  *  Fix packaging for Mac in AddAbilities Action (-Werror,-Wlogical-not-parentheses) 

##### Other Changes

*  Remove Win32 from WhitelistPlatforms 

## 3.0.0 (2021-09-09)

A lot of the features and functionality added in this version related to Modular Gameplay comes from the Ancient Demo, with additions and fixes for multiplayer. 

Regarding support for 4.27 and Modular Game Features, a non trivial amount of work went into trying to backport as much and as close as possible developer experience from UE5 Early Access for Game Features. Includes the following (which are not available in 4.27 right now, or API not exposed to external code / modules)

- **Editor**
  - Game Feature Data Asset details customization (buttons within Data Asset to change Game Feature state, and ability to Edit plugin descriptor)
  - New data-only Game Feature plugin template
  - Prompt to add Asset Manager settings on first load
  - Custom Project policies to initliaze Game Features similar to ue5 (`BuiltInInitialFeatureState` in .uplugin)
- **Runtime**
  - Actor Extension Events system required for some Game Feature Actions (like `AddAbilities` or `AddInput`)

Other most significant changes, additions or new features compared to v2 includes:

- Enhanced Input integration with Ability System (either using MGCAbilitySystemComponent on new Modular Actors, or via Game Feature Action)
- Now able to grant AttributeSets **per** Actors (no need to configure them via Project's Settings anymore, can be done directly with Ability System Component in Blueprint)
- Possibility to initialize AttributeSets via Data Tables (no Instant Gameplay Effect required anymore, although you can still use one with `Granted Effects`)
- Support for "Passive" Abilities with `GSCGameplayAbility`
- Can tweak ASC ReplicationMode per actor (BP exposed property on Modular Actors, character / pawn or Player State)
- No major breaking changes, all the old `GSC` classes are still there. It's just that some of their API / Properties have been deprecated and will be removed in future versions.
- HUD UserWidget reworked to work with both v2 / v3 setup and doesn't rely on `GSCCoreComponent` anymore.

##### New Features

* **ModularGameplay:**
  * Add ASC ReplicationMode as BP exposed property (set during PostInitProperties) 
  *  Add StartupEffects to MGC AbilitySystemComponent 
  *  Add Anim Layers Game Feature Action and Component 
  *  Add InputMappingContext Game Feature Action 
  *  Add InputBinding with AddAbilities Game Feature Action 
  *  Backport Actor Extension Events system from ue5 
  *  GameFeatureData customization for 4.27 
  *  Add GameFeature plugin creation wizard to 4.27 
* **ue5:**  Register combo button and expose dropdown menu in LevelEditor toolbar 
* **GSCGameplayAbility:**  Add "Passive" abilities support 
*  Make UGSCCompanionInterface implementable in BP 
*  Introduce ConsoleManagerSubsystem and register console commands w/o using CheatClass 


##### Bug Fixes

* **GSCAttributeSet:**  make sure we're using StaminaAttribute to adjust max values 
* **GSCHUD:**  Don't nullptr out HUDWidget when hiding 
* **ComboComponent:**  Make sure combo activation works on Listen Server 
* **ModularGameplay:**
  *  use subsystem to keep track of changed state (4.27) 
  *  4.27 - fix changing game feature plugin state by other means than Game Feature Data may get customization out of sync 
*  GrantStartupEffects on BeginPlay (instead from within InitAbilityActor) 
*  Handle InputBinding for clients with AddAbilities GameFeature Action 
*  PlayMontage Task now working w/o requirement on ASC being UGSCAbilitySystemComponent 
*  GSCCoreComponent, use UAbilitySystemBlueprintLibrary to get owner ASC 

##### Other Changes

*  Disable LaunchPad for ue5 untill official support for Marketplace is added by Epic 
*  Mark BlueprintCallables related to ability granting / clearing as BlueprintAuthorityOnly to ensure it runs always on server and make it cleared in Blueprints 
*  Remove auto generated entry for launch pad tab 
*  CoreComponent's ClearAbilities / IsUsingAbilityByClass now accepts regular UGameplayAbility instead of UGSCGameplayAbility 
*  CoreComponent's ActivateAbilityByClass now takes a regular UGameplayAbility as an input 
* **ModularGameplay:**
  *  Mark Startup Abilities, Attributes and Effects as deprecated 
  *  Mark AttributeSet configuration as deprecated in DeveloperSettings 
  *  Build PluginURL to install dynamically from plugin and engine version 
  *  Mark GSCCompanionInterface as deprecated and make GetAttributeSets() a stub noop function 
  *  Fixes input binding for client after BP recompile 
  *  Initial work to support PlayerState characters 
  *  Update all GameplayActors to use UMGCGameFrameworkExtensionManager to add / remove receiver 
  *  Grant startup effects on begin play instead of from within InitAbilityActorInfo to avoid "ticking" periodic effects when BP is first opened 
  *  Rework GSCUWHud to handle ASC listeners in a self-contained way (not relying on CoreComponent) 
  *  Remove ref to AGSCCharacterBase in TargetTypes 
  *  AddAbilities Action - prevent granting attribute set if already added to actor 
  *  Some tweaks to AbilityQueue System and ensure it works with new AbilitySystemComponent and setup for 3.0.0 
  *  Combo activation now working with automatic input binding 
  *  fix combo manager combo activation when ASC is not UGSCAbilitySystemComponent 
  *  not exposing GSCGameplayAbility.InputID to Blueprints anymore (deprecated) 
  *  Mark GSCGameplayAbility.InputID as deprecated 
  *  Setup plugin core redirects and rename GSCGameplayAbility.bIgnoreAbilityCost to bLooselyCheckAbilityCost 
  *  ensure every MGC components is within ClassGroup 
  *  Make CoreComponent ActivateAbilities method not rely on specific UGSCAbilitySystemComponent 
  *  Handle Pawns ReceiveRestartedDelegate / ReceiveControllerChangedDelegate 
  *  Handle writing of ini file to setup MGCGameFeaturesProjectPolicies for 4.27 
  *  Handle AssetManager settings for 4.27 (adding /Game/Unused directory) 
  *  Handle LoadBuiltInGameFeaturePlugin on plugin creation (4.27) 
  *  Ensure BuiltInInitialFeatureState is considered at startup (4.27) 
  *  Handle writing of BuiltInInitialFeatureState on PluginCreate (4.27) 
  *  Setup styling for Edit Plugin button (4.27) 
  *  handle different tooltip text for SMGCGameFeatureStateWidget 
  *  Add EditPlugin button functionnality in GameFeature data asset for 4.27 
  *  Handle combo input activation via AbilityLocalInputPressed override 
  *  Setup styling for GameFeatureData customization 
  *  Add slate style and Icons.Lock for customization 
  *  Register details custom only for 4.27 
  *  AddAnimLayers Action working for 4.27 
  *  4.27 support for AddInputMappingContext Action 
  *  Fail safe checks in GSCAttributeSet for replicated env (4.27) 
  *  Create ASC and implement IAbilitySystemInterface for 4.27 
  *  Add/RemoveGameFrameworkComponentReceiver for 4.27 
  *  Add / Remove receiver for 4.27 
  *  Add comment for K2_GetCompanionCoreComponent 

##### Refactors

*  rename all GSC category specifiers to GAS Companion 
*  Properly clean up all bound ASC delegates in both HUD User Widget and Core Component 
*  Ensure HUD still work with old setup and remove HUD management from Core Component 

## 2.1.1 (2021-07-28)

##### New Features

*  Make it so that it's possible to reinitialize HUD (ex. in case of respawn)
*  Handle meta attribute StaminaDamage (when blocking attacks for ex.)

##### Bug Fixes

*  Make GSCTargetType Blueprintable so that it can be blueprinted
*  debug widgets using Actor for Setting Owner, and allow better integrations
*  Attribute change for HUD widget is broadcasted even for non AGSCPlayerCharacter
*  Change ComboComponent OwningCharacter to be just an ACharacter
*  Prevent crash on cooldown end if ability has been cleared
*  Fix warnings for FGSCGameplayEffectUIData structure on startup or packaging
* **AttributeSet:**  Ensure AttributeChange event trigger only once

##### Other Changes

*  Add icon for ALS Sample

##### Refactors

*  tidy up default attribute set PostGameplayEffectExecute implementation
*  Make it so that Editor module API can be used without UnrealEd

##### Code Style Changes

* **GSCAttributeSet.h:**  Use tabs for indentation

## 2.1.0 (2021-07-08)

##### New Features

* **5.0EA:**  fix compilation errors for ue5 early access 
* **UI:**
  *  Broadcast GE, Tags and cooldown events to HUD on owning client 
  *  Broadcast GE, Tags and Cooldown events to HUD 
  *  Broadcast any attribute change to HUD, even custom ones 
* **Core Component:**  Add a way to get current attribute value (not base) 
* **Blueprint Library:**  Add HasMatchingGameplayTag helpers 
*  slight changes to UGSCUWHud to work with ACharacter and allow better integrations 

##### Bug Fixes

*  Ensure broadcast to HUD is only done for player chars 
*  Prevent crash for ignore cost when cost AttributeSet is not present on ASC 
*  Update PreActivate signature for 4.27 version 
* **UI:**  Handle HUD attribute change in networked environment (broadcast on owning client) 

##### Other Changes

* **LaunchPad:**
  *  Add custom attribute sets registration to SampleManager 
  *  Add a way to register items from other plugins / modules 
  *  Example maps are now part of a standalone plugin 

##### Refactors

*  Better handling of Cooldown Start / End client broadcast 
*  Better handling of GameplayEffect Stack and Time change 
*  Slightly change the way ASC and Attrs are setup for Player Characters 
*  Make IsUsingAbilityByClass/Tags BlueprintPure 
*  ensure SendGameplayEvent notify returns success 
*  Use ENGINE_MINOR_VERSION to handle PreActivate for 4.26 / 4.27 

## 2.0.0 (2021-06-10)

#### New Features

* **Abilities: Combo**
  * Add Combo Ability and Combo Component
  * Combo Debug Widget
* **Abilities: Projectile**
  * Add projectile base ability with support for Niagara based VFX cues (beta / experimental)
  * New SpawnProjectile Ability Task
  * ProjectileActor
* **Editor:**
  * Added LaunchPad Window - Browse and explore examples maps (3 for now)
  * Handle missing GameplayTags and Inputs registration for LaunchPad example maps
  * Add GameplayEffects template definitions accessible though File Menu
  * Gameplay Ability Definitions
  * Gameplay Effect Definitions
* Components: Rework most of the API to use a component based approach
* Add ClearAbility / ClearAbilities Blueprint callable functions
* Add events to track cooldown start / end
* Add generic gameplay tag event
* Add events to track GE added / removed from Core Component
* Add two cues with custom niagara vfx
* Support for Actors / DefaultPawn with ASC
* GSCActor / GSCDefaultPawn shared functionality as a component
* Add GameplayCue trigger / remove helpers in ASC and BPFunctionLibrary
* GetAbilityByClass now check if active abilities are child of provided class
* Add command to cheat manager to toggle combo debug widget

#### Bug Fixes

*  Ensure GrantAbility only run on server
*  Fix toolbar icon when using small toolbar icons
*  Check Attribute is owned by the character before trying to get its value

#### Other Changes

*  Make UGSCUserWidget bindings optional
*  Remove UI section in configuration, Widgets override should happen in HUD class / bp 

#### Refactors

*  re-arrange plugin settings section
*  move ability queue system into its own actor component
*  AI / Player Characters now use core component for shared functionality

## 1.2.1 (2021-05-03)

#### Refactors

*  use TWeakObjectPtr for ASC in CharacterBase 
*  use forward declaration in GSCUWHud.h 
*  get rid of AttributeSetManager, use CharacterBase to fire off events 

## 1.2.0 (2021-04-29)

#### New Features

* Add GASCompanionEditor module (Editor Extension) with Attributes generation 
* SwitchGameplayAttribute K2 node 
