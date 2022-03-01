# Actions

- The only way your application can interact with the store
- It Carry some information from your app to the redux store
- Plain JavaScript objects
- Have a 'type' property that indicates the type of action being performed
- The 'type' property is typically defined as string constants

## how to use action?

1. create a constant for the action(common practice).

```js
const BUY_CAKE = "BUY_CAKE";
```

2. create a function with return action

```js
const buyCake = () => {
  return {
    type: BUY_CAKE, // type is mandatory
    info: "first action",
  };
};
```

## final look :

```js
const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first action",
  };
};
```
