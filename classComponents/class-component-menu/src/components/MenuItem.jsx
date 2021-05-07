import React, {useState}from 'react';




const MenuItem = props =>{
    //initialize my state variables
    const [likesCount, setLikesCount] = useState(props.likes);
    const [dislikesCount, setdisLikesCount] = useState(0);







    
    console.log("************", props)
    let {name, price, desc, children, likes} = props

    const likeItem = ()=>{
        setLikesCount(likesCount+1)
        // this.state.likesState+=1
        // this.setState({likesState:this.state.likesState+1})
        // console.log("clicked like button, this is the likes variable -->", likes)
    }
    const dislikeItem = ()=>{
        setdisLikesCount(dislikesCount+1)
        // this.state.likesState+=1
        // this.setState({dislike:this.state.dislike+1})
        // console.log("clicked like button, this is the likes variable -->", likes)
    }

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

                    <p><button className = "btn btn-success" onClick={likeItem}>Like</button> Likes: {likesCount} </p>
                    <p><button className = "btn btn-danger" onClick={dislikeItem}>Dislike</button> Dislikes: {dislikesCount}  </p>
                </div>      
            </div>
        </div>
    )


}


//PREVIOUS WAY OF DOING COMPONENT USING A CLASS BASED COMPONENT

// class MenuItem extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             likesState: props.likes,
//             dislike: 0
//         }
//     }
    

    // render() {
    //     //you can do regular js code here inside the render(){} function body but before the return
    //     console.log("**********",this.props)
        // let {name, price, desc, children, likes} = this.props

        // const likeItem = ()=>{
        //     // this.state.likesState+=1
        //     this.setState({likesState:this.state.likesState+1})
        //     console.log("clicked like button, this is the likes variable -->", likes)
        // }
        // const dislikeItem = ()=>{
        //     // this.state.likesState+=1
        //     this.setState({dislike:this.state.dislike+1})
        //     console.log("clicked like button, this is the likes variable -->", likes)
        // }
        


        // return(
        //     <div className="card">
        //         <div className="card-body">
                
        //             <h1 className= "card-title">Name: {name} </h1>
        //             <div className= "card-subtitle mb-2 text-muted">
        //                 {children}
        //             </div>
        //             <div className="card-text">
        //                 <h3>Price: {price}</h3>
        //                 <p>Description: {desc}</p>
        //                 {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}

        //                 <p><button className = "btn btn-success" onClick={likeItem}>Like</button> Likes: {this.state.likesState} </p>
        //                 <p><button className = "btn btn-danger" onClick={dislikeItem}>Dislike</button> Dislikes: {this.state.dislike} </p>

        //             </div>


                    
        //         </div>
        //     </div>
        // )
            
       
    // }
// }

export default MenuItem;

