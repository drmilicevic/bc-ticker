import Edit from "./edit";
const BcAuthorCard = {
  title: 'BC Author Card',
  icon: 'admin-page',
  category: 'bc-theme',
  attributes: {
    finalOutput: {
      type: "string",
      default: ""
    },
    author: {
      type: "string",
      default: "0"
    },
    avatar: {
      type: "boolean",
      default: true
    },
    authorData: {
      type: "boolean",
      default: false
    },
    authorName: {
      type: "boolean",
      default: true
    },
    totalNumberOfPosts: {
      type: "boolean",
      default: true
    },
    authorDesc: {
      type: "boolean",
      default: true
    },
    showPosts: {
      type: "boolean",
      default: false
    },
    numberOfPosts: {
      type: "string",
      default: 1
    },
    loadMore: {
      type: "string",
      default: 1
    },
    linkToAuthor: {
      type: "boolean",
      default: false
    },


  },
  edit: props => Edit(props)
};
export default BcAuthorCard;