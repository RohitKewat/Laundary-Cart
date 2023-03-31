
import './orderData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Alert from './alert/alert';
import Summary from './summary/summary';
const OrderData = ({ order ,setrelode }) => {
    const [alertmodal, setalertmodal] = useState(false)
    const [summarymodal, setsummarymodal] = useState(false)
    const orderId = order._id.substring(20);

    return (
        <>

            <div className='dataItem'>

                <div className='one'>OR{orderId}</div>
                <div className='two'>{order.orderDate}</div>
                <div className='three'>{order.storeAddress}</div>
                <div className='four'>{order.city}</div>
                <div className='five'>{order.storePhoneNo}</div>
                <div className='six'>{order.items.length}</div>
                <div className='seven'>{order.billAmt} Rs</div>
                {
                    order.orderStatus ==="Cancelled" ? <div className='red eight'>{order.orderStatus}</div>
                    : 
                    <>
                          <div className='eight'>{order.orderStatus}</div>
                  <div className='canclebtn nine' onClick={() => { setalertmodal(true) }} > Cancel Order </div>
                
                    </>
              
                }
                <FontAwesomeIcon icon={faEye} className='eyebtn ten' onClick={() => setsummarymodal(true)} />

                {alertmodal && <Alert setalertmodal={setalertmodal} orderId={order._id} setrelode={setrelode}/>}
                {summarymodal && <Summary setsummarymodal={setsummarymodal} order={order} setalertmodal={setalertmodal}/>}


            </div>

        </>
    )
}

export default OrderData