---
title: "Pull Request #78"
description: "Add GiveAbilityWithInput() method to GSCAbilityInputBindingComponent / Add GetCompanionAbilitySystemComponent() to the Blueprint library"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_78
  title: "6.0.0 - PR #78"
  excerpt: "Add GiveAbilityWithInput() method to GSCAbilityInputBindingComponent / Add GetCompanionAbilitySystemComponent() to the Blueprint library"
layout: layouts/markdown
---

*[on June 25th, 2023](https://github.com/GASCompanion/GASCompanion-Plugin/pull/78)*

## Add GiveAbilityWithInput() method to GSCAbilityInputBindingComponent / Add GetCompanionAbilitySystemComponent() to the Blueprint library

Also added GetCompanionAbilitySystemComponent() to the Blueprint library.

***

**newly added method `UGSCAbilityInputBindingComponent::GiveAbilityWithInput()` Blueprint callable**

Grants a given Gameplay Ability to the Owner ASC, with an optional Input Action / Trigger Event to setup the ability binding.

Simply calls ASC->GiveAbility() (on Server) and binds the input on client.

This method is meant to run on Authority (must be called from server).

During Pawn initialization, if you'd like to grant a list of abilities manually with this method, the typical place to do so is:

*   For non Player State pawns: On Pawn OnPossessed event
*   For Player State pawns: OnInitAbilityActorInfo on Authority

Doing so, you ensure both ASC and InputComponent are available to both grant the ability, and setup the ability input binding.

#### Examples

**For non Player State ASC (ASC on Pawn)**

![image](./113832-095d051b-7b07-4e44-9619-5c11a27cc282.png)

**For Player State ASC (ASC on PlayerState)**

![image](./113832-9fc86daf-e6af-4f02-b512-9eeea75af248.png)

**For Single Player Games - ASC on Pawn or PlayerState**

You can get away by simply granting abilities and input binding on begin play.

![image](./113832-2c8d923e-178e-45e7-b343-1616e8d32c8e.png)

