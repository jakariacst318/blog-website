import { useContext } from "react";
import { Circles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    
    if (loading) {
        return <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    }


    if (user) {
        return children;
    }



    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoutes;