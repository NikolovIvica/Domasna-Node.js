const moduleFaker = require('@faker-js/faker');


var niza = []
for (i = 0; i <= 10; i++) {
    let name = moduleFaker.faker.name.firstName();
    let email = moduleFaker.faker.internet.email();
    let street = moduleFaker.faker.address.street();
    let phone = moduleFaker.faker.phone.phoneNumber();
    let city = moduleFaker.faker.address.city();

    niza.push({
        name: name,
        email: email,
        address: street,
        phone: phone,
        city: city
    });

    console.log(niza);


};