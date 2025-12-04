import {Link} from "react-router-dom";

export default function PageNotFound() {
    return <div>
        <h1>Error 403: Page Not Found</h1>
        <Link to="/">Back to Home</Link>
    </div>
}