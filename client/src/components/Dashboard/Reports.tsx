import React from "react";
import { Spinner } from "..";
import { useAuthFetch } from "../../hooks";
import Report from "./Report";

interface ReportsProps {
	auth: any;
}

const Reports: React.FC<ReportsProps> = ({ auth }) => {
	const [{ data }] = useAuthFetch("/reports", auth.token, []);

	if (data) {
		return (
			<div>
				<h2>Reports</h2>
				{data.length ? (
					data.map((el: any) => (
						<Report
							auth={auth}
							key={el.id}
							id={el.id}
							content={el.content}
							question={el.parentPost}
						/>
					))
				) : (
					<p className="light">All clear, no reports!</p>
				)}
			</div>
		);
	}

	return <Spinner size={32} />;
};
export default Reports;
