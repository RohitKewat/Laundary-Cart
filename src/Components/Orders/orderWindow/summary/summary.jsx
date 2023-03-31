import './summary.css'


const Summary = (props) => {
    const { setsummarymodal ,order ,setalertmodal } = props
    console.log("data in summary ",order);
    return (
        <>
            <div className='modal-wrapper'></div>
            <div className="summary-modal-container">

                <div className="summaryhead">
                    Summary
                    <div onClick={() => setsummarymodal(false)} className='crossbtn'>
                        X
                    </div>

                </div>
                <div className='summary-address'>

                    <div className='address-summary-title'>

                        <div className='address1'>
                            Store Location
                        </div >
                        <div className='address2'>
                            Store Address:
                        </div>
                        <div className='address3'>
                            Phone
                        </div>
                    </div>
                    <div className='shop-address'>
                        <td>
                            {order.storeLocation}
                        </td>
                        <td>
                            {order.storeAddress}
                        </td>
                        <td >
                            {order.storePhoneNo}
                        </td>
                    </div>

                </div>
                <div className='order-status'> Order Status : {order.orderStatus}</div>

                <div className='order-details' >
                    <div className='subheading'> Order Details </div>
                    <div>
                        {
                            order.items?.map((item)=>{

                                return(
                                    <div className='item'> 
                                      <div className='item-instance'>
                                        {item.productName}
                                    </div>
                                    <div className='item-instance'>
                                        {item.washType}
                                    </div>
                                    <div className='item-instance'>
                                         {item.quantity} X {item.price}
                                    </div>
                                   
                                  </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='pickup'>
                Sub total: {order.billAmt - 90 }
                </div>
                <div className='pickup' > 
                                    Pickup Charges: 90
                                    </div>
                <div className='totalsum'>
                    <div>
                        Total: <span> Rs {order.billAmt} </span>
                    </div>
                </div>
                <div className='subheading'>
                  Address
                  <div className='useraddress'>
                      
                        {/* {
                           `${order.userAddress?.address } ${order.userAddress?.district } 
                           ${order.userAddress?.stateName }
                            ${order.userAddress?.pincode }
                           `
                        } */}
                            
                        pende nagar bhopal madhya pradesh 462022 
                      
                      

                  </div>
                </div>

                  <div className='Summary-footer'>
                    <button className='cancelbutton' onClick={() => {setsummarymodal(false) ; setalertmodal(true)} } >
                      Cancel order
                    </button>
                  </div>

            </div>

        </>
    )
}
export default Summary 