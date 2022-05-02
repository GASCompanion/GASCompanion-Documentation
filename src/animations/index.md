---
title: Anim Instance
description: Anim Instance and Gameplay Tag Blueprint Property Mapping
eleventyNavigation:
    parent: Topics
    key: Anim Instance
    excerpt: Anim Instance and Gameplay Tag Blueprint Property Mapping
    order: 6
layout: layouts/markdown
version: 5.2.0
---

**Note** Introduced in 5.2.0

In this page, we'll go through how you can make Animation Blueprints work together with Ability System and setup Gameplay Tag Blueprint Property Mapping.

## Introduction

Gameplay Tag Blueprint Property Mapping refers to a special structure in GAS that can be used in Blueprints to "bind" specific properties (booleans, integers) to changes in the Ability System Component owned tags. This is particularly useful for Animation Blueprints where you can "map" a boolean or integer to the state of a given Gameplay Tag on the Owner Actor's ASC.

You can for instance now when an ability is active, how many of them, if the owner actor is in a given state etc. and react to those changes from Anim BPs.

Both Lyra and the Ancient Demo demonstrates the use of Gameplay Tag Blueprint Property Mapping, only difference in GAS Companion is that we rely on an interface to be able to operate better with other plugins / assets.

> Lyra uses the Gameplay Ability System for most of the player's actions. You can respond to these events in the Animation Blueprint by using Gameplay Tag Bindings. You can navigate to the Gameplay Tags inside the AnimBP_Mannequin_Base Blueprint from the Class Defaults > Details > Gameplay Tags > Gameplay Tag Property Map.
> ~ https://docs.unrealengine.com/5.0/en-US/animation-in-lyra-sample-game-in-unreal-engine/#gameplaytagbindings

## How does it work

Briefly, the Ability System Component subclass used in GAS Companion ({{ "GSCAbilitySystemComponent" | api }}) is calling an interface method on the Anim Instance stored in ActorInfo, when the ASC is initialized (in InitAbilityActorInfo). This interface call is responsible to setup and initialize the Gameplay Tag Blueprint Property Mapping struct which in turn setup delegates to react to Gameplay Tag changes, and map those to boolean or integer properties in Blueprints.

This must be done in C++ and is handled by {{ "GSCNativeAnimInstance" | api }}. You can use that class for your Animation Blueprints instead of `AnimInstance` to get this feature going.

If however, you're already using a native Anim Instance other that the engine's one, ex. using another plugin like AGR Pro, or ALS Community (the c++ version), MoveIt or KLS, it'll require a bit of C++ work, but nothing too complex!

## How to Use

Either use `UGSCNativeAnimInstance` directly for Anim Bluepints or follow these steps to integrate with any native Anim Instance classes (thinking about integration with other plugins / marketplace assets)

Integration is about adding an interface to your project specific anim instance, copy and pasting a few lines of code in the header file, and reparenting Anim BPs to the newly created class.

**Step 0**

Add `GASCompanion`, `GameplayAbilities` and `GameplayTags` modules to your Build.cs module dependencies (similar to what is described in the [Attribute Wizard]({{ 'attributes-wizard/#notes-on-build.cs' }}) page)

**Step 1**

Add the interface to the anim instance, or a project specific subclass:

```cpp
// Replace UAnimInstance with w/e native Anim Instance you're already using (ALSAnimInstance, AGRCoreAnimInstance, MIAnimInstance, WhaterAnimInstance, etc.)
class UMyAnimInstance : public UAnimInstance, public IGSCNativeAnimInstanceInterface
```

**Step 2**

Copy and paste this code in the header file: 

```cpp
/**
* Gameplay tags that can be mapped to blueprint variables. The variables will automatically update as the tags are added or removed.
*
* These should be used instead of manually querying for the gameplay tags.
*/
UPROPERTY(EditDefaultsOnly, Category = "GameplayTags")
FGameplayTagBlueprintPropertyMap GameplayTagPropertyMap;

virtual void InitializeWithAbilitySystem(UAbilitySystemComponent* ASC) override
{
    GameplayTagPropertyMap.Initialize(this, ASC);
}
```

{{ "GSCAbilitySystemComponent" | api }} will call this method via an interface call when InitAbilityActorInfo happens. The same pattern is used in both Lyra and the Ancient Demo, only difference here is that we rely on an interface to be able to operate with other plugins / assets.

**Step 3**

Reparent anim bp to use your new `UMyAnimInstance`

**Step 4**

Open the class defaults for the Anim BP, and setup the Gameplay Tags property mapping to your liking, ex:

![image](https://user-images.githubusercontent.com/113832/165401865-3b01c725-b0c6-4ab4-905c-09441757a49c.png)

Properties can be bools or integers. Case of integers, the property will match the tag count. Case of bools, the property will turn true / false whether the ASC has this tag (Owned Tags in Abilities, Effects etc.)

**End Result**

https://youtu.be/uJ39dVuoKVM