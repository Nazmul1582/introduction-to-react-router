import { Link } from 'react-router-dom'

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className="post">
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;