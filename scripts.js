const data = [
  {
    mainCategory: "Automotive, Car & Accessories",
    subcategories: [
      {
        name: "Automotive - Helmets & Riding Gloves",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "8.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Automotive - Tyres & Rims",
        commissionRates: [
          { "Referral Fee Percentage": "5.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "7.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Automotive Vehicles - 2-Wheelers, 4-Wheelers and Electric Vehicles",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Automotive – Car and Bike parts, Brakes, Styling and body fittings, Transmission, Engine parts, Exhaust systems, Interior fitting, Suspension and Wipers",
        commissionRates: [
          { "Referral Fee Percentage": "13.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "14.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Automotive – Cleaning kits (Sponges, Brush, Duster, Cloths and liquids), Car interior & exterior care (Waxes, polish, Shampoo and other), Car and Bike Lighting and Paints",
        commissionRates: [
          { "Referral Fee Percentage": "9.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "12.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Automotive Accessories (Floor Mats, Seat/Car/Bike Covers) and Riding Gear (Face Covers and Gloves)",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "15.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Vehicle Tools and Appliances",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "7.5%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "8.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Oils, Lubricants",
        commissionRates: [
          { "Referral Fee Percentage": "8.5%", priceRange: "All" },
        ],
      },
      {
        name: "Automotive – Batteries and air fresheners",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "7.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "8.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Car Electronics Devices",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "9.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "10%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Car Electronics Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "10.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "11%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "13%", priceRange: "> 1000" },
        ],
      },
    ],
  },
  {
    mainCategory: "Baby Products, Toys & Education",
    subcategories: [
      {
        name: "Baby Hardlines - Swings, Bouncers and Rockers, Carriers, Walkers, Baby Safety - Guards & Locks, Baby Room Décor, Baby Furniture, Baby Car Seats & Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "8.5%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "6%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "7.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Baby Strollers",
        commissionRates: [
          { "Referral Fee Percentage": "4%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "6%", priceRange: "> 300 and <= 1000" },
          { "Referral Fee Percentage": "10%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Baby Diapers",
        commissionRates: [
          { "Referral Fee Percentage": "5.0%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "5.5%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "9.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Toys - Drones",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "16%", priceRange: "> 300 and <= 500" },
          {
            "Referral Fee Percentage": "11.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "12%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Toys - Balloons and Soft Toys",
        commissionRates: [
          { "Referral Fee Percentage": "11.0%", priceRange: "All" },
        ],
      },
    ],
  },
  {
    mainCategory: "Books, Music, Movies, Video Games, Entertainment",
    subcategories: [
      {
        name: "Books",
        commissionRates: [
          { "Referral Fee Percentage": "3%", priceRange: "<= 250" },
          { "Referral Fee Percentage": "4.5%", priceRange: "> 250 and <= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "13.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Movies",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "All" },
        ],
      },
      {
        name: "Music",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "All" },
        ],
      },
      {
        name: "Musical Instruments - Guitars",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "Musical Instruments - Keyboards",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "All" },
        ],
      },
      {
        name: "Musical Instruments - Microphones",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "All" },
        ],
      },
      {
        name: "Musical Instruments - Others",
        commissionRates: [
          { "Referral Fee Percentage": "10.5%", priceRange: "All" },
        ],
      },
      {
        name: "Musical Instruments - DJ & VJ Equipment, Recording and Computer, Cables & Leads, PA & Stage",
        commissionRates: [
          { "Referral Fee Percentage": "10.5%", priceRange: "All" },
        ],
      },
      {
        name: "Video Games - Online game services",
        commissionRates: [
          { "Referral Fee Percentage": "2%", priceRange: "All" },
        ],
      },
      {
        name: "Video Games - Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "10.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "13.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Video Games - Consoles",
        commissionRates: [
          { "Referral Fee Percentage": "7.0%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "9.0%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Video Games",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "All" },
        ],
      },
    ],
  },
  {
    mainCategory: "Industrial, Medical, Scientific Supplies & Office Products",
    subcategories: [
      {
        name: "Business and Industrial Supplies - Scientific Supplies",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "11.5%",
            priceRange: "> 300 and <= 15000",
          },
          { "Referral Fee Percentage": "7%", priceRange: "> 15000" },
        ],
      },
      {
        name: "OTC Medicine",
        commissionRates: [
          { "Referral Fee Percentage": "12.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "15.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Masks",
        commissionRates: [
          { "Referral Fee Percentage": "7%", priceRange: "All" },
        ],
      },
      {
        name: "Weighing Scales & Fat Analyzers",
        commissionRates: [
          { "Referral Fee Percentage": "15.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "10.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "3D Printers",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "All" },
        ],
      },
      {
        name: "Business and Industrial Supplies - Material Handling Equipment, Janitorial & Sanitation, Medical & Dental Supplies, Commercial kitchen and refrigeration Equipment",
        commissionRates: [
          { "Referral Fee Percentage": "5.5%", priceRange: "All" },
        ],
      },
      {
        name: "Business and Industrial Supplies - Electrical Testing, Dimensional Measurement, Thermal Printers, Barcode Scanners",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Business and Industrial Supplies - Power tools & accessories, Welding machines, Microscopes, Industrial Electrical products",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "Occupational Safety Supplies (Mask, gloves, Safety shoes, Face shields & other PPE products)",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Stethoscopes",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "All" },
        ],
      },
      {
        name: "Packing materials",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Power & hand Tools and Water Dispenser",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "Office products - Office supplies",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "11%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Office products - Electronic Devices",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "10.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Office products - Arts and Crafts",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "11%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Office products - Writing Instruments",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "11%", priceRange: "> 300 and <= 1000" },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
    ],
  },

  {
    mainCategory:
      "Clothing, Fashion, Fashion Accessories, Jewellery, Luggage, Shoes",
    subcategories: [
      {
        name: "Apparel - Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "19%", priceRange: "> 500" },
        ],
      },
      {
        name: "Apparel - Sweat Shirts and Jackets",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "20%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "24%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Apparel - Shorts",
        commissionRates: [
          { "Referral Fee Percentage": "16.5%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "13.5%",
            priceRange: "> 300 and <= 500",
          },
          {
            "Referral Fee Percentage": "23.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "24%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Apparel - Baby",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "17.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "20%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Apparel - Ethnic wear",
        commissionRates: [
          { "Referral Fee Percentage": "12.5%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "7.5%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "17.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Apparel - Other innerwear",
        commissionRates: [
          { "Referral Fee Percentage": "12%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "16.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "18.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Apparel - Sleepwear",
        commissionRates: [
          { "Referral Fee Percentage": "13.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "11%", priceRange: "> 300 and <= 500" },
          {
            "Referral Fee Percentage": "16.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "19%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Apparel - Sarees and Dress Materials",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "16.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "23%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Apparel - Men's T-shirts (except Polos, Tank tops and full sleeve tops)",
        commissionRates: [
          { "Referral Fee Percentage": "13.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "21%", priceRange: "> 500" },
        ],
      },
      {
        name: "Apparel - Womens' Innerwear / Lingerie",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "14%", priceRange: "> 300 and <= 500" },
          {
            "Referral Fee Percentage": "19.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "15%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Backpacks",
        commissionRates: [
          { "Referral Fee Percentage": "12.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "13.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Eyewear - Sunglasses, Frames and zero power eye glasses",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "15%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "18.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Fashion Jewellery",
        commissionRates: [
          { "Referral Fee Percentage": "22.5%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "24%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Fine Jewellery - Gold Coins",
        commissionRates: [
          { "Referral Fee Percentage": "3%", priceRange: "All" },
        ],
      },
      {
        name: "Fine Jewellery - studded",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "Fine Jewellery - unstudded and solitaire",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Silver Jewellery",
        commissionRates: [
          { "Referral Fee Percentage": "10.5%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "13.0%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Flip Flops, Fashion Sandals and Slippers",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "15%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Handbags",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "11%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "12%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Luggage - Suitcase & Trolleys",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "6.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "5.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Luggage - Travel Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "12.0%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "9.0%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "10.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Kids shoes",
        commissionRates: [
          { "Referral Fee Percentage": "10.0%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "14.0%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "16.0%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Shoes",
        commissionRates: [
          { "Referral Fee Percentage": "15%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "16%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "16.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Shoes - Sandals & Floaters",
        commissionRates: [
          { "Referral Fee Percentage": "10.5%", priceRange: "All" },
        ],
      },
      {
        name: "Wallets",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "12.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "12%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Watches",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "All" },
        ],
      },
    ],
  },

  {
    mainCategory: "Electronics (Camera, Mobile, PC, Wireless) & Accessories",
    subcategories: [
      {
        name: "Cables and Adapters",
        commissionRates: [
          { "Referral Fee Percentage": "22.0%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "17.0%",
            priceRange: "> 300 and <= 500",
          },
          { "Referral Fee Percentage": "20.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Camera Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "13%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "13.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Camera Lenses",
        commissionRates: [
          { "Referral Fee Percentage": "7%", priceRange: "All" },
        ],
      },
      {
        name: "Camera and Camcorder",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Cases, Covers, Skins, Screen Guards",
        commissionRates: [
          { "Referral Fee Percentage": "3%", priceRange: "<= 150" },
          { "Referral Fee Percentage": "19%", priceRange: "> 150 and <= 300" },
          { "Referral Fee Percentage": "23%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "25%", priceRange: "> 500" },
        ],
      },
      {
        name: "Desktops",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "All" },
        ],
      },
      {
        name: "Electronic Accessories (Electronics, PC & Wireless)",
        commissionRates: [
          { "Referral Fee Percentage": "17%", priceRange: "All" },
        ],
      },
      {
        name: "Electronic Devices (except TV, Camera & Camcorder, Camera Lenses and Accessories, GPS Devices, Speakers)",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "All" },
        ],
      },
      {
        name: "Entertainment Collectibles",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "17%", priceRange: "> 300" },
        ],
      },
      {
        name: "Fashion Smartwatches",
        commissionRates: [
          { "Referral Fee Percentage": "15.5%", priceRange: "All" },
        ],
      },
      {
        name: "GPS Devices",
        commissionRates: [
          { "Referral Fee Percentage": "13.5%", priceRange: "All" },
        ],
      },
      {
        name: "Hard Disks",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "All" },
        ],
      },
      {
        name: "Headsets, Headphones and Earphones",
        commissionRates: [
          { "Referral Fee Percentage": "18%", priceRange: "All" },
        ],
      },
      {
        name: "Keyboards and Mouse",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "<= 2800" },
          { "Referral Fee Percentage": "17%", priceRange: "> 2800" },
        ],
      },
      {
        name: "Kindle Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "25%", priceRange: "All" },
        ],
      },
      {
        name: "Laptop Bags & Sleeves",
        commissionRates: [
          { "Referral Fee Percentage": "12%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "13%", priceRange: "> 500" },
        ],
      },
      {
        name: "Laptop and Camera Battery",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "All" },
        ],
      },
      {
        name: "Laptops",
        commissionRates: [
          { "Referral Fee Percentage": "6.0%", priceRange: "<= 70000" },
          { "Referral Fee Percentage": "7.0%", priceRange: "> 70000" },
        ],
      },
      {
        name: "Memory Cards",
        commissionRates: [
          { "Referral Fee Percentage": "16%", priceRange: "All" },
        ],
      },
      {
        name: "Mobile phones",
        commissionRates: [
          { "Referral Fee Percentage": "5.5%", priceRange: "All" },
        ],
      },
      {
        name: "Tablets (including Graphic Tablets)",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 12000" },
          { "Referral Fee Percentage": "9%", priceRange: "> 12000" },
        ],
      },
      {
        name: "Modems & Networking Devices",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "All" },
        ],
      },
      {
        name: "Monitors",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "All" },
        ],
      },
      {
        name: "PC Components (RAM, Motherboards)",
        commissionRates: [
          { "Referral Fee Percentage": "5.5%", priceRange: "All" },
        ],
      },
      {
        name: "Power Banks & Chargers",
        commissionRates: [
          { "Referral Fee Percentage": "20%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "20.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Printers & Scanners",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "All" },
        ],
      },
      {
        name: "Software Products",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "All" },
        ],
      },
      {
        name: "Speakers",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "All" },
        ],
      },
      {
        name: "Television",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "All" },
        ],
      },
      {
        name: "Landline Phones",
        commissionRates: [
          { "Referral Fee Percentage": "7%", priceRange: "All" },
        ],
      },
      {
        name: "Smart Watches & Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "15.5%", priceRange: "All" },
        ],
      },
      {
        name: "USB Flash Drives (Pen Drives)",
        commissionRates: [
          { "Referral Fee Percentage": "16%", priceRange: "All" },
        ],
      },
      {
        name: "Projectors, Home Theatre Systems, Binoculars and Telescopes",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "All" },
        ],
      },
    ],
  },

  {
    mainCategory: "Grocery, Food & Pet Supplies",
    subcategories: [
      {
        name: "Grocery - herbs and spices",
        commissionRates: [
          { "Referral Fee Percentage": "4%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "5.5%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "8.0%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Grocery & Gourmet - Oils",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "9%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Grocery - Dried fruits and nuts",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "8%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Grocery - Hampers and gifting",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "11.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Pet food",
        commissionRates: [
          { "Referral Fee Percentage": "5.5%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "11.5%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Pet Products",
        commissionRates: [
          { "Referral Fee Percentage": "2.0%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "10.5%",
            priceRange: "> 300 and <= 500",
          },
          { "Referral Fee Percentage": "12.0%", priceRange: "> 500" },
        ],
      },
    ],
  },

  {
    mainCategory: "Health, Beauty, Personal Care & Personal Care Appliances",
    subcategories: [
      {
        name: "Beauty - Fragrance",
        commissionRates: [
          { "Referral Fee Percentage": "13.5%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "12.5%",
            priceRange: "> 300 and <= 500",
          },
          { "Referral Fee Percentage": "14%", priceRange: "> 500" },
        ],
      },
      {
        name: "Beauty - Haircare, Bath and Shower",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "5.0%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "8.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Beauty - Makeup",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "4.5%", priceRange: "> 300 and <= 500" },
          {
            "Referral Fee Percentage": "7.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "7%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Face Wash",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "5%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "9.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Moisturizer cream",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "9.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Sunscreen",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "6%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "9.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Deodrants",
        commissionRates: [
          { "Referral Fee Percentage": "8.5%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "6.5%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "7%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Facial steamers",
        commissionRates: [
          { "Referral Fee Percentage": "7%", priceRange: "All" },
        ],
      },
      {
        name: "Prescription Medicine",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "All" },
        ],
      },
      {
        name: "Health & Personal Care (HPC) - Medical Equipment & Contact Lens",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "All" },
        ],
      },
      {
        name: "Health and Personal Care - Ayurvedic products, Oral care, hand sanitizers, Pooja supplies",
        commissionRates: [
          { "Referral Fee Percentage": "5.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "8.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Health & Household - Sports Nutrition and meal replacement shakes",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "All" },
        ],
      },
      {
        name: "Health and Personal Care - Contact lens and reading glasses",
        commissionRates: [
          { "Referral Fee Percentage": "12%", priceRange: "All" },
        ],
      },
      {
        name: "Health and Household - Household Cleaning, Laundry, Air Fresheners, Personal Hygiene (Handwash, Feminine Hygiene, Oral Care)",
        commissionRates: [
          { "Referral Fee Percentage": "4.5%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "7.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "8%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Health and Household - Vitamins & Mineral Health Supplements",
        commissionRates: [
          { "Referral Fee Percentage": "9.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "10.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Luxury Beauty",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "6%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "10%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Car Cradles, Lens Kits and Tablet Cases",
        commissionRates: [
          { "Referral Fee Percentage": "19%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "25%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "27%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Personal Care Appliances - Electric Massagers",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "14.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Personal Care Appliances (Grooming & Styling)",
        commissionRates: [
          { "Referral Fee Percentage": "11.0%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "9.0%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Personal Care Appliances - Glucometer and Glucometer Strips",
        commissionRates: [
          { "Referral Fee Percentage": "5.5%", priceRange: "All" },
        ],
      },
      {
        name: "Personal Care Appliances - Thermometers",
        commissionRates: [
          { "Referral Fee Percentage": "12.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "10.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Personal Care Appliances - Weighing Scales and Fat Analyzers",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "13.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "13%", priceRange: "> 1000" },
        ],
      },
    ],
  },

  {
    mainCategory:
      "Home, Décor, Home Improvement, Furniture, Outdoor, Lawn & Garden",
    subcategories: [
      {
        name: "Bean Bags & Inflatables",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "All" },
        ],
      },
      {
        name: "Mattresses",
        commissionRates: [
          { "Referral Fee Percentage": "25.5%", priceRange: "<= 1000" },
          {
            "Referral Fee Percentage": "16%",
            priceRange: "> 1000 and <= 20000",
          },
          { "Referral Fee Percentage": "13.5%", priceRange: "> 20000" },
        ],
      },
      {
        name: "Rugs and Doormats",
        commissionRates: [
          { "Referral Fee Percentage": "10.5%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "9%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Clocks",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "Wall Art",
        commissionRates: [
          { "Referral Fee Percentage": "5.0%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "13.5%", priceRange: "> 300" },
        ],
      },
      {
        name: "Home - Fragrance & Candles",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Bedsheets, Blankets and covers",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "8.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Home furnishing (Excluding curtain and curtain accessories)",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "All" },
        ],
      },
      {
        name: "Containers, Boxes, Bottles, and Kitchen Storage",
        commissionRates: [
          { "Referral Fee Percentage": "5.0%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "7.5%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "12.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Home improvement - Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "13.5%", priceRange: "All" },
        ],
      },
      {
        name: "Home improvement (excl. accessories), including Home Security Systems",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "All" },
        ],
      },
      {
        name: "Tiles & Flooring Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "All" },
        ],
      },
      {
        name: "Wires (Electrical Wires/cables for house wiring, adhoc usage)",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "Ladders, Kitchen and Bath fixtures",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "All" },
        ],
      },
      {
        name: "Home Storage (Excluding Kitchen Containers, Boxes, Bottles, and Kitchen Storage)",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "14%", priceRange: "> 300 and <= 1000" },
          { "Referral Fee Percentage": "15%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Wallpapers & Wallpaper Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "9%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Home Decor Products",
        commissionRates: [
          { "Referral Fee Percentage": "7.0%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "17.0%", priceRange: "> 300" },
        ],
      },
      {
        name: "Wall Paints and Tools",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "6%", priceRange: "> 300" },
        ],
      },
      {
        name: "Home - Waste & Recycling",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "All" },
        ],
      },
      {
        name: "Craft materials",
        commissionRates: [
          { "Referral Fee Percentage": "2%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Water Purifier and Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 5000" },
          { "Referral Fee Percentage": "7.5%", priceRange: "> 5000" },
        ],
      },
      {
        name: "Water Heaters and Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "<= 5000" },
          { "Referral Fee Percentage": "9%", priceRange: "> 5000" },
        ],
      },
      {
        name: "Home improvement - Kitchen & Bath (Fittings, accessories), Cleaning Supplies, Electricals, Hardware, Building Materials",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "12%", priceRange: "> 300" },
        ],
      },
      {
        name: "Sanitaryware - Toilets, Bathtubs, Basins/Sinks, Bath Mirrors & Vanities, and Shower Enclosures/partitions",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "Home Safety & Security Systems",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "All" },
        ],
      },
      {
        name: "Inverter and Batteries",
        commissionRates: [
          { "Referral Fee Percentage": "4.5%", priceRange: "All" },
        ],
      },
      {
        name: "Cleaning and Home Appliances",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 5000" },
          { "Referral Fee Percentage": "8.5%", priceRange: "> 5000" },
        ],
      },
      {
        name: "Ladders",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "All" },
        ],
      },
      {
        name: "Indoor Lighting – Wall, ceiling fixture lights, lamp bases, lamp shades and Smart Lighting",
        commissionRates: [
          { "Referral Fee Percentage": "14.5%", priceRange: "<= 2000" },
          { "Referral Fee Percentage": "11.5%", priceRange: "> 2000" },
        ],
      },
      {
        name: "Doors and Windows (wooden, metal, PVC/UPVC Doors & Windows)",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "All" },
        ],
      },
      {
        name: "LED Bulbs and Battens",
        commissionRates: [
          { "Referral Fee Percentage": "9.0%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "14.0%", priceRange: "> 300" },
        ],
      },
      {
        name: "Cushion Covers",
        commissionRates: [
          { "Referral Fee Percentage": "8.0%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "10.0%", priceRange: "> 500" },
        ],
      },
      {
        name: "Curtains and Curtain Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "15.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "16.5%", priceRange: "> 300" },
        ],
      },
      {
        name: "Slipcovers and Kitchen Linens",
        commissionRates: [
          { "Referral Fee Percentage": "15.5%", priceRange: "All" },
        ],
      },
      {
        name: "Safes and Lockers with Locking Mechanism",
        commissionRates: [
          { "Referral Fee Percentage": "12%", priceRange: "All" },
        ],
      },
      {
        name: "Lawn & Garden - Solar Panels",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "All" },
        ],
      },
      {
        name: "Lawn & Garden - Leaf blower and Water pump",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "All" },
        ],
      },
      {
        name: "Lawn & Garden - Commercial Agricultural Products",
        commissionRates: [
          { "Referral Fee Percentage": "3.00%", priceRange: "All" },
        ],
      },
      {
        name: "Lawn & Garden- Chemical Pest Control, Mosquito nets, Bird control, Plant protection, Foggers",
        commissionRates: [
          { "Referral Fee Percentage": "7.0%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "9.0%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Lawn & Garden - Solar Devices (Panels, Inverters, Charge controller, Battery, Lights, Solar gadgets)",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "All" },
        ],
      },
      {
        name: "Lawn and Garden - Planters, Fertilisers, Watering and other subcategories",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "10%",
            priceRange: "> 300 and <= 15000",
          },
          { "Referral Fee Percentage": "5%", priceRange: "> 15000" },
        ],
      },
      {
        name: "Lawn and Garden - Plants, Seeds & Bulbs",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "11%", priceRange: "> 500" },
        ],
      },
      {
        name: "Lawn & Garden - Outdoor equipments (Saws, Lawn Mowers, Cultivator, Tiller, String Trimmers, Water Pumps, Generators, Barbeque Grills, Greenhouses)",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "All" },
        ],
      },
    ],
  },

  {
    mainCategory: "Kitchen, Large & Small Appliances",
    subcategories: [
      {
        name: "Kitchen- Non Appliances",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "11.5%", priceRange: "> 300" },
        ],
      },
      {
        name: "Kitchen - Glassware & Ceramicware",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "11%", priceRange: "> 300 and <= 1000" },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Kitchen - Gas Stoves & Pressure Cookers",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 1500" },
          { "Referral Fee Percentage": "10%", priceRange: "> 1500" },
        ],
      },
      {
        name: "Cookware, Tableware & Dinnerware",
        commissionRates: [
          { "Referral Fee Percentage": "7%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "11.5%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Kitchen & Bath fixtures, Cleaning Supplies, Hardware, Electricals and Building Materials",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "12%", priceRange: "> 300" },
        ],
      },
      {
        name: "Large Appliances (excl. Accessories, Refrigerators and Chimneys)",
        commissionRates: [
          { "Referral Fee Percentage": "5.5%", priceRange: "All" },
        ],
      },
      {
        name: "Large Appliances - Accessories",
        commissionRates: [
          { "Referral Fee Percentage": "16%", priceRange: "All" },
        ],
      },
      {
        name: "Large Appliances - Chimneys",
        commissionRates: [
          { "Referral Fee Percentage": "9.5%", priceRange: "All" },
        ],
      },
      {
        name: "Large Appliances – Refrigerators",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Small Appliances",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 5000" },
          { "Referral Fee Percentage": "8%", priceRange: "> 5000" },
        ],
      },
      {
        name: "Fans and Robotic Vacuums",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 3000" },
          { "Referral Fee Percentage": "8%", priceRange: "> 3000" },
        ],
      },
    ],
  },

  {
    mainCategory: "Sports, Gym & Sporting Equipment",
    subcategories: [
      {
        name: "Bicycles",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "6.5%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "7%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "6%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Gym Equipments",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "8%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "10%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "12%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Sports - Cricket and Badminton Equipments, Tennis, Table Tennis, Squash, Football, Volleyball, Basketball, Throwball, Swimming",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "6%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "8%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "8.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Sports Collectibles",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "17%", priceRange: "> 300" },
        ],
      },
      {
        name: "Sports & Outdoors - Footwear",
        commissionRates: [
          { "Referral Fee Percentage": "14%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "14.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "16%", priceRange: "> 1000" },
        ],
      },
    ],
  },

  {
    mainCategory: "Others",
    subcategories: [
      {
        name: "Coin Collectibles",
        commissionRates: [
          { "Referral Fee Percentage": "15%", priceRange: "All" },
        ],
      },
      {
        name: "Silver Coins & Bars",
        commissionRates: [
          { "Referral Fee Percentage": "3%", priceRange: "All" },
        ],
      },
      {
        name: "Furniture - Other products",
        commissionRates: [
          { "Referral Fee Percentage": "15.5%", priceRange: "<= 15000" },
          { "Referral Fee Percentage": "11%", priceRange: "> 15000" },
        ],
      },
      {
        name: "Toys - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "9.5%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "11.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Grocery - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "7%", priceRange: "<= 1000" },
          { "Referral Fee Percentage": "9%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Office - Other products",
        commissionRates: [
          { "Referral Fee Percentage": "10%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "10.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "11.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Personal Care Appliances - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "7.5%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "10.5%",
            priceRange: "> 300 and <= 500",
          },
          { "Referral Fee Percentage": "11%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "7.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Health & Personal Care (HPC) - Other Subcategories",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "All" },
        ],
      },
      {
        name: "Beauty - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "6.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "7%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500" },
        ],
      },
      {
        name: "Health and Personal Care - Other Household Supplies",
        commissionRates: [
          { "Referral Fee Percentage": "4.5%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "6.5%", priceRange: "> 500" },
        ],
      },
      {
        name: "Health and Household - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "11.5%", priceRange: "All" },
        ],
      },
      {
        name: "Business & Industrial Supplies - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "8%", priceRange: "<= 15000" },
          { "Referral Fee Percentage": "5%", priceRange: "> 15000" },
        ],
      },
      {
        name: "Home - Other Subcategories",
        commissionRates: [
          { "Referral Fee Percentage": "17%", priceRange: "All" },
        ],
      },
      {
        name: "Kitchen - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "11.5%",
            priceRange: "> 300 and <= 1000",
          },
          { "Referral Fee Percentage": "12.5%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Lawn and Garden - Other products",
        commissionRates: [
          { "Referral Fee Percentage": "9%", priceRange: "<= 300" },
          {
            "Referral Fee Percentage": "10%",
            priceRange: "> 300 and <= 15000",
          },
          { "Referral Fee Percentage": "5%", priceRange: "> 15000" },
        ],
      },
      {
        name: "Luggage - Other products",
        commissionRates: [
          { "Referral Fee Percentage": "6%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "9%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "8%", priceRange: "> 500" },
        ],
      },
      {
        name: "Fine Art",
        commissionRates: [
          { "Referral Fee Percentage": "20%", priceRange: "All" },
        ],
      },
      {
        name: "Baby - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "3.5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "6.5%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "9%", priceRange: "> 500 and <= 1000" },
          { "Referral Fee Percentage": "7%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Pet - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "2%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "11%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "12%", priceRange: "> 500" },
        ],
      },
      {
        name: "Apparel - Other Products",
        commissionRates: [
          { "Referral Fee Percentage": "11%", priceRange: "<= 500" },
          {
            "Referral Fee Percentage": "18.5%",
            priceRange: "> 500 and <= 1000",
          },
          { "Referral Fee Percentage": "19%", priceRange: "> 1000" },
        ],
      },
      {
        name: "Home - other products",
        commissionRates: [
          { "Referral Fee Percentage": "18%", priceRange: "All" },
        ],
      },
      {
        name: "Home improvement - other products",
        commissionRates: [
          { "Referral Fee Percentage": "13.5%", priceRange: "All" },
        ],
      },
      {
        name: "Indoor Lighting - Others",
        commissionRates: [
          { "Referral Fee Percentage": "13%", priceRange: "<= 500" },
          { "Referral Fee Percentage": "16%", priceRange: "> 500" },
        ],
      },
      {
        name: "Sports - Other products",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "<= 300" },
          { "Referral Fee Percentage": "9%", priceRange: "> 300 and <= 500" },
          { "Referral Fee Percentage": "13%", priceRange: "> 500" },
        ],
      },
      {
        name: "Automotive - Other products",
        commissionRates: [
          { "Referral Fee Percentage": "15%", priceRange: "All" },
        ],
      },
      {
        name: "Consumable Physical Gift Card",
        commissionRates: [
          { "Referral Fee Percentage": "5%", priceRange: "All" },
        ],
      },
      {
        name: "Warranty Services",
        commissionRates: [
          { "Referral Fee Percentage": "30%", priceRange: "All" },
        ],
      },
    ],
  },
];

const mainCategorySelect = document.getElementById("mainCategory");
const subCategorySelect = document.getElementById("subCategory");
const priceInput = document.getElementById("price");
const enteredPriceValue = document.getElementById("enteredPriceValue");
const referralFeeValue = document.getElementById("referralFeeValue");
const closingFeeValue = document.getElementById("closingFeeValue");

const totalValue = document.getElementById("totalValue");
const totalfee = document.getElementById("totalfee");
const referralFeepercentage = document.getElementById("referralFeepercentage");

// Populate mainCategory select options
data.forEach((category) => {
  const option = document.createElement("option");
  option.textContent = category.mainCategory;
  option.value = category.mainCategory;
  mainCategorySelect.appendChild(option);
});

// Function to populate subcategories based on mainCategory selection
function populateSubcategories() {
  const selectedMainCategory = mainCategorySelect.value;
  const selectedCategory = data.find(
    (category) => category.mainCategory === selectedMainCategory
  );

  // Clear previous options
  subCategorySelect.innerHTML =
    '<option value="" disabled selected>Select Subcategory</option>';

  // Populate subCategory select options
  selectedCategory.subcategories.forEach((subcategory) => {
    const option = document.createElement("option");
    option.textContent = subcategory.name;
    option.value = subcategory.name;
    subCategorySelect.appendChild(option);
  });
}

// Function to calculate referral fee
function calculateReferralFee() {
  const selectedMainCategory = mainCategorySelect.value;
  const selectedSubCategory = subCategorySelect.value;
  const enteredPrice = parseFloat(priceInput.value);

  if (!selectedMainCategory || !selectedSubCategory || isNaN(enteredPrice)) {
    totalValue.textContent =
      "Please select a Main Category, Subcategory, and enter a valid Price.";
    return;
  }

  const category = data.find(
    (category) => category.mainCategory === selectedMainCategory
  );
  const subcategory = category.subcategories.find(
    (subcategory) => subcategory.name === selectedSubCategory
  );

  // Find the commission rate based on price range
  let referralFeePercentage = "";
  subcategory.commissionRates.forEach((rate) => {
    const priceRange = rate.priceRange.trim();
    const rangeParts = priceRange.split(" ");
    const operator = rangeParts[0];
    const threshold = parseFloat(rangeParts[1]);

    if (
      (operator === "<=" && enteredPrice <= threshold) ||
      (operator === ">" && enteredPrice > threshold) ||
      (operator === ">" &&
        operator === "<=" &&
        enteredPrice > parseFloat(rangeParts[1]) &&
        enteredPrice <= parseFloat(rangeParts[4]))
    ) {
      referralFeePercentage = rate["Referral Fee Percentage"];
    }
  });

  if (referralFeePercentage) {
    const closingfee = [
      { range: "<= ₹ 250", fixedClosingFee: "₹ 4" },
      { range: "> ₹ 250 and <= ₹ 500", fixedClosingFee: "₹ 9" },
      { range: "> ₹ 500 and <= ₹ 1000", fixedClosingFee: "₹ 30" },
      { range: "> ₹ 1000", fixedClosingFee: "₹ 61" },
    ];

    function checkRange(itemPrice, rangeString) {
      const parts = rangeString.split(" ");
      const operator = parts[0]; // Example: "<="
      const value = parseInt(parts[2].replace("₹", "").trim()); // Example: 250
      switch (operator) {
        case "<=":
          return itemPrice <= value;
        case ">":
          return itemPrice > value;
        case ">=":
          return itemPrice >= value;
        case ">" && "<=":
          const minValue = parseInt(parts[1].replace("₹", "").trim());
          const maxValue = parseInt(parts[4].replace("₹", "").trim());
          return itemPrice > minValue && itemPrice <= maxValue;
        default:
          return false;
      }
    }

    let fee = closingfee.find((item) => checkRange(enteredPrice, item.range));
    const closingFeeAmount = fee ? fee.fixedClosingFee : "No closing fee found";

    const referralFeeValueAmount = (
      (enteredPrice * parseFloat(referralFeePercentage)) /
      100
    ).toFixed(2);

    const totalAmount = (
      parseFloat(referralFeeValueAmount) +
      parseFloat(closingFeeAmount.replace("₹", ""))
    ).toFixed(2);

    enteredPriceValue.textContent = `₹ ${enteredPrice}`;
    referralFeeValue.textContent = `₹ ${referralFeeValueAmount}`;
    closingFeeValue.textContent = closingFeeAmount;

    totalfee.textContent = `₹ ${totalAmount}`;
    totalValue.textContent = `₹ ${enteredPrice - totalAmount}`;
    referralFeepercentage.textContent = referralFeePercentage;
  } else {
    totalValue.textContent =
      "No matching price range found for the entered Price.";
  }
}

// Event listeners
mainCategorySelect.addEventListener("change", populateSubcategories);
subCategorySelect.addEventListener("change", calculateReferralFee);
priceInput.addEventListener("input", calculateReferralFee);
