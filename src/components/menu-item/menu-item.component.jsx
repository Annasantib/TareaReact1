import React from "react";

import './menu-item.styles.scss'

class Menu extends React.Component{
    constructor(props){
      super()
    }

    // TODO: lo que haga aca, es parte del ciclo de vida del componente
    
    componentDidMount(){
        console.log("Que tengo en props?", this.props)
    }
  
    render(){
      return(
        <>
            <section class="menu-item">
                <img class="imagen-logo" src="/img/mono-pensando.png"/>
                <ul class="menu-list">
                    <li onClick={(evento) => this.props.handlerSumar(evento)}>Suma</li>
                    <li onClick={(evento) => this.props.handlerRestar(evento)}>Resta</li>
                    <li><a href="/otherpage">Other Page</a></li>
                </ul>
            </section>
        </>
      )
    }
  }

export default Menu;