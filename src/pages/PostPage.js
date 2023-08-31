import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const PostPage = () => {
  // same state as in NewPostPage component
  const [post, setPost] = useState({
    title: "",
    author: "",
    image: "",
    content: "",
  });

  // useParams extracts URL id
  const { id } = useParams();

  // fetch the specific post data on mount and on URL id change
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5500/posts/${id}`);
      setPost(res.data);
      console.log({id});
    };
    fetchPost();
  }, [id]);

  return (
    <Container className='mt-4'>
      <Card>
        <div style={{maxHeight: '500px', overflow: 'hidden'}}>
          <Card.Img className='img-fluid' variant='top' src={post.image} alt={post.title}></Card.Img>
        </div>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>By: {post.author}</Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
  

};

export default PostPage;
