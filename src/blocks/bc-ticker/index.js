import Edit from "./edit";

const BcTicker = {
  title: 'BC Ticker',
  icon: 'admin-page',
  category: 'bc-theme',
  attributes: {
      sport: {
        type: 'string',
        default: 'football'
      },
      countryId: {
        type: 'string',
        default: 41
      },
      title: {
        type: 'string',
        default: 'Upcoming Matches'
      },
      dateFrom: {
        type: 'string',
        default: '2023-05-01'
      },
      nextNumberOfDays: {
        type: 'number',
        default: 1
      },
      leagueId: {
          type: 'string',
          default: 207
      }

  },
  edit: Edit
};
export default BcTicker;
