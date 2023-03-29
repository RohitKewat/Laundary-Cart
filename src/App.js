// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import CreateOrder from "./components/CreateOrder";
import OrderList from "./components/OrderList";
//---------------------------------------------


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<CreateOrder />} />
					<Route path="/orders" element={<OrderList />} />					
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
