import React, {useState, useEffect} from 'react';
import axios from 'axios';

const News = () => {

    const [allArticles, setAllArticles] = useState([])


    //useEffect is saying "upon loading of the page, run this code inside the use effect function one time"
    useEffect(()=>{
        
    }, [])


    const getArticles = (e)=>{
        // fetch("https://newsapi.org/v2/top-headlines?apiKey=dc3063ef0bce4718a88a3ac000ec7448&country=us&category=technology&pageSize=100")
        // .then(res=> {
        //     return res.json()
        // })
        // .then(res => {
        //     console.log("************")
        //     console.log(res)
        //     setAllArticles(res.articles)

        // })
        // .catch(err => console.log("ERRRORRRRRRRRRR", err))

        axios.get("https://newsapi.org/v2/top-headlines?apiKey=dc3063ef0bce4718a88a3ac000ec7448&country=us&category=technology&pageSize=100")
        .then(res=>{
            console.log(res)
            setAllArticles(res.data.articles)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    

    
    // console.log("logging responce outside of the fetch", res)
    return (
        <div>
            <button onClick={getArticles}>Click Here to get all the articles</button>
            <h1>Here are the news articles for today</h1>
            {
                allArticles.map((article,i) =>{
                    return <div key = {i} className="card">
                        <img src={article.urlToImage} alt="" height="200px" width = "200px"/>
                    <div className="card-body">
                        <h4 className="card-title">{article.title}</h4>
                        <p className="card-text">

                        {article.description? article.description: "No description Available"}
                        </p>
                        <p>Source: {article.source.name}</p>
                        <a href={article.url} className="btn btn-primary">Go to full article</a>
                    </div>
                </div>
                })
            }
            
        </div>
    );
};

export default News;