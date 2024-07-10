import React, { useState } from "react";

export default function Collapsible({ title, children }) {
	const [shown, setShown] = useState(false);

	return (
		<div className="collapsible">
			{shown ? <h5 className="pointer">{title}</h5> : <h5 className="pointer" onClick={() => setShown(!shown)}>{title}</h5>}
			{shown && <div className="collapsible-content">{children}</div>}
		</div>
	);
}