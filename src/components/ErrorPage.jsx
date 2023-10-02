import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>{error.status} {error.statusText || error.message}</i></p>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;