import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog, handleBookmarks, handleReadTime}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;

    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover} alt={`cover pic ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                   <img className='w-14' src={author_img} alt="" />
                   <div className='ml-6'>
                     <h2 className='text-2xl'>{author}</h2>
                     <h3>{posted_date}</h3>
                   </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='ml-2 text-2xl text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mt-2'>{title}</h2>
            <p>
              {
              hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
              }
            </p>
            <button onClick={() => handleReadTime(id, reading_time)} className='text-purple-800 underline font-bold'>Mark as Read</button>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func
}