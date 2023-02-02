import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Chat from './pages/chat/Chat';
import SetAvatar from './pages/setAvatar/SetAvatar';
import Spinner from './components/spinner/Spinner';
import './styles/GlobalStyle';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/GlobalStyle';
import UsePersistedState from './config/UsePersistedState';
import Profile from './pages/profile/Profile';

const App: React.FC = () => {
  const [theme, setTheme] = UsePersistedState<DefaultTheme>('theme', light);

  const changeTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat changeTheme={changeTheme} />} />
          <Route
            path="/register"
            element={<Register changeTheme={changeTheme} />}
          />
          <Route path="/login" element={<Login changeTheme={changeTheme} />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/spinner" element={<Spinner />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
