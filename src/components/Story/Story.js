import React, {useState} from 'react';
import styles from "./styles";
import { Card,Tooltip,Typography,Image, Button } from 'antd';
import { DeleteTwoTone,HeartTwoTone, ShareAltOutlined} from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { deleteStory,likeStory, updateStory } from '../../actions/stories';

import Popup from 'reactjs-popup';


import moment from 'moment';
import {useNavigate } from 'react-router-dom';


const { Meta} = Card;
const {Link, Paragraph,Text} =Typography;

function Story ({ story, setSelectedId }) {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [expand, setExpand] = useState(true);

  const Send = () => {
    Navigate('/authform');
  }
  const user = JSON.parse(localStorage.getItem("profile"));

  const like = [
    <Popup trigger={<Button>
      <HeartTwoTone twoToneColor="magenta"/>
      &nbsp; {story.likes.length} &nbsp;
    </Button>} position="top center">
      <div style={styles.popup}>Want to interact with this post?<Button type="link" onClick={Send}>Login!</Button></div>
    </Popup>
  ];
  
  const cardActions = [
    <div style={styles.actions}>
      <Tooltip 
    placement='top'
    title="Like"
    color='magenta'
    onClick={() => {dispatch(likeStory(story._id))}}
    >
      <HeartTwoTone twoToneColor="magenta"/>
      &nbsp; {story.likes.length} &nbsp;
    </Tooltip>
    </div>,

    <Tooltip
    placement='top'
    title="Share"
    >
      <ShareAltOutlined onClick={() => {
          const url = window.location.href;
          navigator.clipboard.writeText(url);
          alert("Link copied to Clipboard!");
        }}/>

    </Tooltip>,

    <Tooltip
    placement='top'
    title="Delete"
    color='red'
    >
      <DeleteTwoTone twoToneColor="red" onClick={() => dispatch(deleteStory(story._id))}/>
    </Tooltip>
  ];

  return (
   <Card 
   style={styles.card}
   cover={<Image src={story.image}/>}
   actions={
    user?.result?._id === story?.userId ?
    cardActions :
    user?.result ?
    cardActions.slice(0, 2)
    :like
    }>

    <Meta title={story.username}/>
    <Paragraph 
    style={{margin:0}}
    ellipsis={{
      rows:2,
      expandable:true,
      symbol:"more",
      onExpand: () =>{
        setExpand(true);
      },
      onEllipsis: () =>{
        setExpand(false);
      },
    }}>
      {story.caption}
    </Paragraph>
    {expand ? 
    <Link href='#'>{story.tags.split(" ").map((tag) =>{
      return '#'+tag
    })}</Link> : null}
    <br />
    <Text type='secondary'>{moment(story.postDate).fromNow()}</Text>
   </Card>
  )
}

export default Story;
