import React, { useState } from "react";
import { IoChevronUpSharp, IoChevronForwardSharp } from "react-icons/io5";


export default function Collapsible({ title="Challenge", children }) {
	const [shown, setShown] = useState(false);

	return (
		<div className="collapsible">
			<div className="pointer" style={{ display: "flex", alignItems: "center"}} onClick={() => setShown(!shown)}>
				<h5>{shown ? "Hide" : "View"} {title}</h5>
				<h5 style={{ marginLeft: 2 }}> {shown ? <IoChevronUpSharp /> : <IoChevronForwardSharp />}</h5>
			</div>
			{shown && <div className="collapsible-content" style={{ backgroundColor: "#262626", padding: "2px 10px", margin: "10px 0px"}}>{children}</div>}
		</div>
	);
}