import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        setEmployees(response.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            <h2>{employee.name}</h2>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <p>Email: {employee.email}</p>
            <p>
              <img src={employee.photoUrl} alt={employee.name} width="100" />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
