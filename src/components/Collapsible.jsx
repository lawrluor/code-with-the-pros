import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";


export default function Collapsible({ title="Challenge", children }) {
	const [shown, setShown] = useState(false);

	return (
		<div className="collapsible">
			<div style={{ display: "flex", alignItems: "center"}}>
				<h5 className="pointer" onClick={() => setShown(!shown)}>{shown ? "Hide" : "View"} {title}</h5>
				<h5 className="pointer" style={{ marginLeft: 2 }} onClick={() => setShown(!shown)}> {shown ? <IoChevronUpSharp /> : <IoChevronDownSharp />}</h5>
			</div>
			{shown && <div className="collapsible-content" style={{ backgroundColor: "#262626", padding: "2px 10px", margin: "10px 0px"}}>{children}</div>}
		</div>
	);
}