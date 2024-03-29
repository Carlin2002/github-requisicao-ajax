document.addEventListener("DOMContentLoaded", function() {
    const user = 'carlin2002'
    const endpoint =  `https://api.github.com/users/${user}`;
    const avatarElement = document.querySelector('#avatar')
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch(endpoint)
    .then(function(res) {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(function(json) {
        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name;
        usernameElement.innerText = `@${json.login}`;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
    .catch(function(error) {
        alert('Ocorreu um erro, tente novamente!');
        console.error('Erro na solicitação fetch:', error);
    });
});
