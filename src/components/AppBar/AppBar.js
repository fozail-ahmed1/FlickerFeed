import React, {useState,useEffect} from 'react';
import { Link, useNavigate, useLocation,Route, Routes } from "react-router-dom";
import {Layout,Image, Typography,Button,Avatar} from 'antd';
import Logo from "../../images/favicon.ico";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from 'jwt-decode';
import StoryForm from "../StoryForm";
import styles from './styles';
import './styler.css';

const {Title} = Typography;
const {Header} = Layout;


export default function AppBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    const logout = () => {
        dispatch({ type: LOGOUT });
        navigate("/authform"); // redirect to login page
        setUser(null);
    }


  return (
   
    <Header style={styles.header}>
         <Link to="/StoryForm" style={styles.AddPost}>
            <Button htmlType='button'>
                Add Post
            </Button>
        </Link>
        <Link to="/">
            <div style={styles.homeLink}>
                <img style={styles.image} width="45" src={Logo}></img>
                <Title className='title' style={{color: "#936950"}}>FlickerFeed</Title>
            </div> 
        </Link>

        {!user ? (
                <Link to="/authform">
                    <Button htmlType='button' style={styles.login}>
                        Log In
                    </Button>
                </Link>
            ): (
                <Button onClick={logout} htmlType='button' style={styles.login}>
                    Log Out
                </Button>
            )}  
        </Header>
    )
}
