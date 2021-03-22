// import React, { Component, useState, useEffect } from "react";
// import { Redirect} from "react-router-dom";
// import Lokal from './Lokal'

// let Local = new Lokal();

// const Detail = () => {
// 	// constructor(props){
// 	// 	super(props);
// 	// 	this.state = {
// 	// 		poke:[],
// 	// 		pokename:"",
// 	// 		backHome:false,
// 	// 	}
// 	// 	this.pokemon = window.location.hash.split("/")[2];
// 	// 	this.savePoke = this.savePoke.bind(this);
// 	// }

// 	const [poke,setPoke] = useState([]);
// 	const [pokeName,setPokeName] = useState("");
// 	const [backHome,setBackhome] = useState(false);
// 	const pokemon = window.location.hash.split("/")[2];

	// const PokeDetail = () =>{
    //     let gqlQuery = `query pokemon($name: String!) {
	// 		pokemon(name: $name) {
	// 		  id
	// 		  name
	// 		  sprites {
	// 			front_default
	// 		  }
	// 		  moves {
	// 			move {
	// 			  name
	// 			}
	// 		  }
	// 		  types {
	// 			type {
	// 			  name
	// 			}
	// 		  }
	// 		}
	// 	  }`;

    //     let gqlVariables = {
    //         name: pokemon,
    //     };


    //     const ambil = fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
    //         credentials: 'omit',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //           query: gqlQuery,
    //           variables: gqlVariables,
    //         }),
    //         method: 'POST',
    //       })
        
	// 	ambil.then(res => res.json())
	// 	.then(pokemon => setPoke(pokemon))
	// 	.then(console.log(poke))
	// }

	// const savePoke = (poke) => {
	// 	const isCatch = Math.random();
	// 	isCatch>0.5 ? Local.pokeSave(poke) : alert("Oops, it run away! ")
	// 	setBackhome(true)
	// }

	// useEffect(() => {
	// 	setPokeName(pokemon)
	// 	PokeDetail();
	// })

		
// 		if(!poke.data){
			
// 			return <h1>mengambil detail...</h1>
// 		}else{
// 			console.log("poke : ",poke);
// 			const poke = poke.data.pokemon;
// 			if(backHome){
// 				return(
// 					<Redirect to="/" />
// 				)
// 			}else{
// 			// 	return(
// 			// 		<div className="detail">
// 			// 			<h1>{pokemon}</h1>
// 			// 			<h2>{pokeName}</h2>

// 			// 			<button onClick={() => this.savePoke(pokemon)}>Catch</button>
// 			// 			<img src={poke.sprites.front_default} />
						// <h2>Tipe : </h2>
						// {
						// 	poke.types.map(tipe => {
						// 		return(
						// 			<li key={tipe.type.name}>{tipe.type.name}</li>
						// 		)
						// 	})
						// }
						// <h2>Move ({poke.moves.length}) : </h2>
						// {
						// 	poke.moves.map(muv => {
						// 		return(
						// 			<li key={muv.move.name}>{muv.move.name}</li>
						// 		)
						// 	})
						// }
// 			// 		</div>
// 			// 	)
// 			// }
// 		}
	
// }