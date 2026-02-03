import { useEffect } from "react";
import { serverEndPoint } from "../config/appconfig";

function Logout({setUser}){
    const handleLagout = async () =>{
        try{
            await axios.post(`${serverEndpoint}/auth/logout`,
                {},
                {withCredentials:true}
            );
            document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
            setUser(null);
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