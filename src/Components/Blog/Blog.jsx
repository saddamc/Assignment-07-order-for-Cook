import PropTypes from 'prop-types';


const Blog = ({blog, handleAddToBookmark}) => {
    const {name, description, image, ingredients, preparing_time, calories} = blog;
    return (
        <div className='m-2'>
            <div className='card grid grid-cols-1 justify-left text-left items-left border'>
            <div className=' space-y-6 '>
                <img className="w-[320px] h-[200px] rounded-xl justify-center mx-auto " src={(`${image}`)} alt={name} />
            <h1 className='text-xl font-semibold'>{name}</h1>
            <p className='opacity-70'>{description} </p>
            <hr />
            <div>                               
                <h1 className='text-left my-5 text-lg font-medium'>Ingredients: {ingredients.length}</h1>
                <p className="mb-5 text-left opacity-70">
                {
                    ingredients.map((ingredients, idx) => <span key={idx}><li href="">{ingredients}  </li></span> ) 
                }
                </p>
                <hr />
            </div>
            <div className='flex gap-6 justify-center text-left opacity-70'>
                <div className='flex gap-2'>
                    <img className='w-6 h-6' src="/src/image/time.png" alt="" />
                    <p>{preparing_time}</p>

                </div>
                <div className='flex gap-2'>
                    <img className='w-6 h-6' src="/src/image/fire.png" alt="" />
                    <p> {calories} </p>

                </div>
            </div>
            <div>
                <button onClick={() => handleAddToBookmark(blog)}  className='text-left items-start p-3 px-6 text-lg font-medium bg-[#0BE58A] rounded-full '>Want to CooK 
                </button>
            </div>
            </div>
        </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,  

}

export default Blog;