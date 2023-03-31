import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "./Footer/footer"
import OrdersHeader from "./Header/header"
import './order.css'
import OrderData from "./orderWindow/orderData"

const Order = () => {


  const [fetcheddata, setfetcheddata] = useState([]);
  console.log(fetcheddata);
  const [relode, setrelode] = useState(false)
  const navigation = useNavigate()
  useEffect(() => {
    setrelode(false)
    const url = "https://main-project-backend.onrender.com/orders";

    // const options = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   withCredentials:true
     
    // };
    const token = localStorage.getItem("token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // or use cookies
      },
      credentials: "include",
      // for cookies
    };

    fetch(url, options)
      .then((response) => {
        if (!response.status) {
          throw new Error("Network response was not successfull");
        }
        return response.json();
      })
      .then((data) => {
        setfetcheddata(data.orders)
      })
      .catch((error) => {
        console.error("Internal Server Error Please try after some time", error);
      });
  }, [relode])
  if (fetcheddata?.length === 0) {
    return (
      <>
        {/* <OrdersHeader /> */}
        <Navbar/>

        <div class="container">

          <div className="aside">
            <Link to={"/orders"}>  <img src='images\home-run (1).png' alt='homeicon' id="home" /></Link>
          <Link to={"/orders/create-order"}> <img src='images\more.png' alt='moreicon' id="more" /></Link>
           
            <div id='list'>
              <i className="fa-solid fa-list"></i>
            </div>
          
          </div>
          <div className="zero-order">
              <div className="zero-order-text">No Orders avaialble</div>
              <button className="zero-createbtn" onClick={()=>{ navigation('create-order')}} > Create </button>
            </div>
        </div>
        <Footer />

      </>
    )
  }

  return (
    <>
      {/* <OrdersHeader /> */}
      <Navbar/>
      <div class="container">

        <div className="aside">
          <img src='images\home-run (1).png' alt='homeicon' id="home" />
          <img src='images\more.png' alt='moreicon' id="more" />
          <div id='list'>
            <i className="fa-solid fa-list"></i>

          </div>
        </div>

        <main>
          <section>
            <div className="orderNo" >
              Orders | {fetcheddata?.length}
              <button className="createbtn" onClick={()=>{ navigation('create-order')}}> Create </button>
            </div>
            <div className='dataHead'>
              <div>Order Id</div>
              <div>Order Date & Time</div>
              <div>Store Location</div>
              <div>City</div>
              <div>Store Phone</div>
              <div>Total Items </div>
              <div>Price</div>
              <div>Status</div>
              <div>View</div>
            </div>
            {

            }
            {
              fetcheddata?.map((order) => {

                return (

                  <>
                    <div key={order._id}>
                      <OrderData order={order} setrelode={setrelode} />

                    </div>
                  </>
                )
              })
            }

            <div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
export default Order