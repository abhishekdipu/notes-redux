# What is Redux Toolkit?

- Official definition : Redux toolkit is the official, opinionated, batteries-included toolset for efficient Redux development
- It is also intended to be the standard way to write Redux logic in your application
- So, we can say Redux-toolkit is a library for efficient redux development

## Problem with redux without Redux-Toolkit

- Because earlier for state management we use to use **Redux**, although redux is great, but it does have a few shortcomings
- Configuring redux in an app seems complicated
- Redux requires too much boilerplate code

  - Action,
  - Action object,
  - Action creator,
  - Switch statement in a reducer

- In addition to redux, a lot of other packages have to be installed to get redux to do something useful

  - Redux-thunk
  - Immer
  - Redux-devtools

- There was a need to improve the developer experience for redux

## How Redux-Toolkit solves problem of redux

- Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring you have a good developer experience and brings following things on the table.
  - Abstract over the setup process
  - Handle the most common use cases
  - Include some useful utilities

## N/B :

- Redux or Redux-toolkit don't need a Ul library to work

## Library or packages we need to implement redux with react

- React : UI library
- Redux : State management library
- React-Redux : it's a official redux UI binding library with react.

## When should I use redux in my react application ?

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
