import orderstrip from "../strip-order.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import {useState} from 'react'
import { COffcanvas ,COffcanvasBody ,COffcanvasHeader,COffcanvasTitle,CButton,CCloseButton} from '@coreui/react'
import { Button } from "bootstrap";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import {QUERY_PRODUCTS} from "../utils/queries"
import { calculateSize } from "@iconify/react";

export default function Order(){

  const [visible,setVisible]=useState(false);
//   const [products,setProducts]=useState([]);

const { loading,error,data } = useQuery(QUERY_PRODUCTS);
const products = data?.getProducts||[];

  console.log(products);


    function addToBasket(event){

        setVisible(true);

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
        <img src={orderstrip} height="100px" width="40%" className="order-strip-image"/>
        <div className="d-flex justify-content-center align-items-center">
        <h6>Choose the pickup date</h6>
        <Calendar className="m-5 py-3 calendar"/>
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