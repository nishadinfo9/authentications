import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Protected = ({ children }) => {
  const user = useSelector((state) => state.status);
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true); 

  useEffect(() => {
    if (user === false) {
      navigate("/login");
    }
    setChecking(false);
  }, [user, navigate]);


  return !checking ? null : children
};

export default Protected;
