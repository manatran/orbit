import React, { useState } from "react";
import { fetchUrl, useFetch } from "../../hooks";

interface ContestProps {
	auth: any;
}

const Contests: React.FC<ContestProps> = ({ auth }) => {
	const currYear = new Date().getFullYear();

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [month, setMonth] = useState("jan");
	const [year, setYear] = useState(currYear);

	const [{ data }] = useFetch("/challenges", []);

	const createContest = async (e: any) => {
		e.preventDefault();

		if (!title || !description) {
			setError("Please fill in all the fields!");
			return;
		}

		const body = {
			title,
			description,
			month,
			year,
		};

		const res = await fetch(`${fetchUrl}/challenges`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const json = await res.json();

		if (!json.error) {
			setTitle("");
			setDescription("");
			setMonth("jan");
			setYear(currYear);
			setSuccess("Successfully created contest!");
			return;
		}
		setError("Something went wrong.");
	};

	return (
		<section className="contests">
			<h2>Create a contest</h2>
			{error && <p className="error">{error}</p>}
			{success && <p className="success">{success}</p>}

			<form
				className="column spaced-bottom"
				onSubmit={(e: any) => createContest(e)}
			>
				<input
					type="text"
					placeholder="Contest title"
					value={title}
					onChange={(e: any) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Contest description"
					value={description}
					onChange={(e: any) => setDescription(e.target.value)}
				/>

				<div className="row">
					<div className="card input">
						<select onChange={(e: any) => setMonth(e.target.value)}>
							<option value="jan">January</option>
							<option value="feb">February</option>
							<option value="mar">March</option>
							<option value="apr">April</option>
							<option value="may">May</option>
							<option value="jun">June</option>
							<option value="jul">July</option>
							<option value="aug">August</option>
							<option value="sep">September</option>
							<option value="oct">October</option>
							<option value="nov">November</option>
							<option value="dec">December</option>
						</select>
					</div>
					<div className="card input">
						<select onChange={(e: any) => setYear(e.target.value)}>
							<option value={currYear}>{currYear}</option>
							<option value={currYear + 1}>{currYear + 1}</option>
							<option value={currYear + 2}>{currYear + 2}</option>
							<option value={currYear + 3}>{currYear + 3}</option>
							<option value={currYear + 4}>{currYear + 4}</option>
							<option value={currYear + 5}>{currYear + 5}</option>
						</select>
					</div>
				</div>

				<button className="button" type="submit">
					Create contest
				</button>
			</form>

			<div className="contest-list">
				<h2>All contests</h2>
				{data && !data.error && (
					<>
						<div className="contest-list-titles row">
							<h4>Title</h4>
							<h4>Month</h4>
							<h4>Year</h4>
						</div>

						{data.map((el: any) => (
							<div key={el.id} className="contest-list-item row">
								<p>{el.title}</p>
								<p>{el.month}</p>
								<p>{el.year}</p>
							</div>
						))}
					</>
				)}
			</div>
		</section>
	);
};
export default Contests;
