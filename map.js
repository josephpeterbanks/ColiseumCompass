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

var eventsHandler;

eventsHandler = {
  haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel']
, init: function(options) {
	var instance = options.instance
	  , initialScale = 1
	  , pannedX = 0
	  , pannedY = 0

	// Init Hammer
	// Listen only for pointer and touch events
	this.hammer = Hammer(options.svgElement, {
	  inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
	})

	// Enable pinch
	this.hammer.get('pinch').set({enable: true})

	// Handle double tap
	this.hammer.on('doubletap', function(ev){
	  instance.zoomIn()
	})

	// Handle pan
	this.hammer.on('panstart panmove', function(ev){
	  // On pan start reset panned variables
	  if (ev.type === 'panstart') {
		pannedX = 0
		pannedY = 0
	  }

	  // Pan only the difference
	  instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY})
	  pannedX = ev.deltaX
	  pannedY = ev.deltaY
	})

	// Handle pinch
	this.hammer.on('pinchstart pinchmove', function(ev){
	  // On pinch start remember initial zoom
	  if (ev.type === 'pinchstart') {
		initialScale = instance.getZoom()
		instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y})
	  }

	  instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y})
	})

	// Prevent moving the page on some devices when panning over SVG
	options.svgElement.addEventListener('touchmove', function(e){ e.preventDefault(); });
  }

, destroy: function(){
	this.hammer.destroy()
  }
};

const panZoom = svgPanZoom('#map', {
    zoomEnabled: true,
	fit: true,
    center: true,
	customEventsHandler: eventsHandler
});

const container = document.querySelector('.mapcontainer');
const ro = new ResizeObserver(() => {
	panZoom.resize();
	panZoom.fit();
	panZoom.center();
});
ro.observe(container);
