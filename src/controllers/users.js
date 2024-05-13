const getUsers = (request, response) => {
    //Get all users
};

const getUser = (request, response) => {
    const {id_user} = request.params;
    response.status(200);
    response.send(`User qith id ${id_user}`);
};

const createUser = (request, response) => {
    //Create new user
    response.status(201);
    response.send(request.body);
};

const updateUser = (request, response) => {
    //Update user
};

const deleteUser = (request, response) => {
    //Delete user
};

module.exports = { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}