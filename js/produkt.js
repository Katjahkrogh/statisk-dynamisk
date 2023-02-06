// https://kea-alt-del.dk/t7/api/products/1529
// const imagePath=`https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`

console.log("produkt.js");

async function getProdukt() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1529");
  const data = await response.json();
  console.log(data);
  showProdukt(data);
}

function showProdukt(produkt) {
  document.querySelector(".box h2").textContent = produkt.productdisplayname;
  document.querySelector(".box .brand").textContent = produkt.brandname;
  document.querySelector(".brand").textContent = produkt.brandname;
  document.querySelector(".box .type").textContent = produkt.articletype;
  document.querySelector(".variant").textContent = produkt.variantname;
  document.querySelector(".variantname").textContent = produkt.variantname;
  document.querySelector(".colour").textContent = produkt.basecolour;
  document.querySelector(".id").textContent = produkt.id;
  document.querySelector(
    ".grid_1-1 img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
}

getProdukt();

/*{
    "id": 1529,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Fall",
    "productionyear": 2010,
    "usagetype": "Casual",
    "productdisplayname": "Tee",
    "price": 1899,
    "discount": null,
    "brandname": "Puma",
    "soldout": 0
}*/
