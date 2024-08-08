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
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
