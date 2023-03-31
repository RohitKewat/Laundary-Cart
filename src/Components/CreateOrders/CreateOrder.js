// import Header from './Header';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import search from '../img/search.svg'
import '../css/CreateOrder.css'
import ProductList from './ProductList';
import OrdersHeader from '../Orders/Header/header';
import Footer from './footer.jsx';
import Navbar from '../Navbar';
export default function CreateOrder() {
    return (<>
        {/* <Header /> */}
        {/* <OrdersHeader /> */}
        <Navbar/>
        {/* <Navbar /> */}
        <>
            {/* <div class="container">

                <div className="aside">
                    <img src='images\home-run (1).png' alt='homeicon' id="home" />
                    <img src='images\more.png' alt='moreicon' id="more" />
                    <div id='list'>
                        <i className="fa-solid fa-list"></i>

                    </div>
                </div>
                </div> */}
            </>
            <div className="aside">
                <img src='../images\home-run (1).png' alt='homeicon' id="home" />
                <img src='../images\more.png' alt='moreicon' id="more" />
                <div id='list'>
                    <i className="fa-solid fa-list"></i>

                </div>
            </div>
            <span id='main-body'>
                <div id='title-bar'>
                    <h2 id='title'>Create Order</h2>
                    <input id='search-bar' type='text' />
                </div>
                <div id='headings-bar'>
                    <h2 id='product-type'>Product Types</h2>
                    <h2 id='quantity'>Quantity</h2>
                    <h2 id='wash-type'>Wash Type</h2>
                    <h2 id='price'>Price</h2>
                </div>
                <ProductList />
            </span>
            <Footer/>
            {/* <Footer /> */}
        </>)
}

//note, my createOrder component was made without header/footer /navbar, hence i'll be adjusting the css part for it accordingly