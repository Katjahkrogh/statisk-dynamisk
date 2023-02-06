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
  document.querySelector(
    ".grid_1-1 img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
}

getProdukt();
