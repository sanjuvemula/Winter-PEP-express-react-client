import UserHeader from "./userHeader";
import UserFooter from "./userFooter";
function UserLayout({children}){
    return(
        <>  
            <UserHeader/>
                {children}
            <UserFooter/>
        </>
    )
}
export default UserLayout;