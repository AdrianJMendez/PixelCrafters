/*INIT*/
var svg = document.getElementsByTagName("svg")[0];
var body = document.getElementsByTagName("body")[0];
var g = svg.querySelector("g");
var themeSelector = document.getElementById("themes");
var WIDTH, COLS, ROWS, TOTAL, CENTERX, CENTERY;
var gridIsBuilding = false; //unused.

function setWindowValues() {
  minFactor = Math.min(svg.clientWidth, svg.clientHeight);
  WIDTH = minFactor > 1200 ? 65 : minFactor > 950 ? 55 : minFactor > 750 ? 45 : 35;
  COLS = Math.floor(svg.clientWidth / WIDTH);
  ROWS = Math.floor(svg.clientHeight / WIDTH);
  TOTAL = (COLS + 1) * (ROWS + 1);
  CENTERX = Math.floor(COLS / 2);
  CENTERY = Math.floor(ROWS / 2);
}

/*theme config + theme func = theme*/
var themes = {
  "Raindrops": {
    key: "Raindrops",
    url: "assets/UI/2.png",
    /*see pen details for image credits*/
    base: "rgba(245, 203, 230, 0.0)",
    solid1: "rgba(245, 203, 230, 0.5)",
    func: rainDrops,
  },
};

themeSelector.addEventListener("change", function (ev) {
  buildGrid();
});
//const theme = themes[themeSelector.value]

async function buildGrid(doDelay = true) {
  setWindowValues();
  if (doDelay) await delay(2000);
  let theme = themes[themeSelector.value];
  g.innerHTML = "";
  g.style = "";
  g.style.fill = theme.base;
  body.className = theme.className || "";
  body.style.backgroundImage = theme.url ? `url('${theme.url}')` : "";

  buildBoxes(theme.base, theme.gutter);
  theme.func();
}

body.onload = () => {
  buildGrid(false);
  rainDrops();
};

/* PRESETS */

async function rainDrops() {
  let rain = themes["Raindrops"];

  for (let i = 0; i <= COLS; i++) {
    let time = Math.random() * 1000;
    colIterator(i, time);
  }
  await delay(20000);
  for (let i = 0; i <= COLS; i++) {
    let time = Math.random() * 600;
    colIterator(i, time);
  }

  async function colIterator(start, time) {
    //iterators gonna iterate
    if (gridIsBuilding || themeSelector.value != "Raindrops") return false;

    for (var pos = 0; pos <= ROWS; pos++) {
      if (pos == ROWS) {
        colIterator(start, time);
      }

      let target = getTarget(pos, start);
      target.setAttribute("fill", rain.solid1);
      await delay(time);
      target.setAttribute("fill", rain.base);
    }
  }
}

/* helpers */
function buildBoxes(color, gutter) {
  gutter = gutter === undefined ? 1 : gutter;
  for (var col = 0; col <= COLS; col++) {
    for (var row = 0; row <= ROWS; row++) {
      let x = WIDTH * col;
      let y = WIDTH * row;
      drawSquare(row, col, x, y, WIDTH - gutter, WIDTH - gutter, color);
    }
  }
}

function Point(row, col, type) {
  this.col = parseInt(col);
  this.row = parseInt(row);
  this.type = type;
}

function getTarget(row, col) {
  return document.querySelector(`rect[col='${col}'][row='${row}']`);
}

function delay(ms) {
  return new Promise((done) =>
    setTimeout(() => {
      done();
    }, ms)
  );
}

function drawSquare(row, col, x, y, w, h, color) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("row", row);
  rect.setAttribute("col", col);
  rect.setAttribute("width", w);
  rect.setAttribute("height", h);
  g.appendChild(rect);
}

// Llamada a rainDrops() al cargar el sitio automáticamente
rainDrops();
