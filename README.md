⚠ Warning: Alpha

# Local store 🏪


Use localStorage/sessionStorage with ease.


## createLocalStorage / createSessionStorage
create the main storage with name parameter

usage:
```ts
import { createLocalStorage } from "../helpers/store";

export const mainLocalStorage = createLocalStorage("main-site-cookie");
```

parameters
```ts
createLocalStorage("main-site-cookie")
// createLocalStorage(name = 'String')
```

## useStorage
create a child array 

usage:
```ts
import { useStorage } from "../helpers/store";

export const cart = useStorage(mainLocalStorage, "cart", { number : 1});
export const updateCart = () => {
  let number = cart.get("number") ? cart.get("number") : 1;
  number = number + 1;

  cart.set({ number });
};
```

parameters
```ts
useStorage(mainLocalStorage, "cart", { number : 1})
// useStorage(mainstorage = {}, name = 'String', initialState = {})
```

supported operations:
1) get - `get("name")` or `get()`
2) set - `set({fieldName: "value"})`
3) reset - reset initial state - `reset()`
4) clear - set value to `{}` - `clear()`
