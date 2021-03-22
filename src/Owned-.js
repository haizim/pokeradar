import React, { Component } from "react";
import Lokal from './Lokal'

let Local = new Lokal();


class Owned extends Component {
	constructor(props){
		super(props);
		this.state={
			myPoke:Local.pokeGet(),
		}
	}

	pokeRemove = (pokeCall) => {
		Local.pokeRelease(pokeCall);
		this.setState({
			myPoke:Local.pokeGet(),
		})
	}

	render(){
		//const myPoke = Local.pokeGet();
		//console.log("myPoke : ",myPoke);
		return(
			<div className="owned">
				<br/>
				{this.state.myPoke.map(poke => 
					<li key={poke.call}>
						{poke.call} >> {poke.poke} . 
						<button onClick={()=>this.pokeRemove(poke.call)}>Release</button>
					</li>
				)}
			</div>
			
		)
	}
}

export default Owned;