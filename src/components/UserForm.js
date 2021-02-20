import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import { useHistory, useParams } from 'react-router-dom';

export const UserForm = () => {
  const url = 'https://test-solgeek.herokuapp.com';

  const history = useHistory();

  const {users, setUsers} = useContext(UserContext);

  const initialState = {
    nombre: '',
    apellido: '',
    correo: ''
  }

  const [form, setForm] = useState(initialState);

  let { id='' } = useParams();

  useEffect(() => {
    if(id!==''){
      const user = users.find((u) => u._id === id);
      if(user)
        setForm({
          nombre: user?.Nombre,
          apellido: user?.Apellido,
          correo: user?.Correo
        });
    }
  }, [users])

  const {
    apellido,
    correo,
    nombre
  } = form;

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(apellido !== '' && correo !== '' && nombre !== ''){

      const { data, status } = id === '' 
        ? await axios.post(`${url}/crear`, { ...form, status: true })
        : await axios.put(`${url}/editar/${id}`, {...form, status: true});

      if(status === 200){
        if(data === ''){
          setUsers([...users, {
            Apellido: data.Apellido,
            Correo: data.Correo,
            Nombre: data.Nombre,
            Status: data.Status,
            _id: data._id
          }]);
          setForm(initialState);
        }else{

          const updatedUser = {
            Apellido: form.apellido,
            Correo: form.correo,
            Nombre: form.nombre,
            Status: true,
            _id: id
          }
          setUsers(users.map((user) => user._id === id ? updatedUser : user));
        }
        setForm(initialState);
        history.push('/');
      }
        
    }
  }

  return (
    <>
      <div className="row justify-content-center">
        <h2 className="col-md-8">{id === '' ? 'Crear' : 'Editar'}</h2>
      </div>
      <form
        onSubmit={handleSubmit}
      >
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-12">
            <label>Nombre</label>
            <input
              className="form-control"
              name="nombre"
              placeholder="Nombre"
              type="text"
              value={nombre}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <label>Apellido</label>
            <input
              className="form-control"
              name="apellido"
              placeholder="Apellido"
              type="text"
              value={apellido}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12">
            <label>Correo</label>
            <input
              className="form-control"
              name="correo"
              placeholder="Correo"
              type="email"
              value={correo}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="row justify-content-end mt-3">
          <div className="col-3">
            <button className="btn btn-primary btn-sm">
              {id === '' ? 'Crear' : 'Editar'}
            </button>

          </div>
        </div>
      </form>
    </>
  )
}
