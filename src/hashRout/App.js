import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Wrapper from './Wrapper';
import About from '../components/About';
import Help from '../components/Help';
import Home from '../components/Home';


class App extends Component {
    render(){
        return(
            <HashRouter>
                <Wrapper>
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/help' component={Help} />
                </Wrapper>
            </HashRouter>
        )
    }
}

export default App;