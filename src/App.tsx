import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hello from "./views/Hello";
import Protected from "./views/Protected";
import Protected1 from "./views/Protected1";
import ProtectedLayout from "./layout/ProtectedLayout";
import AuthLayout from "./layout/AuthLayout";
import { Login } from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Hello />} />

          {/* Auth Routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="/protected" element={<Protected />} />
            <Route path="/protected1" element={<Protected1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
