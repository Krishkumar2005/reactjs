import React, { useState, useEffect } from 'react'
import databaseService from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, PostForm } from '../components/'

function EditPost() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            databaseService.getSinglePost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            }).catch((error) => {
                console.error("Error fetching post to edit:", error);
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])


    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost