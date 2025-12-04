import {Link} from "react-router-dom";

export default function NotAuthorized() {
    return <div>
        <h1>Error 403: User Not Authorized</h1>
        <Link to="/">Back to Home</Link>
    </div>
}