# Helicarrier Engineering Challenge

Mock graphQL API was done with graphql-faker

# My Development Process

I design a minimal design in figma as a prototype
![UI design](https://i.imgur.com/iqzZTbi.png)

## Install

We need to install the package globally to be able to create mock GraphQL api

    npm install -g graphql-faker

## Start Mock GraphQL API Server

Start the server at the root folder of the project and an SDL editor will be opened, `graphql-faker` was used to generate 20 to 30 fake data

    graphql-faker  --o ./schema.faker.graphql

# CODE Explanation

Explanation of some part of my codebase

## responsive-dimension.ts

The file in this dimemsion contain an utility file that help implement scalable UIs

    src
      - constant
      - responsive-dimension.ts


## TL;DR

Mock GraphQL API based on example SDL and open interactive editor:

    graphql-faker --open

**Note:** You can specify non-existing SDL file names - Faker will use example SDL which you can edit in interactive editor.

# Development

```sh
npm i
npm run build:all
npm run start
```