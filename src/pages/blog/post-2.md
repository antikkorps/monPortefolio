---
layout: "../../layouts/blogLayout.astro"

title: Prisma - L'ORM Moderne pour les Développeurs Web
author: Franck Vienot
description: "Dans le monde du développement web, la gestion des bases de données est une tâche cruciale mais souvent complexe. Prisma facilite cette gestion"
image:
  url: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*ciRG_7SSwuNXoSx48H_wvA.jpeg"
  alt: "Thumbnail of Astro arcs."
pubDate: 2022-07-08
tags: ["blogging", "prisma", "orm"]
---

Dans le monde du développement web, la gestion des bases de données est une tâche cruciale mais souvent complexe. Pour simplifier cette interaction, les ORM (Object-Relational Mappers) sont devenus des outils indispensables. Aujourd'hui, je vais vous parler de Prisma, un ORM moderne qui a su se démarquer par sa puissance et sa simplicité.

## Qu'est-ce que Prisma ?

<!-- markdownlint-disable-next-line MD033 -->
<iframe width="100%" src="https://www.youtube.com/embed/EEDGwLB55bI?si=ecEGBWt_FOjmKeIV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Prisma est un ORM (Object-Relational Mapper) pour Node.js et TypeScript. Il se distingue des ORM traditionnels par son approche moderne et son interface utilisateur intuitive. Prisma permet de mapper les modèles de votre base de données à des objets JavaScript, facilitant ainsi les opérations CRUD (Create, Read, Update, Delete) sans écrire de requêtes SQL complexes.

## Pourquoi choisir Prisma ?

### 1. Typage Fort et Sécurité TypeScript

Prisma est conçu avec TypeScript à l'esprit. Grâce à son générateur de types, il crée automatiquement des types TypeScript pour vos modèles de base de données. Cela signifie que vous bénéficiez de l'auto-complétion et de la vérification des types dans votre éditeur, réduisant ainsi les erreurs et augmentant votre productivité.

### 2. Génération Automatique de Schémas

Avec Prisma, vous définissez votre schéma de base de données dans un fichier `.prisma`. Prisma génère ensuite le client TypeScript basé sur ce schéma. Cela permet une synchronisation parfaite entre votre code et votre base de données, et simplifie les migrations de schéma.

### 3. Requêtes Puissantes et Flexibles

Prisma Client fournit une API puissante et intuitive pour effectuer des requêtes de base de données. Vous pouvez facilement effectuer des opérations complexes avec des méthodes comme `findMany`, `create`, `update`, et `delete`. De plus, Prisma supporte les relations entre les modèles, vous permettant d'effectuer des jointures complexes avec une syntaxe simple.

### 4. Migrations de Base de Données Faciles

Prisma Migrate est l'outil de migration de Prisma qui vous permet de gérer les versions de votre schéma de base de données. Avec Prisma Migrate, vous pouvez facilement créer, appliquer, et revenir en arrière sur des migrations, assurant ainsi que votre schéma de base de données évolue en même temps que votre code.

### 5. Support Multi-Base de Données

Prisma supporte plusieurs types de bases de données, y compris PostgreSQL, MySQL, SQLite, SQL Server, et MongoDB (en cours de développement). Cela vous donne la flexibilité de choisir la base de données qui convient le mieux à votre projet.

## Comment démarrer avec Prisma ?

Voici un guide rapide pour démarrer avec Prisma dans un projet Node.js.

### 1. Installation

Installez Prisma et ses dépendances :

```bash
npm install @prisma/client
npx prisma init
```

### 2. Définition du Schéma

Dans le fichier prisma/schema.prisma, définissez vos modèles :

```javascript
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
}
```

### 2. Génération du client

Génération du client Prisma :

```bash
npx prisma generate
```

### 3. Utilisation de Prisma Client

Utilisez le client Prisma dans votre application Node.js :

```javascript
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Créez un nouvel utilisateur
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
    },
  })
  console.log(user)

  // Récupérez tous les utilisateurs
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  })
  console.log(allUsers)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

## Conclusion

Prisma est un outil puissant et moderne qui simplifie grandement le travail avec les bases de données dans les applications Node.js et TypeScript. Son typage fort, ses requêtes intuitives, et ses migrations faciles en font un choix idéal pour les développeurs cherchant à augmenter leur productivité et à réduire les erreurs. Si vous ne l'avez pas encore essayé, je vous recommande de l'intégrer dans vos prochains projets.
