const router = require('express').Router();

const { getUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/users')

router.get('/users', getUsers);
router.get('/users/:id_user', getUser);
router.post('/users', createUser);
router.delete('/users/:id_user', deleteUser);
router.patch('/users/:id_user', updateUser);

module.exports = router;