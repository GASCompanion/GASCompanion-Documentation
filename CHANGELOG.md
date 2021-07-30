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
