import { Navigate } from "react-router-dom";
// import { useAuth } from "./Auth";
import { user } from '../data/user'


export const RequireAuth = ({children}) => {

    // const auth = useAuth();

    if(!user) {
        return <Navigate to='/login' />
    }

    return children;
}