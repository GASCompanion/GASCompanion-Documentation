---
Name: GSCAttributeSet
layout: layouts/api
eleventyNavigation:
  key: GSCAttributeSet
  parent: Abilities/Attributes
IncludePath: Abilities/Attributes/GSCAttributeSet.h
Description: >-
  Contains basic Attributes used in most games, Health, Stamina, Mana.

  Characters taking damage or using Mana or Stamina as a resource will use this
  AttributeSet.


  Attributes:


  Health - How much current health the Character has

  MaxHealth - Maximum amount of Health for the Character

  HealthRegenRate - Backing attribute to determine the amount of health
  regenerated per Gameplay Effect period


  Stamina - Mainly used as a resource for Abilities

  MaxStamina - Maximum amount of Stamina for the Character

  StaminaRegenRate - Backing attribute to get the amount of stamina regenerated
  when used by a Gameplay Effect


  Mana - Mainly used as a resource for Abilities

  MaxMana - Maximum amount of Mana for the Character

  ManaRegenRate - Backing attribute for mana regeneration


  Damage - Meta attribute used by DamageExecution or Gameplay Effect to
  calculate final damage, which then turns into -Health

  StaminaDamage - Meta attribute used by DamageExecution or Gameplay Effect to
  calculate final damage, which then turns into -Stamina
---


# GSCAttributeSet

Contains basic Attributes used in most games, Health, Stamina, Mana.
Characters taking damage or using Mana or Stamina as a resource will use this AttributeSet.

Attributes:

Health - How much current health the Character has
MaxHealth - Maximum amount of Health for the Character
HealthRegenRate - Backing attribute to determine the amount of health regenerated per Gameplay Effect period

Stamina - Mainly used as a resource for Abilities
MaxStamina - Maximum amount of Stamina for the Character
StaminaRegenRate - Backing attribute to get the amount of stamina regenerated when used by a Gameplay Effect

Mana - Mainly used as a resource for Abilities
MaxMana - Maximum amount of Mana for the Character
ManaRegenRate - Backing attribute for mana regeneration

Damage - Meta attribute used by DamageExecution or Gameplay Effect to calculate final damage, which then turns into -Health
StaminaDamage - Meta attribute used by DamageExecution or Gameplay Effect to calculate final damage, which then turns into -Stamina

## Properties

### Health

**Type** `FGameplayAttributeData`

Health:
Current Health, when 0 we expect owner to die unless prevented by an ability. Capped by MaxHealth.
Positive changes can directly use this.
Negative changes to Health should go through Damage meta attribute.

### MaxHealth

**Type** `FGameplayAttributeData`

Max Health:
MaxHealth is its own attribute since GameplayEffects may modify it

### HealthRegenRate

**Type** `FGameplayAttributeData`

Health Regen Rate:
Health regen rate will passively increase Health every period

### Stamina

**Type** `FGameplayAttributeData`

Stamina:
Current stamina, used to execute abilities. Capped by MaxStamina.

### MaxStamina

**Type** `FGameplayAttributeData`

Max Stamina:
MaxStamina is its own attribute since GameplayEffects may modify it

### StaminaRegenRate

**Type** `FGameplayAttributeData`

Stamina Regen Rate:
Stamina regen rate will passively increase Stamina every period

### Mana

**Type** `FGameplayAttributeData`

Mana:
Current Mana, used to execute special abilities. Capped by MaxMana.

### MaxMana

**Type** `FGameplayAttributeData`

Max Mana:
MaxMana is its own attribute since GameplayEffects may modify it

### ManaRegenRate

**Type** `FGameplayAttributeData`

Mana Regen Rate:
Mana regen rate will passively increase Mana every period

### Damage

**Type** `FGameplayAttributeData`

Damage:
Damage is a meta attribute used by the DamageExecution to calculate final damage, which then turns into -Health
Temporary value that only exists on the Server. Not replicated.

### StaminaDamage

**Type** `FGameplayAttributeData`

Stamina Damage:
StaminaDamage is a meta attribute used by the DamageExecution to calculate final damage, which then turns into -Stamina
Temporary value that only exists on the Server. Not replicated.
    
