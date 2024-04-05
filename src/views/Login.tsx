import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        user: "1",
      })
    );
    navigate("/protected");
  };
  return <button onClick={handleLoginClick}>Login</button>;
};
