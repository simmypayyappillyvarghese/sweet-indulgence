import { useQuery } from "@apollo/client";
import {QUERY_PRODUCTS} from "../utils/queries"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cakes=function(){


    const { loading,error,data } = useQuery(QUERY_PRODUCTS);

const products = data?.getProducts||[];






function mouseOverHandler(e){

    let descr=e.target.nextSibling;
    let  background=descr.nextSibling;
    descr.style.display="block";
    background.style.display="block";

}

function mouseOutHandler(e){
    let descr=e.target.nextSibling;
    let  background=descr.nextSibling;
    descr.style.display="none";
    background.style.display="none";

}

return(

    <main className="container-fluid cakes-container">
        <section className="products-header d-flex flex-column align-items-center justify-content-center my-5 py-3">
            <h2 className="pb-4">The Finest Cake Money Can Buy</h2>
            <p className="products-heading">Our delicious cakes are made fresh to enjoy every day <br/> and stuffed to the crust with all of our love .</p>
        </section>
        <section className="products-details box">
        <div className="row my-4 py-3">
                 {
                   
                products.map((product,index)=>    
                        {
                          
                        return(
                          
                            <div className="col-6 col-md-3 d-flex my-3 justify-content-center align-items-center py-5 text-center" key={product._id}>
                            <div className="product-info">
                            <img src={product.image} className="cake-image" style={{width:"220px" ,height:"220px"}} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}/>
                            <div className="cake-background"></div>
                            <p className="cake-description">{product.description}<br/>
                            <i className="fa fa-angle-double-right mt-3 p-1"></i>
                            </p>
                            </div>
                            </div>
                        )
                        })
                    }
        </div>                 
        </section>
        <section className="cake-making box py-5">
            <article className="p-5 text-center">
                       <h2 className="my-4">Not the average baked good</h2>
                       <p className="cake-making-content">Our pies are handmade and our offerings change with the seasons.<br/>
                        Our pies contain no artificial preservatives, hydrogenated oils, dyes, or corn syrup.
                        <br/>
                        Learn more about our process 
                       </p>
                       <Link to="/about">  
                       <i class="fa fa-arrow-right"></i>
                       </Link>
            </article>
        </section>
    </main>
)

}


export default Cakes;