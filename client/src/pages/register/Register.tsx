import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from './Register.style';
import ChatAppLogo from '../../assets/ChatAppLogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions } from 'react-toastify/dist/types';
import axios from 'axios';
import { registerRoute } from '../../utils/APIRoutes';
function Register() {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  };

  const emailRegex =
    /^(([^<>()[]\\.,;:s@”]+(.[^<>()[]\\.,;:s@”]+)*)|(“.+”))@(([[0–9]{1,3}.[0–9]{1,3}.[0–9]{1,3}.[0–9]{1,3}])|(([a-zA-Z-0–9]+.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleValidations()) {
      const { password, userName, email } = values;
      await axios.post(registerRoute, {
        userName,
        email,
        password
      });
    }
  };

  const handleValidations = () => {
    const { password, confirmPassword, userName, email } = values;
    if (userName.length < 3) {
      toast.error(
        'El nombre de usuario debe contener al menos 3 caracteres',
        toastOptions
      );
      return false;
    } else if (!emailRegex.test(email)) {
      toast.error('Email inválido', toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        'La contraseña debe contener al menos 8 caracteres',
        toastOptions
      );
      return false;
    } else if (password !== confirmPassword) {
      toast.error('Las contraseñas deben ser iguales', toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={ChatAppLogo} alt="Logo Chat App" />
            <h1>Chat App</h1>
          </div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Crear Usuario</button>
          <span>
            Ya tienes una cuenta? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Register;
