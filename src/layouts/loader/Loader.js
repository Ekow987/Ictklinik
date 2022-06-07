import React from "react"
import { Spinner } from "reactstrap"

const Loader = () => (
	<div
		className="fallback-spinner"
		style={{
			position: "relative",
			display: "flex",
			height: "100vh",
			width: "100%"
		}}
	>
		<div
			className="loading"
			style={{
				position: "absolute",
				left: "calc(50% - 35px)",
				top: "50%",
				width: "55px",
				height: "55px",
				borderRadius: "50%",
				boxSizing: "border-box",
				border: "3px solid transparent"
			}}
		>
			<Spinner color="primary" />
		</div>
	</div>
)
export default Loader
