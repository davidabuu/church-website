//API EndPoints

export const Login = {
  userLogin: "Authentication/Login",
};

export const Events = {
  getAllEvents: "Event/GetAllEvents",
  deleteSingleEvent: `Event/DeleteAnEvent`,
  addEvent: "Event/AddNewEvent",
};

export const ImageData = {
  getAllImages: "Image/images",
  addImage: "Image/upload",
  deleteImage: "Image/images",
};

export const MembersApi = {
  getAllMembers: "Association/GetAllAssociations",
  addMembers: "Association/AddNewAssociation",
  updateMembers: "Association/UpdateAnAssociation",
};
