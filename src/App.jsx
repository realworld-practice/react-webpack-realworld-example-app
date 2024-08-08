import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ArticlePage,
  EditorPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  SettingsPage,
} from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
