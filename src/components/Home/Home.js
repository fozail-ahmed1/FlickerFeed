import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import StoryList from "../StoryList";
import StoryForm from "../StoryForm";
import {Button, Layout} from "antd";
import styles from "./styles";
import {getStories} from "../../actions/stories";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const {Sider,Content} = Layout;

const Home = () => {
    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);
    return (
    <Layout style={styles.content}>  
        <Container fluid>
                <Row>
                    <Col sm={6}><StoryList setSelectedId={setSelectedId} /></Col>
                </Row>
        </Container>
    </Layout> 
    )
}

export default Home;