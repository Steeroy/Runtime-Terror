import "./App.css";
import logo from "./assets/runtime_terror_logo.png";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import data from "./data";

function App() {
  return (
    <div>
      <header>
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
      </header>
    </div>
  );
}

export default App;
