import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {name, preparing_time, calories, id} = bookmark;        
    

    return (
        <div>
            <table>

                <tr className='text-[13px] font-light bg-gray-100 '>

                    <td className='pl-1'>{id}</td>
                    <td className='pl-2'>{name}</td>
                    <td className='px-4 py-4'>{preparing_time}</td>
                    <td>{calories}</td>
                    <td><button className='text-right items-start p-1 px-4 text-sm font-medium bg-[#0BE58A] rounded-full pr-2'>Preparing</button></td>
                </tr>
            </table>
        </div>
    );

};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;