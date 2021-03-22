import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { css, jsx } from '@emotion/react'
import Lokal from './Lokal'

let Local = new Lokal();

class Home extends Component{
    constructor(props){
		super(props);
		this.state = {
			items: [],
		};
        this.Detail = this.props.Detail;
        this.PokeScan = this.PokeScan.bind(this);
	}

    PokeScan(){
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
            offset: Math.round(258*Math.random()),
        };

		this.setState({
            items:[],
        })

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
		//.then(data => console.log(data))
        .then(data => data.data.pokemons.results.map(isi => (
			{
				name: `${isi.name}`,
				url: `${isi.url}`,
                image: `${isi.image}`,
			}
		)))
		.then(items => this.setState({
			items
		}))
	}

    componentDidMount(){
        this.PokeScan();
    }

    render(){
        const {items} = this.state;
        if(items.length<1){
            return <h1>Scanning..</h1>
        }else{
            return(
                <div id="pokeDetect" css={css`background-color: hotpink; color:#453543`} >
                    <h2 css={css`color: #234567;`}>( {Local.pokeCount()} )</h2>
                    <button onClick={this.PokeScan}>Rescan</button>
                {
                    items.length>0 ? items.map(item => {
                        const {name, url, image} = item;
                        return(
                            <div className="poke" key={"poke-"+name}>
                                <HashRouter>
                                    <NavLink to={"/detail/"+name}>
                                        <img src={image} />
                                        <p>{name}</p>
                                    </NavLink>
                                </HashRouter>
                            </div>
                        );
                    }):null
                }
                </div>
            );
        }
    }
} 



export default Home;