import {Link} from 'react-router-dom'
import LoginButton from "./LoginButton";

export default function Navigation() {
    return (<div>Nav <LoginButton /> <Link to={`/dashboard`}>Dashboard</Link></div>)
}