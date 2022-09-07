import "./App.css";
import logo from "./assets/runtime_terror_logo.png";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import data from "./data";
import Thortitle from "./assets/Thor_Love_and_Thunder_Title.png";

const promotedMovie = data.movies.find((movie) => {
  return movie.title === "Thor: Love and Thunder";
});

function App() {
  return (
    <div>
      <nav>
        {/* This is the navigation bar with the logo and the 2 profile and order history buttons */}
        <div className="nav-contents">
          <div className="logo-box">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="buttons">
            <Button className="order_history">
              <Icon icon="icon-park-outline:transaction-order" />
              <span>Order History</span>
            </Button>
            <Button className="view_profile">
              <Icon icon="ant-design:user-outlined" />
              <span>View Profile</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* This section is for the promoted movie, which is Thor: Love and Thunder */}
      <section>
        {/* This the image box */}
        <div className="promoted_movie_image">
          <img src={promotedMovie.image} alt={promotedMovie.title} />
        </div>

        {/* This is the content box */}
        <div className="promoted_movie_contents">
          <h1 className="now_showing">Now Showing</h1>
          <div className="thortitle_box">
            <img src={Thortitle} alt={promotedMovie.title} />
          </div>
          <div className="booking_buttons">
            <Button className="book_movie">
              <Icon icon="tabler:hand-click" />
              <span>Book Movie</span>
            </Button>
            <Button className="view_movie">
              <Icon icon="mdi:magnify-plus-outline" />
              <span>View Movie</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
