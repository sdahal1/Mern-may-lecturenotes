import React, { Component } from 'react';


// class LightSwitch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             position: "On"
//         };
//     }
    
//     render() {
//         return (
//             <fieldset>
//                 <p>The light is currently { this.state.position }</p>
//                 <button>Flip Switch</button>
//             </fieldset>
//         );
//     }
// }
                
// export default LightSwitch;

class MenuItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            likesState: props.likes,
            dislike: 0
        }
    }
    

    render() {
        //you can do regular js code here inside the render(){} function body but before the return
        console.log("**********",this.props)
        let {name, price, desc, children, likes} = this.props

        const likeItem = ()=>{
            // this.state.likesState+=1
            this.setState({likesState:this.state.likesState+1})
            console.log("clicked like button, this is the likes variable -->", likes)
        }
        const dislikeItem = ()=>{
            // this.state.likesState+=1
            this.setState({dislike:this.state.dislike+1})
            console.log("clicked like button, this is the likes variable -->", likes)
        }
        


        // <div class="card">
        //     <div class="card-body">
        //         <h4 class="card-title">Card title</h4>
        //         <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        //         <p class="card-text">
        //         Some quick example text to build on the card title
        //         and make up the bulk of the card's content.
        //         </p>
        //         <a href="#!" class="card-link">Card link</a>
        //         <a href="#!" class="card-link">Another link</a>
        //     </div>
        // </div>

        return(
            <div className="card">
                <div className="card-body">
                
                    <h1 className= "card-title">Name: {name} </h1>
                    <div className= "card-subtitle mb-2 text-muted">
                        {children}
                    </div>
                    <div className="card-text">
                        <h3>Price: {price}</h3>
                        <p>Description: {desc}</p>
                        {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}

                        <p><button className = "btn btn-success" onClick={likeItem}>Like</button> Likes: {this.state.likesState} </p>
                        <p><button className = "btn btn-danger" onClick={dislikeItem}>Dislike</button> Dislikes: {this.state.dislike} </p>

                    </div>


                    
                </div>
            </div>
        )
            
       
    }
}

export default MenuItem;

