import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import App from'./App';
import Otherpage from './pages/otherpage/otherpage.component';

class Router extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/otherpage" component={Otherpage} />
          </Switch>
        </BrowserRouter>
      </>
      
    )
  }
}


export default Router;
