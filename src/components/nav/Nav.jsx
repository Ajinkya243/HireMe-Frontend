import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div className="bg-primary">
            <div className="container">
            <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand text-light fs-3" to="/">HireMe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fs-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">Job Posting</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/jobs/post">Post a Job</Link>
        </li>
      </ul>
    </div>
</nav>
</div>
        </div>
    )
}
export default Nav;