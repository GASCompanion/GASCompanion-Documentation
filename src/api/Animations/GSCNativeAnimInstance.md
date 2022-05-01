---
Name: GSCNativeAnimInstance
layout: layouts/api
eleventyNavigation:
  key: GSCNativeAnimInstance
  parent: Animations
IncludePath: Animations/GSCNativeAnimInstance.h
Description: >-
  Anim instance implementing IGSCNativeAnimInstanceInterface to allow Gameplay
  Tag Blueprint Property Mapping.


  The interface has only one overridable method `InitializeWithAbilitySystem()`
  that must be implemented in subclasses.


  GSCAbilitySystemComponent will call this method via an interface call when
  InitAbilityActorInfo happens.


  The same pattern is used in both Lyra and the Ancient Demo, only difference
  here is that we rely on an interface to be able to operate better with other
  plugins / assets.
---


# GSCNativeAnimInstance

Anim instance implementing IGSCNativeAnimInstanceInterface to allow Gameplay Tag Blueprint Property Mapping.

The interface has only one overridable method `InitializeWithAbilitySystem()` that must be implemented in subclasses.

GSCAbilitySystemComponent will call this method via an interface call when InitAbilityActorInfo happens.

The same pattern is used in both Lyra and the Ancient Demo, only difference here is that we rely on an interface to be able to operate better with other plugins / assets.

## Properties

### GameplayTagPropertyMap

**Type** `FGameplayTagBlueprintPropertyMap`

Gameplay Tag Property Map:
Gameplay tags that can be mapped to blueprint variables. The variables will automatically update as the tags are added or removed.

These should be used instead of manually querying for the gameplay tags.
    
