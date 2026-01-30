import Student from "./Student";
import Student3 from "./Student3";

function StudentList({students}){
    const filteredStudents = students.filter(student => {
        return student.percentage > 33.0;
    })
    return(
        <>
            <h2>Student List</h2>
            {filteredStudents.map((Student, index)=>(
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