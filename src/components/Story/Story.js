import React, {useState} from 'react';
import styles from "./styles";
import { Card,Tooltip,Typography,Image, Button } from 'antd';
import { EditOutlined,DeleteTwoTone,HeartTwoTone} from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { deleteStory,likeStory } from '../../actions/stories';

import Popup from 'reactjs-popup';


import moment from 'moment';



const { Meta} = Card;
const {Link, Paragraph,Text} =Typography;

function Story ({ story, setSelectedId }) {

  const dispatch = useDispatch();
  const [expand, setExpand] = useState(true);

  const user = JSON.parse(localStorage.getItem("profile"));

  const like = [
    <Popup trigger={<Button>
      <HeartTwoTone twoToneColor="magenta"/>
      &nbsp; {story.likes.length} &nbsp;
    </Button>} position="top center">
      <div>Want to interact with this post?<a href='/authform'>Login!</a></div>
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
    title="Edit"
    >
        <EditOutlined onClick={() => {
          setSelectedId(story._id);
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
    cardActions.slice(0, 1)
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