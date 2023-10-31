const products = [
    {
      id: 1,
      title: "Vintage Ceramic Mug",
      description: "A beautiful vintage ceramic mug from the 1980s. Perfect for your morning coffee.",
      details: {
        dimensions: {
          height: "4 inches",
          diameter: "3 inches",
        },
        weight: "300 grams",
        material: "Ceramic",
        origin: "Italy",
        brand: "AntiqueMugs Inc.",
        manufacturingDate: "1985-05-12",
      },
      seller: {
        id: 101,
        name: "Alice",
        rating: 4.8,
        reviews: 320,
        location: {
          city: "Los Angeles",
          state: "CA",
          country: "USA",
          postalCode: "90001",
        },
      },
      price: {
        amount: 14.99,
        currency: "USD",
        discount: {
          percentage: 10,
          endDate: "2023-11-01",
        },
      },
      images: [
        {
          url: "https://example.com/images/vintage_mug_1.jpg",
          isPrimary: true,
          description: "Front view of the mug",
        },
        {
          url: "https://example.com/images/vintage_mug_2.jpg",
          isPrimary: false,
          description: "Bottom stamp of the mug",
        },
      ],
      category: {
        primary: "Home & Kitchen",
        subcategories: ["Kitchenware", "Mugs"],
      },
      condition: "Used",
      bids: [
        {
          userId: 201,
          amount: 12.99,
          time: "2023-10-29 14:32:00",
        },
        {
          userId: 202,
          amount: 13.99,
          time: "2023-10-30 09:15:10",
        },
      ],
      shipping: {
        methods: [
          {
            type: "Standard",
            cost: 5.00,
            estimatedDelivery: "2023-11-10",
          },
          {
            type: "Express",
            cost: 15.00,
            estimatedDelivery: "2023-11-05",
          },
        ],
        returns: {
          accepted: true,
          policy: "Return within 14 days of delivery.",
        },
      },
      location: "Los Angeles, CA",
      quantityAvailable: 1,
      datePosted: "2023-10-25",
      tags: ["vintage", "ceramic", "1980s", "coffee"],
      reviews: [
        {
          userId: 303,
          rating: 5,
          comment: "Love this mug! It's just like the one my grandma had.",
          date: "2023-10-28",
        },
        {
          userId: 304,
          rating: 4,
          comment: "Good quality, but it's a bit smaller than I expected.",
          date: "2023-10-27",
        },
      ],
    },
    // ... more products ...
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
  