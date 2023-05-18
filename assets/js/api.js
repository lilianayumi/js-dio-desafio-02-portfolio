async function fetchProfileData() {
    const url = `https://raw.githubusercontent.com/lilianayumi/js-dio-desafio-02-portfolio/main/data/profile.json`;
    const fetching = await fetch(url);
    return await fetching.json();
}