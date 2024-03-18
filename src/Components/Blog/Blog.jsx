import PropTypes from 'prop-types';


const Blog = ({blog}) => {
    const {name, image, description, ingredients, preparing_time, calories} = blog;
    return (
        <div className='card space-y-6 justify-center text-center items-center'>
            <img className="w-[320px] h-[200px] rounded-2xl justify-center mx-auto " src={image} alt="" />
            <h1 className='text-xl font-semibold'>{name}</h1>
            <p>{description} </p>
            <hr />
            <p className="mb-1">
                {
                    ingredients.map((ingredients, idx) => <span key={idx}><li href="">{ingredients}  </li></span> ) 
                }
            </p>
            <div className='flex gap-6'>
                <div className='flex gap-2'>
                    <img src="/src/image/time.png" alt="" />
                    <p>{preparing_time}</p>

                </div>
                <div className='flex gap-2'>
                    <img src="/src/image/fire.png" alt="" />
                    <p> {calories} </p>

                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;