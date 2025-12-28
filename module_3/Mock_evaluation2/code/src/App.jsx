import React, { useState, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLoginSuccess = useCallback(() => {
    setIsAuth(true);
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login onSuccess={handleLoginSuccess} />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

