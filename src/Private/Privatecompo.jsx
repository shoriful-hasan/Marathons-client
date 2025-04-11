import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const Privatecompo = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();

  if (loading) return <Loading></Loading>;

  if (user) return children;

  return <Navigate to="/login" state={location.pathname}/>;
};

export default Privatecompo;