import orderstrip from "../strip-order.png";
import Calendar from "react-calendar";

/*Style sheet for Calendar component*/
import 'react-calendar/dist/Calendar.css'
import {useState} from 'react'
import { COffcanvas ,COffcanvasBody ,COffcanvasHeader,COffcanvasTitle,CButton,CCloseButton} from '@coreui/react'
import { Button } from "bootstrap";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import {QUERY_PRODUCTS} from "../utils/queries"


export default function Order(){

const [visible,setVisible]=useState(false);
const [date,setDate]=useState(new Date());

const { loading,error,data } = useQuery(QUERY_PRODUCTS);


const products = data?.getProducts||[];

/********** EVENT HANDLERS **********/

    /* SET CALENDAR */
    function setOrderDate(e){

    console.log(e);
    setDate(e);
    
    }




    /* ADD TO BASKET */
    function addToBasket(event){

        setVisible(true);

    }


    /*Minimum Date to place the Order -Can Place order only after 3 days from the curren date*/

    function getMinDate(){

      let currentDate=new Date();
      let minDate=currentDate.getDate()+4;
      currentDate.setDate(minDate);
      return currentDate;
    }

    return (
    
    <main className="container-fluid py-5 text-center order-container">
        <h1>Order Cake Online !</h1>
        <p>
            Order Early for your special events.
            Select your favorite Cake and Choose a date to place the order online.
            Pick up your cake from the following location:
        </p>
        <address>Address-Here</address>
        <img src={orderstrip} height="100px" width="40%" className="order-strip-image mb-5"/>
        <h6>You can choose only date after 3 days from the current date</h6>
        <div className="d-flex justify-content-center align-items-center">
        <h6>Choose the pickup date</h6>
        <Calendar onChange={setOrderDate} value={date}  minDate={getMinDate()} className="m-5 py-3 calendar"/>
        </div>
        <section className="order-product-details my-4 py-5">
        <h4>Choose your favorite cake</h4>
        <div className="row my-4">
                 {
                   
                products.map((product,index)=>    
                        {
                          
                        return(
                          
                            <div className="col-xlg-3 col-md-6 col-12 d-flex my-3 justify-content-around p-5" key={product._id}>
                            <img src={product.image} className="product-image" width="200px" height="200px"/>
                            <div>
                            <h5>{product.name} <span>${product.price}</span></h5>
                            <p>{product.description}</p>
                             <button onClick={addToBasket} className="btn  addToBasket-button">Add To Basket</button>
                            </div> 
                           </div>
                  
         
                        )
}
                      )
                     
            }
            </div>
        </section>
        {/* <CButton onClick={() => setVisible(true)}>Toggle bottom offcanvas</CButton> */}
    <COffcanvas placement="bottom" visible={visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader>
        <COffcanvasTitle>Your Cart</COffcanvasTitle>
        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody>
      Cart content
      </COffcanvasBody>
      <button>Place Order</button>
    </COffcanvas>

    </main>);
}