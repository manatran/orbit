import React, { useState } from "react";
import { Sub } from "..";
import { fetchUrl, useFetch } from "../../hooks";
import { SelectList } from "../Ask/Ask";

interface CategoriesProps {
	auth: any;
}

const Categories: React.FC<CategoriesProps> = ({ auth }) => {
	const [{ data }] = useFetch("/categories", []);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [name, setName] = useState("");
	const [slug, setSlug] = useState("");
	const [description, setDescription] = useState("");
	const [thumbnail, setThumbnail] = useState("");
	const [parent, setParent] = useState({
		id: -1,
		thumbnail: "",
	});

	const createCategory = async (e: any) => {
		e.preventDefault();

		if (!name || !slug || !description || !thumbnail) {
			setSuccess("");
			setError("Please fill in the fields");
			return;
		}

		const body = {
			name,
			slug,
			description,
			thumbnail,
			parent: parent.id === -1 ? null : parent.id,
		};

		const res = await fetch(`${fetchUrl}/categories`, {
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
			setParent({
				id: -1,
				thumbnail: "",
			});
			setName("");
			setSlug("");
			setDescription("");
			setThumbnail("");

			setError("");
			setSuccess("Successfully created new category");
			return;
		}
		setError("Something went wrong. Please try again later.");
	};

	return (
		<section className="categories">
			<h2>Create a subject</h2>
			<form
				className="column spaced-bottom"
				onSubmit={(e) => createCategory(e)}
			>
				{error && <p className="error">{error}</p>}
				{success && <p className="success">{success}</p>}

				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					onBlur={() => {
						if (!slug) {
							const slugified = name
								.toLowerCase()
								.replace(/[^\w ]+/g, "")
								.replace(/ +/g, "-");
							setSlug(slugified);
						}
					}}
				/>
				<input
					type="text"
					placeholder="Slug"
					value={slug}
					onChange={(e) => setSlug(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<div className="img-input select-container row a-centered">
					<div
						className="thumbnail"
						style={{ backgroundImage: `url(${thumbnail})` }}
					/>
					<input
						type="text"
						placeholder="Thumbnail URL"
						value={thumbnail}
						onChange={(e) => setThumbnail(e.target.value)}
					/>
				</div>
				<div className="select-container row a-centered">
					<div
						className="thumbnail"
						style={{ backgroundImage: `url(${parent.thumbnail})` }}
					/>
					<SelectList
						placeholder="Choose a parent (optional)"
						value={parent}
						setValue={setParent}
						options={[
							{
								id: -1,
								name: "None",
								thumbnail: "",
							},
							...data,
						]}
					/>
				</div>

				<button className="button" type="submit">
					Create category
				</button>
			</form>

			<div className="list">
				<h2>All subjects</h2>
				{data &&
					!data.error &&
					data.map((el: any) => (
						<Sub
							key={el.id}
							slug={el.slug}
							title={el.name}
							description={el.description}
							icon={el.thumbnail}
						/>
					))}
			</div>
		</section>
	);
};
export default Categories;
