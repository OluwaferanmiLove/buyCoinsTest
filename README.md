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

# Code Explanation

Explanation of some part of my codebase

## responsive-dimension.ts

The file in this directory contain an utility file that help implement scalable UIs, the constant `390` and `844` is the base size of the design.

    src
      - constant
      - responsive-dimension.ts

## Lodash utility package for grouping

I use lodash utility package to group the data by date after pulling with graphQL 

    const grouped = _.groupBy(data, history =>
      moment(history.date).format('ddd D MMMM, yyyy'),
    );

## Observation for Improvement

Larger data will make the app slower because to implement the UI from the lo-fi wireframe require the use of `ScrollView` that renders the list all at once unlike `FlatList` that reders on continous scrolling.

## Thamk you