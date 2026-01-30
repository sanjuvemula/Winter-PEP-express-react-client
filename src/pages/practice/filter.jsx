//the "Employee Directory" (Filtering & logic)
// --Data:
//      const employee = [
//          {id:101, name:"alice", department: "Engineering", active:true},
//          {id: 102, name:"Bob", department: "Design", active:flase},
//          {id: 103, name:"Charlie", department:"Engineering" active:true}
//          {id:104, name:"David", department: "HR", active:true}
//      ]
// --Create a component called Engineering team.
// -- Requirements:
//      --First, use .filter() to create a new array containing only employees where department === "Engineering".
//      --Then, .map() through that filtered array to display their names.
//      --If an employee is not active, do not render their name at all (use a conditional check inside the map).

function EmployeeDirectory() {
    const employees = [
        { id: 101, name: "alice", department: "Engineering", active: true },
        { id: 102, name: "Bob", department: "Design", active: false },
        { id: 103, name: "Charlie", department: "Engineering", active: true },
        { id: 104, name: "David", department: "HR", active: true }
    ]

    const EngineeringTeam = () => {
        const arr = employees.filter(emp => emp.department === "Engineering");
        return (
            <div>
                <h2>Engineering Team</h2>
                {employees.map(emp => (
                    emp.active && (
                        <p key={emp.id}>{emp.name}</p>
                    )
                ))}
            </div>
        );
    };

    return(
        <EngineeringTeam/>
    )
}