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
	if (days < 1) return `${dateDiff.getHours()} hours ago`;
	return `${days} days ago`;
};
