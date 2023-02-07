//https://kea-alt-del.dk/t7/api/products/

// 1 grab the data
async function getData() {
  const response = await fetch(
    "https://kea-alt-del.dk/t7/api/products?limit=30"
  );
  const data = await response.json();
  console.log(data);

  // 2 loope
  // 3 for hver
  data.forEach(showProdukt);
}

getData();

function showProdukt(produkt) {
  console.log(produkt);
  // 4 fange vores template
  const template = document.querySelector("#produktTemplate").content;
  console.log(template);
  // 5 clone
  const copy = template.cloneNode(true);
  // 6 skifte data
  copy.querySelector("h3").textContent = produkt.productdisplayname;
  document.querySelector(".category").textContent = produkt.category;
  copy.querySelector(".brand").textContent = produkt.brandname;
  copy.querySelector(".type").textContent = produkt.articletype;
  copy.querySelector(".price").textContent = `DKK ${produkt.price},-`;
  copy.querySelector("a").href = "produkt.html?id=" + produkt.id;
  copy.querySelector(
    ".produkt-img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;

  if (produkt.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (produkt.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".sale").textContent = `${produkt.discount}%`;
    const nowPrice = produkt.price - produkt.price * (produkt.discount / 100);
    copy.querySelector(".now").textContent = `DKK ${nowPrice.toFixed(2)},-`;
  }

  // 7 appende
  document.querySelector(".productlist").appendChild(copy);
}

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
