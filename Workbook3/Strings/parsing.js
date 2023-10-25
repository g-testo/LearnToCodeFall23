function parseAndDisplayName(fullName){
    let spaceIndex = fullName.indexOf(" ");

    let firstName = fullName.substring(0, spaceIndex);
    let lastName = fullName.substring(spaceIndex+1);
    
    console.log("Name: " + fullName);
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);    
}
parseAndDisplayName("Brenda Kaye");