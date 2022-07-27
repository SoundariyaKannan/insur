import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "@mui/material";
import Theme from "./components/UI/Theme";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<UserProvider>
			<ThemeProvider theme={Theme}>
				<div className="App">
					<BrowserRouter>
						<Routes>
							<Route exact path="/" element={<Landing />} />
							<Route exact path="/dashboard" element={<Dashboard />} />
						</Routes>
					</BrowserRouter>
				</div>
			</ThemeProvider>
		</UserProvider>
	);
}

export default App;
