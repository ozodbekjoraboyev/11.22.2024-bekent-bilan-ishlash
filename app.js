let container = document.querySelector(".container");

function getArray() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 1000);
  });
}

function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
    }, 1000);
  });
}

function getImg() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtityPJwDmkgleLbDGep8TYVayZFkg-GuZzNYZxHSVdnlcnoJ3Ck7At4CPFbc1IZk-dw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxhpr1rvZnO5OcAmk1FFY-_2xjJg63PX0vrV4xj_9xbKo3Xwskad-DMKabZlcz6AsiJA&usqp=CAU",
        "https://storage.kun.uz/source/old/Marufniki/ajfo15.jpg",
        "https://i.ytimg.com/vi/W9HGKDR0ahY/sddefault.jpg",
        "https://m.media-amazon.com/images/I/81N-otbHy4L._AC_SL1500_.jpg",
        "https://daryo.uz/cache/2015/07/viktoriya-680x453.jpg",
        "https://i.ytimg.com/vi/DAq0gG1MUQg/mqdefault.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-h4rFYXKCyRuGShDRm-XpIgHnRAgewmE4A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0W4iHY5fmI09DM7nFc_m4r-SShP3CtbyeWKWvi5Z_MXWWmvc9UdH8PkkhSERnO_QNXQ&usqp=CAU",
        "https://lh5.googleusercontent.com/proxy/scZAdKdeLvxCyeGaUbxIAT-S_J5PCj8de6ExvqsLgK5U4Hu-hVt6HC46niS59nWWRnPUt9fMrY_NqOiO5bvZw1dcGwYXCfeXHDypBA",
      ]);
    }, 1000);
  });
}


//ALL DA QILINGAN


Promise.all([getImg(), getArray(), getString()]).then((array) => {
  console.log(array);

  let creatediv = document.createElement("div");

  creatediv.innerHTML += "<br>Array of numbers: " + array[1].join(", ");
  creatediv.innerHTML += "<br>Array of strings: " + array[2].join(", ");

  array[0].forEach((imageUrl) => {
    let imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.style.width = "100%";
    imgElement.style.marginBottom = "10px";
    creatediv.append(imgElement);
  });

  container.append(creatediv);
});


// ANY DA QLINGAN

Promise.any([getArray(), getString(), getImg()]).then((array) => {
  console.log(array);
  let creatediv = document.createElement("div");
  creatediv.innerHTML = array.join("<br>");

  container.append(creatediv);
})


// ALLSETTLED DA QLINGAN

Promise.allSettled([getImg(), getArray(), getString()]).then((array) => {
  console.log(array);
  let creatediv = document.createElement("div");
  creatediv.innerHTML += array[0].value.join("<br>");
  creatediv.innerHTML += array[1].value.join("<br>");
  creatediv.innerHTML += array[2].value.join("<br>");



  container.append(creatediv);
})