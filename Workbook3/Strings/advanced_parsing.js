function parseAndDisplayName(fullName){
    let fullNameSpaceIndex = fullName.indexOf(" ");

    console.log("Name: " + fullName);
    if(fullNameSpaceIndex === -1){
        console.log("Only Name: " + fullName);
    } else {
        let firstName = fullName.slice(0, fullNameSpaceIndex);
        let partialName = fullName.slice(fullNameSpaceIndex+1);
        let partialNameSpaceIndex = partialName.indexOf(" ");

        console.log("First Name: " + firstName);

        if(partialNameSpaceIndex === -1){

            console.log("Last Name: " + partialName);

        } else {
            let middleName = partialName.slice(0, partialNameSpaceIndex);
            let lastName = partialName.slice(partialNameSpaceIndex+1);
            
            console.log("Middle Name: " + middleName);
            console.log("Last Name: " + lastName);
        }
    }
}

parseAndDisplayName("Gregory David Testo");