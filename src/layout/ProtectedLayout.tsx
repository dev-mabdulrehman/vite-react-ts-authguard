import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/auth/login")
  };
  useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem("auth") || "{}");
    const isUserExist = Object.keys(parsedUser).includes("user");
    if (!isUserExist) {
      return navigate("/auth/login");
    }
  });
  return (
    <div>
      <div>ProtectedLayout</div>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
