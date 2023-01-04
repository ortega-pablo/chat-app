import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormContainer } from './Login.style';
import ChatAppLogo from '../../assets/ChatAppLogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions } from 'react-toastify/dist/types';
import axios from 'axios';
import { loginRoute } from '../../utils/APIRoutes';
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  };

  const navigate = useNavigate();

  const handleValidations = () => {
    const { password, email } = values;
    if (email === '') {
      toast.error('Introducir el email', toastOptions);
      return false;
    } else if (password === '') {
      toast.error('Introducir la contraseña', toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleValidations()) {
      const { password, email } = values;
      try {
        const response = await axios.post(loginRoute, {
          email,
          password
        });
        if (response.data.status === false) {
          toast.error(response.data.message, toastOptions);
        }
        if (response.data.status === true) {
          localStorage.setItem('token', JSON.stringify(response.data.token));
        }
        navigate('/login');
      } catch (error) {
        if (error) {
          toast.error('Error en el Servidor', toastOptions);
        }
      }
    }
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
          <button type="submit">Ingresar</button>
          <span>
            Aún no tienes una cuenta? <Link to="/register">Registrarse</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Login;
