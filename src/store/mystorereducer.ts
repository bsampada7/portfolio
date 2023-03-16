type stateType = any;
// {
//   menuOpen: boolean;
//   scrollPage: ScrollPage;
// };
type actionType = {
  type: string;
  payload: any;
};

export enum ScrollPage {
  Introduction = "Introduction",
  Skills = "Skills",
  Education = "Education",
  Experience = "Experience",
  Projects = "Projects",
  Contact = "Contact",
}

export const initialState: stateType = {
  menuOpen: false,
  scrollPage: ScrollPage.Introduction,
  canvasClass:''
};

const MyStoreReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "Get":
      return {
        ...state,
      };
      break;

    case "Post":
      return {
        ...state,
        ...action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default MyStoreReducer;
