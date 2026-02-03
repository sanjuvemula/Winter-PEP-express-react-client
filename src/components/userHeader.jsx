import { Link } from "react-router-dom";

function UserHeader({user}){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    ExpenseApp
                </Link>
                <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    type="button"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                aria-current="page"
                                className="nav-link active"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle"
                                  href="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                            >
                                {user?user.name: <>Account</>}
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="nav-link" to='/logout'>
                                         Logout
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default UserHeader;