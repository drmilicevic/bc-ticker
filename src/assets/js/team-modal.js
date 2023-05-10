const teams = document.querySelectorAll('.teams');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
teams.forEach((team) => {
    team.addEventListener('click', (e) => {
        e.preventDefault();
        const teamId = team.dataset.team;
        const sport = team.dataset.sport;
        const matchId = team.dataset.match;
        if(sport == "football") {
            fetch(ajaxObj.ajaxurl, {
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

        if(sport == "basketball") {
            fetch(ajaxObj.ajaxurl, {
                method: "POST",
                headers: new Headers( {
                    'Content-Type': 'application/x-www-form-urlencoded',
                } ),
                body: `action=bc_get_basketball_odds&matchId=${matchId}`,
            })
                .then((response) => response.json())
                .then(result => {
                    console.log(result);
                    modalTitle.innerHTML = "Match Odds";
                    modalBody.innerHTML = result.data.output;

                }) ;
        }
    })
})