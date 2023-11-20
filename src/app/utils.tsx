//API EndPoints

export const Login = {
    userLogin:'Authentication/Login'
}

export const Events = {
    getAllEvents:'Event/GetAllEvents',
    deleteSingleEvent:`Event/DeleteAnEvent`,
    addEvent:'Event/AddNewEvent'
}


export const MembersRegsitration = {
    getAllMembers:'Member/GetAllMembers',
    deleteSingleMember:'Member/DeleteAMember',
    addNewMember:'Member/AddNewMember',
    verify:'Member/Verify'
}