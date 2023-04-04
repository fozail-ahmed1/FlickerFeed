import React from 'react';
import { Layout} from "antd";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import styles from './styles.js';
import AppBar from './components/AppBar/AppBar';
import AuthForm from './components/AuthForm';
import StoryForm from './components/StoryForm';


const {Footer}   = Layout;

const App = () => {
    return ( 
    <BrowserRouter>
        <Layout style={styles.layout}>
            <AppBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                 <Route path='/authform' element={<AuthForm/>}/>
                 <Route path="/StoryForm" element={<StoryForm/>}/>
            </Routes>
            <Footer style={styles.footer}>2023 FlickerFeed</Footer>
        </Layout>
    </BrowserRouter>
    )
}

export default App;