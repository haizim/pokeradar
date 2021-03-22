import { Component } from "react";

class Lokal extends Component{

    pokeSave = (pokeName, img, tipe) => {
        const callName = prompt("Give "+pokeName+" name",pokeName);
        console.log("callName : "+callName);
        if (callName == null){
            alert("Wow, you let "+pokeName+" free")
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
        const pokeOld = JSON.parse(localStorage.getItem("myPoke"));
        const pokeNew = pokeOld
        .filter((pokeOld) => pokeOld.call !== pokeCall)
        .map((filterPoke) => {
            return filterPoke;
        });
        const countNew = parseInt(localStorage.getItem("countPoke"))-1;
        localStorage.setItem("myPoke",JSON.stringify(pokeNew));
        localStorage.setItem("countPoke",countNew);
    }
    
}

export default Lokal;