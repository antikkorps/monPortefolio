---
layout: "../../layouts/blogLayout.astro"

title: Oh Shit, Git!?! - Votre Sauveur en Cas de Crise Git
author: Franck Vienot
description: "Le fonctionnement de git peut parfois sembler obscur, heureusement il y a des outils pour nous aider..."
image:
  url: "https://www.edwardthomson.com/blog/images/ohshitgit.png"
  alt: "Thumbnail of OSG"
pubDate: 2024-03-18
tags: ["git", "versioning", "dev"]
---

En utilisant Git, il y a de fortes chances que vous ayez déjà été confronté à une situation où vous avez fait une erreur et que vous ne sachiez pas comment la réparer. C'est là qu'intervient [Oh Shit, Git!?!](https://ohshitgit.com/), un site incontournable qui vous guide pour sortir de situations délicates avec Git. Dans cet article, je vais vous présenter ce site et expliquer pourquoi c'est un outil super utile.

## Qu'est-ce que "Oh Shit, Git!?!"

"Oh Shit, Git!?!" est un site web conçu pour aider les développeurs à résoudre les problèmes courants (et parfois moins courants) qu'ils rencontrent en utilisant Git. Créé par Katie Sylor-Miller, ce site offre des solutions claires et concises aux erreurs fréquentes que nous faisons tous avec Git. Que vous ayez écrasé des commits, travaillé sur la mauvaise branche, ou même supprimé des commits par accident, ce site a une solution pour vous.

## Pourquoi "Oh Shit, Git!?!"

### 1. Des Solutions Simples et Directes

Le principal avantage de "Oh Shit, Git!?!" est la simplicité de ses solutions. Chaque problème est présenté de manière directe, avec les commandes Git exactes dont vous avez besoin pour résoudre l'erreur. Il n'y a pas de jargon compliqué ou d'explications inutiles - juste ce qu'il faut pour vous sortir du pétrin.

### 2. Une Ressource Rapide en Cas de Crise

Lorsqu'on est en pleine crise, on n'a pas le temps de lire des documentations longues ou de chercher des solutions sur des forums. "Oh Shit, Git!?!" est conçu pour être consulté rapidement, avec des réponses claires et immédiates. Cela vous permet de résoudre vos problèmes Git en quelques minutes, voire en quelques secondes.

### 3. Un Large Éventail de Scénarios

Le site couvre une vaste gamme de scénarios courants et moins courants que les développeurs rencontrent avec Git. Des situations simples comme "J'ai commité sur la mauvaise branche" à des problèmes plus complexes comme "J'ai réécrit l'historique avec des rebase et tout est cassé", "Oh Shit, Git!?!" a une solution pour vous.

### 4. Un Ton Amical et Réconfortant

Un autre aspect que j'apprécie particulièrement est le ton amical et réconfortant du site. Faire des erreurs avec Git peut être stressant, surtout lorsqu'on travaille sur des projets importants. Le ton léger et encourageant de "Oh Shit, Git!?!" aide à atténuer ce stress et à rappeler que tout le monde fait des erreurs.

## Quelques Scénarios Courants

### 1. J'ai commité sur la mauvaise branche

Il est facile de se tromper de branche lorsque vous travaillez sur plusieurs fonctionnalités en même temps. Voici comment corriger cela :

```bash
# Récupérez les derniers commits
git log

# Retournez à l'état avant les commits
git checkout wrong-branch
git reset HEAD~n # n étant le nombre de commits à annuler

# Changez de branche et commitez à nouveau
git checkout correct-branch
git commit -m "Votre message"
```
