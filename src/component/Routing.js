import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import Home from './Home';
import Profile from './Profile';
import PostDetails from './PostDetails';
import Map from './map';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <br/>
            <div className="container">
                <Route exact path="/" component = {Home} />
                <Route exact path="/post" component = {Post} />
                <Route path="/post/:topic" component = {PostDetails} />
                <Route path="/profile" component = {Profile} />
                <Route path="/map" component = {Map} />
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;