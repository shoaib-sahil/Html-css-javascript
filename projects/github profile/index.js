const url = "https://api.github.com/users";
const repositEl = document.getElementById('reposit');
const SearchBtnEl = document.getElementById('grab');
const loadingEl = document.getElementById('loading');
const profileContainerEl = document.getElementById('profileContainer');

const generateProfile = (profile) => {
    return `<div class="profile_box">
    <div class="top_section">
        <div class="left">
            <div class="avatar">
                <img src= "${profile.avatar_url}">
            </div>
            <div class="self">
                <h1>${profile.name}</h1>
                <h1>${profile.login}</h1>
            </div>
        </div>
        <a href = "${profile.html_url}" target = "_blank">
        <button class="SerachBtn" id="btnProfile">Check Profile</button>
        </a>
    </div>
    <div class="about_section">
        <h2>About</h2>
        <p>${profile.bio}</p>
    </div>
    <div class="status">
        <div class="status_items">
            <h3>Followers</h3>
            <p>${profile.followers}</p>
        </div>
        <div class="status_items">
            <h3>Following</h3>
            <p>${profile.following}</p>
        </div>
        <div class="status_items">
            <h3>Repository</h3>
            <p>${profile.public_repos}</p>
        </div>
    </div>
</div>`
}



const githubProfile = async () => {

    const username = repositEl.value;

    loadingEl.innerText = "loading.....";
    loadingEl.style.color = "black";

    try {
        const res = await fetch(`${url}/${username}`);

        const data = await res.json();
        console.log("data", data);

        if (data.bio) {
            console.log(generateProfile(data));
            loadingEl.innerText = "";
            profileContainerEl.innerHTML = generateProfile(data);
        } else {
            loadingEl.innerHTML = data.message;
            loadingEl.style.color = "red";
        }
    } catch (error) {
        console.log({ error });
        loadingEl.innerText =  " ";
    }
}

SearchBtnEl.addEventListener('click', githubProfile)