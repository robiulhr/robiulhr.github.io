import React from 'react'
import styled from 'styled-components'
import blogs from '../data/blogs'
import Title from '../components/title'
import { MainLayout, InnerLayout } from '../styles/layouts'
function Blogpage() {
    return (
        <MainLayout>
            <BlogsStyled>
                <Title title={'Blogs'} span={'Blogs'} />
                <InnerLayout className="blog">
                    {
                        blogs.map((blog) => {
                            return <div key={blog.id} className="blog-item">
                                <div className='image'>
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="title">
                                    <a href={blog.link}>
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsStyled>

        </MainLayout>

    )
}
const BlogsStyled = styled.div`
.blog{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    .blog-item{
    background-color: var(--background-dark-gray);
    padding: 2rem 1rem;
    }
    .image{
        width: 100%;
        height: 90%;
        overflow: hidden;
        img{
            width: 100%;
            height: 90%;
            object-fit: cover;
            transition: all .4s ease-in-out;
            &:hover{
                cursor: pointer;
                transform: rotate(3deg) scale(1.1);
            }
        }
    }
    .title{
        a{
         font-size: 1rem;
        padding: .5rem 0;
        color: var( --white-color);
        cursor: pointer;
        transition: all .4s ease-in-out;
        z-index: 1;
        &:hover{
            color: var(--primary-color);
        }
        }
       
    }
}
@media screen and (max-width: 700px){
    .blog{
    grid-template-columns: repeat(1,1fr);
        
    }
}
`
export default Blogpage
