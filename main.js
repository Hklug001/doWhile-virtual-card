const userNames = {
    github: "Hklug001",
    youtube: "UCEygkGwvkfbLilTlt96K-Lg",
    instagram: "henri_klug",
    facebook: "100004104861949",
    twitter: "KlugHenrique"
}

function addSocialLinks() {
    for (let li of socialMedia.children) {
        const social = li.getAttribute('class');
        li.children[0].href += `${userNames[social]}`;
    }
}

addSocialLinks();

function getGitHubProfile() {
    const url = `https://api.github.com/users/${userNames.github}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            myName.textContent = data.name
            information.textContent = data.bio
            userTag.textContent = data.login
            github.href = data.html_url
            picture.src = data.avatar_url
        });
}

getGitHubProfile();