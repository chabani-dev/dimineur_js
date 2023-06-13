let app = {
  map1: [
    ["M", 1, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [2, 2, 1, 1, "M"],
    ["M", "M", 1, 1, 1],
    [2, 2, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  // fonction pour traitement le tableau map1
  init: function (map) {
    // traitement chaque element du tableau avec un boucle
    for (line in map) {
      let lineElement = document.createElement("div");
      let lineIdName = "line_" + line;
      lineElement.setAttribute("id", lineIdName);
      lineElement.classList.add("line");
      document
        .getElementById("game")
        .insertAdjacentElement("beforeend", lineElement);
      //boucle pour récupérer chaque ligne
      for (item in map[line]) {
        let itemElement = document.createElement("div");
        let itemIdName = "item_" + line + "_" + item;
        itemElement.setAttribute("id", itemIdName);
        itemElement.classList.add("item", "item_" + map[line][item]);
        lineElement.insertAdjacentElement("beforeend", itemElement);
        // itemElement.textContent = map[line][item];
        itemElement.addEventListener("click", app.handleClickButton);
      }
    }
  },
  handleClickButton: function (e) {
    let targetElement = e.currentTarget;
    console.log(targetElement);
    if (targetElement.className.includes("item_M")) {
      window.alert("perdu !!");
    }
    if (targetElement.className.includes("item_0")) {
      targetElement.classList.add("clicked");
      targetElement.removeEventListener("click", app.handleClickButton);
    }
    for (let i = 1; i < 9; i++) {
      if (targetElement.className.includes("item_" + i)) {
        targetElement.textContent = i;
        targetElement.classList.add("clicked");
        targetElement.removeEventListener("click", app.handleClickButton);
      }
    }
    // if (clickedButtonElement.className.includes("item_0")) {
    //   clickedButtonElement.classList.add("clicked");
    //   clickedButtonElement.removeEventListener("click".app.handleClickButton);
    // }
    console.log(targetElement);
  },
  // fonction retourne un les elements qui contient le tableau et calcul les cordonner de chaque element dans le tab Map1
  randomMap: function () {
    let nblignes = parseInt(window.prompt("nombre de lignes?"));
    let nbcolonnes = parseInt(window.prompt("nombre de colonnes?"));
    let nbmines = parseInt(
      window.prompt("nombre de mines à désposer dans la grille?")
    );

    let mineArray = [];
    for (i = 0; i < nbmines; i++) {
      let mine = app.randomDraw(nblignes, nbcolonnes);
      for (item of mineArray) {
        if (
          mine["ligne"] == item["linge"] &&
          mine["colonne"] == item["colonne"]
        ) {
          let itemIndex = mineArray.indexOf(item);
          mineArray.splice(itemindex, 1);
          i--;
          //console.error("déjà existant");
        }
      }
      mineArray.push(mine);
      console.log(mineArray);
    }
    //console.log(mineArray);

    let map = [];
    for (let j = 0; j < nblignes; j++) {
      let line = [];
      for (let k = 0; k < nbcolonnes; k++) {
        line.push(0);
      }
      map.push(line);
    }
    console.log(map);
    for (item of mineArray) {
      let x = item["ligne"];
      let y = item["colonne"];
      map[x][y] = "M";
    }
    // console.log(map);
  },

  randomDraw: function (num1, num2) {
    let obj = {};
    let linge = parseInt(Math.random() * num1);
    obj["linge"] = linge;
    let colonne = parseInt(Math.random() * num2);
    obj["colonne"] = colonne;
    //console.log(obj);
    return obj;
  },
};
//app.randomMap();
app.init(app.map1);
app.randomDraw();
