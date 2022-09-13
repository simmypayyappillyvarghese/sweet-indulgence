import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "bootstrap";

export default function Header(){

return (

<div>
    <Navbar className="navbar">
        <div className="nav-container">
        <Link to="/cakes">Our Cakes</Link>
        <Link to="/"  className="logo"><h1>Sweet Indulgence</h1></Link>
        <Link to="/about">About Us</Link>
        </div>
        <div className="order-button">
        <Link to="/order">Order</Link>
        </div>
    </Navbar>
</div>

)

}