import React from "react";
import "./App.css";
import logo from "./assets/runtime_terror_logo.png";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import MainPage from "./screens/MainPage";
import ViewMovie from "./screens/ViewMovie";
import MovieTrailer from "./screens/MovieTrailer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          {/* This is the navigation bar with the logo and the 2 profile and order history buttons */}
          <div className="nav-contents">
            <div className="logo-box">
              <Link to={"/"}>
                <img src={logo} alt="Logo" />
              </Link>
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
        <main>
          <Routes>
            <Route
              path="/movie/view-trailer/:slug"
              element={<MovieTrailer />}
            />
            <Route path="/movie/:slug" element={<ViewMovie />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
