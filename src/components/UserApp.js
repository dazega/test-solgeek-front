import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from "./UserContext";

export const UserApp = () => {
  const [users, setUsers] = useState([]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <AppRouter />
    </UserContext.Provider>
  )
}
