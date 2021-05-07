
import React, {useState} from 'react';


const FoodForm = props =>{

    // const [email, setEmail] = useState("");
    // const [foodname, setfoodname] = useState("");
    // const [spicelevel, setspicelevel] = useState(1);


    const [forminfo, setforminfo] = useState({
        email:"",
        foodname: "",
        spicelevel: 1
    })

    const changeHandler = (e)=>{
        console.log("changing this input now: ", e.target.name)
        setforminfo({
            ...forminfo,
            [e.target.name]: e.target.value
        })
        
    }


    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(`wazzzaaa, you just ordered some ${forminfo.foodname}`)
        setIsSubmitted(true);
    }


    return(
        <div>
            {isSubmitted?<h1 className = "text-success">Thank you for submitting</h1>:  <h1 className= "text-danger">Please fill out the form!</h1>}
           
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label >Email address</label>
                    <input onChange = {changeHandler} type="email" name = "email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Food Name:</label>
                    <input onChange = {changeHandler} type="text" name="foodname" id="" className="form-control"/>
                    <p className="text-danger">{forminfo.foodname.length<4 && forminfo.foodname.length>0? `The Food length still needs least ${4-forminfo.foodname.length} characters`: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Spice Level:</label>&nbsp;&nbsp;&nbsp;
                    <select onChange = {changeHandler} name="spicelevel" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div>
                <p>Email you've typed is this: {forminfo.email}</p>
                <p>Your order: {forminfo.foodname}</p>
                <p>Spice Level: {forminfo.spicelevel}</p>
            </div>
        </div>
    )
}


export default FoodForm;