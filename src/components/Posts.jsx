import { useLoaderData } from "react-router-dom";

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts);

    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>
            <p>You can see all posts in this page</p>
        </div>
    );
};

export default Posts;