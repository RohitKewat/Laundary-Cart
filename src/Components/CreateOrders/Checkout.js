import "../css/Checkout.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

//-------------------------------------------------------
export default function (props) {
  const [stores, setStore] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState("");
  const [selectedAdd, setSelectedAdd] = useState("");
  const [selectedTel, setSelectedTel] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const current = new Date();
  const today = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()} PM` ;
  const token = localStorage.getItem("token");
  const fetchData = () => {
    return fetch("https://main-project-backend.onrender.com/store",{credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    }})
      .then((response) => response.json())
      .then((data) => setStore(data));
  };
  const fetchUser = () => {
    return fetch("https://main-project-backend.onrender.com/users",{credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` // or use cookies
    }
  })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        // console.log("Meow Meow");
        console.log("line 32 ",users);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchUser();
    
  }, []);

  const [washTypes, setTypes] = useState([
    "Washing",
    "Ironing",
    "Towel",
    "Bleaching",
  ]);

  const [billTotal, setBillTotal] = useState(
    props.prices.reduce((a, v) => (a = a + v), 0)
  );

  const [orders, setOrders] = useState({
    items: [],
    userAddress: {},
    orderStatus: "Ready to Pickup",
    storePhoneNo: selectedTel,
    city: "",
    userId: "",
    storeAddress: selectedAdd,
    billAmt: billTotal + 90,
    storeLocation: selectedLoc,
    orderDate: date ,
  });
  useEffect(() => {
    props.summary?.map((e) => {
      orders.items = [
        ...orders.items,
        {
          productName: e.name,
          quantity: e.quantity,
          washType: e.washes,
          price: e.price,
        },
      ];
    });
  }, []);
  

  

  const handleChange = (selectedOption) => {
    setSelectedAdd((e) => e = selectedOption.address);
    setSelectedTel((e) => e = selectedOption.telephone);
    setSelectedLoc((e) => e = selectedOption.storeName);

    console.log(`Option selected:`, selectedOption.storeName);
  };
  useEffect(() => {
    setOrders({
        ...orders,
        storeAddress: selectedAdd,
        storePhoneNo: selectedTel,
        storeLocation: selectedLoc,
        city: selectedAdd.slice(13,selectedAdd.length),
    });
    console.log(orders);
  },[selectedAdd,selectedLoc,selectedTel]);
  
  const postOrder = () => {
    
    navigate("/popup");
    return fetch("https://main-project-backend.onrender.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
      credentials: "include",
      body: JSON.stringify(orders),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data));
    
  };

  

  return (
    <div id="checkout">
      <div id="title-checkout">
        <h1 id="summary">Summary</h1>
        <button id="close" onClick={() => window.location.reload(true)}>
          X
        </button>
      </div>
      <div id="store-details">
        <Select id='add-select' options={stores} onChange={handleChange} autoFocus={true} />
        {selectedAdd && <div id="store-add"><b>Store Address-</b> {selectedAdd}</div>}
        {selectedTel && <div id="store-tel"><b>Telephone-</b> {selectedTel}</div>}
      </div>
      <div id="order-details">
        <h4 id="order-details-title">Order Details</h4>
        <div id="summary-list">
          {props.summary?.map((e) => {
            return (
              <div id="list-row">
                <p id="list-name">{e.name}</p>
                <span id="type-list">
                  {e.washes?.map((type, idx) => {
                    return (
                      <span>
                        <i>{type && washTypes[idx]}</i>
                      </span>
                    );
                  })}
                </span>
                <span id="eq-row">
                  <b>{e.quantity}X{e.price}=</b>
                </span>
                <span id="tot">{e.total}</span>
              </div>
            );
          })}
          <h1 id="subtotal">Subtotal: &#8377;{billTotal}</h1>
          <h1 id="delivery-charges">Delivery Charges: &#8377;90</h1>
          <h1 id="final-total">Total: &#8377;{billTotal + 90}</h1>
        </div>
      </div>
      <div id="user-address">
        <h4 id="user-address-title">Address</h4>
        <span id="add-list">
          {<h1>{users.address}</h1>}
          <button id="add-new-address">Add New</button>
        </span>
      </div>
      <div id="final-div">
        {selectedLoc=="" ? (
          <button id="confirm-order-btn-disabled" disabled>
            Confirm
          </button>
        ) : (
          <button id="confirm-order-btn" onClick={postOrder}>
            Confirm
          </button>
        )}
        
      </div>
    </div>
  );
}
