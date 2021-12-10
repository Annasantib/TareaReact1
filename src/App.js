import React from "react";
import './App.css';

//components
import Footer from'./components/footer/footer.component';
import Menu from './components/menu-item/menu-item.component';
import Number from './components/number/number.component';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      numero: 0
    }

    this.handlerSumar = this.handlerSumar.bind(this)
    //setear handlerRestart, es igual al de arriba

    this.handlerRestar = this.handlerRestar.bind(this)
  }

  handlerSumar(evento){
    console.log("Estoy llamando a handler sumar", this.numero, evento)
    this.setState({
      numero: this.state.numero + 1
    })
  }
  //handlerRestar, tiene que validar si el this.state.numero > 0 ejecutar restar 1

  handlerRestar(evento){
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      })
      console.log("Estoy llamando a handler restar", this.numero, evento)
    }
  }

  render(){
    return(
      <>
        <Menu handlerSumar={this.handlerSumar} handlerRestar={this.handlerRestar} />
        <Number numero={this.state.numero} />
        <Footer />
      </>
      
    )
  }
}


export default App;
