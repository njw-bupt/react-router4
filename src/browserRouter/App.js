import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from '../components/Home';
import Help from '../components/Help';
import About from '../components/About';

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Wrapper>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/help" component={Help} />
                </Wrapper>
            </BrowserRouter>
                        
        )
    }
}

export default App;