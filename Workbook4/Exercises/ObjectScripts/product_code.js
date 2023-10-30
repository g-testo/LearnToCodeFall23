// Input1: "XYZ:1234-L"
// Input2: "ABC:5432-M"

// Output:
// {
//     supplierCode: "XYZ",
//     productNumber: "1234",
//     size: "L"
// }

function parsePartCode(partCode) {
    let colonIndex = partCode.indexOf(":");
    let hyphenIndex = partCode.indexOf("-");
    
    return {
        supplierCode: partCode.slice(0, colonIndex),
        productNumber: partCode.slice(colonIndex + 1, hyphenIndex),
        size: partCode.slice(hyphenIndex + 1),
    };
}

let part1Obj = parsePartCode("XYZ:1234-L");
console.log(
    "Supplier: " + part1Obj.supplierCode + " Product Number: " + part1Obj.productNumber + " Size: " + part1Obj.size
);

let part2Obj = parsePartCode("ABC:5432-M");
console.log(
    "Supplier: " + part2Obj.supplierCode + " Product Number: " + part2Obj.productNumber + " Size: " + part2Obj.size
);
