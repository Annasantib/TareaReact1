import React from "react";

import './number.styles.scss'

class Number extends React.Component{
    constructor(props){
        super()
        this.state = {
            numero: 0
        }
    }

    // TODO: lo que haga aca, es parte del ciclo de vida del componente
    //comp

    componentDidMount(){
        console.log(this.props)
    }

    componentDidUpdate(prevProps){
        console.log("hola", prevProps.numero, this.props.numero, this.state.numero)
        if(prevProps.numero !== this.props.numero){
            this.setState({
                numero: this.props.numero
            })
        }
    }
  
    render(){
      return(
        <>
            <section class="sec-number">
                <p class="number">{this.state.numero}</p>
            </section>
        </>
      )
    }
  }

export default Number;