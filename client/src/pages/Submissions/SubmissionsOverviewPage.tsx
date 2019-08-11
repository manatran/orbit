import React, { useEffect, useState } from "react";
import { Sidebar, SidebarFilter, SubmissionsList } from "../../components";
import { fetchUrl } from "../../hooks";

const SubmissionsOverviewPage = () => {
	const currYear = new Date().getFullYear();
	const currMonth = new Date().getMonth();
	const months = [
		"jan",
		"feb",
		"mar",
		"apr",
		"may",
		"jun",
		"jul",
		"aug",
		"sep",
		"oct",
		"nov",
		"dec",
	];

	const [month, setMonth] = useState(months[currMonth]);
	const [year, setYear] = useState(JSON.stringify(currYear));
	const [submissions, setSubmissions] = useState([]);
	const [loadingState, setLoading] = useState(false);
	const [errorState, setError] = useState(false);

	useEffect(() => {
		fetch(`${fetchUrl}/submission/${year}/${month}`)
			.then((res) => res.json())
			.then((res) => {
				setLoading(false);
				setSubmissions(res);
			})
			.catch(() => setError(true));
	}, [month, year]);

	return (
		<div className="body spaced row">
			<Sidebar />
			<main>
				<SubmissionsList
					submissions={submissions}
					loading={loadingState}
					error={errorState}
				/>
			</main>
			<SidebarFilter
				month={month}
				year={year}
				currYear={currYear}
				setMonth={setMonth}
				setYear={setYear}
			/>
		</div>
	);
};
export default SubmissionsOverviewPage;
