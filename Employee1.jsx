import React, { useEffect, useState } from 'react';
import EmpService from './EmpService';

const Employee1 = () => {
    const [employees, setEmployees] = useState([]);
useEffect(()=>{
    EmpService.findall().then((response)=>
    {
        setEmployees(response.data)   
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    
})},[])
    return (
        <div style={containerStyle}>
            <h3 style={headingStyle}>Employee list</h3>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Empid</th>
                        <th style={tableHeaderStyle}>Emp First Name</th>
                        <th style={tableHeaderStyle}>Emp Last Name</th>
                        <th style={tableHeaderStyle}>Emp Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td style={tableCellStyle}>{employee.id}</td>
                            <td style={tableCellStyle}>{employee.firstName}</td>
                            <td style={tableCellStyle}>{employee.lastName}</td>
                            <td style={tableCellStyle}>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const containerStyle = {
    //display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
};

const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%', // Adjust as needed
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '10px',
};

const tableHeaderStyle = {
    borderBottom: '2px solid black',
    padding: '8px',
    textAlign: 'left'
};

const headingStyle = {
    textAlign: 'center',
};
const tableCellStyle = {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left'
};

export default Employee1;
