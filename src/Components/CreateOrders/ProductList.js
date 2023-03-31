import { useEffect, useState } from "react";
import jeans from '../img/jeans.png'
import tshirt from '../img/tshirt.png'
import shirt from '../img/shirt.png'
import trouser from '../img/trouser.png'
import boxer from '../img/boxer.png'
// import jogger from '../img/jogger.png'
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
export default function ProductList() { 
    const [products, setProduct] = useState([]);
    console.log("inside product listy");
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
    const [isWash, setWash] = useState([false,false,false,false,false,false]);
    const [isIron, setIron] = useState([false,false,false,false,false,false]);
    const [isTowel, setTowel] = useState([false,false,false,false,false,false]);
    const [isBleach, setBleach] = useState([false,false,false,false,false,false]);
    const [extraCharge, setExtra] = useState([0,0,0,0,0,0]);
    
    // here, the product db is being fetched via get request from app.js express endpoint
    const fetchData = () => {
        const token = localStorage.getItem("token");
        return fetch("https://main-project-backend.onrender.com/products",{credentials: "include",
        
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        }
    })
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }

    useEffect(() => {
        fetchData();
    },[]);
    // console.log(orderSummary);
//----------------------------------------------------------------   
    return(<>
     {products.map((e,idx)=>{
            return (<div id='row'>
                
                    <img id='product-icon' src={imgArr[e.iconurl]}  alt='producticon'/>
                    <p id='productName'>{e.productName}</p>
                    <p id='description'>{e.description}</p>
                    <input id='product-quantity' type='number' onChange={(q) =>incrementNumber(e.iconurl,q.target.value)} min='0'/>
                    {/* wash types are here */}
                    {isWash[e.iconurl] ? <img id='towel' onClick={()=> {
                        setWash([...isWash.slice(0,idx),!isWash[idx],...isWash.slice(idx+1,6)]);
                        setExtra([...extraCharge.slice(0,idx),extraCharge[idx]-10,...extraCharge.slice(idx+1,6)])
                        }} src = {twash} alt='towel' />: <img id='towel' onClick={()=> {
                            setWash([...isWash.slice(0,idx),!isWash[idx],...isWash.slice(idx+1,6)]);
                            setExtra([...extraCharge.slice(0,idx),extraCharge[idx]+10,...extraCharge.slice(idx+1,6)])
                        }} src = {fwash} alt='towel' />}
                    {/* <img id='towel' src = {e.wash ? twash : fwash } alt='towel' /> */}
                    {/* <img id='towel' src = {e.iron ? tiron : firon }  alt='towel'/>
                    <img id='towel' src = {e.towel ? ttowel : ftowel }  alt='towel'/>
                    <img id='towel' src = {e.bleach ? tbleach : fbleach } alt='towel' /> */}
                    {isIron[idx] ? <img id='towel' onClick={()=> {
                        setIron([...isIron.slice(0,idx),!isIron[idx],...isIron.slice(idx+1,6)])
                        setExtra([...extraCharge.slice(0,idx),extraCharge[idx]-10,...extraCharge.slice(idx+1,6)])
                    }} src = {tiron} alt='towel' />: <img id='towel' onClick={()=> {
                        setIron([...isIron.slice(0,idx),!isIron[idx],...isIron.slice(idx+1,6)])
                        setExtra([...extraCharge.slice(0,idx),extraCharge[idx]+10,...extraCharge.slice(idx+1,6)])
                    }} src = {firon} alt='towel' />}

                    {isTowel[e.iconurl] ? <img id='towel' onClick={()=> {
                        setTowel([...isTowel.slice(0,idx),!isTowel[idx],...isTowel.slice(idx+1,6)])
                        setExtra([...extraCharge.slice(0,idx),extraCharge[idx]-10,...extraCharge.slice(idx+1,6)])
                    }} src = {ttowel} alt='towel' />: <img id='towel' onClick={()=> {
                        setTowel([...isTowel.slice(0,idx),!isTowel[idx],...isTowel.slice(idx+1,6)])
                        setExtra([...extraCharge.slice(0,idx),extraCharge[idx]+10,...extraCharge.slice(idx+1,6)])
                    }} src = {ftowel} alt='towel' />}

                    {isBleach[e.iconurl] ? <img id='towel' onClick={()=> {
                        setBleach([...isBleach.slice(0,idx),!isBleach[idx],...isBleach.slice(idx+1,6)])
                        setExtra([...extraCharge.slice(0,idx),extraCharge[idx]-10,...extraCharge.slice(idx+1,6)])
                    }} src = {tbleach} alt='towel' />: <img id='towel' onClick={()=> {
                        setBleach([...isBleach.slice(0,idx),!isBleach[idx],...isBleach.slice(idx+1,6)])
                        setExtra([...extraCharge.slice(0,idx),extraCharge[idx]+10,...extraCharge.slice(idx+1,6)])
                    }} src = {fbleach} alt='towel' />}

                    
                    {/* wash types end here */}

                    {qArr[e.iconurl]>0 ? 
                    <p id="price-eq">{qArr[e.iconurl]}*{e.price+extraCharge[e.iconurl]}={(e.price+extraCharge[e.iconurl])*qArr[e.iconurl]}</p> : 
                    <p id="reset-line-1">---</p>}
                    
                    {qArr[e.iconurl]>0 ?
                    <>
                        <button id="add-btn" onClick={()=>{
                            setSummary([
                                ...orderSummary,
                                {
                                    name: e.productName,
                                    quantity: qArr[e.iconurl],
                                    price: e.price+extraCharge[e.iconurl],
                                    total: (e.price+extraCharge[e.iconurl])*qArr[e.iconurl],
                                    washes: [
                                        isIron[idx],isIron[idx],isTowel[e.iconurl],isBleach[e.iconurl]
                                    ]
                                    
                                }
                            ]);
                            setPrices([
                                ...prices, 
                                (e.price+extraCharge[e.iconurl])*qArr[e.iconurl]
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
        {showCheckout && <Checkout id='checkout' summary={orderSummary} show={showCheckout} prices={prices}/>}
        
        
    </>)
}