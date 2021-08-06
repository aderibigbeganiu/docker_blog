import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Blog from "./Containers/Blog";
import configureStore from "./Redux/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
	return (
		<ReduxProvider store={reduxStore}>
			<div className="App">
				<Blog />
			</div>
		</ReduxProvider>
	);
}

export default App;
