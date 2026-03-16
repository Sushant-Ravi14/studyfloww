import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        try {
          const res = await api.get('/auth/me');
          setUser(res.data.user);
        } catch (e) {
          console.error("Failed to verify user profile", e);
          logout();
        }
      }
      setLoading(false);
    };
    initAuth();
  }, [token]);

  const signUp = async (userData) => {
    const res = await api.post('/auth/register', userData);
    const { user, token } = res.data;
    setUser(user);
    setToken(token);
    localStorage.setItem('token', token);
    return res.data;
  };

  const login = async (credentials) => {
    const res = await api.post('/auth/login', credentials);
    const { user, token } = res.data;
    setUser(user);
    setToken(token);
    localStorage.setItem('token', token);
    return res.data;
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (e) {
      console.error(e);
    }
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, signUp, logout, isAuthenticated: !!token }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
