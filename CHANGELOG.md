### 3.2.0 (2021-12-28)

##### New Features

* **AbilityInputBinding:**
  *  UMGCAbilityInputBindingComponent now provides a way to get back the InputAction that is bound to a given Gameplay Ability ([91f26fc8](https://github.com/mklabs/GASCompanion-Plugin/commit/91f26fc8345d692597c50924ce569b9fb96365c1))
      * Added `UMGCAbilityInputBindingComponent::GetBoundInputActionForAbility()` Blueprint exposed method
      * Designed to be called from within a Gameplay Ability event graph, passing self reference for the Gameplay Ability parameter.
![get_bound_input_action_for_ability](https://user-images.githubusercontent.com/113832/147612511-6839877a-f044-48c3-abac-6dafc69a6383.png)

  *  Add `GetAbilityInputBindingComponent` helper in Blueprint Function Library ([6ca63b6e](https://github.com/mklabs/GASCompanion-Plugin/commit/6ca63b6e562df5804e6f66e917c303ff9a07c479))
  *  Expose property to specify the input trigger event for ability activation ([b3fed7d6](https://github.com/mklabs/GASCompanion-Plugin/commit/b3fed7d640d6d55f6864387c41e459ae12e32184))
      * Added TriggerEvent property on Granted Abilities structure for MGCAbilitySystemComponent and Game Feature Action (AddAbilities). TriggerEvent property only appear when InputAction is defined
![image](https://user-images.githubusercontent.com/113832/147611909-77965724-d872-4e7f-956d-8ccf124ed6e8.png)
      * Added TriggerEvent param to Blueprint exposed `UMGCAbilityInputBindingComponent::SetInputBinding`


> The most common trigger types are likely to be Started for actions that happen once, immediately upon pressing a button, and Triggered for continuous actions that happen every frame while holding an input.

> ***Warning**: The Triggered value should only be used for Input Actions that you know only trigger once. If your action triggered event happens on every tick, this might lead to issues with ability activation (since you'll be trying to activate abilities every frame). When in doubt, use the default Started value.*

*  Add `UGSCAssetManager` to handle InitGlobalData and expose a setting to prevent GlobalData initialization from GAS Companion StartupModule ([b09208de](https://github.com/mklabs/GASCompanion-Plugin/commit/b09208de02be0454c0d369d916766ed5896d3caa))
    *  New Plugin Setting: `Project Settings > Game > GAS Companion > Prevent Ability System Global Data Initialization in Startup Module`
    *  Turning on this option will disable the initialisation from happening in companion runtime module to let you handle it in either your AssetManager class or GameInstance. Also adding in UGSCAssetManager to handle that (the editor should prompt you if you'd like to use it when you turn on bPreventGlobalDataInitialization, notif should only appear if the Asset Manager Class Name is set to engine's default)

![gsc_asset_manager](https://user-images.githubusercontent.com/113832/147612285-4cd743fb-21f5-45e8-bf8f-1cc4543c0ab6.gif)


##### Bug Fixes

* **GSCTargetTypeUseEventData:**  Extract hit results from EventData's target data ([ad9345db](https://github.com/mklabs/GASCompanion-Plugin/commit/ad9345db96ad13578282945108c734c8a34faabd))
* **Core Component:**  Pass down bAllowRemoteActivation in ActivateAbilityByClass to ASC's TryActivateAbilityByClass method ([68bf8e4e](https://github.com/mklabs/GASCompanion-Plugin/commit/68bf8e4e9f070d5112b69801ec70a324e089071d))

##### Other Changes

*  Make GrantDefaultAbilitiesAndAttributes public and virtual ([deeb26c1](https://github.com/mklabs/GASCompanion-Plugin/commit/deeb26c1c2c015d88ec043d40b3f6bf38811b3a8))
*  Move AttributeSets plugin settings to AdvancedDisplay to clearly indicate it is deprcated ([000d9dee](https://github.com/mklabs/GASCompanion-Plugin/commit/000d9dee11279a7cc1eae750622d6c6f5824dd24))

#### 3.1.1 (2021-12-09)

##### Bug Fixes

*  Fix Gameplay Cue related methods in UGSCBlueprintFunctionLibrary to not rely on UGSCAbilitySystemComponent (was failing for 3.x versions due to not using this ASC anymore) ([9bc19910](https://github.com/mklabs/GASCompanion-Plugin/commit/9bc199103fb21f71c5b8076b698a22622e6985fb))
*  Fixes both Behavior Tree Tasks to activate ability (via class or tags), now using GSCCoreComponent to activate abilities, instead of old GSCAbilitySystemComponent ([2221d640](https://github.com/mklabs/GASCompanion-Plugin/commit/2221d640b0b19cf80bcea8db5017cd4026e4f49b))
*  fix various structs initialization warnings ([51782905](https://github.com/mklabs/GASCompanion-Plugin/commit/51782905086d8037420894730e0d56773fcf4334))
*  Remove WB_HUD_AttributesDebug umg widget (no longer used) and fix warning ([d3c05c0d](https://github.com/mklabs/GASCompanion-Plugin/commit/d3c05c0d4d0e65a9d9e7e395cb2cd7998d9cd400))

##### Other Changes

*  Deprecated `UGSCAbilitySystemComponent` ([6ac32f14](https://github.com/mklabs/GASCompanion-Plugin/commit/6ac32f14a418f7d571bc87183a769f911d19456d))
*  Deprecated `GetAbilitySystemComponentFromActor` in UGSCBlueprintFunctionLibrary ([73fe4eee](https://github.com/mklabs/GASCompanion-Plugin/commit/73fe4eee1395504e16d067f0d0ef7397f8277517))
*  Update class template file to remove reference to GSCCharacterBase and tweak generated PostGameplayEffectExecute method content ([24263e43](https://github.com/mklabs/GASCompanion-Plugin/commit/24263e43a845e446f5845ddd4ee0d95732537813))
*  Deprecated GetCharactersFromContext() in UGSCAttributeSetBase. Use GetExecutionDataFromMod() instead and read SourceActor / TargetActor from returned structure (FGSCAttributeSetExecutionData). ([7479b1ab](https://github.com/mklabs/GASCompanion-Plugin/commit/7479b1aba5417525102eebdff89391529e03c942))
*  Move file templates out of Content/Templates directory to Templates/ClassTemplates ([9c664e16](https://github.com/mklabs/GASCompanion-Plugin/commit/9c664e168c2e31fd35922160a920f81593b07947))

#### 3.1.0 (2021-11-07)

##### New Features

*  Change Modular Characters constructor to use ObjectInitializer and allow child classes to override default subobject classes (VaultIt Integration) ([a5607ad2](https://github.com/mklabs/GASCompanion-Plugin/commit/a5607ad20f675d2d5e5296967adc2537dd2db3cb))

#### 3.0.2 (2021-09-16)

##### Bug Fixes

*  Make sure OnAttributeChange doesn't trigger twice for Health/Stamina/Mana ([fde7db42](https://github.com/mklabs/GASCompanion-Plugin/commit/fde7db42c6c1a72fb0c606b738919ec3e00723c5))

#### 3.0.1 (2021-09-16)

##### Bug Fixes

* **CoreComponent:**  Fix triggering of events for ASC delegates, only those triggered from AttributeSet were active ([62fb4457](https://github.com/mklabs/GASCompanion-Plugin/commit/62fb4457ce8962b4315ca93cd39121e8050f850d))
* **Packaging:**
  *  change commented out section in console manager subsystem (-Werror, -Wcomment) ([330ad091](https://github.com/mklabs/GASCompanion-Plugin/commit/330ad0914f90141226cbd26bf6b5169fcd52d4cd))
  *  Adding whitelist platforms to ModularGASCompanionEditor in .uplugin ([3cb75a0a](https://github.com/mklabs/GASCompanion-Plugin/commit/3cb75a0afa91b9f6a6075a3ae4be135888a27b8e))
  *  Fix packaging for Mac in AddInputMappingContext Action (-Werror… …,-Wlogical-not-parentheses) ([e2113dee](https://github.com/mklabs/GASCompanion-Plugin/commit/e2113dee903376c9cf219daa10c9f13e8e980d2a))
  *  Fix packaging for Mac in AddAbilities Action (-Werror,-Wlogical-not-parentheses) ([6629f3f2](https://github.com/mklabs/GASCompanion-Plugin/commit/6629f3f27ae271933b02ab53c06774d9c881f4d5))

##### Other Changes

*  Remove Win32 from WhitelistPlatforms ([e065b8c9](https://github.com/mklabs/GASCompanion-Plugin/commit/e065b8c9e3fb465de7c6281f4a52fea8634f7228))

#### 3.0.0 (2021-09-09)

A lot of the features and functionality added in this version related to Modular Gameplay comes from the Ancient Demo, with additions and fixes for multiplayer. 

Regarding support for 4.27 and Modular Game Features, a non trivial amount of work went into trying to backport as much and as close as possible developer experience from UE5 Early Access for Game Features. Includes the following (which are not available in 4.27 right now, or API not exposed to external code / modules)

- **Editor**
  - Game Feature Data Asset details customization (buttons within Data Asset to change Game Feature state, and ability to Edit plugin descriptor)
  - New data-only Game Feature plugin template
  - Prompt to add Asset Manager settings on first load
  - Custom Project policies to initliaze Game Features similar to ue5 (`BuiltInInitialFeatureState` in .uplugin)
- **Runtime**
  - Actor Extension Events system required for some Game Feature Actions (like `AddAbilities` or `AddInput`)

##### New Features

* **ModularGameplay:**
  * Add ASC ReplicationMode as BP exposed property (set during PostInitProperties) ([b2878ad9](https://github.com/mklabs/GASCompanion-Plugin/commit/b2878ad9c84437d226e4711d9c5a395ca5f218e6))
  *  Add StartupEffects to MGC AbilitySystemComponent ([20e4a1fb](https://github.com/mklabs/GASCompanion-Plugin/commit/20e4a1fbf3b4a2c910bda52be70bec5b365fc3f9))
  *  Add Anim Layers Game Feature Action and Component ([35003917](https://github.com/mklabs/GASCompanion-Plugin/commit/3500391756420d6c6599aaecbf78be6d6becdf4e))
  *  Add InputMappingContext Game Feature Action ([dcafef27](https://github.com/mklabs/GASCompanion-Plugin/commit/dcafef27d3bf55f0af0f80483d7db2d576220149))
  *  Add InputBinding with AddAbilities Game Feature Action ([818b1003](https://github.com/mklabs/GASCompanion-Plugin/commit/818b100311c739461449b884fe67ab3b2689a227))
  *  Backport Actor Extension Events system from ue5 ([68822259](https://github.com/mklabs/GASCompanion-Plugin/commit/688222594c99452b39d9d1b32ed5fe0228c711dc))
  *  GameFeatureData customization for 4.27 ([09e5f9e2](https://github.com/mklabs/GASCompanion-Plugin/commit/09e5f9e2d43cbcbf1adf8ee9ec874a8c2970d2db))
  *  Add GameFeature plugin creation wizard to 4.27 ([f9d36fd1](https://github.com/mklabs/GASCompanion-Plugin/commit/f9d36fd1b25a771f4277ed30402e2f86a2559abc))
* **ue5:**  Register combo button and expose dropdown menu in LevelEditor toolbar ([368cfeea](https://github.com/mklabs/GASCompanion-Plugin/commit/368cfeea50f68c36ce1bf6b5fdaabbaacf25da8b))
* **GSCGameplayAbility:**  Add "Passive" abilities support ([917e9012](https://github.com/mklabs/GASCompanion-Plugin/commit/917e9012b41831859c47afaec1194f6f8e4a89a1))
*  Make UGSCCompanionInterface implementable in BP ([8bec9188](https://github.com/mklabs/GASCompanion-Plugin/commit/8bec91880d89e35ef9016bff84975598a45ab06c))
*  Introduce ConsoleManagerSubsystem and register console commands w/o using CheatClass ([3a2d8635](https://github.com/mklabs/GASCompanion-Plugin/commit/3a2d86354a809e7b2460c24d7fa330e83d96a45f))


##### Bug Fixes

* **GSCAttributeSet:**  make sure we're using StaminaAttribute to adjust max values ([57865405](https://github.com/mklabs/GASCompanion-Plugin/commit/578654058c74037235a534e74ff6607e3a99acd4))
* **GSCHUD:**  Don't nullptr out HUDWidget when hiding ([b735cd94](https://github.com/mklabs/GASCompanion-Plugin/commit/b735cd94fc3f1a36ba9f2c33a349c1725293fdf7))
* **ComboComponent:**  Make sure combo activation works on Listen Server ([502099bd](https://github.com/mklabs/GASCompanion-Plugin/commit/502099bde3132e160699ecdc8d36bfe5f9ccbed2))
* **ModularGameplay:**
  *  use subsystem to keep track of changed state (4.27) ([3cbe0fee](https://github.com/mklabs/GASCompanion-Plugin/commit/3cbe0fee76f6c1b0c18b16635441bb8f0845ce59))
  *  4.27 - fix changing game feature plugin state by other means than Game Feature Data may get customization out of sync ([516d74dd](https://github.com/mklabs/GASCompanion-Plugin/commit/516d74ddd997c25b352b9f03c83c497a55d7040e))
*  GrantStartupEffects on BeginPlay (instead from within InitAbilityActor) ([d3a6750f](https://github.com/mklabs/GASCompanion-Plugin/commit/d3a6750f97bf65c050eb2d9a09586724e0f2504b))
*  Handle InputBinding for clients with AddAbilities GameFeature Action ([bd164dae](https://github.com/mklabs/GASCompanion-Plugin/commit/bd164daea05ffb0649bca772b043a9fc02e78bcf))
*  PlayMontage Task now working w/o requirement on ASC being UGSCAbilitySystemComponent ([4b816f93](https://github.com/mklabs/GASCompanion-Plugin/commit/4b816f932da42e8c901faef539bff47d1542bce8))
*  GSCCoreComponent, use UAbilitySystemBlueprintLibrary to get owner ASC ([a2e5caf4](https://github.com/mklabs/GASCompanion-Plugin/commit/a2e5caf47cfe79d1f7f57db50ae9bcbdd726b4ef))

##### Other Changes

*  Disable LaunchPad for ue5 untill official support for Marketplace is added by Epic ([03a78721](https://github.com/mklabs/GASCompanion-Plugin/commit/03a787215880bd922199a9a149876969bad6edc3))
*  Mark BlueprintCallables related to ability granting / clearing as BlueprintAuthorityOnly to ensure it runs always on server and make it cleared in Blueprints ([9a153fe3](https://github.com/mklabs/GASCompanion-Plugin/commit/9a153fe3132a2317e927ec3969915e1666e8af04))
*  Remove auto generated entry for launch pad tab ([15fdf127](https://github.com/mklabs/GASCompanion-Plugin/commit/15fdf1279f0d65a1815db7954fcd42bada13b05a))
*  CoreComponent's ClearAbilities / IsUsingAbilityByClass now accepts regular UGameplayAbility instead of UGSCGameplayAbility ([9c8d0b8a](https://github.com/mklabs/GASCompanion-Plugin/commit/9c8d0b8a76eada3e39b97244608dc1a3f91c4394))
*  CoreComponent's ActivateAbilityByClass now takes a regular UGameplayAbility as an input ([b29ade96](https://github.com/mklabs/GASCompanion-Plugin/commit/b29ade96b9c6cab9996917250209955889f30abe))
* **ModularGameplay:**
  *  Mark Startup Abilities, Attributes and Effects as deprecated ([30e584aa](https://github.com/mklabs/GASCompanion-Plugin/commit/30e584aa603b2dc945a8514d0c5f75740e450f29))
  *  Mark AttributeSet configuration as deprecated in DeveloperSettings ([e2857e88](https://github.com/mklabs/GASCompanion-Plugin/commit/e2857e88a1d66bdae106aae3fedf07c1bfbddd79))
  *  Build PluginURL to install dynamically from plugin and engine version ([43760ea7](https://github.com/mklabs/GASCompanion-Plugin/commit/43760ea7d2466ccb3a3f56eb94a5fe6409f07782))
  *  Mark GSCCompanionInterface as deprecated and make GetAttributeSets() a stub noop function ([f8a99615](https://github.com/mklabs/GASCompanion-Plugin/commit/f8a99615c79d2c6e6c391e97fb070f58961ca822))
  *  Fixes input binding for client after BP recompile ([d260dccb](https://github.com/mklabs/GASCompanion-Plugin/commit/d260dccb1715f447e0c6f5e4dafd2b059686f586))
  *  Initial work to support PlayerState characters ([cb4d9d51](https://github.com/mklabs/GASCompanion-Plugin/commit/cb4d9d513e06c355038dd9417c5bc20900c81a15))
  *  Update all GameplayActors to use UMGCGameFrameworkExtensionManager to add / remove receiver ([057a61ca](https://github.com/mklabs/GASCompanion-Plugin/commit/057a61ca2abe90f21760cf7283a4357569fa876e))
  *  Grant startup effects on begin play instead of from within InitAbilityActorInfo to avoid "ticking" periodic effects when BP is first opened ([2888f14a](https://github.com/mklabs/GASCompanion-Plugin/commit/2888f14a47341f9024b7541be2b451effddb681a))
  *  Rework GSCUWHud to handle ASC listeners in a self-contained way (not relying on CoreComponent) ([b387b715](https://github.com/mklabs/GASCompanion-Plugin/commit/b387b715ed261aa607d99efd4de62312f3b90201))
  *  Remove ref to AGSCCharacterBase in TargetTypes ([a71e4f9c](https://github.com/mklabs/GASCompanion-Plugin/commit/a71e4f9c09810fb7648f85e8fa434dd622415e3a))
  *  AddAbilities Action - prevent granting attribute set if already added to actor ([1fa3100d](https://github.com/mklabs/GASCompanion-Plugin/commit/1fa3100d9d3be85c9fbf025a1082be3379e21414))
  *  Some tweaks to AbilityQueue System and ensure it works with new AbilitySystemComponent and setup for 3.0.0 ([5cde28e9](https://github.com/mklabs/GASCompanion-Plugin/commit/5cde28e9aa0fdef2426456d5786ec72052376384))
  *  Combo activation now working with automatic input binding ([4a1ecb51](https://github.com/mklabs/GASCompanion-Plugin/commit/4a1ecb51f655289e24c960c8946bac71df79029d))
  *  fix combo manager combo activation when ASC is not UGSCAbilitySystemComponent ([9222b637](https://github.com/mklabs/GASCompanion-Plugin/commit/9222b637210767943316a31f26a2bf706ba64857))
  *  not exposing GSCGameplayAbility.InputID to Blueprints anymore (deprecated) ([5ef694a4](https://github.com/mklabs/GASCompanion-Plugin/commit/5ef694a4b020a6a7364d45d8884580a8b05fdfed))
  *  Mark GSCGameplayAbility.InputID as deprecated ([97798e73](https://github.com/mklabs/GASCompanion-Plugin/commit/97798e739a606bc5a3c4eabce5bc22d54ea989ad))
  *  Setup plugin core redirects and rename GSCGameplayAbility.bIgnoreAbilityCost to bLooselyCheckAbilityCost ([910d8fd5](https://github.com/mklabs/GASCompanion-Plugin/commit/910d8fd52a8a9957a4c00708d2facb35adeb136e))
  *  ensure every MGC components is within ClassGroup ([7b93c177](https://github.com/mklabs/GASCompanion-Plugin/commit/7b93c177c08bb49fe67d7342d32aeab51e0c4c38))
  *  Make CoreComponent ActivateAbilities method not rely on specific UGSCAbilitySystemComponent ([d6872b24](https://github.com/mklabs/GASCompanion-Plugin/commit/d6872b24b5fbe06423ec44d1b6a53e1669cce938))
  *  Handle Pawns ReceiveRestartedDelegate / ReceiveControllerChangedDelegate ([a7991d73](https://github.com/mklabs/GASCompanion-Plugin/commit/a7991d7392e69ccaf8b6938b9b22d6b9387b2a85))
  *  Handle writing of ini file to setup MGCGameFeaturesProjectPolicies for 4.27 ([59e9205c](https://github.com/mklabs/GASCompanion-Plugin/commit/59e9205c053a7f5e2c6ee0488339bb3b377a758e))
  *  Handle AssetManager settings for 4.27 (adding /Game/Unused directory) ([4785159e](https://github.com/mklabs/GASCompanion-Plugin/commit/4785159e6e77b1a0e96014b438cecb9263484355))
  *  Handle LoadBuiltInGameFeaturePlugin on plugin creation (4.27) ([a54b5152](https://github.com/mklabs/GASCompanion-Plugin/commit/a54b515219acd9ce6ccf9675d84614a7f6276e20))
  *  Ensure BuiltInInitialFeatureState is considered at startup (4.27) ([a53000bf](https://github.com/mklabs/GASCompanion-Plugin/commit/a53000bf3a89c4fd1c5e9661b51b4805cc284ee6))
  *  Handle writing of BuiltInInitialFeatureState on PluginCreate (4.27) ([855a3476](https://github.com/mklabs/GASCompanion-Plugin/commit/855a34760a125a5e49a02ccc3e79245d71bf6124))
  *  Setup styling for Edit Plugin button (4.27) ([3f2e0895](https://github.com/mklabs/GASCompanion-Plugin/commit/3f2e0895182ad179ba647fcb9eb5ba41a7e1ddcd))
  *  handle different tooltip text for SMGCGameFeatureStateWidget ([35727522](https://github.com/mklabs/GASCompanion-Plugin/commit/35727522568d1d7ad2c6d90f82bc7e8052a54856))
  *  Add EditPlugin button functionnality in GameFeature data asset for 4.27 ([076cca6a](https://github.com/mklabs/GASCompanion-Plugin/commit/076cca6ad91fc6e295953930cd1ecb04dc27b641))
  *  Handle combo input activation via AbilityLocalInputPressed override ([84d43fcc](https://github.com/mklabs/GASCompanion-Plugin/commit/84d43fcca281b25f898892fe397ffa5274a35127))
  *  Setup styling for GameFeatureData customization ([67f9e078](https://github.com/mklabs/GASCompanion-Plugin/commit/67f9e078b05954eb6ea8722b6d37c92d25b6a319))
  *  Add slate style and Icons.Lock for customization ([f48bcf88](https://github.com/mklabs/GASCompanion-Plugin/commit/f48bcf8818e7548bacd1d0fd0fa8c36695ed3b63))
  *  Register details custom only for 4.27 ([abcc6ec6](https://github.com/mklabs/GASCompanion-Plugin/commit/abcc6ec63044c460c7926df93ea288104ef2f38c))
  *  AddAnimLayers Action working for 4.27 ([ffe43e02](https://github.com/mklabs/GASCompanion-Plugin/commit/ffe43e02e7dd8f196336bce473fad8efbbb5d442))
  *  4.27 support for AddInputMappingContext Action ([33db242c](https://github.com/mklabs/GASCompanion-Plugin/commit/33db242c2397c5c54fccfc2e7ffa378e96ee6aae))
  *  Fail safe checks in GSCAttributeSet for replicated env (4.27) ([146ef507](https://github.com/mklabs/GASCompanion-Plugin/commit/146ef5071fd901db3c4264b373d653c305b52533))
  *  Create ASC and implement IAbilitySystemInterface for 4.27 ([a5490d73](https://github.com/mklabs/GASCompanion-Plugin/commit/a5490d73b956491dfced8778c843f714e853f728))
  *  Add/RemoveGameFrameworkComponentReceiver for 4.27 ([54a904ba](https://github.com/mklabs/GASCompanion-Plugin/commit/54a904ba30abcfcdc2a0e4c345c2b38229a05256))
  *  Add / Remove receiver for 4.27 ([784bb4e9](https://github.com/mklabs/GASCompanion-Plugin/commit/784bb4e98fde725d144e5234b11800618c12bbc6))
  *  Add comment for K2_GetCompanionCoreComponent ([66830056](https://github.com/mklabs/GASCompanion-Plugin/commit/66830056e0ebd8bfc4d35535607b85557d18d5e6))

##### Refactors

*  rename all GSC category specifiers to GAS Companion ([724596d7](https://github.com/mklabs/GASCompanion-Plugin/commit/724596d780d8039c66df9849c55d468fec7bda18))
*  Properly clean up all bound ASC delegates in both HUD User Widget and Core Component ([7a845d1f](https://github.com/mklabs/GASCompanion-Plugin/commit/7a845d1f0c45ba872364649e6cc4e34d56b82f77))
*  Ensure HUD still work with old setup and remove HUD management from Core Component ([76f9044a](https://github.com/mklabs/GASCompanion-Plugin/commit/76f9044a246968ff6684770cae689f33e8edf26d))

#### 2.1.1 (2021-07-28)

##### New Features

*  Make it so that it's possible to reinitialize HUD (ex. in case of respawn) ([833e29c7](https://github.com/mklabs/GASCompanion-Plugin/commit/833e29c7d4db42cfeb2918c07ce2edab31845d49))
*  Handle meta attribute StaminaDamage (when blocking attacks for ex.) ([a2913223](https://github.com/mklabs/GASCompanion-Plugin/commit/a2913223afee995bd6222aa61bce12b3abd2b154))

##### Bug Fixes

*  Make GSCTargetType Blueprintable so that it can be blueprinted ([0275ba7b](https://github.com/mklabs/GASCompanion-Plugin/commit/0275ba7b60bd4f3d0364d0d4d97eff62b8d275a4))
*  debug widgets using Actor for Setting Owner, and allow better integrations ([3cfb9b9f](https://github.com/mklabs/GASCompanion-Plugin/commit/3cfb9b9f1b0049f280e7be0e724518af85987c17))
*  Attribute change for HUD widget is broadcasted even for non AGSCPlayerCharacter ([e10bafcb](https://github.com/mklabs/GASCompanion-Plugin/commit/e10bafcbe13debfe56e9191f4a7f470cff4cea6e))
*  Change ComboComponent OwningCharacter to be just an ACharacter ([361695cd](https://github.com/mklabs/GASCompanion-Plugin/commit/361695cd5236ea81f0ca46c3448d3d08bfc98d6a))
*  Prevent crash on cooldown end if ability has been cleared ([e3a6a185](https://github.com/mklabs/GASCompanion-Plugin/commit/e3a6a185586fef555ffa7ca7ebfbfc06a10e797b))
*  Fix warnings for FGSCGameplayEffectUIData structure on startup or packaging ([c72fb7de](https://github.com/mklabs/GASCompanion-Plugin/commit/c72fb7de9d726c98cf4d48e097f1ef766320b0af))
* **AttributeSet:**  Ensure AttributeChange event trigger only once ([d1739ef1](https://github.com/mklabs/GASCompanion-Plugin/commit/d1739ef1dd62b601fbe0ffb44287c710b5c7d43c))

##### Other Changes

*  Add icon for ALS Sample ([78e4f494](https://github.com/mklabs/GASCompanion-Plugin/commit/78e4f494d926e8988d59b27d8f967ac3f6a90d33))

##### Refactors

*  tidy up default attribute set PostGameplayEffectExecute implementation ([9600fba3](https://github.com/mklabs/GASCompanion-Plugin/commit/9600fba30b68c65dc92deabf604ab957c76808c3))
*  Make it so that Editor module API can be used without UnrealEd ([d8c6cb65](https://github.com/mklabs/GASCompanion-Plugin/commit/d8c6cb65505b6042724b204bb1b186a7ec377667))

##### Code Style Changes

* **GSCAttributeSet.h:**  Use tabs for indentation ([6a5b3e85](https://github.com/mklabs/GASCompanion-Plugin/commit/6a5b3e8597ebef376efb772cd7738b5f0d7f00ac))

#### 2.1.0 (2021-07-08)

##### New Features

* **5.0EA:**  fix compilation errors for ue5 early access ([02330078](https://github.com/mklabs/GASCompanion-Plugin/commit/02330078626a52046a7e1af0cd99c7e1e7ce657b))
* **UI:**
  *  Broadcast GE, Tags and cooldown events to HUD on owning client ([45887ab2](https://github.com/mklabs/GASCompanion-Plugin/commit/45887ab2a93d7fb05e429700915374f7837f3b85))
  *  Broadcast GE, Tags and Cooldown events to HUD ([fc7c30fa](https://github.com/mklabs/GASCompanion-Plugin/commit/fc7c30fa3d1e6c0a9fd266b10f867c47602664fd))
  *  Broadcast any attribute change to HUD, even custom ones ([98010ec6](https://github.com/mklabs/GASCompanion-Plugin/commit/98010ec6a77096a308e6b0492c02f7d43789b2ab))
* **Core Component:**  Add a way to get current attribute value (not base) ([967b4cd9](https://github.com/mklabs/GASCompanion-Plugin/commit/967b4cd9db6c0947d3569d830d2a80a5c87e47b7))
* **Blueprint Library:**  Add HasMatchingGameplayTag helpers ([33ee63f6](https://github.com/mklabs/GASCompanion-Plugin/commit/33ee63f672ffd8ebd0a7bfe9dd4d4187b99be64b))
*  slight changes to UGSCUWHud to work with ACharacter and allow better integrations ([23d81a54](https://github.com/mklabs/GASCompanion-Plugin/commit/23d81a547ace5e1672649e6e3eba61ee17ad0c16))

##### Bug Fixes

*  Ensure broadcast to HUD is only done for player chars ([33e610e0](https://github.com/mklabs/GASCompanion-Plugin/commit/33e610e0117da101f0b5acd341906ae1b2ac1bd1))
*  Prevent crash for ignore cost when cost AttributeSet is not present on ASC ([629d1eab](https://github.com/mklabs/GASCompanion-Plugin/commit/629d1eab8300c1ebb5c000ec5a00e0b5b9586d14))
*  Update PreActivate signature for 4.27 version ([6c8e93e9](https://github.com/mklabs/GASCompanion-Plugin/commit/6c8e93e9a964d4fcde3aee7fdff8055fad35416e))
* **UI:**  Handle HUD attribute change in networked environment (broadcast on owning client) ([a030e951](https://github.com/mklabs/GASCompanion-Plugin/commit/a030e951e2c57373e7967614c725cb8498d2702c))

##### Other Changes

* **LaunchPad:**
  *  Add custom attribute sets registration to SampleManager ([aabb9b18](https://github.com/mklabs/GASCompanion-Plugin/commit/aabb9b18d44361f45c52df5618769ea323f9b3f0))
  *  Add a way to register items from other plugins / modules ([fbc12e97](https://github.com/mklabs/GASCompanion-Plugin/commit/fbc12e979a82d4f483bf752c9cff42f1e14db710))
  *  Example maps are now part of a standalone plugin ([8f5a2f4f](https://github.com/mklabs/GASCompanion-Plugin/commit/8f5a2f4fd471f3945d189fdbadccce9ebe9790d9))

##### Refactors

*  Better handling of Cooldown Start / End client broadcast ([e756641c](https://github.com/mklabs/GASCompanion-Plugin/commit/e756641c1050c8b0ba177eaad6af0efa73c28425))
*  Better handling of GameplayEffect Stack and Time change ([a396049a](https://github.com/mklabs/GASCompanion-Plugin/commit/a396049a9e231ffb3791666d3b435f9e737a99dd))
*  Slightly change the way ASC and Attrs are setup for Player Characters ([86cb8b69](https://github.com/mklabs/GASCompanion-Plugin/commit/86cb8b69ff18d1b7b510c9955dfee4b497b6a78d))
*  Make IsUsingAbilityByClass/Tags BlueprintPure ([7607b4b2](https://github.com/mklabs/GASCompanion-Plugin/commit/7607b4b25fb7fd93559a2ad6727a0b05212ca61c))
*  ensure SendGameplayEvent notify returns success ([613e0f81](https://github.com/mklabs/GASCompanion-Plugin/commit/613e0f81ec68650b85d660948b78d1e3d4bf1958))
*  Use ENGINE_MINOR_VERSION to handle PreActivate for 4.26 / 4.27 ([bd0a0354](https://github.com/mklabs/GASCompanion-Plugin/commit/bd0a035461e94eac31f808683e0866fd8b91273f))

#### 2.0.0 (2021-06-10)

##### New Features

* **Combo:**
  *  rework combo notifiers and make it a bit more resilient to net lag ([74a99e96](https://github.com/mklabs/GASCompanion-Plugin/commit/74a99e96ce4c585ac5d0d2e17054a5bf106daeb8))
  *  Add ActivateComboAbility and isolate combo activation abilities from each others ([ccc2b757](https://github.com/mklabs/GASCompanion-Plugin/commit/ccc2b7571b534514905c4fad18b19ced2b36a729))
*  Add ClearAbility / ClearAbilities Blueprint callable functions, fix [#14](https://github.com/mklabs/GASCompanion-Plugin/pull/14) ([29b28806](https://github.com/mklabs/GASCompanion-Plugin/commit/29b288069108006bfaf475921f60d255d9f6e624))
*  Add GameplayEffects template definitions accessible though File Menu ([8b1db6e7](https://github.com/mklabs/GASCompanion-Plugin/commit/8b1db6e7c1004182e194d143f1c99b142f47f402))
*  Gameplay Ability Definitions ([84f1e355](https://github.com/mklabs/GASCompanion-Plugin/commit/84f1e35557d07da83753d447fd1e42232f8dfa98))
*  Gameplay Effect Definitions ([4b551057](https://github.com/mklabs/GASCompanion-Plugin/commit/4b5510577271fbe7b377ed7da3fbb9d5d3654e6f))
*  Rework BP Projectile to expose an event to apply GE on actor overlap ([b30fda28](https://github.com/mklabs/GASCompanion-Plugin/commit/b30fda2876e465a83a98ebeb56f8008fafe40ef6))
*  Add events to track cooldown start / end ([dccd1008](https://github.com/mklabs/GASCompanion-Plugin/commit/dccd1008aa968577ba45e61661952079a22025d4))
*  Add generic gameplay tag event ([c3851970](https://github.com/mklabs/GASCompanion-Plugin/commit/c385197076047172c5d407140ea5be3d967b7338))
*  Add events to track GE added / removed from Core Component ([109ed7c4](https://github.com/mklabs/GASCompanion-Plugin/commit/109ed7c4a275fcaae4f3670208cbdff96467eca6))
*  Add two cues with custom niagara vfx ([5383fcb7](https://github.com/mklabs/GASCompanion-Plugin/commit/5383fcb77068c7e1a390ea7013d1be3c493d61f6))
*  Add projectile base ability with support for Niagara based VFX cues ([17aebff7](https://github.com/mklabs/GASCompanion-Plugin/commit/17aebff7ca5cb8c6a7f9b6a6b397adf7e7a85fe2))
*  GSCActor / GSCDefaultPawn shared functionality as a component ([ed410a88](https://github.com/mklabs/GASCompanion-Plugin/commit/ed410a8872d8ee0a26e752885e6629fc9625f83b))
*  Add new AbilityTask to Spawn Projectile ([1525090b](https://github.com/mklabs/GASCompanion-Plugin/commit/1525090b4478b790815cab0911d5eab1bcda1f07))
*  Add GameplayCue trigger / remove helpers in ASC and BPFunctionLibrary ([68504898](https://github.com/mklabs/GASCompanion-Plugin/commit/685048988de3e989ee40c62dafe7f1b328e98a9e))
*  GetAbilityByClass now check if active abilities are child of provided class ([a52c371e](https://github.com/mklabs/GASCompanion-Plugin/commit/a52c371e3f95095a647166f96cf929dbbc951f82))
*  Add command to cheat manager to toggle combo debug widget ([03d4e954](https://github.com/mklabs/GASCompanion-Plugin/commit/03d4e9544520093c899ec2807c5776ce1ab92965))
*  Combo system, add Melee ability base with combo and debug UI widget ([04d0e88d](https://github.com/mklabs/GASCompanion-Plugin/commit/04d0e88dbca6db5473112801bd28057472987247))
*  Add GAS Companion Example project map within the plugin ([6c6299cc](https://github.com/mklabs/GASCompanion-Plugin/commit/6c6299ccc7788563997b488b7b559ebdfebafd5f))
* **editor:**
  *  Handle missing GameplayTags registration on LaunchPad example maps ([0060c292](https://github.com/mklabs/GASCompanion-Plugin/commit/0060c29288dda6c53411f29feabf20c3e659db67))
  *  Add MissingInputManager for LaunchPad when opening scene ([ecd08f83](https://github.com/mklabs/GASCompanion-Plugin/commit/ecd08f83c5fdccf5ee0129abaac5cd8805027b7f))
  *  Tweak LaunchPad UI and implement open action ([061a44d4](https://github.com/mklabs/GASCompanion-Plugin/commit/061a44d418af62e56ae6e855c61437583426d6fb))
  *  Foundations of LaunchPad widget ([36d89bba](https://github.com/mklabs/GASCompanion-Plugin/commit/36d89bba99a42c9a1606642ff59ee8ec8f254421))
* **wip:**  Add attributes debug HUD widget ([58a49f18](https://github.com/mklabs/GASCompanion-Plugin/commit/58a49f180c43ca2de6377e17233a3f6442266df0))

##### Bug Fixes

*  remove generated test attribute from actors startup attribute GE ([73008957](https://github.com/mklabs/GASCompanion-Plugin/commit/730089571bf42a6466221e75660afeacf9707fc8))
*  change gameplay effect parents to be BP based and StaticLoaded ([a4b10794](https://github.com/mklabs/GASCompanion-Plugin/commit/a4b107946c9ab95913a464f9a07fe8b8351dbf5a))
*  Change OnDamage event to be BlueprintAssignable ([971259ce](https://github.com/mklabs/GASCompanion-Plugin/commit/971259ce18d481a9407cad41a70871d1e61eb0f1))
*  fix some loading errors regarding editor module textures ([9d909ad0](https://github.com/mklabs/GASCompanion-Plugin/commit/9d909ad037ee9d88c293f5da201d809cd0bc93e4))
*  Ensure GrantAbility only run on server ([08d002b5](https://github.com/mklabs/GASCompanion-Plugin/commit/08d002b54fb6a485fb8f6b2eabaf609848feae2a))
*  Don't expose any of the Ability Queue Component methods to BP ([752d436b](https://github.com/mklabs/GASCompanion-Plugin/commit/752d436b30eb91c960804f4a170117d7c7a697e1))
*  Fix Template files for AttributeSet generation ([0d909969](https://github.com/mklabs/GASCompanion-Plugin/commit/0d909969a24cfb02bbaa7652a5ae039c7440edbb))
*  make GSCActor replicates and set sensible defaults in for GSC actor types ([d2e57b42](https://github.com/mklabs/GASCompanion-Plugin/commit/d2e57b4238bc9f3d918933c4884ff9a004556603))
*  fix toolbar icon when using small toolbar icons ([484b55d4](https://github.com/mklabs/GASCompanion-Plugin/commit/484b55d46166406713499bcc22dbc6da6507beea))
*  fix template methods move to header ([d662a87c](https://github.com/mklabs/GASCompanion-Plugin/commit/d662a87cc2aed6328b20e5222f2b4676e0f258f6))
*  move template function definitions to header files ([49b37406](https://github.com/mklabs/GASCompanion-Plugin/commit/49b3740681a9c68118c2ef5a21c2a3905a203bc5))
*  Missing input bindings no working properly ([b1ae73f3](https://github.com/mklabs/GASCompanion-Plugin/commit/b1ae73f327ac6122d26909906b41641356e5390e))
*  Check Attribute is owned by the character before trying to get its value ([347a110e](https://github.com/mklabs/GASCompanion-Plugin/commit/347a110e63a45f961fee96108351bd648eb41d1f))
*  Remove Live Coding part, was causing issue with file update ([bd2357bb](https://github.com/mklabs/GASCompanion-Plugin/commit/bd2357bbbf3935d71992588a4f19323e8899d30c))
* **playground:**  Remove ref to generated test attribute, and add missing tags for cues ([db0fda92](https://github.com/mklabs/GASCompanion-Plugin/commit/db0fda92afec6714c8db539827b2820cfe15e50c))
* **combo:**
  *  fix combo activation on standalone (not networked) ([47e75ffc](https://github.com/mklabs/GASCompanion-Plugin/commit/47e75ffcefba5dc983d499a7a936b3e01377e6e9))
  *  properly replicate combo states accros clients ([b0d49ffa](https://github.com/mklabs/GASCompanion-Plugin/commit/b0d49ffa9764a3255a976c331275b9a8d6935bd9))
* **editor:**
  *  fix plugin menu ([09aabefb](https://github.com/mklabs/GASCompanion-Plugin/commit/09aabefbb99c7397a40351b34d07c2a0f3d91ae3))
  *  fix documentation URL in menu ([8462ea07](https://github.com/mklabs/GASCompanion-Plugin/commit/8462ea07cce246edd36c327251ca9c64cba05662))

##### Other Changes

*  Replace navmesh and add UseAction input to AGR sample ([49facaa2](https://github.com/mklabs/GASCompanion-Plugin/commit/49facaa2eb411b726726fa7db973516e9f206329))
*  Check for required inputs / gameplay tags before opening maps ([4c1eee29](https://github.com/mklabs/GASCompanion-Plugin/commit/4c1eee292e36f8440bbd00ae9bf0eaa21e42ce8d))
*  Update AGR Character BP with latest AGR version ([2f95423c](https://github.com/mklabs/GASCompanion-Plugin/commit/2f95423c4e246dded478ced179b5193faee3e18a))
*  AI Spawner ([e1db87f3](https://github.com/mklabs/GASCompanion-Plugin/commit/e1db87f3917ce2a5809ad9e9ff3f0a8eb88c9e60))
*  Tweak maps to display controls and adjust materials ([4ac046fa](https://github.com/mklabs/GASCompanion-Plugin/commit/4ac046fab9f9e90a230de4bd4d62bb0921981104))
*  Fix some refs, replace default materials with grid materials ([50af0c24](https://github.com/mklabs/GASCompanion-Plugin/commit/50af0c246ad4cc4a2e565ffda2c6f33c2adebd24))
*  Add ParagonCountess example to launch pad ([bb5abe69](https://github.com/mklabs/GASCompanion-Plugin/commit/bb5abe69f1d23e3f267fddf841f02fd9b412caf8))
*  Add GridMaterials and setup countess map with it ([1def9849](https://github.com/mklabs/GASCompanion-Plugin/commit/1def98493b4c189e468562e9da8e73459680758d))
*  Add Paragon Countess example to demo out melee combo ([9107d22b](https://github.com/mklabs/GASCompanion-Plugin/commit/9107d22b19543e204fdaf507e7419522d59afff3))
*  Show projectile mesh ([6fdb5fdb](https://github.com/mklabs/GASCompanion-Plugin/commit/6fdb5fdbf7c7f71a727b8d5d7e231da7a071733e))
*  Add missing require gameplay tag ([5b4669aa](https://github.com/mklabs/GASCompanion-Plugin/commit/5b4669aa57d765c3b3313d23b5042cf1e83f38a0))
*  Tweak required gameplay tags / inputs ([a530f97b](https://github.com/mklabs/GASCompanion-Plugin/commit/a530f97bbd50389bd8c1443c0bcf1ef735b86ae8))
*  Tweak gameplay tags category specifier ([a71e2262](https://github.com/mklabs/GASCompanion-Plugin/commit/a71e2262732897ef7cfec792f0ab76467f9e6fb9))
*  Update AGR map with required inputs / gameplay tags ([5df1622d](https://github.com/mklabs/GASCompanion-Plugin/commit/5df1622d152f9308fd7e49415492a93f4c5ee815))
*  Tweak categories ([102b9d87](https://github.com/mklabs/GASCompanion-Plugin/commit/102b9d8724d5d3637f41e407338c4803b04380a5))
*  Slight adjustments to BP projectile ([a2ff53f5](https://github.com/mklabs/GASCompanion-Plugin/commit/a2ff53f5bd2494d84ad860a1dd0d53af43c74236))
*  Add the two GSC Base ability to Abilities definition ([b0b0b3c6](https://github.com/mklabs/GASCompanion-Plugin/commit/b0b0b3c6a91d654d7a9e57620710d4ce0da28252))
*  Add dependencies to the grid item with install status ([fc125693](https://github.com/mklabs/GASCompanion-Plugin/commit/fc12569338fc3079cb865de8e1fff3630c6da957))
*  check dependencies / requirements before opening the map ([bffe5eb4](https://github.com/mklabs/GASCompanion-Plugin/commit/bffe5eb48f309c4c65e0ccd5d6471b213b75e6c1))
*  Remove dummy items ([3176268c](https://github.com/mklabs/GASCompanion-Plugin/commit/3176268c19dbf8c5456964dde1bb408c04db63e3))
*  Create Combo Component in GSCCharacterBase ([3491c896](https://github.com/mklabs/GASCompanion-Plugin/commit/3491c896d95c7f05b5f2c88f2fe23fe522fe271d))
*  Add actor AttributeSets developer settings ([50d63231](https://github.com/mklabs/GASCompanion-Plugin/commit/50d63231271b9e9569b2e7af5d9c1e2ce7dc2c83))
*  Add comments to exposed functions and add a way to get the owner character from BP ([fd4dab27](https://github.com/mklabs/GASCompanion-Plugin/commit/fd4dab27572d1de7dd17564663651adc6b8a4f11))
*  make UGSCUserWidget bindings optional ([823477a0](https://github.com/mklabs/GASCompanion-Plugin/commit/823477a03076eefac9f848f9b9c8ea8fe758e734))
*  Minor fixes to forward delcarations / includes ([cc808a6e](https://github.com/mklabs/GASCompanion-Plugin/commit/cc808a6e031e3c93d4ff22d7c0ba42fba76622df))
*  minor fixes in LaunchPadWidget includes ([820f08e1](https://github.com/mklabs/GASCompanion-Plugin/commit/820f08e1df50a28c4140a3c8775dde1a1a3065b7))
*  remove UI section, Widgets override should happen in HUD class / bp ([9821e95c](https://github.com/mklabs/GASCompanion-Plugin/commit/9821e95cc65fc3ed1058341e355f616e5b7b9384))
*  Add AGR Pro integration sample ([40109256](https://github.com/mklabs/GASCompanion-Plugin/commit/401092562ae1cd204ecb37799dd96a38c0206f4f))
* **countess:**  Add melee cost and stamina regen to character ([0a7a7ea7](https://github.com/mklabs/GASCompanion-Plugin/commit/0a7a7ea7da644bd8563cd223c0b25b4fe292c3c2))

##### Refactors

*  Move Melee Base Ability to cpp ([7185142c](https://github.com/mklabs/GASCompanion-Plugin/commit/7185142c1f8cfc4c4a22efddfd871f7495a0561b))
*  Simplify Combo Notify State ([9c90be49](https://github.com/mklabs/GASCompanion-Plugin/commit/9c90be49e50686a6b783f26e4b07f0f69af7a115))
*  re-arrange plugin settings section ([2f572137](https://github.com/mklabs/GASCompanion-Plugin/commit/2f572137b77bf5ecab481aa83840a7f5c9012ae6))
*  remove context menu type actions / blueprint factories ([a38b7949](https://github.com/mklabs/GASCompanion-Plugin/commit/a38b79499e5a777240142a8a4455f5b9b2fcdc11))
*  remove old interface ([37f0b287](https://github.com/mklabs/GASCompanion-Plugin/commit/37f0b287e330e86bf96ee8ba391a689cc9d4acd2))
*  Add IGSCCompanionInterface to get companion components ([161c5a3d](https://github.com/mklabs/GASCompanion-Plugin/commit/161c5a3d6530a49e24d5eb925af386f28d23404b))
*  move ability queue system into its own actor component ([e0c17caf](https://github.com/mklabs/GASCompanion-Plugin/commit/e0c17cafd15d2a1037f6589b77c209e624a0a242))
*  AI / Player Characters now use core component for shared functionality ([b023ad3f](https://github.com/mklabs/GASCompanion-Plugin/commit/b023ad3f1427e0553d58a1a943c8e49659ca005f))
*  on going implementation of actor with component approach ([e292f0a9](https://github.com/mklabs/GASCompanion-Plugin/commit/e292f0a9aac82906e7a6e78ce701e317a8fbc17b))
*  rename gsc interface ([2d40d67d](https://github.com/mklabs/GASCompanion-Plugin/commit/2d40d67d9cf098367788bb69d377a98018d8a01f))
*  tweak folder structure ([aba5d4bf](https://github.com/mklabs/GASCompanion-Plugin/commit/aba5d4bf001d628c448c90b62fac248591fafc60))
*  move gsc characters / pawns into their Actors folder ([c9c21f37](https://github.com/mklabs/GASCompanion-Plugin/commit/c9c21f37341ff5b323ec4308b6aa40b88f5a9d5a))
* **LaunchPad:**  Adjust style and remove clone to just open the map ([e78dde7d](https://github.com/mklabs/GASCompanion-Plugin/commit/e78dde7d0887883cc9f9678ef296553c5c493023))
* **code style:**  re indent files ([30964664](https://github.com/mklabs/GASCompanion-Plugin/commit/30964664ec9de471b00378b1195a54983c5f68b9))
* **combo:**  turn combo system into an actor component ([38fcdacb](https://github.com/mklabs/GASCompanion-Plugin/commit/38fcdacb9f18154e1fa44719ea9eba421face61e))

#### 1.2.1 (2021-05-03)

##### Refactors

*  use TWeakObjectPtr for ASC in CharacterBase ([c5067e90](https://github.com/mklabs/GASCompanion-Plugin/commit/c5067e901d4a9bd6720240c9a69f2d2bb3dcb075))
*  use forward declaration in GSCUWHud.h ([c480a958](https://github.com/mklabs/GASCompanion-Plugin/commit/c480a95899597321b05d8f361e2738fb38a1f19d))
*  get rid of AttributeSetManager, use CharacterBase to fire off events ([756ff351](https://github.com/mklabs/GASCompanion-Plugin/commit/756ff3513e3fafe6690a42514372c8afa23bc0da))

#### 1.2.0 (2021-04-29)

##### Bug Fixes

*  Fill out copyright notice ([80075dc3](https://github.com/mklabs/GASCompanion-Plugin/commit/80075dc345c37672d9757c77ec07e7a8d9caeae7))
*  wrong PluginName in ClassTemplate ([9bd2434e](https://github.com/mklabs/GASCompanion-Plugin/commit/9bd2434e905cf77b0160f6362cf675be81b21caf))
*  UI when playing as client (Init widget from char on rep, ensure progress bar on nan) ([41581615](https://github.com/mklabs/GASCompanion-Plugin/commit/41581615e60987a380a47137d39672ed6e2ef089))
*  add headers to PlayMontage task for package build ([c1aaf7d0](https://github.com/mklabs/GASCompanion-Plugin/commit/c1aaf7d0deb7179f79fb3f7cd5f2b5e1881bf080))

##### Other Changes

*  fix AttributeSet config not properly loaded on startup ([e50a469f](https://github.com/mklabs/GASCompanion-Plugin/commit/e50a469fe9bb84d151beab08594e288b098aee06))
*  Failsafe check in AttributeSetManager AdjustAttribute ([0d8f40bf](https://github.com/mklabs/GASCompanion-Plugin/commit/0d8f40bff41f5e77587b1bf255a46f3fc784072d))
*  update Build.cs copyright notice ([48dc612f](https://github.com/mklabs/GASCompanion-Plugin/commit/48dc612fe1fdc0ac64b31893c9d91bca76e1e23e))
*  Add UncookedOnly module with SwitchGameplayAttribute K2 node ([4ad08c4b](https://github.com/mklabs/GASCompanion-Plugin/commit/4ad08c4b17018988487c86c58c31c09ec58a0d26))
*  update copyright notice ([8f184aa2](https://github.com/mklabs/GASCompanion-Plugin/commit/8f184aa2b72e97661c29cddf89ff42f184068f0a))
*  add PreAttributeChange event to AttributeSetManager ([7cf3fdf4](https://github.com/mklabs/GASCompanion-Plugin/commit/7cf3fdf420f3171e16fe93c15cd56e45329a2dfe))
*  set keyboard focus to classname input on wizard enter ([967cd601](https://github.com/mklabs/GASCompanion-Plugin/commit/967cd601d7c75c1373c02f3ef98b276348fb5076))
*  fix tooltip text for toolbar icon ([c7c10d45](https://github.com/mklabs/GASCompanion-Plugin/commit/c7c10d45262bb70159f6394b9f851f8ac57b5fa1))
*  add descriptions for each attribute property in class generation dialog ([232c8068](https://github.com/mklabs/GASCompanion-Plugin/commit/232c806868fc4622a1b7bd2f7051356f9fb7d7fe))
*  Ensure Activated Ability is valid before Binding Event OnAbilityEnd ([7b6fd99b](https://github.com/mklabs/GASCompanion-Plugin/commit/7b6fd99bf74e5f13894c35ccc54ef5a461b3bdee))
*  hide non GameplayAttribute prop from AttributeSet in DetailView ([8f2d3cb5](https://github.com/mklabs/GASCompanion-Plugin/commit/8f2d3cb51aa4d65f3c12df8f064a72cfc7b7e358))
*  change toolbar icon ([efb69edb](https://github.com/mklabs/GASCompanion-Plugin/commit/efb69edbbb47a2cfe3c2a8ea913e0bedc515bcec))
*  Slight adjustement on templates for generated .h / .cpp ([32c25b28](https://github.com/mklabs/GASCompanion-Plugin/commit/32c25b2823f5712a7a647cc954d369e08975d61a))
*  Set Gameplay Attribute replicated property in Wizard to only visible ([d42a7047](https://github.com/mklabs/GASCompanion-Plugin/commit/d42a7047533b8526438bcc51cb10319fbd451a1c))
*  Change toolbar icon ([cd7ddad9](https://github.com/mklabs/GASCompanion-Plugin/commit/cd7ddad9279a52a9c9e476ca4264e4427c799c75))
*  Ensure basic code generation is complete for non code projects ([08fd75ff](https://github.com/mklabs/GASCompanion-Plugin/commit/08fd75ff149e8d05f6266b4f551d8a6e94838749))
*  Add TemplateProjectUtils, mimicking GameProjectUtils ([1c559af3](https://github.com/mklabs/GASCompanion-Plugin/commit/1c559af3182caa842e0ac3c92b5c28d054791f02))
*  Generate Build.cs file with correct private deps for no project code ([3a2ca23e](https://github.com/mklabs/GASCompanion-Plugin/commit/3a2ca23e761f5c47aed8bc7581673c6252ca6d84))
*  Add AttributeSetManager, templates based off GSCAttributeSetBase ([587d3dba](https://github.com/mklabs/GASCompanion-Plugin/commit/587d3dba2c7e87ad916858949535109ac86f3f9a))
*  Add GSCAttributeSetBase class to extend from ([b545bfa0](https://github.com/mklabs/GASCompanion-Plugin/commit/b545bfa07e159557aba59a07b639dad5fac8bb0c))
*  AICharactersAttributeSets prop name change ([0e7ac98e](https://github.com/mklabs/GASCompanion-Plugin/commit/0e7ac98ef2736544a3674c9e3457068f9c6d970c))
*  Create GSCAttributeSet by default and expose config to control that ([99a70924](https://github.com/mklabs/GASCompanion-Plugin/commit/99a709246403aee11fb595fbb16ac6ebbcad1893))
*  finalize UI for NewAttributeSetClassDialog ([09f9d692](https://github.com/mklabs/GASCompanion-Plugin/commit/09f9d692f51e2cca8386da0ba63b09fa61b8901b))
*  Add logging helper macros ([0e535a8e](https://github.com/mklabs/GASCompanion-Plugin/commit/0e535a8ee115c5113a21831557f5f8f5eb846b65))
*  proper validation of Attribute names in wizard ([7ee909ed](https://github.com/mklabs/GASCompanion-Plugin/commit/7ee909edfe97d48fb54afe39d38184c3ea356db7))
*  Use window dialog instead of dockable tab for attributes gen ([c692240e](https://github.com/mklabs/GASCompanion-Plugin/commit/c692240ee6972b71716bb6e017b31fcf1b3bd791))
*  Change toolbar button action to be a dropdown menu ([4fec2988](https://github.com/mklabs/GASCompanion-Plugin/commit/4fec2988497d6d3e7ba5f8f8dfdec690cd0ff420))
*  Adjust padding and fill height for detail view and button ([206e6a89](https://github.com/mklabs/GASCompanion-Plugin/commit/206e6a892fd8b257d8279d523563f4337d1f5748))
*  Add GASCompanionEditor module (Editor Extension) with Attributes generation ([e35a8418](https://github.com/mklabs/GASCompanion-Plugin/commit/e35a8418a5b08daea6aaff8b3a88b9efbb7bcdb2))
*  remove commented line ([905757cc](https://github.com/mklabs/GASCompanion-Plugin/commit/905757ccb23e2721071d103eb53b8bc4f8592b6e))
*  OnAbilityFailed / Ended now have specific BP event ([d834c63a](https://github.com/mklabs/GASCompanion-Plugin/commit/d834c63aadea1e8f150d3f8ef9d7b668ca0412f8))
*  Add HUD Widget Class in DeveloperSettings and 2 new WB for HUDs ([f6a17b2f](https://github.com/mklabs/GASCompanion-Plugin/commit/f6a17b2f82eac80dec6e284109a6fa346b5bbfa6))
*  Task based on BlueprintBase with custom parent to override static description ([959c10bc](https://github.com/mklabs/GASCompanion-Plugin/commit/959c10bce1552abb343f938e510d0bad0475e735))
*  Change BTTask to inherit from UBTTaskNode instead ([e1fcbb7c](https://github.com/mklabs/GASCompanion-Plugin/commit/e1fcbb7c16a83463234ee98b8abc3ef283a246a1))
*  Add BTTask to activate abilities by class or tags ([e75ffb29](https://github.com/mklabs/GASCompanion-Plugin/commit/e75ffb29dd5fb3796ef5a42726f345f6b68b0b57))
*  Clean up leftover logs ([94446013](https://github.com/mklabs/GASCompanion-Plugin/commit/944460135300a657b7da61e437233efe7e8702d6))
*  Fix abilities with queue enabled (not via anim state) that fail to remain in queue ([1cea54f8](https://github.com/mklabs/GASCompanion-Plugin/commit/1cea54f878b24697748b56f46528610158f1c28f))
*  Add DeveloperSettings to configure minimum values for attributes ([2ad8e876](https://github.com/mklabs/GASCompanion-Plugin/commit/2ad8e876f4e30fe0a1bbc697e2e9d63c0f38a1cf))
*  Update MarketplaceURL ([e3bf03de](https://github.com/mklabs/GASCompanion-Plugin/commit/e3bf03de3388125ad7288a0067de5e20b7352fbf))
*  Add Level param to GrantAbility ([552ce935](https://github.com/mklabs/GASCompanion-Plugin/commit/552ce935c66925cb07afc32099550cb3123ef9aa))
*  Hide StaminaMinimumValue from details view ([7092e3a8](https://github.com/mklabs/GASCompanion-Plugin/commit/7092e3a83341ce44ffde9c8384651740d392e62b))
*  Ensure HUDWidgetClass is defined before creating widget ([662db630](https://github.com/mklabs/GASCompanion-Plugin/commit/662db63004f9d8b9a13a261f720bb436f670dcb8))
*  Setup HUDClass default value ([834371b3](https://github.com/mklabs/GASCompanion-Plugin/commit/834371b32e504ed9facd7b942ef862f0f1347acf))
*  Set verbose logger statements to Log level ([04a1dfd6](https://github.com/mklabs/GASCompanion-Plugin/commit/04a1dfd6e69ed736f3078273fbdcec69b7fdf266))
