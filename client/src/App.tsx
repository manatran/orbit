import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./Router";
import { persistor, store } from "./store";

import "./App.css";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<AppRouter />
				</Router>
			</PersistGate>
		</Provider>
	);
};

export default App;
