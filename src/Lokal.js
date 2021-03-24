import { Component } from "react";

class Lokal extends Component{

    pokeSave = (pokeName, img, tipe) => {
        let callName = prompt("Give "+pokeName+" name",pokeName);
        
        if (callName == null){
            alert("Whew, you let "+pokeName.replaceAll("-"," ")+" free")
        }else{
            if(!localStorage.getItem("myPoke")){
                const pokeNew = [{
                        "poke":pokeName, 
                        "call":callName,
                        "img":img,
                        "type":tipe,
                    }];
                const countNew = 1;
                localStorage.setItem("myPoke",JSON.stringify(pokeNew))
                localStorage.setItem("countPoke",countNew)
            }else{
                const pokeOld = JSON.parse(localStorage.getItem("myPoke"));

                if(pokeOld.filter(lama => lama.call === callName).length === 0 ){
                    const pokeNew = [
                            ...pokeOld,
                            {
                                "poke":pokeName, 
                                "call":callName,
                                "img":img,
                                "type":tipe,
                            }
                        ];
                    const countNew = parseInt(localStorage.getItem("countPoke"))+1;
                    localStorage.setItem("myPoke",JSON.stringify(pokeNew))
                    localStorage.setItem("countPoke",countNew)
                }else{
                    alert("There's pokemon called "+callName+" in your bag!");
                    this.pokeSave(pokeName, img, tipe);
                }
            }
        }

       
        
    }

    pokeCount = () => {
        if(localStorage.getItem("countPoke")){
            return localStorage.getItem("countPoke");
        }else{
            return 0;
        }
    }

    pokeGet = () => {
        return JSON.parse(localStorage.getItem("myPoke"));
    }

    pokeRelease = (pokeCall) => {
        if(window.confirm('Do you really gonna release '+pokeCall+'?')){
            const pokeOld = JSON.parse(localStorage.getItem("myPoke"));
            const pokeNew = pokeOld
            .filter((pokeOld) => pokeOld.call !== pokeCall)
            .map((filterPoke) => {
                return filterPoke;
            });
            const countNew = parseInt(localStorage.getItem("countPoke"))-1;
            localStorage.setItem("myPoke",JSON.stringify(pokeNew));
            localStorage.setItem("countPoke",countNew);
            alert("Goodbye "+pokeCall);
        }
    }
    
}

export default Lokal;