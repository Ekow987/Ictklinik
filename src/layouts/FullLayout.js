import { Outlet } from "react-router-dom"
import { Container } from "reactstrap"
import Header from "./Header"
import Sidebar from "./Sidebar"

const FullLayout = () => {
	return (
		<main>
			{/********header**********/}
			<Header />
			<div className="pageWrapper d-lg-flex">
				{/********Sidebar**********/}
				<aside className="sidebarArea shadow" id="sidebarArea">
					<Sidebar />
				</aside>
				{/********Content Area**********/}
				<div className="contentArea">
					{/********Middle Content**********/}
					<Container className="p-4">
						<Outlet />
					</Container>
				</div>
			</div>
		</main>
	)
}

export default FullLayout
