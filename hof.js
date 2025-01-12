const hofContent = document.getElementById('hofContent');
let accordionIndex = -1;
let data = null;

function toggleAccordion(index) {
  accordionIndex = accordionIndex === index ? -1 : index;
  renderAccordion(data); // Pass the data to renderAccordion
}

function renderAccordion(hof) {
  hofContent.innerHTML = ''; // Clear existing content
  Object.entries(hof).forEach(([key, season], index) => {
    const seasonDiv = document.createElement('div');
    seasonDiv.className = 'hof__content--season';
    seasonDiv.classList.toggle('bg', accordionIndex === index);
    const titleDiv = document.createElement('div');
    titleDiv.className = 'hof__content--title';
    titleDiv.onclick = () => toggleAccordion(index);
    
    const titleH2 = document.createElement('h2');
    titleH2.textContent = season.nazwa;
    
    const iconSpan = document.createElement('span');
    iconSpan.className = 'iconify';
    iconSpan.classList.toggle('expanded', accordionIndex === index);
    iconSpan.textContent = '▼';

    titleDiv.appendChild(titleH2);
    titleDiv.appendChild(iconSpan);
    seasonDiv.appendChild(titleDiv);

    const accordionDiv = document.createElement('div');
    accordionDiv.className = 'hof__content--accordion';
    accordionDiv.classList.toggle('expanded', accordionIndex === index);

    const winnersHeader = document.createElement('h3');
    winnersHeader.textContent = 'Zwycięzcami zostali';
    accordionDiv.appendChild(winnersHeader);

    const winnersDiv = document.createElement('div');
    winnersDiv.className = 'hof__content--winners';

    const teamNameDiv = document.createElement('div');
    teamNameDiv.className = 'hof__content--teamName';
    const teamLogo = document.createElement('img');
    teamLogo.alt = `Logo drużyny ${season.winner.team_name}`;
    teamLogo.src = `/images/teams/${season.winner.sc}.png`;
    const teamNameH3 = document.createElement('h3');
    teamNameH3.textContent = season.winner.team_name;

    teamNameDiv.appendChild(teamLogo);
    teamNameDiv.appendChild(teamNameH3);
    winnersDiv.appendChild(teamNameDiv);

    const teamPlayersDiv = document.createElement('div');
    teamPlayersDiv.className = 'hof__content--teamPlayers';
    for (const [role, player] of Object.entries(season.winner.linie)) {
      const playerDiv = document.createElement('div');
      playerDiv.className = 'hof__content--Player';
      const playerIcon = document.createElement('img');
      playerIcon.className = 'rola';
      playerIcon.alt = `Ikona ${role}`;
      playerIcon.src = `/images/linie/${role}.png`;
      const playerP = document.createElement('p');
      playerP.textContent = player;

      playerDiv.appendChild(playerIcon);
      playerDiv.appendChild(playerP);
      teamPlayersDiv.appendChild(playerDiv);
    }
    winnersDiv.appendChild(teamPlayersDiv);
    accordionDiv.appendChild(winnersDiv);

    // Handle mentions
    if (season.mentions) {
      const mentionsDiv = document.createElement('div');
      mentionsDiv.className = 'hof__content--mentions';
      const mentionsHeader = document.createElement('h3');
      mentionsHeader.textContent = 'Specjalne wyróżnienia';
      const mentionsHr = document.createElement('hr');
      mentionsDiv.appendChild(mentionsHr);
      mentionsDiv.appendChild(mentionsHeader);
      Object.values(season.mentions).forEach(mention => {
        const mentionBox = document.createElement('div');
        mentionBox.className = 'hof__content--mentionsBox';
        const mentionTitle = document.createElement('h4');
        mentionTitle.textContent = mention.title;
        const mentionPerson = document.createElement('p');
        mentionPerson.textContent = mention.person;

        mentionBox.appendChild(mentionTitle);
        mentionBox.appendChild(mentionPerson);
        mentionsDiv.appendChild(mentionBox);
        accordionDiv.appendChild(mentionsDiv);
      });
    }

    // Handle TOTS
    if (season.tots && season.tots.gracze) {
      const totsDiv = document.createElement('div');
      totsDiv.className = 'hof__content--tots';
      const totsHeader = document.createElement('h3');
      totsHeader.textContent = season.tots.title;
      const totsHr = document.createElement('hr');
      const totsPlayers = document.createElement('div');
      totsPlayers.className = 'hof__content--totsPlayers';
      totsDiv.appendChild(totsHr);
      totsDiv.appendChild(totsHeader);
      totsDiv.appendChild(totsPlayers);
      for (const [role, player] of Object.entries(season.tots.gracze)) {
        const totsPlayerDiv = document.createElement('div');
        totsPlayerDiv.className = 'hof__content--totsPlayer';
        const totsPlayerIcon = document.createElement('img');
        totsPlayerIcon.className = 'rola';
        totsPlayerIcon.alt = `Ikona ${role}`;
        totsPlayerIcon.src = `/images/linie/${role}.png`;
        const totsPlayerP = document.createElement('p');
        totsPlayerP.textContent = player;

        totsPlayerDiv.appendChild(totsPlayerIcon);
        totsPlayerDiv.appendChild(totsPlayerP);
        totsPlayers.appendChild(totsPlayerDiv);
        totsDiv.appendChild(totsPlayers);
        accordionDiv.appendChild(totsDiv);
      }
    }

    seasonDiv.appendChild(accordionDiv);
    hofContent.appendChild(seasonDiv);
  });
}

// Fetch the JSON data
fetch('hof.json')
  .then(response => response.json())
  .then(json => {
    data = json; // Assign fetched data to global variable
    renderAccordion(data); // Pass the data to renderAccordion
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });