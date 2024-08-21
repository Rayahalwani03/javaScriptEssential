const employees = [

    {id: 1, name: 'saow dong', age:15, department:'IT', salary: 700, spacialization:'javascript'},
    {id: 2, name: 'laow dong', age:12, department:'HR', salary: 600, spacialization:'python'},
    {id: 3, name: 'maowq dong', age:11, department:'Finance', salary: 500, spacialization:'praying'}
];
 // Function to display all employees
 const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
 document.getElementById('employeesDetails').innerHTML = totalEmployees;

 function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {   
     const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';


    }}

    function findBySpacialization(spacializationEmployee){
        const foundEmployeesp = employees.find(employee => employee.spacialization === spacializationEmployee);
        if (foundEmployeesp) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployeesp.id}: ${foundEmployeesp.name}: ${foundEmployeesp.name} - ${foundEmployeesp.department} - $${foundEmployeesp.salary} - ${foundEmployeesp.spacialization}</p>`;
        }
        else{
          document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    
    
        }


    }

