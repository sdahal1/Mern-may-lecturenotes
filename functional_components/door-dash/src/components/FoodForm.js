import React, {useState} from 'react';


const FoodForm = props =>{

    const [email, setEmail] = useState("");
    const [foodname, setfoodname] = useState("");
    const [spicelevel, setspicelevel] = useState(1);



    return(
        <div>
            <form>
                <div className="form-group">
                    <label >Email address</label>
                    <input onChange = {e=> setEmail(e.target.value) } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Food Name:</label>
                    <input onChange = {e=> setfoodname(e.target.value)} type="text" name="" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Spice Level:</label>&nbsp;&nbsp;&nbsp;
                    <select onChange = {e=> setspicelevel(e.target.value)} name="" id="">
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
                <p>Email you've typed is this: {email}</p>
                <p>Your order: {foodname}</p>
                <p>Spice Level: {spicelevel}</p>
            </div>
        </div>
    )
}


export default FoodForm;