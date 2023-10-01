import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    
    return (
        <div className="post" style={{width: "600px", margin: "auto", background: "#52bfff"}}>
            <h2>PostId: {id}</h2>
            <h2>Post&apos;s title: {title}</h2>
            <p>Description: {body}</p>
            <Link to="/posts"><button>Go back</button></Link>
        </div>
    );
};

export default PostDetails;