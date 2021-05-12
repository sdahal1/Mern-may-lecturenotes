import React, {useState, useEffect} from 'react';
import axios from 'axios';


const PokemonDetail = (props) => {

    console.log("LOGGING PROPS HERE", props)
    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.potato}`)
        .then(res=>{
            console.log("***********")
            console.log(res)
            setPokemonInfo(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }, [])

    


    return (
        <div>
            <h1>Pokemon Details</h1>
            {pokemonInfo?
            <>
                <img src={pokemonInfo.sprites.front_shiny} alt=""/>
                <p>Name: {pokemonInfo.name}</p>
            </>
            
            
            
            
            : "This pokemon not found"}
        </div>
    );
};


export default PokemonDetail;