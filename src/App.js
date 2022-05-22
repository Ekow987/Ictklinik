import { useRoutes } from "react-router-dom"
import Themeroutes from "./routes/Router"
import { Context } from "./components/Shared/Context/Context"
const App = () => {
	const routing = useRoutes(Themeroutes)

	return (
		<Context.Provider>
			<div className="dark">{routing}</div>
		</Context.Provider>
	)
}

export default App
