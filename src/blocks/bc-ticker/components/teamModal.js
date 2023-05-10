const teams = document.querySelectorAll('.teams');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
teams.forEach((team) => {
    team.addEventListener('click', (e) => {
        e.preventDefault();
        const teamId = team.dataset.team;
        const sport = team.dataset.sport;
        if(sport == "football") {
            fetch(ticker_ajax.ajaxurl, {
                method: "POST",
                headers: new Headers( {
                    'Content-Type': 'application/x-www-form-urlencoded',
                } ),
                body: `action=bc_get_roster&teamId=${teamId}`,
            })
                .then((response) => response.json())
                .then(result => {
                    const teamRoster = result.data.output;
                    console.log(teamRoster);
                    modalTitle.innerHTML = "Team Roster";

                    modalBody.innerHTML = teamRoster;

                });
        }
    })
})