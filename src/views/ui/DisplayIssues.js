import * as React from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import PendingIssues from "./PendingIssues"
import AddIssues from "./AddIssues"

export default function DisplayIssues() {
	return (
		<div>
			<AddIssues />
			<Tabs
				defaultActiveKey="pending"
				transition={false}
				id="noanim-tab-example"
				className="mb-3"
			>
				<Tab eventKey="pending" title="Issues">
					<PendingIssues />
				</Tab>
			</Tabs>
		</div>
	)
}

