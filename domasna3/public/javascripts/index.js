function updateUser(userId){
    console.log(userId);
    const form = document.getElementById('form');

    const user = {
        name: form.name.value,
        lastname: form.lastname.value,
        ssn: form.ssn.value,
        email: form.email.value
    }
    
    fetch(`http://localhost:3000/user/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        if (data.success) {
            window.location.replace("http://localhost:3000/");
        }
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

// function deleteUser(usedId){
// fetch(`http://localhost:3000/user/${userId}/delete`, {
//         method: 'DELETE',
//         body: JSON.stringify(user),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }).then(function (response) {
            // userIndex = users.findIndex((user => user.id == req.params.id));
            // users.splice(userIndex , 1)
            // res.redirect('/')

//         res.send({
//             success: true
//         });

//     })
// }