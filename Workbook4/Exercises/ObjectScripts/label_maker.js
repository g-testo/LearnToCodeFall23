let info = {
    name: "Gregorio",
    address: "123 Center Blvd",
    city: "New York City",
    state: "New York",
    zip: 11101,
};

function printContact(givenInfo){
    // >>>
    console.log(givenInfo.name);
    console.log(givenInfo.address);
    console.log(givenInfo.city + ", " + givenInfo.state + " " + givenInfo.zip);
    // >>>
    console.log(givenInfo.name + "\n" + givenInfo.address + "\n" + givenInfo.city + ", " + givenInfo.state + " " + givenInfo.zip)
    // >>>
    console.log(`${givenInfo.name}
${givenInfo.address}
${givenInfo.city}, ${givenInfo.state} ${givenInfo.zip}`);

console.log(`${givenInfo.name}\n${givenInfo.address}\n${givenInfo.city}, ${givenInfo.state} ${givenInfo.zip}`);
    // >>>
}

printContact(info);