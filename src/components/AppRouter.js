import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { UserList } from './UserList';
import { UserContext } from './UserContext';
import { UserForm } from './UserForm';

export const AppRouter = () => {
  const url = 'https://test-solgeek.herokuapp.com';
  const { users, setUsers } = useContext(UserContext);
  
  useEffect(() => {
    fetch(`${url}/usuarios`)
    .then(resp => resp.json())
      .then(data =>{
        setUsers([...data.usuarios]);
      })
      .catch((error) => {
          console.log(error);
      })
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={UserList} />
          <Route path='/crear' exact component={UserForm} />
          <Route path='/editar/:id' exact component={UserForm} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </>
  )
}
