# Gameplay Ability System Companion

Documentation repository

---

Leveraging the power of the Gameplay Ability System, this plugin provides a starting point and a robust foundation to speed up the creation of a new project based on GAS.

It includes the necessary C++ code and Blueprints to get started on a new project that aims to use Epic's GAS plugin (used namely in Fortnite and Paragon, and showcased in Action RPG project)
 
## Features

- Provided as a Plugin to easily share code between projects
- Blueprint Friendly, no need to dive into the cpp side, you can implement Abilities right away
- C++ Friendly too! You can easily extend from the provided C++ class or modify the plugin source
- Ability Queueing System (with a Debug Widget)
- Ignore Ability Cost feature (Possibility to "loosely" check cost for Abilities (to allow activation of abilities when resources are > 0))
- AttributeSet setup with most commonly used Attributes (Health, Stamina, Mana)
- Setup with ASC on PlayerState (for Player characters), and on Pawn (for AI / NPC Characters)

***and more...***

- Custom AbilitySystemComponent and GameplayAbility
    - Activate abilities by Class / Tags and return the activated ability
    - Abilities with onAbilityEnded delegate (useful for Behavior Tree Tasks)
    - Abilities with Gameplay Effect Containers
- Comprehensive Base Character
    - Getters for AttributeSet values
    - Support for startup Attributes, Effects and Abilities
    - Ability, Attributes and Character lifecycle Events
        - OnAbilityActivated
        - OnAbilityEnded
        - OnAbilityFailed
        - OnRespawn
        - OnDamage
        - OnAttributeChange
        - OnHealthChange
        - OnStaminaChange
        - OnManaChange
    - Ability System helpers (Ability activation, Checking for GameplayTags, ...)
- UI setup and basic HUD provided
