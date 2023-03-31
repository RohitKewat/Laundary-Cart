import './alert.css'

import ReactDOM from 'react-dom'
const Alert = ({ setalertmodal, orderId, setrelode }) => {


    const handelProceed = () => {
        const url = `https://main-project-backend.onrender.com/orders/${orderId}`;
        const payload = { orderStatus: "Cancelled" };
        const token = localStorage.getItem("token");
        fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // handle success here
            })
            .catch(error => {
                console.error(error);
                // handle error here
            });
        setalertmodal(false)
        setrelode(true)
        // window.location.reload(false);


    }
    return ReactDOM.createPortal(
        <>
            <div className='modal-wrapper'></div>
            <div className='modalcontainer'>
                <div className='alerttop'> Alert
                    <div onClick={() => { setalertmodal(false) }}>X</div>
                </div>
                <div >
                    <i class="fa-solid fa-triangle-exclamation danger" ></i>
                    <div className='alertcontent' >Are you sure want to cancel the oreder No: OR{orderId.substring(20)}</div>
                    <button onClick={() => { handelProceed() }} className='proceedbtn'>Proceed</button>
                </div>
            </div>
        </>,
        document.querySelector('.Showmodal')
    )
}
export default Alert