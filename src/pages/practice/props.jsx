//Create a reusable USeCard Component.
// -- Props to accept: name(String), age(number), location(String), and isPremium(boolean).
// --Requirements:
//    -Display the name in an <h1> tag.
//    -if isPremium is true, display a "VIP Member" text (using conditional rendering).
//    - If isPRemium is false, display "Standard Member".
// Render three different UserCard components in your App.js with diff data.

function UserCard(props){
        const check = () => {
            if(props.isPremium){
                return "VIP Member";
            }
            else{
                return "Standard Member";
            }
        }
        return(
            <>
                <h1>{props.name}</h1>
                <p>
                    Age: {props.age}
                    <br/>
                    Location: {props.location}
                </p>
                <p>{check()}</p>
            </>
        )
}
export default UserCard;