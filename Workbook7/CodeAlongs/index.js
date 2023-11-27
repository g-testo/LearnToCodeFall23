// Get => Select
// Post => Insert
// Put => Update
// Delete => Delete

// Resource: Customer
// Get
    // /api/customers
// Get
    // /api/customers/1
// Post
    // /api/customers
    // Sent with data in the body
    // {
    //     "name": "David"
    //     "username": "DavidTheGreat"
    // }
// Put
    // /api/customers/1
    // Sent with data in the body
    // {
    //     "username": "DavidTheGOAT"
    // }
// Delete
    // /api/customers/1

// Resource: Car

// Get
    // /api/cars
    // /api/cars?make="Honda"
// Get
    // /api/cars/3182
// Post- Creating
    // /api/cars
    // Send the car data to create
    // {
    //     "name": null,
    //     "make": "Honda",
    //     "model": "Accord",
    //     "color": "White",
    //     "year": 2000,
    //     "size": "Sedan"
    // }
// Put- Updating
    // /api/cars/3182
    // Send the car data to update
    // {
    //     "name": "Joshua"
    // }
// Delete
    // /api/cars/3182

// News website
// Resource: article

// get
    // /api/articles
    // /api/arcicles?topic="Cyber Monday"
// get
    // /api/articles/16
// post
    // /api/articles
    // Sent with data
    // {
    //     "topic": "Cyber Monday",
    //     "reporter": "Victoria",
    //     "title": "Biggest sale ever!",
    //     "content": "abc..."
    // }
// put - patch
    // /api/articles/5
    // Sent with data
    // {
    //     "title": "GOAT sale of the year!"
    // }
// delete
    // /api/articles/11

