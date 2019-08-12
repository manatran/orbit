export const getTimeDifference = (timestamp: string): string => {
	const datetime = new Date(timestamp).getTime();
	const now = new Date().getTime();

	if (isNaN(datetime)) {
		return "More than a day ago";
	}

	let milisecDiff = 0;
	if (datetime < now) {
		milisecDiff = now - datetime;
	} else {
		milisecDiff = datetime - now;
	}

	const days = Math.floor(milisecDiff / 1000 / 60 / (60 * 24));
	const dateDiff = new Date(milisecDiff);

	if (days < 1) {
		if (dateDiff.getHours() === 1) return `1 hour ago`;
		return `${dateDiff.getHours()} hours ago`;
	}
	if (days === 1) {
		return `1 day ago`;
	}
	return `${days} days ago`;
};

export const isEmpty = (value: any) =>
	value === undefined ||
	value === null ||
	(typeof value === "object" && Object.keys(value).length === 0) ||
	(typeof value === "string" && value.trim().length === 0);

export const capitalizeFirstLetter = (input: string) =>
	input.charAt(0).toUpperCase() + input.slice(1);
