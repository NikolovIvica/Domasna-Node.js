

const users = [{name: 'ivica', lastName: 'niko', email: '12@htomail.com'}];

module.exports = {

    index: (req, res) => {
        res.render('../views/index', { users: users });
        
    },

    userView:  (req, res) => {
        const user = users.find(user => user.id == req.params.id);
        res.render('../views/userView', {user: user});
        
    },

    create: (req, res) => {
        res.render('../views/create');
    },

    postCreate: (req , res) => {
        
        const user = req.body; 
        user.id = users.length + 1;

        users.push(user);
        res.redirect('/');
    
    }




}