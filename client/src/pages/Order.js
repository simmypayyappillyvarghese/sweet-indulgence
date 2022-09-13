import orderstrip from "../strip-order.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export default function Order(){

    return (
    
    <main className="container-fluid py-5 text-center order-container">
        <h1>Order Cake Online !</h1>
        <p>
            Order Early for your special events.
            Select your favorite Cake and Choose a date to place the order online.
            Pick up your cake from the following location:
        </p>
        <address>Address-Here</address>
        <img src={orderstrip} height="100px" width="40%" className="order-strip-image"/>
        <div className="d-flex justify-content-center align-items-center">
        <h6>Choose the pickup date</h6>
        <Calendar className="m-5 py-3"/>
        </div>
        <section className="product-details">
            

        </section>

    </main>);
}