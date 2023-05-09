import Edit from "./edit";
const BcTicker = {
  title: 'BC Ticker',
  icon: 'admin-page',
  category: 'bc-theme',
  attributes: {
    sport: {
      type: "string",
      default: "football"
    },
    country: {
      type: "string",
      default: "41"
    },
    league: {
      type: "string",
      default: ""
    },
    scrollamount: {
      type: "number",
      default: ""
    }
  },
  edit: props => Edit(props)
};
export default BcTicker;