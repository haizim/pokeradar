import React, { useState, useEffect } from "react";
import { NavLink, HashRouter } from "react-router-dom";
// import { css, jsx } from '@emotion/react'
import Lokal from './Lokal'
import {Homeku,MenuKontener,PokeDetek,PokeCount,Scanning} from './Styleku'

let Local = new Lokal();

const Home = () =>{
    const [pokes,setPokes] = useState([]);
    const [udah] = useState(false);

    const pokeScan = () => {
        let gqlQuery = `query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
              count
              status
              results {
                url
                name
                image
              }
            }
          }`;

        let gqlVariables = {
            limit: Math.round(5*Math.random())+2,
            offset: Math.round(852*Math.random()),
        };

        setPokes([]);

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
        //.then(data => console.log("isi : ",data.data.pokemons.results))
        .then(data => data.data.pokemons.results.map(isi => (
			{
				name: `${isi.name}`,
				url: `${isi.url}`,
                image: `${isi.image}`,
			}
		)))
		.then(items => setPokes(items))
        //.then(i=> console.log("i : ",i))
    }

    useEffect(() => {
        pokeScan();
    }, [udah]);

    if(pokes.length<1){
        // console.log("belum : ",pokes);
        return (
            <Scanning>
                <span className="material-icons">
                    catching_pokemon
                </span>
                Scanning..
            </Scanning>
            )
    }else{
        // console.log("trima : ",pokes);
        return(
            <Homeku>
                    <PokeCount> 
                        <span className="material-icons">catching_pokemon</span> 
                        {Local.pokeCount()} 
                    </PokeCount>

                    {
                        pokes.map(poke => {
                            return(
                                <div className="poke" key={"poke-"+poke.name}>
                                <HashRouter>
                                    <NavLink to={"/detail/"+poke.name}>
                                        <PokeDetek atas={8+Math.random()*58} kiri={Math.random()*75} dele={Math.random()}>
                                            <img src={poke.image} alt={"img-"+poke.name} />
                                            {poke.name}
                                        </PokeDetek>

                                    </NavLink>
                                </HashRouter>
                            </div>
                            )
                        })
                    }
                    <MenuKontener>
                        <span>
                            <div onClick={()=>pokeScan()}>
                                <span className="material-icons">
                                    radar
                                </span>
                                Rescan
                            </div>
                        </span>
                        <HashRouter>
                            <NavLink to="/Owned">
                                <div>
                                    <span className="material-icons">
                                        catching_pokemon
                                    </span>
                                    My Pokemons
                                </div>
                            </NavLink>
                        </HashRouter>
                    </MenuKontener>
            </Homeku>
        )
    }

}



export default Home;