import React, { useState } from "react";

export default function Collapsible({ title="Challenge", children }) {
	const [shown, setShown] = useState(false);

	return (
		<div className="collapsible">
			<h5 className="pointer" onClick={() => setShown(!shown)}>{shown ? "Hide" : "View"} {title}</h5>
			{shown && <div className="collapsible-content">{children}</div>}
		</div>
	);
}