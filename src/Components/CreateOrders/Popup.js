import '../css/Popup.css'
import tick from '../img/tick.png'
import CreateOrder from './CreateOrder'
import '../css/CreateOrder.css';
import { useNavigate } from 'react-router-dom';

export default function(){
    const navigate = useNavigate();
    function GoToOrders(){
        navigate("/orders");
    }

    return (<>    
        <div id='popup-body'>
            <CreateOrder />
        </div>
        <div id='popup'>
            <img id='tick' src={tick} />
            <h3 id='success-title'>Your order is successfully</h3>
            <p id='track'>You can track the delivery in the "Orders" section</p>
            <button id='redirect-btn' onClick={GoToOrders}>Go to orders</button>
        </div>
    </>)
}