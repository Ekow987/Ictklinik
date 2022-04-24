import { useRoutes } from "react-router-dom"
import Themeroutes from "./routes/Router"
import { Context } from "./components/Shared/Context/Context"
const App = () => {
	const routing = useRoutes(Themeroutes)

	return (
		<Context.Provider
		// value={{
		// 	isLoggedIn: isLoggedIn,
		// 	userObject: userObject
		// }}
		>
			<div className="dark">{routing}</div>
		</Context.Provider>
	)
}

export default App
