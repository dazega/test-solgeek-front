import React, { useContext } from 'react';
import { UserListItem } from './UserListItem';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

export const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
          <h3>Usuarios</h3>
          <p>{users.length} usuarios registrados</p>
        </div>
        <div className="col-md-2 col-sm-12 align-self-center">
          <Link
            to='crear'
            className="btn btn-primary btn-sm "
          >
            Nuevo Usuario
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => (
                  <UserListItem
                    key={user._id}
                    _id={user._id}
                    Nombre={user.Nombre}
                    Apellido={user.Apellido}
                    Correo={user.Correo}
                    Status={true}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
