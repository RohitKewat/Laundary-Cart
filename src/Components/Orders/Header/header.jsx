import './header.css'
const OrdersHeader=()=>{

    return(
        <>
          <nav id='header-box'>
            <div id='logo'>
                LAUNDRY
            </div>
            <div className='option'>
                Pricing
            </div>
            <div className='option'>
                Career
            </div>
            <div id='userSection'>
                <img src="images\profile.webp" alt="profile" id="profilepic" />
                <span>user name </span>
            </div>
          </nav>
        </>
    )
}
export default OrdersHeader