document.addEventListener("DOMContentLoaded", () => {
  let team_members = [
    {name: 'Suhaib', position: 'QA Engineer', img: 'assets/images/suhaib.jpg'},
    {name: 'Shijar', position: 'Software Developer', img: 'assets/images/shijar.jpg'},
    {name: 'Sajna', position: 'UI/UX', img: 'assets/images/sajna.jpg'},
    {name: 'Sherna', position: 'Web Developer', img: 'assets/images/sherna.jpg'},
    {name: 'Ajmal', position: 'QA Engineer', img: 'assets/images/Ajmal.jpeg'},
    {name: 'Ajmal', position: 'Content Writer', img: 'assets/images/horus.jpg'},
    {name: 'Jumar', position: 'Digital Marketing', img: 'assets/images/jumar.jpg'},
    {name: 'Fahad', position: 'Social Media Management', img: 'assets/images/fahad.jpg'},
    {name: 'Raoof', position: 'Video Creator', img: 'assets/images/Raoof.jpg'},
    {name: 'Horus', position: 'Graphics Designer', img: 'assets/images/horus.jpg'},
]

function createTeamMember(name, position, imageUrl) {
    // Create elements
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-3 col-sm-6';

    const itemDiv = document.createElement('div');
    itemDiv.className = 'item our-team';

    const leftImageDiv = document.createElement('div');
    leftImageDiv.className = 'left-image';
    leftImageDiv.style.width = '100%';

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = '';
    image.className = 'team-member-style';

    const rightContentDiv = document.createElement('div');
    rightContentDiv.className = 'right-content';

    const title = document.createElement('h4');
    title.textContent = `${position}`;
    if(name === 'Fahad') {
      title.style.color = '#000';
    } else {
      title.style.color = '#fff';
    }

    const authorSpan = document.createElement('span');
    authorSpan.className = 'author';

    const authorName = document.createElement('h6');
    authorName.innerHTML = `${name}`;
    if(name === 'Fahad') {
      authorName.style.color = '#000';
    } else {
      authorName.style.color = '#fff';
    }

    // Append elements to build the structure
    leftImageDiv.appendChild(image);
    authorSpan.appendChild(authorName);
    rightContentDiv.appendChild(title);
    rightContentDiv.appendChild(authorSpan);
    itemDiv.appendChild(leftImageDiv);
    itemDiv.appendChild(rightContentDiv);
    colDiv.appendChild(itemDiv);

    // Append the created structure to the "team-members" div
    const teamMembersDiv = document.getElementById('team-members');
    teamMembersDiv.appendChild(colDiv);
  }

  createTeamMember(team_members[0].name, team_members[0].position, team_members[0].img);
  team_members.shift();

  function getRandomTeamMember() {
    let clonedList = [...team_members];

    for (let i = clonedList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clonedList[i], clonedList[j]] = [clonedList[j], clonedList[i]];
      }
  
      // Take the first three elements from the shuffled list
      const threeRandomValues = clonedList.slice(0, 3);
      return threeRandomValues
  }

  if(!(document.URL).includes('teams')) {
    team_members = getRandomTeamMember();
  }

  for (let i = 0; i < team_members.length; i++) {
    createTeamMember(team_members[i].name, team_members[i].position, team_members[i].img);
  }
});