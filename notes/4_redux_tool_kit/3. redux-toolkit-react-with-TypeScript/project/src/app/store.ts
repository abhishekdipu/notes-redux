// import {configureStore} from "@reduxjs/toolkit";
// import cakeReducer from "../features/cake/cakeSlice";
// import icecreamReducer from "../features/icecream/icecreamSlice";
// import userReducer from "../features/user/userSlice";
// // import reduxLogger from "redux-logger";

// // const logger = reduxLogger.createLogger();

// const store = configureStore({
//   reducer: {
//     cake: cakeReducer,
//     icecream: icecreamReducer,
//     user: userReducer,
//   },
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import {configureStore} from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
