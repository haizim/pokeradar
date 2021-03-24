import React, { useState, useEffect } from "react";
import { Redirect} from "react-router-dom";
import Lokal from './Lokal'
import {Detailku, ContDetail, ImgDetail, BadgeType, DetailContent, DtlStat, Scanning, MenuKontener, MenuSpace, DtlMove} from './Styleku'

let Local = new Lokal();

const Detail = () => {
    const [poke,setPoke] = useState([]);
    // const [pokeName,setPokeName] = useState("");
    const [goTo,setGoTo] = useState("");
    const pokemon = window.location.hash.split("/")[2];

    const PokeDetail = () =>{
        let gqlQuery = `query pokemon($name: String!) {
			pokemon(name: $name) {
			  id
			  name
			  sprites {
				front_default
			  }
			  moves {
				move {
				  name
				}
			  }
			  types {
				type {
				  name
				}
			  }
			  stats{
				base_stat
				stat{
				  name
				}
			  }
			}
		  }`;

        let gqlVariables = {
            name: pokemon,
        };


        const ambil = fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
            credentials: 'omit',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: gqlQuery,
              variables: gqlVariables,
            }),
            method: 'POST',
          })
        
		ambil.then(res => res.json())
		.then(pokemon => setPoke(pokemon))
		// .then(console.log(poke))
	}

    const savePoke = (poke,img,tipe) => {
		const isCatch = Math.random();
		if(isCatch>0.5){
			Local.pokeSave(poke,img,tipe);
			setGoTo("/Owned");
		} else{
			alert("Oops, "+poke.replaceAll("-"," ")+" run away! ");
			setGoTo("/");
		} 
	}

	useEffect(() => {
		// setPokeName(pokemon)
		PokeDetail();
	})

    
    // console.log(poke)
	if(goTo !== ""){
		return <Redirect to={goTo} />
	}
    if(!poke.data){
        return (
			<Scanning>
                <span className="material-icons">
                    catching_pokemon
                </span>
                Analyzing..
            </Scanning>
		)
    }else{
        const pokeDtl = poke.data.pokemon;
        return(
            <Detailku tipe={pokeDtl.types[0].type.name}>

                <ContDetail tipe={pokeDtl.types[0].type.name}>
					<ImgDetail>
						<img src={pokeDtl.sprites.front_default} alt={pokeDtl.sprites.front_default} />
					</ImgDetail>
					<DetailContent>
						<h1>{pokemon.replaceAll("-"," ")} </h1>
							{
								pokeDtl.types.map(tipe => {
									return(
										<BadgeType tipe={tipe.type.name} key={tipe.type.name}>
											{tipe.type.name}
										</BadgeType>
									)
								})
							}<br/>
						
						<DtlStat>

							{
								pokeDtl.stats.map(stat => {
									return(
										<div key={stat.stat.name}>	
												<h5>{stat.stat.name.replaceAll("-"," ")}</h5> 
												<h2>{stat.base_stat}</h2>
										</div>
									)
								})
							}
						</DtlStat>
						
						
							
					</DetailContent>
					
					<DtlMove>
						<h4>Moves ({pokeDtl.moves.length})</h4>
							
						{
							pokeDtl.moves.map(muv => {
								return(
									<BadgeType tipe={pokeDtl.types[0].type.name} key={muv.move.name}>{muv.move.name.replaceAll("-"," ")}</BadgeType>
								)
							})
						}
					</DtlMove>
					
					<MenuSpace />
				</ContDetail>
				

				<MenuKontener>
					<div onClick={() => savePoke(pokemon,pokeDtl.sprites.front_default,pokeDtl.types[0].type.name)} tipe={pokeDtl.types[0].type.name}> 
						<span className="material-icons">
                            catching_pokemon
                        </span>
						Catch
					</div>
				</MenuKontener>

            </Detailku>
        )
    }

};

export default Detail;