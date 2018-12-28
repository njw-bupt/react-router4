import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wrapper extends Component {
    render(){
        return(
            <div>
                {/* 导航菜单的实现，帮助路由跳转 */}
                <Link to="/home">home</Link><br/>
                <Link to="/about">about</Link><br/>
                <Link to="/help">help</Link><br/>
                {this.props.children}
            </div>
        )
    }
}

export default Wrapper;