import { createContext } from "react";

const userContext = createContext({
  loggedUser: "user",
});

export default userContext;
