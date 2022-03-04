# Multiple reducers implementation

- when we are required to implement different set of features with redux then for each feature we should create different feature-folder in redux folder.

## Scenario :

- we want to impletement 2 features cake and iceCream

## Steps:

1. for cake feature
   - cakeTypes.js
   - cakeActions.js and also export in for index.js(/redux)
   - cakeReducer.js
2. for iceCream feature
   - iceCreamTypes.js
   - iceCreamActions.js and also export in for index.js(/redux)
   - iceCreamReducer.js
3. create a rootReducer.js
4. create store.js
   - pass rootReducer in here
