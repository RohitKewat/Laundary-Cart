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
  const [users, setUsers] = useState([]);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const fetchData = () => {
    return fetch("http://localhost:5000/store")
      .then((response) => response.json())
      .then((data) => setStore(data));
  };
  const fetchUser = () => {
    return fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log("users");
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
    orderStatus: "Active",
    storePhoneNo: selectedTel,
    city: "",
    userId: "",
    storeAddress: selectedAdd,
    billAmt: billTotal + 90,
    storeLocation: selectedLoc,
    orderDate: date,
  });
  useEffect(() => {
    props.summary.map((e) => {
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
    setSelectedAdd((e) => e + selectedOption.address);
    setSelectedTel((e) => e + selectedOption.telephone);
    setSelectedLoc((e) => e + selectedOption.storeName);

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
    
    navigate("/orders");
    return fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
          {props.summary.map((e) => {
            return (
              <div id="list-row">
                <p id="list-name">{e.name}</p>
                <span id="type-list">
                  {e.washes.map((type, idx) => {
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
          {users.map((user) => {
            return (
              <span>
                {user.addresses.map((add,idx) => {
                  return (
                    <div id="add-option" >
                      <div>
                        <b>{add.stateName}</b>
                      </div>
                      <span id="add-details">
                        {add.address},{add.district},Pincode: {add.pincode}
                      </span>
                    </div>
                  );
                })}
              </span>
            );
          })}
          <button id="add-new-address">Add New</button>
        </span>
      </div>
      <div id="final-div">
        {Object.keys(orders).length != 10 ? (
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
