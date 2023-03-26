import OrdersHeader from "./Header/header"
import './order.css'
const Order = () => {

  return (
    <>
      <OrdersHeader />
      <aside className="aside">
        <img src='images\home-run (1).png' alt='homeicon' id="home"/>
        <img src='images\more.png' alt='moreicon' id="more" />
        <img src='images\list.png' alt='listicon' id="list"  />
      </aside>
    </>
  )
}
export default Order