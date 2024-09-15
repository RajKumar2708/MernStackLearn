import React, { useState } from 'react';

const CSEcomponent = () => {
  const [semester, setSemester] = useState('');

  const handleSelectChange = (e) => {
    setSemester(e.target.value);
  };

  return (
    <div>
      <h3>CSE DEPARTMENT</h3>
      SEMESTER : 
      <select onChange={handleSelectChange}>
        <option value="">Select Your Semester</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {semester === "1" && <Sem1 />}
      {semester === "2" && <Sem2 />}
      {semester === "3" && <Sem3 />}
      {semester === "4" && <Sem4 />}
    </div>
  );
};

//SEMESTER 1

function Sem1() {
  const [gpa, setGpa] = useState(null);
  const s1 = [
    { id: 1, sub: "Applied Chemistry", credits: 3 },
    { id: 2, sub: "Matrix and Calculus", credits: 4 },
    { id: 3, sub: "Engineering Physics", credits: 3 },
    { id: 4, sub: "Problem Solving and C Programming", credits: 3 },
    { id: 5, sub: "Engineering Graphics", credits: 4 },
    { id: 6, sub: "English for Technical Communication", credits: 2 },
    { id: 7, sub: "Problem Solving and C Programming Laboratory", credits: 1 },
    { id: 8, sub: "Basic Science Laboratory-I", credits: 1 },
    { id: 9, sub: "Engineering Fundamental Laboratory", credits: 1 }
  ];

  const gradeToValue = {
    O: 10,
    'A+': 9,
    A: 8,
    'B+': 7,
    B: 6,
    C: 5,
    U: 0
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let isValid = true;  
  
    s1.forEach((item) => {
      const gradeInput = document.getElementById(item.id.toString());
      const grade = gradeInput ? gradeInput.value.toUpperCase() : 'U'; 
  
      if (!gradeToValue.hasOwnProperty(grade)) {
        alert(`Enter Correct Grade for ${item.sub}`);
        isValid = false;  
        return; 
      } else {
        totalPoints += gradeToValue[grade] * item.credits;
        totalCredits += item.credits;
      }
    });

    if (isValid) {
      const gpa = totalPoints / totalCredits;
      setGpa(gpa.toFixed(3));
    }
  };
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {s1.map((item) => (
            <tr key={item.id}>
              <td>{item.sub}</td>
              <td>{item.credits}</td>
              <td>
                <input
                  id={item.id.toString()}
                  type="text"
                  placeholder="Enter Your Grade"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <h3>Your GPA is : {gpa}</h3>
      </table>
      <button onClick={calculateGPA}>Calculate GPA</button>

    </>
  );
}

// SEMESTER 2 

function Sem2() {
  const [gpa, setGpa] = useState(null);
  const s2 = [
    { id: 1, sub: "Differential Equation and Complex Analysis", credits: 3 },
    { id: 2, sub: "Physics for Information Science", credits: 3 },
    { id: 3, sub: "Digital Electronics", credits: 3 },
    { id: 4, sub: "Programming Fundamental using Python", credits: 3 },
    { id: 5, sub: "Communication Skill for Professionals", credits: 1.5 },
    { id: 6, sub: "Basic Science Laboratory-II", credits: 1 },
    { id: 7, sub: "Programming Fundamentals using Python Laboratory", credits: 1.5 },
    { id: 8, sub: "Heritage of Tamil", credits: 1 }
  ];

  const gradeToValue = {
    O: 10,
    'A+': 9,
    A: 8,
    'B+': 7,
    B: 6,
    C: 5,
    U: 0
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let isValid = true;  
  
    s2.forEach((item) => {
      const gradeInput = document.getElementById(item.id.toString());
      const grade = gradeInput ? gradeInput.value.toUpperCase() : 'U';
  
      if (!gradeToValue.hasOwnProperty(grade)) {
        alert(`Enter Correct Grade for ${item.sub}`);
        isValid = false;  
        return; 
      } else {
        totalPoints += gradeToValue[grade] * item.credits;
        totalCredits += item.credits;
      }
    });

    if (isValid) {
      const gpa = totalPoints / totalCredits;
      setGpa(gpa.toFixed(3));
    }
  };
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {s2.map((item) => (
            <tr key={item.sid}>
              <td>{item.sub}</td>
              <td>{item.credits}</td>
              <td>
                <input
                  id={item.id.toString()}
                  type="text"
                  placeholder="Enter Your Grade"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <h3>Your GPA is : {gpa}</h3>
      </table>
      <button onClick={calculateGPA}>Calculate GPA</button>
    </>
  );
}

//SEMESTER 3

function Sem3() {
  const [gpa, setGpa] = useState(null);
  const s3 = [
    { id: 1, sub: "Probability, Queuing Theory and Numerical Methods", credits: 4 },
    { id: 2, sub: "Database System Design Labratory", credits: 1 },
    { id: 3, sub: "Data Structures Labratory", credits: 1 },
    { id: 4, sub: "Tamil and Technology", credits: 1 },
    { id: 5, sub: "Database System Design", credits: 3 },
    { id: 6, sub: "Object Oriented Programming using C++ (Integrated)", credits: 4 },
    { id: 7, sub: "Computer Organization", credits: 3 },
    { id: 8, sub: "Data Structures", credits: 3 },
    { id: 9, sub: "Principle of Operating System", credits: 3 }
  ];

  const gradeToValue = {
    O: 10,
    'A+': 9,
    A: 8,
    'B+': 7,
    B: 6,
    C: 5,
    U: 0
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let isValid = true;  
  
    s3.forEach((item) => {
      const gradeInput = document.getElementById(item.id.toString());
      const grade = gradeInput ? gradeInput.value.toUpperCase() : 'U';
  
      if (!gradeToValue.hasOwnProperty(grade)) {
        alert(`Enter Correct Grade for ${item.sub}`);
        isValid = false;  
        return; 
      } else {
        totalPoints += gradeToValue[grade] * item.credits;
        totalCredits += item.credits;
      }
    });

    if (isValid) {
      const gpa = totalPoints / totalCredits;
      setGpa(gpa.toFixed(3));
    }
  };
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {s3.map((item) => (
            <tr key={item.id}>
              <td>{item.sub}</td>
              <td>{item.credits}</td>
              <td>
                <input
                  id={item.id.toString()}
                  type="text"
                  placeholder="Enter Your Grade"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <h3>Your GPA is : {gpa}</h3>
      </table>
      <button onClick={calculateGPA}>Calculate GPA</button>
    </>
  );
}

//SEMESTER 4

function Sem4() {
  
  const [gpa, setGpa] = useState(null);
  const s4 = [
    { id: 1, sub: "Transforms and Discrete Mathematics", credits: 4 },
    { id: 2, sub: "Microprocessors and Microcontrollers", credits: 3 },
    { id: 3, sub: "R Programming", credits: 1 },
    { id: 4, sub: "Computer Networks Labratory", credits: 1 },
    { id: 5, sub: "Microprocessors and Microcontrollers Labratory", credits: 1 },
    { id: 6, sub: "Computer Networks", credits: 3 },
    { id: 7, sub: "Algorithm Analysis", credits: 3 },
    { id: 8, sub: "Java Programming(Integrated)", credits: 4 },
    { id: 9, sub: "Software Engineering Methodology", credits: 3 }
  ];

  const gradeToValue = {
    O: 10,
    'A+': 9,
    A: 8,
    'B+': 7,
    B: 6,
    C: 5,
    U: 0
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let isValid = true;  
  
    s4.forEach((item) => {
      const gradeInput = document.getElementById(item.id.toString());
      const grade = gradeInput ? gradeInput.value.toUpperCase() : 'U';
      
  
      if (!gradeToValue.hasOwnProperty(grade)) {
        alert(`Enter Correct Grade for ${item.sub}`);
        isValid = false;  
        return; 
      } else {
        totalPoints += gradeToValue[grade] * item.credits;
        totalCredits += item.credits;
      }
    });

    if (isValid) {
      const gpa = totalPoints / totalCredits;
      setGpa(gpa.toFixed(3));
    }
  };
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {s4.map((item) => (
            <tr key={item.id}>
              <td>{item.sub}</td>
              <td>{item.credits}</td>
              <td>
                <input
                  id={item.id.toString()}
                  type="text"
                  placeholder="Enter Your Grade"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <h3>Your GPA is : {gpa}</h3>
      </table>
      <button onClick={calculateGPA}>Calculate GPA</button>
      
    </>
  );
}


export default CSEcomponent;
