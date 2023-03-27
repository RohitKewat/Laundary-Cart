// import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import CreateOrder from "./components/CreateOrder";
//---------------------------------------------


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<CreateOrder />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
