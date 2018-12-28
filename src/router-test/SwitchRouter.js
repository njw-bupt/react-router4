import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Help from '../components/Help';

//排他性路由
class Layout extends Component {
    render(){
        return(
            <div>                
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/help">HELP</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />  {/* exact:只匹配/，不匹配/后面带参数的情况。如果没有这个属性，则为包含性路由，一个地址可以渲染多个组件 */}
                    <Route path="/about" component={About} />
                    <Route path="/help" component={Help} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}
class SimpleRouter extends Component {
    render(){
        return(
            // BrowserRouter只能有一个子组件
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        )
    }
}

export default SimpleRouter;