import React, {useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-router-dom'

const NewPostPage = () => {

    // form has a default state of empty 
    const [post, setPost] = useState({
        title: '',
        author: '',
        image: '',
        content: ''
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setPost({...post, [e.target.name]: e.target.value })
    }

    // async when using the api (backend)
     const handleSubmit = async e => {
        e.preventDefault()
        await axios.post('http://localhost:5500/posts', post)
        navigate('/')
     }

     return(
        
     )
}