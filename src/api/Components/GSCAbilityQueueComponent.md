---
Name: GSCAbilityQueueComponent
layout: layouts/api
eleventyNavigation:
  key: GSCAbilityQueueComponent
  parent: Components
IncludePath: Components/GSCAbilityQueueComponent.h
Description: >-
  Actor Component responsible for Ability Queueing.


  Note that with current implementation, ability activation must be manually
  handled in BP. Ability Queueing won't work

  for abilities bound by input with GSCAbilityInputBinding.
---


# GSCAbilityQueueComponent

Actor Component responsible for Ability Queueing.

Note that with current implementation, ability activation must be manually handled in BP. Ability Queueing won't work
for abilities bound by input with GSCAbilityInputBinding.

## Properties

### OwnerPawn

**Type** `APawn*`

Owner Pawn

### OwnerAbilitySystemComponent

**Type** `UAbilitySystemComponent*`

Owner Ability System Component

### bAbilityQueueEnabled

**Type** `bool`

Ability Queue Enabled
    
