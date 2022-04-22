---
Name: GSCTargetType
layout: layouts/api
eleventyNavigation:
  key: GSCTargetType
  parent: Abilities
IncludePath: Abilities/GSCTargetType.h
Description: >-
  Class that is used to determine targeting for abilities


  It is meant to be blueprinted to run target logic


  This does not subclass GameplayAbilityTargetActor because this class is never
  instanced into the world


  This can be used as a basis for a game-specific targeting blueprint .If your
  targeting is more complicated

  you may need to instance into the world once or as a pooled actor
---


# GSCTargetType

Class that is used to determine targeting for abilities

It is meant to be blueprinted to run target logic

This does not subclass GameplayAbilityTargetActor because this class is never instanced into the world

This can be used as a basis for a game-specific targeting blueprint .If your targeting is more complicated
you may need to instance into the world once or as a pooled actor

## Table of Contents

*   [Events](#events)

    *   [GetTargets](#gettargets)

## Events

### GetTargets

Called to determine targets to apply gameplay effects to

**Parameters**

| Name | Type | Description |
| --- | ---- | --- |
| TargetingActor | AActor\* |  |
| EventData | FGameplayEventData |  |
| OutHitResults | Array of FHitResult |  |
| OutActors | Array of AActor |  |
    
