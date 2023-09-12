import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4 pt-4">
            <div>
                <h4 className='text-3xl text-center'>Reading Time: {readingTime}</h4>
            </div>
            <h3 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h3>
            {
              bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;