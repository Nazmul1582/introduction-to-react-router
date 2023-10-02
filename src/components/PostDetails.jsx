import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;
    
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1)

    const {postId} = useParams()
    
    return (
        <div className="post" style={{width: "600px", margin: "auto", background: "#52bfff"}}>
            <h2>PostId: {postId}</h2>
            <h2>Post&apos;s title: {title}</h2>
            <p>Description: {body}</p>
            {/* <Link to="/posts"><button>Go back</button></Link> */}
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;