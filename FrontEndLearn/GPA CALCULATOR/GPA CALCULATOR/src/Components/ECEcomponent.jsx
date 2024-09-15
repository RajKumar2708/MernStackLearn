import React, { useState } from 'react';

const ECEcomponent = () => {
    const [semester, setSemester] = useState('');

    const handleSelectChange = (e) => {
      setSemester(e.target.value);
    };
  
    return (
      <div>
        <h3>ECE DEPARTMENT</h3>
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
      { id: 1, sub: "Calculus, Complex Analysis and Numerical Methods", credits: 4 },
      { id: 2, sub: "Electromagnetic Theory", credits: 3 },
      { id: 3, sub: "Basic Electrical and instrumation Engineering", credits: 3 },
      { id: 4, sub: "Communication Skill for Professionals", credits: 1.5 },
      { id: 5, sub: "Basic Science Laboratory-II", credits: 1 },
      { id: 6, sub: "Heritage of Tamil", credits: 1 },
      { id: 7, sub: "Electronic Device (Integrated)", credits: 3.5},
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
      { id: 1, sub: "Numerical Analysis and Linear Algebra", credits: 4 },
      { id: 2, sub: "Fundamentals of Python Programming (Integrated)", credits: 3 },
      { id: 3, sub: "PCB Design", credits: 1 },
      { id: 4, sub: "Digital Electronics Labratory", credits: 1 },
      { id: 5, sub: "Electronic Design Labratory", credits: 1 },
      { id: 6, sub: "Tamil and Technology", credits: 1 },
      { id: 7, sub: "Digital Electronics and Design", credits: 3 },
      { id: 8, sub: "Circuit Theory", credits: 3 },
      { id: 9, sub: "Electronic Circuits", credits: 3 },
      { id: 10, sub: "Electromagnetic Theory", credits: 3 }
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
      { id: 1, sub: "Probability,Statistics and Mathematical Structures", credits: 4 },
      { id: 2, sub: "Arduino Programming", credits: 1 },
      { id: 3, sub: "Analog and Digital Communication Labratory", credits: 1 },
      { id: 4, sub: "Linear Integrated Circuits Labratory", credits: 1.5 },
      { id: 5, sub: "Interpersonal Skills and Team Building Labratory", credits: 1.5 },
      { id: 6, sub: "Data Communication and Networks", credits: 3 },
      { id: 7, sub: "Analog and Digital Communication", credits: 3 },
      { id: 8, sub: "Priciple of Linear Integrated Circuit", credits: 3},
      { id: 9, sub: "Signals and Linear Systems", credits: 4 },
      { id: 10, sub: "Data Structure and Programming Techniques (Integrated) ", credits: 3 }
      
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

export default ECEcomponent
