import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.css';
import Chat from './pages/chat/Chat';
import SetAvatar from './pages/setAvatar/SetAvatar';
import Spinner from './components/spinner/Spinner';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/spinner" element={<Spinner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
