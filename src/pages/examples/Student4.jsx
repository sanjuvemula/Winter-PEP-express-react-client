import { useState } from "react";

function Student4(){
    const [visible, setVisible] = useState(true);

    const studentList = [
        {name:'Tommy', Rollnumber: 1},
        {name: 'Pluto', Rollnumber: 2},
        {name: 'Sundae', Rollnumber:3},
    ];

    const handleClick = () => {
        setVisible(!visible);
    }

    return(
        <div>
            <div id="liveAlertPlaceholder" />
            <button type="button" className="btn btn-primary" id="liveAlertBtn">
                Show live alert
            </button>

            <button onClick={handleClick}>{visible?"Hide Students":"Show Students"}</button>
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