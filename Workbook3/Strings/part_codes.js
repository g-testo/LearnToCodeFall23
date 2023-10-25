let code = "ACE:1-12";

function getSupplier(code){
    let colonIndex = code.indexOf(":");
    return code.slice(0, colonIndex);
}

let supplier = getSupplier(code);

console.log(supplier);

function getProductNumber(code){
    let colonIndex = code.indexOf(":");
    let hyphenIndex = code.indexOf("-");
    return code.slice(colonIndex+1, hyphenIndex);
}

let productNumber = getProductNumber(code);

console.log(productNumber)

function getSize(code){
    let hyphenIndex = code.indexOf("-");
    return code.slice(hyphenIndex+1);
}

let size = getSize(code);

let sizeDescription;

switch(size){
    case "L":
        sizeDescription = "the large (L)";
        break;
    case "M":
        sizeDescription = "the medium (M)";
        break;
    case "S":
        sizeDescription = "the small (S)";
        break;
    default:
        sizeDescription = "the size " + size;
}
console.log(sizeDescription);


console.log(`${sizeDescription} part ${productNumber} is supplied by ${supplier}`)