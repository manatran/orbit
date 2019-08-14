// TODO: update fetch url
const fetchUrl = "http://localhost:5000/api/v1";
const nickname = document.getElementsByClassName("p-nickname")[0];

const getReputation = (username) => {
	// Fetch user reputation
	fetch(`${fetchUrl}/user/${username}/reputation`)
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				console.log("User is not registered with Orbit");
				return;
			}

			// Display reputation on page
			showReputation(data.rep);
		})
		.catch(err => console.warn(err));
}


// Display reputation on page
const showReputation = (rep) => {
	nickname.innerHTML += `
		<span class="orbit-rep">
			${rep} rep
		</span>
	`;
}


// Only execute code on profile page
if (nickname)
	getReputation(nickname.innerText);
