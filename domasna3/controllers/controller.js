

const users = [{id: 1 ,name: 'ivica', lastname : 'nikolov', ssn: 1234}];

module.exports = {

    index: (req, res) => {
        res.render('../views/index', { users: users });
        
    },

    userView:  (req, res) => {
        const user = users.find(user => user.id == req.params.id);
        res.render('../views/userView', {user: user});
        
    },
    editUser:  (req, res) => {
        const user = users.find(user => user.id == req.params.id);
        res.render('../views/update', {user: user});
        
    },

    create: (req, res) => {
        res.render('../views/create');
    },

    postCreate: (req , res) => {
        
        const user = req.body; 
        user.id = users.length + 1;

        users.push(user);
        res.redirect('/');
    
    },

    putEditUser: (req, res) => {
        //Find index of specific object using findIndex method.    
        
        userIndex = users.findIndex((user => user.id == req.params.id));
        users[userIndex] = req.body;

        res.send({
            success: true
        });
    },

    deleteUser: (req,res) =>{
        
        userIndex = users.findIndex((user => user.id == req.params.id));
        users.splice(userIndex , 1)
        res.redirect('/')
    }
}