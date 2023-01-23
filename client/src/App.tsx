import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Chat from './pages/chat/Chat';
import SetAvatar from './pages/setAvatar/SetAvatar';
import Spinner from './components/spinner/Spinner';
import './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/spinner" element={<Spinner />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
