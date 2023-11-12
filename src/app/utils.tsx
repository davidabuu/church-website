const apiUrl: string = process.env.BASE_URL || "";

//API EndPoints

export const Login = {
    userLogin:'Authentication/Login'
}

export const Events = {
    getAllEvents:'Event/GetAllEvents',
    deleteSingleEvent:`Event/DeleteAnEvent`,
    addEvent:'Event/AddNewEvent'
}
