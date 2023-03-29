import { useEffect, useState } from "react";
import jeans from '../img/jeans.png'
import tshirt from '../img/tshirt.png'
import shirt from '../img/shirt.png'
import trouser from '../img/trouser.png'
import boxer from '../img/boxer.png'
import jogger from '../img/jogger.png'
import '../css/ProductList.css'
import twash from '../img/twash.svg'
import fwash from '../img/fwash.svg'
import ttowel from '../img/ttowel.png'
import ftowel from '../img/ftowel.png'
import tbleach from '../img/tbleach.svg'
import fbleach from '../img/fbleach.svg'
import tiron from '../img/tiron.svg'
import firon from '../img/firon.svg'
import Checkout from './Checkout'
//-------------------------------------------------------

const imgArr = [jeans,shirt,tshirt,trouser,boxer,jogger];

//-------------------------------------------------------
export default function() { 
    const [products, setProduct] = useState([]);
    
    const incrementNumber = (index,q) => {
        setQuant(() => {
          return [
            ...qArr.slice(0, index),
             q,
            ...qArr.slice(index + 1),
          ]
        })
    }
    //toggles the checkout component`
    const [showCheckout, setCheckout]= useState(false)
    const [orderSummary, setSummary] = useState([]);
    const [qArr, setQuant] = useState([0,0,0,0,0,0]);
    const [prices, setPrices] = useState([]);
    
    // here, the product db is being fetched via get request from app.js express endpoint
    const fetchData = () => {
        return fetch("https://order-server-iamst316.onrender.com/products")
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }

    useEffect(() => {
        fetchData();
    },[]);
    // console.log(orderSummary);
//----------------------------------------------------------------   
    return(<>
     {products.map((e)=>{
            return (<div id='row'>
                
                    <img id='product-icon' src={imgArr[e.iconurl]} />
                    <p id='productName'>{e.productName}</p>
                    <p id='description'>{e.description}</p>
                    <input id='product-quantity' type='number' onChange={(q) =>incrementNumber(e.iconurl,q.target.value)} min='0'/>
                    <img id='towel' src = {e.wash ? twash : fwash } />
                    <img id='towel' src = {e.iron ? tiron : firon } />
                    <img id='towel' src = {e.towel ? ttowel : ftowel } />
                    <img id='towel' src = {e.bleach ? tbleach : fbleach } />
                    
                    {qArr[e.iconurl]>0 ? 
                    <p id="price-eq">{qArr[e.iconurl]}*{e.price}={e.price*qArr[e.iconurl]}</p> : 
                    <p id="reset-line-1">---</p>}
                    
                    {qArr[e.iconurl]>0 ?
                    <>
                        <button id="add-btn" onClick={()=>{
                            setSummary([
                                ...orderSummary,
                                {
                                    name: e.productName,
                                    quantity: qArr[e.iconurl],
                                    price: e.price,
                                    total: qArr[e.iconurl]*e.price,
                                    washes: [
                                        e.wash,e.iron,e.towel,e.bleach
                                    ]
                                    
                                }
                            ]);
                            setPrices([
                                ...prices, 
                                qArr[e.iconurl]*e.price
                            ])
                            alert('added');
                        }}>Add</button> 
                        <button id="reset-btn" onClick={() => incrementNumber(e.iconurl,0)}>Reset</button>
                    </> : 
                    <p id="reset-line">---</p>}
        
            </div>)
        })}
        <span id='btns'>
            <button id='cancel' onClick={() => window.location.reload(true)}>Cancel</button>
            {prices.length>0 && <button id='proceed' onClick={() => setCheckout(!showCheckout)}>Proceed</button>}
        </span>  
        {showCheckout && <Checkout summary={orderSummary} show={showCheckout} prices={prices}/>}
        
        
    </>)
}