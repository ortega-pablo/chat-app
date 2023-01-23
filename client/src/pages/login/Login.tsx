import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormContainer } from './Login.style';
import ChatAppLogo from '../../assets/ChatAppLogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions } from 'react-toastify/dist/types';
import axios from 'axios';
import { decryptTokenRoute, loginRoute } from '../../config/APIRoutes';
import SwitchTheme from '../../components/switch/SwitchTheme';

type props = {
  changeTheme(): void;
};
function Login({ changeTheme }: props) {
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

  const token = localStorage.getItem('token');

  const isLogin = async (token: string) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };
    await axios
      .post(decryptTokenRoute, {}, config)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem('token');
        navigate('/login');
      });
  };

  useEffect(() => {
    token && isLogin(token);
  }, []);

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
        const { data } = await axios.post(loginRoute, {
          email,
          password
        });
        if (data.statusOk === true) {
          localStorage.setItem('token', data.token);
        }
        navigate('/');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          error.response
            ? toast.error(error.response.data.message, toastOptions)
            : toast.error('Error en el Servidor', toastOptions);
        } else {
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
          <div className="switch">
            <SwitchTheme changeTheme={changeTheme} />
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Login;
