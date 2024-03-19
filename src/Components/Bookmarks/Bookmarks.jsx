import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 p-4 border rounded-2xl">
            <div>
                <div>
                    <h1 className='text-2xl font-semibold my-4'>Want to cooking: {bookmarks.length} </h1>
                    <hr />
                    <table className='my-4 opacity-70  '>
                        <thead>
                            <tr className='text-sm font-thin'>
                                <th className='pl-7'>Name</th>
                                <th className='px-12'> Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                    </table>

                    {
                        bookmarks.map(bookmark => <Bookmark 
                            key={bookmark} 
                            bookmark={bookmark}    
                        ></Bookmark> )
                    }
                </div>
            </div>
            {/* currently cooking */}
            <div>
                 <div>
                    <h1 className='text-2xl font-semibold my-4'>Want to cooking:  </h1>
                    <hr />
                    <table className='my-4 opacity-70  '>
                        <thead>
                            <tr className='text-sm font-thin'>
                                <th className='pl-7'>Name</th>
                                <th className='px-12'> Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                    </table>

         
                </div>

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object
    
}

export default Bookmarks;