import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "bootstrap";
import { Icon } from "@iconify/react";

export default function Header(){

return (

<div  className="header">
    <Navbar className="navbar">
        <Link to="/order" className="order-button">Order Online</Link>
        <div className="nav-container">
        <Link to="/cakes">Our Cakes</Link>
        <Link to="/"  className="logo"><h1>Sweet Indulgence</h1></Link>
        <Link to="/about">About Us</Link>   
        </div>
    </Navbar>
</div>

)

}