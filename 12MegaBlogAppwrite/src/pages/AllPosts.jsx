import React, { useState, useEffect, use } from 'react'
import { Container, PostCard } from '../components'
import databaseService from '../appwrite/config'


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        databaseService.getAllPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        }).catch((error) => {
            console.error("Error fetching all posts:", error);
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                             {/* <PostCard post={post} /> */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts