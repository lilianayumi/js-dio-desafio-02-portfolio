function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;
    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;
    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:+55 ${profileData.phone}`
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
}
function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}
function updatehardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}
function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}
function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('');
}
function updateOccupation(profileData) {
    const occupation = document.getElementById('profile.occupation')
    occupation.innerHTML = profileData.occupation.map(job => {
        return `
            <li>
                <h3 class="title">${job.name}</h3>
                <p class="period">${job.period}</p>
                <p>${job.description}</p>
            </li>
        `
    }).join('');
}
(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updatehardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateOccupation(profileData);
})();