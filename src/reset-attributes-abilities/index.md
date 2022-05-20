---
title: Reset Attributes / Abilities configuration
description: Make it possible to persist attributes or abilities across respawns or possessions.
eleventyNavigation:
    parent: Topics
    key: Reset Attributes / Abilities configuration
    excerpt: Make it possible to persist attributes or abilities across respawns or possessions.
    order: 7
layout: layouts/markdown
version: 5.2.0
---

**Note** Introduced in 5.2.0

See {{ "GSCAbilitySystemComponent#bResetAbilitiesOnSpawn" | api }} / {{ "GSCAbilitySystemComponent#bResetAttributesOnSpawn" | api }}

`5.2.0` now exposes two new booleans on the Ability System component you can use to customize how abilities and attributes are handled across respawns, to make it possible to persist attributes or abilities across respawns or possessions.

When this is set to false, abilities or attributes will only be granted the first time InitAbilityActor is called. This is the default
behavior for ASC living on Player States (GSCModularPlayerState specifically).

Also fixes an issue with PlayerState's ASC and ability input binding when player is respawned (in case of abilities cleared and granted again). In that case, PlayerState's ASC must keep `bResetAbilitiesOnSpawn` to false.

## How to Use

**For Player State's ASC, reset abilities is set to false by default.**

![image](https://user-images.githubusercontent.com/113832/166147778-f54e6ea3-40bc-47da-bea4-40ae1b0b0bcf.png)

Making both attributes and abilities to persist across Pawn's respawn and / or possessions.

For abilities, in case of ASC living on Player States, it is required to not reset them (`bResetAbilitiesOnSpawn` should remain false) for ability input binding to continue working (ASC living on Pawns doesn't have this problem)

For attributes, if not set to reset, game logic has to decide whether they need to be initialized again to their default values (for example on death, you may want to have Health to be at max level again).

Example: 
![image](https://user-images.githubusercontent.com/113832/166148946-9b0254df-22d3-4d65-8931-8df0f399bb3c.png)


**For ASC living on Pawns, they are both set to true by default (matches previous behavior).**

![image](https://user-images.githubusercontent.com/113832/166147864-034b1522-ec27-4807-b6c9-7f3a0c97a73e.png)

But you are free to change this. In this case, since ASC is living on Pawns, this is only relevant for possession changes. In case of respawn (on death for instance), both abilities / attributes are wiped out since ASC is recreated as part of the Actor being destroyed / respawned.