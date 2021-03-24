import React, { useState } from "react";
import { NavLink, HashRouter } from "react-router-dom";
import {Ownedku, JudulOwned, Pokeku, PokekuKontener, PokeName, BtnRelease, MenuKontener, MenuSpace} from './Styleku'
import Lokal from './Lokal'

let Local = new Lokal();

const Owned = () =>{
    const [myPoke,setMyPoke] = useState(Local.pokeGet());

    const pokeRemove = (pokeCall) => {
		Local.pokeRelease(pokeCall);
        setMyPoke(Local.pokeGet());
	}

    return(
        <Ownedku>
            <JudulOwned>
            <span className="material-icons">catching_pokemon</span>  My Pokemons
            </JudulOwned>
            {myPoke == null ? null : myPoke.reverse().map(poke => 
                <PokekuKontener key={poke.call} tipe={poke.type} >
                    <HashRouter>
                        <NavLink to={"/detail/"+poke.poke}>
                            <Pokeku  tipe={poke.type}>
                                <img src={poke.img} alt={poke.img} />
                            </Pokeku>
                        </NavLink>
                        <PokeName>
                            <NavLink to={"/detail/"+poke.poke}>
                                <h3>
                                    {poke.call}  
                                </h3>
                                <p>
                                    {poke.poke.replaceAll("-"," ")}
                                </p>
                            </NavLink>
                        </PokeName>
                    </HashRouter>

                    <BtnRelease onClick={()=>pokeRemove(poke.call)}>
                        Release
                    </BtnRelease>
                </PokekuKontener>
            )}
            
            <MenuSpace />
            
            <MenuKontener>
                <HashRouter>
                    <NavLink to="/">
                        <div>
                            <span className="material-icons">
                                radar
                            </span>
                            Scan
                        </div>
                    </NavLink>
                </HashRouter>
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
        </Ownedku>
        
    )
}

export default Owned;