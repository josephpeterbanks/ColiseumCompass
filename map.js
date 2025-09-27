const SVG_NS = "http://www.w3.org/2000/svg";
const svg    = document.getElementById("map");

var highlight_x = 0;
var highlight_y = 0;

const SIZE = 64;
const CELL_X = 40;
const CELL_Y = 80;
const RX = 15;
const ORIGIN_X = 8;
const ORIGIN_Y = 8;
const VIEW_W = 4960;
const VIEW_H = 1280;

const COLS = Math.floor((VIEW_W - ORIGIN_X) / CELL_X);
const ROWS = Math.floor((VIEW_H - ORIGIN_Y) / CELL_Y);

const gridGroup = document.createElementNS(SVG_NS, "g");
gridGroup.setAttribute("id", "grid");

for (let row = 0; row < ROWS + 1; row++) {
	for (let col = 0; col < COLS; col++) {
		const x = ORIGIN_X + col * CELL_X;
		const y = ORIGIN_Y + row * CELL_Y;

		const rect = document.createElementNS(SVG_NS, "rect");
		rect.setAttribute("x", x);
		rect.setAttribute("y", y);
		rect.setAttribute("width", SIZE);
		rect.setAttribute("height", SIZE);
		rect.setAttribute("rx", RX);
		rect.setAttribute("ry", RX);
		rect.setAttribute("class", "seat");
		rect.setAttribute("id", `cell-${col}-${row}`);
		rect.dataset.col = col;
		rect.dataset.row = row;

		gridGroup.appendChild(rect);
	}
}

svg.appendChild(gridGroup);

function getCell(col, row) {
	return document.getElementById(`cell-${col}-${row}`);
}
function highlightCell(col, row) {
	const c = getCell(col, row);
	if (c) {
		c.classList.add("highlight");
		highlight_x = col;
		highlight_y = row;
	}
	return c;
}

function unhighlightCell() {
	const c = getCell(highlight_x, highlight_y);
	if (c) {
		c.classList.remove("highlight");
	}
}

const panZoom = svgPanZoom('#map', {
    zoomEnabled: true,
	fit: true,
    center: true,
	mouseWheelZoomEnabled: true,
	minZoom: 1,
	maxZoom: 5,
	zoomScaleSensitivity: 0.2
});

const slider = document.getElementById('zoom-slider');

slider.addEventListener('input', () => {
	panZoom.zoom(parseFloat(slider.value));
	if (slider.value == 1) panZoom.center();
});

panZoom.setOnZoom(function(zoomLevel) {
	slider.value = zoomLevel.toFixed(2);
});

const container = document.querySelector('.mapcontainer');
const ro = new ResizeObserver(() => {
	panZoom.resize();
	panZoom.fit();
	panZoom.center();
});
ro.observe(container);
