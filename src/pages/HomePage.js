import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// piece of state holds all posts on homepage
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:5500/posts/`);
      setPosts(res.data);
    };
    fetchPosts();
  },[]);

  const handleDelete = async (id) => {
    try{
        await axios.delete(`http://localhost:5500/posts/${id}`)
    } catch (error) {

    }
  }

};

export default HomePage;