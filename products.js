let products = [
    {
        id: 2536,
        name: "Sony Professional 32GB XQD",
        price: 500,
        category: "Storage",
        description: "The new XQD cards achieve Max read",
        image: "images/sony.jpg",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Laptops",
        description:
            "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
        image: "images/lenovo.jpg",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Laptops",
        description:
            "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
        image: "images/asus.jpg",
    },
    {
        id: 2539,
        name: "A laser printer that includes a Wi-Fi connection - Xerox Phaser 3020",
        price: 450,
        category: "Printers",
        description:
            "Xerox Phaser 3020 laser printer that includes a Wi-Fi connection and printing from AirPrint",
        image: "images/printer.jpg",
    },
    {
        id: 2540,
        name: "A desktop computer with an Intel i5-11400 processor, 16GB memory, 480GB SSD drive",
        price: 2499,
        category: "computers",
        description: "Intel Core i5-11400 processor, Asus H510 motherboard, 480GB SSD drive, 16GB DDR4 memory, Windows 11 Home operating system",
        image: "images/windows.jpg"
    },
    {
        id: 2541,
        name: "OnePlus Nord N20 SE 128GB smartphone",
        price: 699,
        category: "smartfhons",
        description: "OnePlus Nord N20 SE 128GB smartphone in black color - two years warranty by the official importer",
        image: "images/smart.jpg"
    }
];
function showCards() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML +=
            `<div class="col-lg-4 col-md-4 col-sm-12 mt-5">
            <div class="card w-20 h-100">
            <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
             <div class="card-body">
              <h5 class="card-title">${products[i].name}</h5>
               <p class="card-text">${products[i].category}</p>
                </div>
                <button class=" card-footer btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#infoModal" onclick=setModal(${i})>See More</button>
            
             </div>
         </div>`
    }
}
showCards();


function setModal(index) {
    document.getElementById("title").innerHTML = products[index].name;
    document.getElementById("mBody").innerHTML = `
  <p><b>Serial Number:</b> ${products[index].id}<p>
  <p><b>Category:</b> ${products[index].category}</p>
  <p><b>Description:</b> ${products[index].description}</p>
  <h4 class="text-end">Price: &#8362 ${products[index].price} </h4>
  <a onClick=favorate()><i class="fa-regular fa-heart"></i></a>
  `;
}
function favorate() {
    document.getElementById("title").innerText = `Added to favorites`
    document.getElementById("mBody").innerHTML = `<i class="fa-solid fa-heart"></i>`
}

