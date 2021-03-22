import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';
import bgHome from './bgHome.svg';

const clrPrimer = {grass: "#8cd851", poison : "#a75c9f", psychic:"#fa65b5", normal:"#999999", ground:"#d38d5f", ice:"#2affd5", fire : "#fa5443", rock:"#aa8800", dragon: "#ff6600", water: "#2a7fff", bug:"#c3d21f", dark:"#483745", fighting: "#c8ab37", ghost: "#939dac", steel:"#53676c", flying:"#00ff66", electric: "#fde53b", fairy: "#f567ff"};

const clrSekunder = {"grass": "#e5f6d8", poison : "#f0e4ef", psychic:"#fdd1e9", normal:"#ededea", ground:"#f3e0d3", ice:"#e6fffa", fire : "#fee2df", rock:"#fff6d5", dragon: "#ffe9db", water: "#d1e3ff", bug:"#f5f9d6", dark:"#e8e1e7",fighting: "#f4efd8", ghost: "#e4e7ea", steel:"#e8edee", flying:"#cbffe0", electric: "#fffad9", fairy: "#feeaff"};

const clrShade = {"grass": "#508d20", poison : "#8c4c85", psychic:"#f7148f", normal:"#8c8c73", ground:"#c16c35", ice:"#00ebbc", fire : "#e71c06", rock:"#665200", dragon: "#cf5300", water: "#0046ad", bug:"#757e13", dark:"#292027",fighting: "#806d23", ghost: "#616c7e", steel:"#333e41", flying:"#00ba4a", electric: "#d1b802", fairy: "#ee02ff"};

export const Homeku = styled.div`
    background-image:url(${bgHome});
    background-size:cover;
    background-color: #ddd;
    background-position: center;
    width: 100vw;
    height: 100vh;
`; 

export const MenuKontener = styled.div`
    background-color: #ff3f3f;
    color: #fff2f2;
    padding: 1rem;
    position: fixed;
    bottom:0;
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    height: 8vh;

    a{
        color: #fff2f2;
        text-decoration: none;
    }

    div{
        flex-basis:50%;
        display: flex;
        flex-direction: row;
        align:items:center;
        justify-content: center;
        cursor: pointer;
    }

    @media (orientation:landscape){
        width:30vw;
        border-radius : 1rem 1rem 0 0;
        left: 35vw;
        right: 35vw;
        height: 10vh;
    }
`;

export const MenuSpace = styled.div`
    height: 8vh;
    margin-top:1rem;

    @media (orientation:landscape){
        height: 10vh;
    }  
`;

const PokeAni = keyframes`
    0%{filter:drop-shadow(0 0 5px);}
    58%{filter:drop-shadow(0 0 15px);}
    100%{filter:drop-shadow(0 0 5px);}
`;

export const PokeDetek = styled.div`
    top: ${props => props.atas+"vh"};
    left: ${props => props.kiri+"vw"};
    width: 25vw;
    position: fixed;
    color: #ff3f3f;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align:items:center;
    justify-content: center;
    
    img{
        width:100%;
        filter:drop-shadow(0 0 5px #ff3f3f);
        animation-name: ${PokeAni};
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: ${props => (props.dele*2)+"s"};
    }

    @media (orientation:landscape){
        width: 8vw;
    }

`;

export const PokeCount = styled.div`
    background-color: #ff3f3f;
    color: #fff2f2;  
    position:fixed;
    top:0;
    left:35%;
    right:35%;
    border-radius: 0 0 .85rem .85rem;
    font-size: 1.5rem;
    text-align: center;
    padding: .75em 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;

    @media (orientation:landscape){
        left:45%;
        right:45%;
    }
`;

const AniScan = keyframes`
    0%{color: #fff2f2;}
    58%{color: #ff3f3f;}
    100%{color: #fff2f2;}
`;

export const Scanning = styled.div`
    background-color: #ff3f3f;
    color: #fff2f2;  
    position:fixed;
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:2em;
    animation-name: ${AniScan};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    

    span{
        font-size:2em;
    }
`;
export const Ownedku = styled.div`
    background-color : #fff2f2;
    width:100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const JudulOwned = styled.div`
    background-color: #ff3f3f;
    color: #fff2f2;
    padding: 1rem;
    position: sticky;
    top:0;
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight : bold;
    margin-bottom : 1rem;
`;

export const PokekuKontener = styled.div`
    margin : .5rem 1rem;
    background-color : ${props => clrPrimer[props.tipe]};
    border-radius : .5rem;
    width: 95vw;
    height : 25vw;
    display : flex;
    align-items: center;
    color : ${props => clrSekunder[props.tipe]};

    a{
        color : ${props => clrSekunder[props.tipe]};
        text-decoration: none;
    }

    @media (orientation:landscape){
        height: 10vw;
        margin: 1rem 5vw;
        width: 58vw;
    }

`;

export const Pokeku = styled.div`
    padding: .5rem;
    border-radius : .5rem 4rem 4rem .5rem;
    background-color : ${props => clrSekunder[props.tipe]};
    width: 28vw;
    height : 25vw;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img{
        height:100%;
    }

    @media (orientation:landscape){
        width: 10vw;
        height: 10vw;
    }
`;

export const PokeName = styled.div`
    width : 75vw;
    padding: 1rem;
    height : 25vw;

    @media (orientation:landscape){
        padding: 2rem;
        height : 10vw;
    }
`;

export const BtnRelease = styled.div`
    height : 25vw;
    padding : 1rem;
    background : none;
    display : flex;
    align-items: center;
    cursor: pointer;

    @media (orientation:landscape){
        height : 10vw;
    }
`;

export const Detailku = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: calc(125% + 8rem);
    background: radial-gradient(circle, ${props => clrPrimer[props.tipe]} 0%, ${props => clrShade[props.tipe]} 58%, ${props => clrPrimer[props.tipe]} 85%);
    background-color : ${props => clrPrimer[props.tipe]};
    background-position: 0 -25vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    text-transform: capitalize;

`;

export const ContDetail = styled.div`
    background-color: ${props => clrSekunder[props.tipe]};
    color: ${props => clrPrimer[props.tipe]};
    width: calc(100%);
    transform: translateY(8rem);
    border-radius : 2rem 2rem 0 0;
    padding: 1rem;
    text-align: center;

    @media (orientation:landscape){
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 2rem 10vw;
        text-align: left;
    }
`;

const ImgAni = keyframes`
    0%{filter:drop-shadow(0 0 5px);}
    58%{filter:drop-shadow(0 0 25px);}
    100%{filter:drop-shadow(0 0 5px);}
`;

export const ImgDetail = styled.div`
    width : 100%;
    margin-top: -8rem;
    text-align: center;
    margin-bottom: -2rem;

   img{
        width: 58vw;
        filter:drop-shadow(0 0 5px ${props => clrPrimer[props.tipe]});
        animation-name: ${ImgAni};
        animation-duration: 2s;
        animation-iteration-count: infinite;
   }

   @media (orientation:landscape){
       flex-basis:25%;
       margin-top: 0;
       
       img{
           width: 24vw;
       }
   }
`;

export const DetailContent = styled.div`
   margin-bottom: 1rem;

   @media (orientation:landscape){
        flex-basis:65%;
        width:65%;
    }
`;

 export const BadgeType = styled.button`
    margin: .25rem;
    padding: .5rem;
    color: ${props => clrSekunder[props.tipe]};
    background-color: ${props => clrPrimer[props.tipe]};
    border-radius : .5rem;
    border:none;
    font-size:1rem;
    text-transform: capitalize;
 `;
 
 export const BtnCatch = styled.div`
    color: ${props => clrSekunder[props.tipe]};
    background-color: ${props => clrPrimer[props.tipe]};
    font-size:1.5rem;
    margin: .5rem;
    padding: 1rem;
    border-radius : .5rem;
 `;

 export const DtlStat = styled.div`
    width:100%;
    display: flex;
    margin: 1rem 0;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    div{
        flex-basis: 33%;
        padding: .5rem .75rem;
    }
 `;

 export const DtlMove = styled.div`
    margin-bottom: 1rem;
 `;