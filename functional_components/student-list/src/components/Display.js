import React from 'react';
import styles from './Form.module.css';


const Display = (props) => {

    const {allStudents,setAllStudents} = props
    
    const deleteStudent = (e, indexnumbaaa) =>{
        console.log("deleting this student", indexnumbaaa)
        // let students= [...allStudents]
        // students.splice(indexnumbaaa,1)
        // setAllStudents(students)

        // var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
        // let result = fruits.splice(2,1);

        // console.log(fruits)

        let result = allStudents.filter((student, idx)=>{
            return idx !=indexnumbaaa
        } )
        setAllStudents(result)

    }

    return (
        <div>
        {
          allStudents.map((student,idx)=>{
              return <div key={idx} className={`card ${styles.studentCard} d-flex justify-content-center`} style = {{backgroundColor: student.favColor, width: student.numBelts>2? "100%":"50%" }}>
              <img className="" src={student.proPic} alt="Card image cap" height= "200" width = "200"/>
              <div className="card-body">
                <h4 className="card-title">{student.fname}</h4>
                <p className="card-text">
                 {student.desc}
                </p>
                <p>Favorite color: {student.favColor}</p>
                <p>Number of belts: {student.numBelts}</p>
                <p>Index number: {idx}</p>
              </div>
              <button onClick={e=> deleteStudent(e, idx)}>Remove</button>
            
            </div>
          })  
        }
    </div>
    );
};



export default Display;