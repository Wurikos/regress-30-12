import React from "react";
import Index from "pages/index";
import Newpagethat from "pages/newpagethat";
import Newpagethat1 from "pages/newpagethat1";
import Newpagethat11 from "pages/newpagethat11";
import Newpagethat111 from "pages/newpagethat111";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/newpagethat' component={Newpagethat}/>
			<Route exact path='/newpagethat1' component={Newpagethat1}/>
			<Route exact path='/newpagethat11' component={Newpagethat11}/>
			<Route exact path='/newpagethat111' component={Newpagethat111}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
