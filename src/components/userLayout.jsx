import UserHeader from "./userHeader";
import UserFooter from "./userFooter";

function UserLayout({children, user}){
    return(
        <>  
            <UserHeader user={user}/>
                {children}
            <UserFooter/>
        </>
    )
}
export default UserLayout;