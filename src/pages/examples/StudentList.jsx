import Student from "./Student";
import Student3 from "./Student3";

function StudentList({students}){
    return(
        <>
            <h2>Student List</h2>
            {students.map((Student, index)=>(
                <Student3
                    key = {index}
                    name = {Student.name}
                    rollNumber={Student.rollNumber}
                    percentage={Student.percentage}
                />
            ))}
        </>
    );
}

export default StudentList;