# Actions

- The only way your application can interact with the store
- It Carry some information from your app to the redux store
- Action will always be Plain JavaScript objects
- Should always have a 'type' property that indicates the type of action being performed
- The 'type' property is typically defined as string constants

## how to use action?

1. create a constant for the action(common practice).

```js
const BUY_CAKE = "BUY_CAKE";
```

2. create a function which returns action

```js
const buyCake = () => {
  return {
    type: BUY_CAKE, // type is mandatory
    info: "first action",
  };
};
```

## How Action looks:

```js
const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first action",
  };
};
```
