import { useState } from "react";
import "./Checklist.css";

export default function Checklist({ setCurrentFilter, restrictions }) {
	const [shown, toggleShown] = useState(true);

	return (
		<div id="filterdiv">
			<button onClick={() => toggleShown(!shown)} className="filterbtn">
				Filter By:
			</button>
			<div id="filterbox" display={shown ? `block` : `none`}>
				<label>
					Test
					<select name="filter" id="filter-dropdown">
						{restrictions.map((restriction) => {
							return (
								<option
									value={restriction}
									onClick={() => setCurrentFilter(restriction)}
								>
									{restriction}
								</option>
							);
						})}
					</select>
				</label>
			</div>
		</div>
	);
}
