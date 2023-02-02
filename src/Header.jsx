import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="container">
        <img
          src="https://media.giphy.com/media/kf3EjrAsKp3P9bhYHG/giphy.gif"
          alt="logo"
          class="logo"
        />
        <nav>
          <ul>
            <li>
              <a href="/" className="home">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
