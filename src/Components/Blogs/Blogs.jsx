import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 mt-2">
            <h2 className="text-4xl mb-2">Blogs {blogs.length}</h2>
            {
              blogs.map(blog => <Blog blog={blog} handleBookmarks={handleBookmarks} key={blog.id} handleReadTime={handleReadTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func
}