import React, { useState } from 'react';
import { Container } from './ChangePass.style';
import ChatAppLogo from '../../assets/ChatAppLogo.png';
import { BiX } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions } from 'react-toastify/dist/types';
import { changePass } from '../../config/APIRoutes';
import axios from 'axios';
import Swal from 'sweetalert2';

type props = {
  userId: string | undefined;
  handleClickPass(): void;
};

function ChangePass({ handleClickPass, userId }: props) {
  const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  };

  const [values, setValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleValidations = () => {
    const { newPassword, confirmNewPassword } = values;
    if (newPassword.length < 8) {
      toast.error(
        'La nueva contraseña debe contener al menos 8 caracteres',
        toastOptions
      );
      return false;
    } else if (newPassword !== confirmNewPassword) {
      toast.error('Las contraseñas deben ser iguales', toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleValidations()) {
      const { oldPassword, newPassword } = values;
      Swal.fire({
        title: '¿Seguro que quieres cambiar la contraseña?',
        showCancelButton: true,
        confirmButtonText: 'Cambiar'
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          try {
            await axios.put(`${changePass}/${userId}`, {
              oldPassword,
              newPassword
            });
            Swal.fire({
              icon: 'success',
              title: 'Contraseña cambiada exitosamente',
              showConfirmButton: false,
              timer: 1500
            });
            handleClickPass();
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
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="skip" onClick={handleClickPass}>
            <BiX />
          </div>
          <div className="brand">
            <img src={ChatAppLogo} alt="Logo Chat App" />
            <h1>Chat App</h1>
          </div>
          <input
            type="password"
            placeholder="Contaseña antigua"
            name="oldPassword"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Nueva contraseña"
            name="newPassword"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirmar nueva contraseña"
            name="confirmNewPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Cambiar</button>
        </form>
      </Container>
      <ToastContainer />
    </>
  );
}

export default ChangePass;
