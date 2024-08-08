import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-light">
      <div class="container">
        <Link class="navbar-brand" href="/">
          conduit
        </Link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link">
              Sign in
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/register">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
