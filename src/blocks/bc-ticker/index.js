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
      default: "44"
    },
    league: {
      type: "string",
      default: "152"
    },
    scrollamount: {
      type: "number",
      default: 80
    },
    bgColor: {
      type: "string",
      default: "#000"
    },
    textColor: {
      type: "string",
      default: "#FFF"
    },
    fontSize: {
      type: "string",
      default: "12"
    },
    nextNumberOfDays: {
      type: 'number',
      default: 5
    }
  },
  edit: props => Edit(props)
};
export default BcTicker;