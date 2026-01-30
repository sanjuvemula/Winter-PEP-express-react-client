import { useState } from "react";

function Student4(){
    const [visible, setVisible] = useState(true);
    const [button, setButoon] = useState("hide Students");

    const studentList = [
        {name:'Tommy', Rollnumber: 1},
        {name: 'Pluto', Rollnumber: 2},
        {name: 'Sundae', Rollnumber:3},
    ];

    const handleClick = () => {
        // setVisible(!visible);

        // if(visible){
        //     setButoon("show Students");
        // }
        // else{
        //     setButoon("Hide Students");
        // }

        setVisible(()=>{
            setButoon(!visible?'hide Students':'show students');
            return !visible;
        })
    }

    return(
        <div>
            <div id="liveAlertPlaceholder" />
            <button type="button" className="btn btn-primary" id="liveAlertBtn">
                Show live alert
            </button>

            <button onClick={handleClick}>{button}</button>
            {visible && (
                <>
                    {studentList.map((s)=>(
                        <p>
                            Roll Number: {s.Rollnumber}
                            <br/>
                            name: {s.name}
                        </p>
                    ))}
                </>
            )}
        </div>
    )
}
export default Student4;