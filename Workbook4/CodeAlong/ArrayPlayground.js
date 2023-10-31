let gregsComputersSimple = [
    // Detail level 1
    'Apple Macbook Pro 16"',
    "Acer Helios 500",
    "Chromebook",
    "HP touchscreen",
    'Apple Macbook Pro 15.3"',
];

let gregsComputersComplex = [
    {
        brand:"Apple",
        model:"16\" macbook pro",
        year: 2021,
        description: "",
        specifications: {
            memory: [
                {
                    brand:"",
                    size: "8gb",
                    speed:2100,
                    manufactureDate: {
                        year:2020,
                        month: 1,
                        day: 3
                    }
                }, {
                    brand:"",
                    size: "8gb",
                    speed:2100,
                    manufactureDate: {
                        year:2020,
                        month: 1,
                        day: 10
                    }
                }
            ],
            storage: [
                
            ],
            accessories: [

            ]
        }
    },
    {
        brand:"Acer",
        model:"Helios 500",
        year: 2021,
        description: ""
    }
];


function getAverage(scores){
    console.log(scores);
}

getAverage([92, 98, 84, 76, 89, 99, 100]);