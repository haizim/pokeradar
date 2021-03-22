import React, {Component, createContext} from 'react';

const RootContext = createContext();
const Provider = RootContext.Provider;

const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                myPoke: [],
            }

            catchPoke = (pokeName) => {
                const callName = prompt("Give "+pokeName+" name")
                return this.setState({
                    myPoke:[
                         ...this.state.myPoke,
                        {
                            poke:pokeName,
                            call:callName,
                        }
                    ]
                })
            }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            catchPoke: this.catchPoke,
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return(
        class ParentConsumer extends Component {
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}