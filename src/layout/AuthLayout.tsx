import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem("auth") || "{}");
    const isUserExist = Object.keys(parsedUser).includes("user");
    console.log({ isUserExist });
    if (isUserExist) {
      return navigate("/protected");
    }
  });
  return (
    <div>
      <div>AuthLayout</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
