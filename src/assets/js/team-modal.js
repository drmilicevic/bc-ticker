const teams = document.querySelectorAll('.teams');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const modalClose = document.querySelector('.btn-close');

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
                    modalTitle.innerHTML = "Match Odds";
                    modalBody.innerHTML = result.data.output;
                }) ;
        }
    })
})

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modalTitle.innerHTML = "";
    modalBody.innerHTML = "";
});