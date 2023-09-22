const Post = ({post}) => {
    const {title, body} = post;
    return (
        <div className="post">
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>
        </div>
    );
};

export default Post;