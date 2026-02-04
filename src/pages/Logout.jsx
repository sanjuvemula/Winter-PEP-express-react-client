import axios from "axios";
import { useEffect } from "react";
import { serverEndPoint } from "../config/appconfig";
import { useDispatch } from "react-redux";
import { CLEAR_USER } from "./redux/user/action";

function Logout(){
    const dispatch = useDispatch();
    const handleLagout = async () =>{
        try{
            await axios.post(`${serverEndPoint}/auth/logout`,
                {},
                {withCredentials:true}
            );
            document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            // setUser(null);
            dispatch({
                type:CLEAR_USER
            })
        }
        catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        handleLagout();
    },[]);
}

export default Logout;