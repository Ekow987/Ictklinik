import  React from "react"
import Devices from "./Devices"
import AddDevices from "./AddDevices"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"


export default function DisplayDevices() {
	return (
		
           		<div>
			<AddDevices/>
			<Tabs
				defaultActiveKey="pending"
				transition={false}
				id="noanim-tab-example"
				className="mb-3"
			>
				<Tab eventKey="pending" title="Devices">
					<Devices/>
				</Tab>
			</Tabs>
		</div>
	
	)
}

