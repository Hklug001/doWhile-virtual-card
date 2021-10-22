const userNames = {
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