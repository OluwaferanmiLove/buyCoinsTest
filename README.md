# Helicarrier Engineering Challenge

Mock graphQL API was done with graphql-faker

# My Development Process

I design a minimal design in figma as a prototype
![UI design](https://i.imgur.com/yljPSuF.png)

and then proceeds to implentation of the design, before implentation of the API

## Result
![UI design](https://i.imgur.com/TgXbhxd.png)

## Install

We need to install the package globally to be able to create mock GraphQL api

    npm install -g graphql-faker

## Start Mock GraphQL API Server

Start the server at the root folder of the project and an SDL editor will be opened, `graphql-faker` was used to generate 20 to 30 fake data

    graphql-faker  --o ./schema.faker.graphql

# CODE Explanation

Explanation of some part of my codebase

## responsive-dimension.ts

The file in this directory contain an utility file that help implement scalable UIs, the constant `390` and `844` is the base size of the design.

    src
      - constant
      - responsive-dimension.ts


