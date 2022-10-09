- if u feel dispatching action is not working then check main.tsx or index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```
