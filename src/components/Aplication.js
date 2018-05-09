import React from 'react';
import Splash from './Splash';
import Login from "./Login";
import Home from "./Home";

export default class Application extends React.Component {

    componentWillMount() {
        this.state = {
            view : <Splash />
        };


        setTimeout(() => {
            if(false) {
                this.setState({
                    view : <Home/>
                })
            } else {
                this.setState({
                    view : <Login/>
                })
            }
        })


    }

    render() {
        return (
            this.state.view
        )
    }
}