import React, {useState} from 'react';
// import styles from './MyButtonComponent.module.css';
import styles from './Form.module.css';



const Form = () => {

    //state variable to store the form information
    const [forminfo, setFormInfo] = useState({
        fname:"",
        lname:"",
        proPic:"",
        favColor:"",
        desc: "",
        numBelts:""
    })

    //state variable to store all the SUBMITTED form information
    const [allStudents, setAllStudents] = useState([])



    //changehandler
    const changeHandler = (event)=>{
        console.log("YOU'RE TYING IN THE FORM I SEE")
        console.log("EVENT.TARGET.NAME IS THIS-->", event.target.name)
        console.log(event.target.value)

        setFormInfo({
            ...forminfo,
            [event.target.name]: event.target.value
        })

    }


    //submit handler
    const submitHandler = (event)=>{
        event.preventDefault()
        console.log("SUBMITTED THE FORM")
        //now i want the array containing all the form submissions (aka all the students) to add this new form info
        setAllStudents([...allStudents, forminfo])

        //reset the form info to be empty again after submitting form for the new entries
        setFormInfo({
            fname:"",
            lname:"",
            proPic:"",
            favColor:"",
            desc: "",
            numBelts:""
        })

    }

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
        <div className="container">
            <div className= {styles.newstudent}>
                <h3 id = {styles.title}>Add a student below</h3>
                <form onSubmit= {submitHandler}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange = {changeHandler} type="text" name = "fname" className="form-control" value = {forminfo.fname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input onChange = {changeHandler} type="text" name = "lname" className="form-control" value = {forminfo.lname}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Profile Picture Link</label>
                        <input onChange = {changeHandler} type="text"  name = "proPic" className="form-control" value = {forminfo.proPic}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Favorite Color</label>
                        <input onChange = {changeHandler} type="text"  name = "favColor" className="form-control" value = {forminfo.favColor}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea onChange = {changeHandler} name="desc" id="" cols="30" rows="10" className="form-control" value = {forminfo.desc}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Number of Belts</label>
                        <select onChange = {changeHandler} name="numBelts" id="" className="form-control" value = {forminfo.numBelts}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <hr/><hr/>

            </div>
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
                      {/* return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button> */}
                    </div>
                  })  
                }
            </div>
        </div>
    );
};



export default Form;