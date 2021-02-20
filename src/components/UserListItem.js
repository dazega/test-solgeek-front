import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import axios from 'axios';
import { UserContext } from './UserContext';

export const UserListItem = ({
  _id,
  Nombre,
  Apellido,
  Correo,
  Status
}) => {
  const url = 'https://test-solgeek.herokuapp.com';
  const {users, setUsers} = useContext(UserContext);
  const handleDelete = async (_id) => {
    const { status } = await axios.delete(`${url}/eliminar/${_id}`);
    if(status === 200) {
      setUsers(
        users.filter(u => u._id !== _id)
      );
    }
  }
  return (
    <tr>
      <td>{Nombre}</td>
      <td>{Apellido}</td>
      <td>{Correo}</td>
      <td>{Status ? 'Activo' : 'Inactivo'}</td>
      <td>
        <Link className='text-primary' to={`/editar/${_id}`} style={{ textDecoration: 'none' }}>
          Editar
        </Link>
      </td>
      <td>
        <p 
          className="text-danger"
          onClick={() => {
            handleDelete(_id);
          }}>
            Eliminar
        </p>
      </td>
    </tr>
  );
}

UserListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  Nombre: PropTypes.string.isRequired,
  Apellido: PropTypes.string.isRequired,
  Correo: PropTypes.string.isRequired,
  Status: PropTypes.bool.isRequired,
}
