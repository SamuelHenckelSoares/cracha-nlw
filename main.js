const linksSocialMedia = {
  github: 'samuelhenckelsoares',
  youtube: 'channel/UC-Smhj-6oGhPt-GayUZ7Qlw',
  facebook: 'samuel.henckel',
  instagram: 'samucaelsoares',
  linkedin: 'in/samuel-henckel-soares-8133b1124'
}

function chanceSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}/`
    //alert(li.children[0].href)
  }
}

chanceSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      UserImage.src = data.avatar_url
      userID.textContent = data.login
    })
}

getGitHubProfileInfos()
