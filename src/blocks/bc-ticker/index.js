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
    },
    bgColor: {
      type: "string",
      default: "#fff"
    },
    textColor: {
      type: "string",
      default: "#000"
    },
    fontSize: {
      type: "string",
      default: "12"
    }
  },
  edit: props => Edit(props)
};
export default BcTicker;