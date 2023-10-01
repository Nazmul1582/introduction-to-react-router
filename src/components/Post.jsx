// import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    
    const handleShowDetails = postId => navigate(`/posts/${postId}`);

    return (
        <div className="post">
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>
            {/* <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link> */}
            <button onClick={() => handleShowDetails(id)}>Show Details</button>
        </div>
    );
};

export default Post;