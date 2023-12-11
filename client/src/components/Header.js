import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
    const { authUser } = useContext(UserContext);

    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to="/">Courses</Link></h1>
                <nav>
                    <ul className="header--signedout">
                    {authUser === null ?
                        <>
                            <Link to="/signup">Sign up</Link>
                            <Link to="/signin">Sign in</Link>
                        </>
                        :
                        <>
                            <span>Welcome, {authUser.firstName} {authUser.lastName}!</span>
                            <Link className="signout" to="/signout">Sign out</Link>
                        </>
                    }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header; 