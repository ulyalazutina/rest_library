const User = require('../models/user');

const getUsers = (request, response) => {
    return User.find({}).then(
        (data)=>{ response.status(200).send(data)}
    ).catch(e => response.status(500).send(e.message));
};

const getUser = (request, response) => {
    const {id_user} = request.params;
    return User.findById(id_user).then(
        (user)=>{ response.status(200).send(user)}
    ).catch(e => response.status(404).send(e.message));
};

const createUser = (request, response) => {
    return User.create({ ...request.body}).then(
        (user)=>{ response.status(201).send(user)}
    ).catch(e => response.status(500).send(e.message));
};

const updateUser = (request, response) => {
    const {id_user} = request.params;
    return User.findByIdAndUpdate(id_user,{ ...request.body}).then(
        (user)=>{ response.status(200).send(user)}
    ).catch(e => response.status(404).send(e.message));
};

const deleteUser = (request, response) => {
    const {id_user} = request.params;
    return User.findByIdAndDelete(id_user).then(
        ()=>{ response.status(200).send('Success')}
    ).catch(e => response.status(404).send(e.message));
};

module.exports = { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}