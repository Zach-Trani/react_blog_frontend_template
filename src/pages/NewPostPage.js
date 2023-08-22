import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const NewPostPage = () => {
  // form has a default state of empty
  const [post, setPost] = useState({
    title: "",
    author: "",
    image: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // async when using the api (backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5500/posts", post);
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.label>Title</Form.label>
          <Form.Control type='text' name='title' placeholder='Title' onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.label>Author</Form.label>
          <Form.Control type='text' name='author' placeholder='Author' onChange={handleChange} />
         </Form.Group>
        <Form.Group>
          <Form.label>Image URL</Form.label>
          <Form.Control type='text' name='image' placeholder='Image URL' onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.label>Content</Form.label>
          <Form.Control type='text' name='content' rows={5} placeholder='Content' onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' type='submit'>
            Create
        </Button>
      </Form>
    </Container>
  );
};

export default NewPostPage;
