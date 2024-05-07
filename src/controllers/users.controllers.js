const catchError = require('../utils/catchError');
const Users = require('../models/Users');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const users = await Users.findAll();
    return res.json(users);
});

const create = catchError(async(req, res) => {
    
    const { first_name, last_name, email, password, birthday } = req.body;
    const users =  await Users.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
   });

   return res.status(201).json(users);
});

const  getOne = catchError(async(req, res) => {
    const {id} = req.params;
    const users =  await Users.findByPk(id);
    return res.json(users);
});

const  remove = catchError(async(req, res) => {
    const {id} = req.params;
    await Users.destroy({ where: { id:id }});
    return res.sendStatus(204);
})

const  update = catchError(async(req, res) => {
    const {first_name, last_name, email, password, birthday } = req.body;
    const {id} = req.params;
    const users =  await Users.update({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        birthday: birthday,
        }, { where: { id:id}, returning: true});
    return res.json(users[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}