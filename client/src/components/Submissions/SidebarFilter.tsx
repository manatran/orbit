import React from "react";

import "./SidebarFilter.css";

interface FilterProps {
	month: string;
	year: string;
	currYear: number;
	setMonth: (month: string) => void;
	setYear: (year: string) => void;
}

const SidebarFilter: React.FC<FilterProps> = ({
	month,
	year,
	currYear,
	setMonth,
	setYear,
}) => {
	return (
		<aside className="filter">
			<div className="vertical-tabs">
				<select value={year} onChange={(e) => setYear(e.target.value)}>
					<option hidden>Year</option>
					<option value={currYear - 3}>{currYear - 3}</option>
					<option value={currYear - 2}>{currYear - 2}</option>
					<option value={currYear - 1}>{currYear - 1}</option>
					<option value={currYear}>{currYear}</option>
				</select>
				<button
					type="button"
					className={month === "jan" ? "active" : ""}
					onClick={() => setMonth("jan")}
				>
					January
				</button>
				<button
					type="button"
					className={month === "feb" ? "active" : ""}
					onClick={() => setMonth("feb")}
				>
					February
				</button>
				<button
					type="button"
					className={month === "mar" ? "active" : ""}
					onClick={() => setMonth("mar")}
				>
					March
				</button>
				<button
					type="button"
					className={month === "apr" ? "active" : ""}
					onClick={() => setMonth("apr")}
				>
					April
				</button>
				<button
					type="button"
					className={month === "may" ? "active" : ""}
					onClick={() => setMonth("may")}
				>
					May
				</button>
				<button
					type="button"
					className={month === "jun" ? "active" : ""}
					onClick={() => setMonth("jun")}
				>
					June
				</button>
				<button
					type="button"
					className={month === "jul" ? "active" : ""}
					onClick={() => setMonth("jul")}
				>
					July
				</button>
				<button
					type="button"
					className={month === "aug" ? "active" : ""}
					onClick={() => setMonth("aug")}
				>
					Augustus
				</button>
				<button
					type="button"
					className={month === "sep" ? "active" : ""}
					onClick={() => setMonth("sep")}
				>
					September
				</button>
				<button
					type="button"
					className={month === "oct" ? "active" : ""}
					onClick={() => setMonth("oct")}
				>
					October
				</button>
				<button
					type="button"
					className={month === "nov" ? "active" : ""}
					onClick={() => setMonth("nov")}
				>
					November
				</button>
				<button
					type="button"
					className={month === "dec" ? "active" : ""}
					onClick={() => setMonth("dec")}
				>
					December
				</button>
			</div>
		</aside>
	);
};
export default SidebarFilter;
