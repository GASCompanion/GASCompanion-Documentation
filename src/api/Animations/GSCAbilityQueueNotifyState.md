---
Name: GSCAbilityQueueNotifyState
layout: layouts/api
eleventyNavigation:
  key: GSCAbilityQueueNotifyState
  parent: Animations
IncludePath: Animations/GSCAbilityQueueNotifyState.h
Description: >-
  Use this notify state to open and close the ability queue window for your
  montage.


  If this montage is triggered from within a Gameplay Ability, any ability that
  is failing to

  activate during this window will be queued for activation when the current
  active one ends.
---


# GSCAbilityQueueNotifyState

Use this notify state to open and close the ability queue window for your montage.

If this montage is triggered from within a Gameplay Ability, any ability that is failing to
activate during this window will be queued for activation when the current active one ends.

## Properties

### bAllowAllAbilities

**Type** `bool`

Allow All Abilities:
If true, enable queueing of all abilities, otherwise only allow Abilities that are defined in AllowedAbilities array.

### AllowedAbilities

**Type** `Array of UGameplayAbility`

Allowed Abilities:
The set of Abilities that can be queued for this window (has no effect if bAllowAllAbilities is set to true)
    
