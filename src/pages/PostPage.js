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
    };
    fetchPost();
  }, [id]);
};

export default PostPage;
