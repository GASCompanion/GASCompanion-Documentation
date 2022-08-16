---
Name: GSCModularActor
layout: layouts/api
eleventyNavigation:
  key: GSCModularActor
  parent: ModularGameplayActors
IncludePath: ModularGameplayActors/GSCModularActor.h
Description: >-
  Minimal class that supports extension by game feature plugins, direct child of
  AActor
---


# GSCModularActor

Minimal class that supports extension by game feature plugins, direct child of AActor

## Properties

### ReplicationMode

**Type** `EGameplayEffectReplicationMode`

Replication Mode:
Ability System Replication Mode: How gameplay effects will be replicated to clients

*   Full: Replicate full gameplay info to all. Every GameplayEffect is replicated to every client.
    (Recommended for Single Player games)
*   Mixed: Only replicate minimal gameplay effect info to simulated proxies but full info to owners and autonomous proxies.
    GameplayEffects are only replicated to the owning client. Only GameplayTags and GameplayCues are replicated to everyone.
    (Recommended for Multiplayer on Player controlled Actors)
*   Minimal: Only replicate minimal gameplay effect info. Note: this does not work for Owned AbilitySystemComponents (Use Mixed instead).
    GameplayEffects are never replicated to anyone. Only GameplayTags and GameplayCues are replicated to everyone.
    (Recommended for Multiplayer on AI controlled Actors)

See: https://github.com/tranek/GASDocumentation#concepts-asc-rm for more information

### AbilitySystemComponent

**Type** `UGSCAbilitySystemComponent*`

Ability System Component
    