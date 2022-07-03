import { useRoutes } from "react-router-dom"
import Themeroutes from "./routes/Router"
import { AppContext } from "./components/Context/AppContext"
import { getUser, baseUrl } from "./services/Auth"
import React, { useState, useMemo } from "react"
import { getStatistics } from "./services/Helpers"
const App = () => {
	const [user, setUser] = useState(getUser())
	const routing = useRoutes(Themeroutes)

	const provider = useMemo(
		() => ({
			user,
			setUser,
			baseUrl,
			getStatistics
		}),
		[user, setUser]
	)
	return <AppContext.Provider value={provider}>{routing}</AppContext.Provider>
}

export default App
