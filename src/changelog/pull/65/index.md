---
title: "Pull Request #65"
description: "Adding IGameplayTagAssetInterface to modular gameplay actors"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_65
  title: "6.0.0 - PR #65"
  excerpt: "Adding IGameplayTagAssetInterface to modular gameplay actors"
layout: layouts/markdown
---

*[on March 30th, 2023](https://github.com/GASCompanion/GASCompanion-Plugin/pull/65)*

## Adding IGameplayTagAssetInterface to modular gameplay actors

For:

*   AGSCModularCharacter
*   AGSCModularActor
*   AGSCModularDefaultPawn
*   AGSCModularPawn
*   AGSCModularPlayerStateCharacter

## Changelog

In case your project was using a custom C++ class inheriting from one of the following classes (AGSCModularCharacter, AGSCModularActor, AGSCModularDefaultPawn, AGSCModularPawn, AGSCModularPlayerStateCharacter) and was already implementing `IGameplayTagAssetInterface`, you may hit a compilation error on this version update.

    ProjectCharacter.h(11): [C4584] 'ProjectCharacter': base-class 'IGameplayTagAssetInterface' is already a base-class of 'AGSCModularCharacter'

You can either remove the interface implementation and rely on the one provided in GSC (remove of `, public IGameplayTagAssetInterface` and implementation of `GetOwnedGameplayTags, HasMatchingGameplayTag, HasAllMatchingGameplayTags, HasAnyMatchingGameplayTags`), or just remove the `, public IGameplayTagAssetInterface` bit if you still want to implement the interface methods.

***

And added test coverage via functional test in editor (eg. F\_GameplayTagInterface\_Test and F\_GameplayTagInterface\_Level), to ensure owned gameplay tags on ASC and the one returned via Interface call on the actor itself are the same.

![image](https://user-images.githubusercontent.com/113832/228782361-2d44c5dd-2c35-4269-ae58-8b9f87ece562.png)

![image](https://user-images.githubusercontent.com/113832/228782477-e24b1bf2-ca51-4be0-861e-9bcba3366ebf.png)
![image](https://user-images.githubusercontent.com/113832/228782550-111aed54-cea6-4321-9294-9ed3cf5b71b8.png)
![image](https://user-images.githubusercontent.com/113832/228782623-0976a544-3975-44a2-9d34-85260a64be17.png)
![image](https://user-images.githubusercontent.com/113832/228782664-18784d76-0f49-4852-8b80-1ba337355236.png)
![image](https://user-images.githubusercontent.com/113832/228782709-e02cf558-5a0f-4056-97cf-dff4010abce5.png)

