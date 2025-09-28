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
		smoothCenterOn(col, row);
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
	maxZoom: 8,
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

function smoothCenterOn(col, row, duration = 500) {
	const sizes = panZoom.getSizes();
	const view  = sizes.viewBox || { x: 0, y: 0 };
	const svgX  = view.x + col * CELL_X + CELL_X / 2;
	const svgY  = view.y + row * CELL_Y + CELL_Y / 2;

	const realZoom   = sizes.realZoom;
	const viewWidth  = sizes.width;
	const viewHeight = sizes.height;

	const start = panZoom.getPan();

	const target = {
	x: (viewWidth  / 2) - svgX * realZoom,
	y: (viewHeight / 2) - svgY * realZoom
	};

	const dx = target.x - start.x;
	const dy = target.y - start.y;

	const startTime = performance.now();
	const easeInOut = t => 0.5 - Math.cos(Math.PI * t) / 2; // smooth ease

	// cancel any running animation
	if (smoothCenterOn._raf) cancelAnimationFrame(smoothCenterOn._raf);

	function step(now) {
		const t = Math.min((now - startTime) / duration, 1);
		const e = easeInOut(t);
		panZoom.pan({ x: start.x + dx * e, y: start.y + dy * e });
		if (t < 1) {
			smoothCenterOn._raf = requestAnimationFrame(step);
		} else {
			smoothCenterOn._raf = null;
		}
	}
	smoothCenterOn._raf = requestAnimationFrame(step);
}