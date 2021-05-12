import React from 'react';


const Login = () => {
    return (
        <div className= "container">
            <form>
            
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="" placeholder=""/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};


export default Login;