import React from "react";

const CurrentUserContext = React.createContext({
  currentUser: {
    name: "",
    avatar: "",
    _id: "",
  },
});

export default CurrentUserContext;
