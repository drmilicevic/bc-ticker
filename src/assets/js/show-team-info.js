document.addEventListener('DOMContentLoaded', () => {
  let allTeams = document.querySelectorAll('[data-team]');
  allTeams.forEach(team => {
    team.addEventListener('click', () => {
      const sport = document.querySelector('.ticker-wrap').dataset.sport;

      fetch(`${ajaxObj.apiUrl}/${sport}/?met=Teams&APIkey=${ajaxObj.apiKey}&teamId=${team.dataset.team}`)
        .then(response => response.json())
        .then(data => {
          const modal = document.createElement("div");
          modal.setAttribute('id', 'modal');

          const players = data.result[0].players;
          modal.innerHTML = `<h4 style="flex: 1 1 100%; margin: 0;">${team.innerHTML}</h4><span id="close">X</span><div id="players"></div>`;
          document.querySelector('body').appendChild(modal);

          players.forEach(player => {
            document.querySelector('#players').innerHTML += `<div>${player.player_number} ${player.player_name} - ${player.player_type}</div>`
          });

          const closeBtn = document.querySelector('#close');
          closeBtn.addEventListener('click', () => {
            closeBtn.parentElement.remove();
          });
        })
    });
  });
});