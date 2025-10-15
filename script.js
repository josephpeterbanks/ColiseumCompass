const dressImage = new Image();
dressImage.src = 'DressAnnotated.png';

const upperImage = new Image();
upperImage.src = 'UpperAnnotated.png';

const balconyImage = new Image();
balconyImage.src = 'BalconyAnnotated.png';

const SEAT_RULES = {
"stalls": {
	"rows": [
		{ "label": "A", "startSeat": 1, "startRow": 0, "startCol": 87, "count": 25,
        "gaps": [
			{ "afterSeat": 5, "skipCols": 2, "changeRow": 0 }, 
			{ "afterSeat": 20, "skipCols": 2, "changeRow": 0 }
		] },
			
		{ "label": "B", "startSeat": 1, "startRow": 1, "startCol": 98, "count": 36,
        "gaps": [
			{ "afterSeat": 10, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 26, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "C", "startSeat": 1, "startRow": 2, "startCol": 101, "count": 39,
        "gaps": [
			{ "afterSeat": 11, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 28, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "D", "startSeat": 1, "startRow": 3, "startCol": 104, "count": 42,
        "gaps": [
			{ "afterSeat": 12, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 30, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "E", "startSeat": 1, "startRow": 4, "startCol": 103, "count": 39,
        "gaps": [
			{ "afterSeat": 11, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 28, "skipCols": 4, "changeRow": 0 }
        ] },
					
		{ "label": "F", "startSeat": 1, "startRow": 5, "startCol": 104, "count": 40,
        "gaps": [
			{ "afterSeat": 11, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 29, "skipCols": 4, "changeRow": 0 }
        ] },
					
		{ "label": "G", "startSeat": 1, "startRow": 6, "startCol": 105, "count": 41,
        "gaps": [
			{ "afterSeat": 11, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 30, "skipCols": 4, "changeRow": 0 }
        ] },
					
		{ "label": "H", "startSeat": 1, "startRow": 7, "startCol": 106, "count": 42,
        "gaps": [
			{ "afterSeat": 11, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 31, "skipCols": 4, "changeRow": 0 }
        ] },
					
		{ "label": "J", "startSeat": 1, "startRow": 8, "startCol": 103, "count": 37,
        "gaps": [
			{ "afterSeat": 9, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 28, "skipCols": 6, "changeRow": 0 }
        ] },
					
		{ "label": "K", "startSeat": 1, "startRow": 9, "startCol": 102, "count": 36,
        "gaps": [
			{ "afterSeat": 8, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 28, "skipCols": 6, "changeRow": 0 }
        ] },
					
		{ "label": "L", "startSeat": 1, "startRow": 10, "startCol": 101, "count": 35,
        "gaps": [
			{ "afterSeat": 7, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 28, "skipCols": 6, "changeRow": 0 }
        ] },
					
		{ "label": "M", "startSeat": 1, "startRow": 11, "startCol": 98, "count": 32,
        "gaps": [
			{ "afterSeat": 5, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 27, "skipCols": 6, "changeRow": 0 }
        ] },
					
		{ "label": "N", "startSeat": 1, "startRow": 12, "startCol": 95, "count": 29,
        "gaps": [
			{ "afterSeat": 3, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 26, "skipCols": 6, "changeRow": 0 }
        ] },
					
		{ "label": "O", "startSeat": 5, "startRow": 13, "startCol": 80, "count": 20,
        "gaps": [
        ] },
					
		{ "label": "P", "startSeat": 5, "startRow": 14, "startCol": 77, "count": 17,
        "gaps": [
        ] },
					
		{ "label": "Q", "startSeat": 1, "startRow": 15, "startCol": 70, "count": 10,
        "gaps": [
        ] }
    ]
},
"dress-circle": {
	"rows": [
		{ "label": "A", "startSeat": 1, "startRow": 0, "startCol": 122, "count": 72,
        "gaps": [
			{ "afterSeat": 14, "skipCols": -12, "changeRow": 3 }, 
			{ "afterSeat": 28, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 44, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 58, "skipCols": -12, "changeRow": -3 }
		] },
			
		{ "label": "B", "startSeat": 1, "startRow": 1, "startCol": 122, "count": 61,
        "gaps": [
			{ "afterSeat": 8, "skipCols": -1, "changeRow": 3 },
			{ "afterSeat": 22, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 39, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 53, "skipCols": -1, "changeRow": -3 }
        ] },
					
		{ "label": "C", "startSeat": 1, "startRow": 2, "startCol": 122, "count": 52,
        "gaps": [
			{ "afterSeat": 2, "skipCols": 8, "changeRow": 3 },
			{ "afterSeat": 17, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 35, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 50, "skipCols": 8, "changeRow": -3 }
        ] },
					
		{ "label": "D", "startSeat": 1, "startRow": 3, "startCol": 122, "count": 53,
        "gaps": [
			{ "afterSeat": 1, "skipCols": 7, "changeRow": 3 },
			{ "afterSeat": 17, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 36, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 52, "skipCols": 7, "changeRow": -3 }
        ] },
					
		{ "label": "E", "startSeat": 1, "startRow": 7, "startCol": 118, "count": 56,
        "gaps": [
			{ "afterSeat": 18, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 38, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "F", "startSeat": 1, "startRow": 8, "startCol": 121, "count": 59,
        "gaps": [
			{ "afterSeat": 19, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 40, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "G", "startSeat": 1, "startRow": 9, "startCol": 122, "count": 58,
        "gaps": [
			{ "afterSeat": 1, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 18, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 40, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 57, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "H", "startSeat": 1, "startRow": 10, "startCol": 119, "count": 57,
        "gaps": [
			{ "afterSeat": 17, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 40, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "J", "startSeat": 1, "startRow": 11, "startCol": 120, "count": 58,
        "gaps": [
			{ "afterSeat": 17, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 41, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "K", "startSeat": 1, "startRow": 12, "startCol": 119, "count": 57,
        "gaps": [
			{ "afterSeat": 16, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 41, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "L", "startSeat": 1, "startRow": 13, "startCol": 116, "count": 52,
        "gaps": [
			{ "afterSeat": 14, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 38, "skipCols": 4, "changeRow": 0 }
        ] }
    ]
},
"upper-circle": {
	"rows": [
		{ "label": "A", "startSeat": 1, "startRow": 0, "startCol": 116, "count": 48,
        "gaps": [
			{ "afterSeat": 16, "skipCols": 8, "changeRow": 0 }, 
			{ "afterSeat": 32, "skipCols": 8, "changeRow": 0 }
		] },
			
		{ "label": "B", "startSeat": 1, "startRow": 1, "startCol": 118, "count": 51,
        "gaps": [
			{ "afterSeat": 17, "skipCols": 7, "changeRow": 0 },
			{ "afterSeat": 34, "skipCols": 7, "changeRow": 0 }
        ] },
					
		{ "label": "C", "startSeat": 1, "startRow": 2, "startCol": 122, "count": 56,
        "gaps": [
			{ "afterSeat": 19, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 37, "skipCols": 6, "changeRow": 0 }
        ] },
					
		{ "label": "D", "startSeat": 1, "startRow": 3, "startCol": 122, "count": 57,
        "gaps": [
			{ "afterSeat": 19, "skipCols": 5, "changeRow": 0 },
			{ "afterSeat": 38, "skipCols": 5, "changeRow": 0 }
        ] },
					
		{ "label": "E", "startSeat": 1, "startRow": 4, "startCol": 122, "count": 56,
        "gaps": [
			{ "afterSeat": 1, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 18, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 18, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 55, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "F", "startSeat": 1, "startRow": 5, "startCol": 122, "count": 57,
        "gaps": [
			{ "afterSeat": 18, "skipCols": 5, "changeRow": 0 },
			{ "afterSeat": 39, "skipCols": 5, "changeRow": 0 }
        ] },
					
		{ "label": "G", "startSeat": 1, "startRow": 6, "startCol": 122, "count": 58,
        "gaps": [
			{ "afterSeat": 18, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 40, "skipCols": 4, "changeRow": 0 }
        ] },
					
		{ "label": "H", "startSeat": 1, "startRow": 7, "startCol": 120, "count": 57,
        "gaps": [
			{ "afterSeat": 17, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 40, "skipCols": 3, "changeRow": 0 }
        ] },
					
		{ "label": "J", "startSeat": 1, "startRow": 8, "startCol": 120, "count": 58,
        "gaps": [
			{ "afterSeat": 17, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 41, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "K", "startSeat": 1, "startRow": 9, "startCol": 118, "count": 56,
        "gaps": [
			{ "afterSeat": 16, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 40, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "L", "startSeat": 1, "startRow": 10, "startCol": 118, "count": 56,
        "gaps": [
			{ "afterSeat": 16, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 40, "skipCols": 2, "changeRow": 0 }
        ] }
    ]
},
"balcony": {
	"rows": [
		{ "label": "A", "startSeat": 1, "startRow": 0, "startCol": 122, "count": 46,
        "gaps": [
			{ "afterSeat": 5, "skipCols": 5, "changeRow": 0 }, 
			{ "afterSeat": 11, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 19, "skipCols": 7, "changeRow": 0 },
			{ "afterSeat": 27, "skipCols": 7, "changeRow": 0 },
			{ "afterSeat": 35, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 41, "skipCols": 5, "changeRow": 0 }
		] },
			
		{ "label": "B", "startSeat": 1, "startRow": 1, "startCol": 122, "count": 49,
        "gaps": [
			{ "afterSeat": 4, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 11, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 20, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 29, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 38, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 45, "skipCols": 4, "changeRow": 0 }
        ] },
					
		{ "label": "C", "startSeat": 1, "startRow": 2, "startCol": 122, "count": 47,
        "gaps": [
			{ "afterSeat": 3, "skipCols": 5, "changeRow": 0 },
			{ "afterSeat": 10, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 19, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 28, "skipCols": 6, "changeRow": 0 },
			{ "afterSeat": 37, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 44, "skipCols": 5, "changeRow": 0 }
        ] },
					
		{ "label": "D", "startSeat": 1, "startRow": 3, "startCol": 112, "count": 44,
        "gaps": [
			{ "afterSeat": 7, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 17, "skipCols": 5, "changeRow": 0 },
			{ "afterSeat": 27, "skipCols": 5, "changeRow": 0 },
			{ "afterSeat": 37, "skipCols": 3, "changeRow": 0 }
        ] },
					
		{ "label": "E", "startSeat": 1, "startRow": 4, "startCol": 115, "count": 49,
        "gaps": [
			{ "afterSeat": 8, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 19, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 30, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 41, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "F", "startSeat": 1, "startRow": 5, "startCol": 118, "count": 51,
        "gaps": [
			{ "afterSeat": 9, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 20, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 31, "skipCols": 4, "changeRow": 0 },
			{ "afterSeat": 42, "skipCols": 3, "changeRow": 0 }
        ] },
					
		{ "label": "G", "startSeat": 1, "startRow": 6, "startCol": 119, "count": 54,
        "gaps": [
			{ "afterSeat": 9, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 21, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 33, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 45, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "H", "startSeat": 1, "startRow": 7, "startCol": 120, "count": 54,
        "gaps": [
			{ "afterSeat": 9, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 21, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 33, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 45, "skipCols": 3, "changeRow": 0 }
        ] },
					
		{ "label": "J", "startSeat": 1, "startRow": 8, "startCol": 117, "count": 53,
        "gaps": [
			{ "afterSeat": 7, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 20, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 33, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 46, "skipCols": 2, "changeRow": 0 }
        ] },
					
		{ "label": "K", "startSeat": 1, "startRow": 9, "startCol": 116, "count": 51,
        "gaps": [
			{ "afterSeat": 6, "skipCols": 3, "changeRow": 0 },
			{ "afterSeat": 19, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 32, "skipCols": 2, "changeRow": 0 },
			{ "afterSeat": 45, "skipCols": 3, "changeRow": 0 }
        ] }
    ]
}
}

const layout = {
	"stalls": {
		"A": { aisles: [5.5, 20.5, 25.5], outer: false},
		"B": { aisles: [10.5, 26.5, 36.5], outer: false},
		"C": { aisles: [11.5, 28.5, 39.5], outer: false},
		"D": { aisles: [12.5, 30.5, 42.5], outer: false},
		"E": { aisles: [11.5, 28.5, 39.5], outer: false},
		"F": { aisles: [11.5, 29.5, 40.5], outer: false},
		"G": { aisles: [11.5, 30.5, 41.5], outer: false},
		"H": { aisles: [11.5, 31.5, 42.5], outer: false},
		"J": { aisles: [9.5, 28.5, 37.5], outer: false},
		"K": { aisles: [8.5, 28.5, 36.5], outer: false},
		"L": { aisles: [7.5, 28.5, 35.5], outer: false},
		"M": { aisles: [5.5, 27.5, 32.5], outer: false},
		"N": { aisles: [3.5, 26.5, 29.5], outer: false},
		"O": { aisles: [20.5], outer: "left"},
		"P": { aisles: [17.5], outer: "left"},
		"Q": { aisles: [10.5], outer: "left"}
	},
	"dress-circle": {
		"A": { aisles: [14.5, 28.5, 44.5, 58.5, 72.5], outer: "extend"},
		"B": { aisles: [8.5, 22.5, 39.5, 53.5, 61.5], outer: "extend"},
		"C": { aisles: [2.5, 17.5, 35.5, 50.5, 52.5], outer: "extend"},
		"D": { aisles: [1.5, 17.5, 36.5, 52.5, 53.5], outer: "extend"},
		"E": { aisles: [18.5, 38.5, 56.5], outer: true},
		"F": { aisles: [19.5, 40.5, 59.5], outer: true},
		"G": { aisles: [18.5, 40.5, 58.5], outer: true},
		"H": { aisles: [17.5, 40.5, 57.5], outer: true},
		"J": { aisles: [17.5, 41.5, 58.5], outer: true},
		"K": { aisles: [16.5, 41.5, 57.5], outer: true},
		"L": { aisles: [14.5, 38.5, 52.5], outer: true}
	},
	"upper-circle": {
		"A": { aisles: [16.5, 32.5, 48.5], outer: true},
		"B": { aisles: [17.5, 34.5, 51.5], outer: true},
		"C": { aisles: [19.5, 37.5, 56.5], outer: true},
		"D": { aisles: [19.5, 38.5, 57.5], outer: true},
		"E": { aisles: [18.5, 38.5, 56.5], outer: true},
		"F": { aisles: [18.5, 39.5, 57.5], outer: true},
		"G": { aisles: [18.5, 40.5, 58.5], outer: true},
		"H": { aisles: [17.5, 40.5, 57.5], outer: true},
		"J": { aisles: [17.5, 41.5, 58.5], outer: true},
		"K": { aisles: [16.5, 40.5, 56.5], outer: true},
		"L": { aisles: [16.5, 40.5, 56.5], outer: true}
	},
	"balcony": {
		"A": { aisles: [5.5, 11.5, 19.5, 27.5, 35.5, 41.5, 46.5], outer: "extend"},
		"B": { aisles: [4.5, 11.5, 20.5, 29.5, 38.5, 45.5, 49.5], outer: "extend"},
		"C": { aisles: [3.5, 10.5, 19.5, 28.5, 37.5, 44.5, 47.5], outer: "extend"},
		"D": { aisles: [7.5, 17.5, 27.5, 37.5, 44.5], outer: true},
		"E": { aisles: [8.5, 19.5, 30.5, 41.5, 49.5], outer: true},
		"F": { aisles: [9.5, 20.5, 31.5, 42.5, 51.5], outer: true},
		"G": { aisles: [9.5, 21.5, 33.5, 45.5, 54.5], outer: true},
		"H": { aisles: [9.5, 21.5, 33.5, 45.5, 54.5], outer: true},
		"J": { aisles: [7.5, 20.5, 33.5, 46.5, 53.5], outer: true},
		"K": { aisles: [6.5, 19.5, 32.5, 45.5, 51.5], outer: true}
	}
};

const seatInput   = document.getElementById('seatId');
const levelSelect = document.getElementById("level");
const route = document.getElementById("route");

levelSelect.addEventListener("change", (event) => {
	const value = event.target.value;
	levelSelect.blur();

	unhighlightCell();
	const bg = document.querySelector("#map image");
	bg.setAttribute("href", {
		"stalls": "StallsSDAnnotated.png",
		"dress-circle": "DressAnnotated.png",
		"upper-circle": "UpperAnnotated.png",
		"balcony": "BalconyAnnotated.png"
	}[value]);
	highlightSeat();
});

function addTextToRoute(t, col) {
	route.innerText = t;
	route.style.color = col;
	route.style.display = "block";
}
  
function parseSeatCode(input) {
	const s = String(input).trim().toUpperCase().replace(/\s+/g, '').replace(/^ROW/, '');
	const m = /^([A-Z]+)-?(\d+)$/.exec(s);
	if (!m) return null;
	return { row: m[1], seat: parseInt(m[2], 10) };
}

function getSuffix(num) {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return num + 'th';
    }

    switch (lastDigit) {
        case 1:
            return num + 'st';
        case 2:
            return num + 'nd';
        case 3:
            return num + 'rd';
        default:
            return num + 'th';
    }
}

function writeRoute(outer, closestAisle, level, offset, direction) {
	if (outer == true) {
		if (level == "stalls") {
			if (closestAisle == 1) {
				if (offset == 1) {
					return `Right Aisle
					On the Aisle`;
				} else {
					return `Right Aisle
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else {
				if (offset == 1) {
					return `Left Aisle
					On the Aisle`;
				} else {
					return `Left Aisle
					${getSuffix(offset)} Seat from the Aisle`;
				}
			}
		} else if (level == "dress-circle" || level == "upper-circle") {
			if (closestAisle == 0) {
				if (offset == 1) {
					return `Right Side
					On the Aisle`;
				} else {
					return `Right Side
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 1) {
				if (offset == 1) {
					return `Right Aisle ${direction}
					On the Aisle`;
				} else {
					return `Right Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 2) {
				if (offset == 1) {
					return `Left Aisle ${direction}
					On the Aisle`;
				} else {
					return `Left Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 3) {
				if (offset == 1) {
					return `Left Side
					On the Aisle`;
				} else {
					return `Left Side
					${getSuffix(offset)} Seat from the Aisle`;
				}
			}
		} else if (level == "balcony") {
			if (closestAisle == 0) {
				if (offset == 1) {
					return `Right Side
					On the Aisle`;
				} else {
					return `Right Side
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 1) {
				if (offset == 1) {
					return `Far Right Aisle ${direction}
					On the Aisle`;
				} else {
					return `Far Right Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 2) {
				if (offset == 1) {
					return `Right Aisle ${direction}
					On the Aisle`;
				} else {
					return `Right Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 3) {
				if (offset == 1) {
					return `Left Aisle ${direction}
					On the Aisle`;
				} else {
					return `Left Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 4) {
				if (offset == 1) {
					return `Far Left Aisle ${direction}
					On the Aisle`;
				} else {
					return `Far Left Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 5) {
				if (offset == 1) {
					return `Left Side
					On the Aisle`;
				} else {
					return `Left Side
					${getSuffix(offset)} Seat from the Aisle`;
				}
			}
		}
	} else if (outer == false) {
		if (closestAisle == 1) {
			if (offset == 1) {
				return `Right Aisle ${direction}
				On the Aisle`;
			} else {
				return `Right Aisle ${direction}
				${getSuffix(offset)} Seat from the Aisle`;
			}
		} else {
			if (offset == 1) {
				return `Left Aisle ${direction}
				On the Aisle`;
			} else {
				return `Left Aisle ${direction}
				${getSuffix(offset)} Seat from the Aisle`;
			}
		}
	} else if (outer == "extend") {
		if (level == "dress-circle" || level == "upper-circle") {
			if (closestAisle == 0) {
				if (offset == 1) {
					return `Right Side ${direction}
					On the Aisle`;
				} else {
					return `Right Side ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 1) {
				if (offset == 1) {
					return `Right Aisle ${direction}
					On the Aisle`;
				} else {
					return `Right Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 2) {
				if (offset == 1) {
					return `Left Aisle ${direction}
					On the Aisle`;
				} else {
					return `Left Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 3) {
				if (offset == 1) {
					return `Left Side ${direction}
					On the Aisle`;
				} else {
					return `Left Side ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			}
		} else if (level == "balcony") {
			if (closestAisle == 0) {
				if (offset == 1) {
					return `Right Side ${direction}
					On the Aisle`;
				} else {
					return `Right Side ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 1) {
				if (offset == 1) {
					return `Far Right Aisle ${direction}
					On the Aisle`;
				} else {
					return `Far Right Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 2) {
				if (offset == 1) {
					return `Right Aisle ${direction}
					On the Aisle`;
				} else {
					return `Right Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 3) {
				if (offset == 1) {
					return `Left Aisle ${direction}
					On the Aisle`;
				} else {
					return `Left Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 4) {
				if (offset == 1) {
					return `Far Left Aisle ${direction}
					On the Aisle`;
				} else {
					return `Far Left Aisle ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (closestAisle == 5) {
				if (offset == 1) {
					return `Left Side ${direction}
					On the Aisle`;
				} else {
					return `Left Side ${direction}
					${getSuffix(offset)} Seat from the Aisle`;
				}
			}
		}
	}
}

function findBestRoute(level, row, seatNumber) {

	if (layout[level][row]) {
		const rowInfo = layout[level][row];
		const aisles = rowInfo.aisles;
		const outer = rowInfo.outer;
		
		if (seatNumber <= aisles[aisles.length - 1] && seatNumber > 0) {
			let routeDesc = "";
			if (outer == "left") {
				const offset = aisles[0] - seatNumber + 0.5;
				if (offset == 1) {
					routeDesc = `Left Side
					On the Aisle`;
				} else {
					routeDesc = `Left Side
					${getSuffix(offset)} Seat from the Aisle`;
				}
			} else if (outer == true) {
			
				let closestAisle = 0;
				let minDistance = Math.abs(seatNumber - 0.5);
				let offset = seatNumber;

				for (let i = 0; i < aisles.length; i++) {
					const distance = Math.abs(seatNumber - aisles[i]);
					if (distance < minDistance) {
						offset = Math.abs(aisles[i] - seatNumber) + 0.5;
						minDistance = distance;
						closestAisle = i+1;
					}
				}
				
				const direction = seatNumber < aisles[closestAisle-1] ? "-->" : "<--";
				routeDesc = writeRoute(outer, closestAisle, level, offset, direction);
			} else if (outer == false) {
				let closestAisle = 1;
				let minDistance = Math.abs(seatNumber - aisles[0]);
				let offset = Math.abs(aisles[0] - seatNumber) + 0.5;

				for (let i = 1; i < aisles.length - 1; i++) {
					const distance = Math.abs(seatNumber - aisles[i]);
					if (distance < minDistance) {
						offset = Math.abs(aisles[i] - seatNumber) + 0.5;
						minDistance = distance;
						closestAisle = i+1;
					}
				}
				
				const direction = seatNumber < aisles[closestAisle-1] ? "-->" : "<--";
				routeDesc = writeRoute(outer, closestAisle, level, offset, direction);
			} else if (outer == "extend") {
				let closestAisle = 1;
				let minDistance = Math.abs(seatNumber - aisles[0]);
				let offset = Math.abs(aisles[0] - seatNumber) + 0.5;

				for (let i = 1; i < aisles.length - 1; i++) {
					const distance = Math.abs(seatNumber - aisles[i]);
					if (distance < minDistance) {
						offset = Math.abs(aisles[i] - seatNumber) + 0.5;
						minDistance = distance;
						closestAisle = i+1;
					}
				}
				
				const direction = seatNumber < aisles[closestAisle-1] ? "-->" : "<--";
				closestAisle = closestAisle - 1;
				routeDesc = writeRoute(outer, closestAisle, level, offset, direction);
			}
			addTextToRoute(routeDesc, "");
		}
	}
}

function resolveSeat(level, rowLabel, seatNum) {
	if (!SEAT_RULES) return null;
	const levelCfg = SEAT_RULES[level];
	if (!levelCfg) return null;

	const rowCfg = levelCfg.rows.find(r => r.label.toUpperCase() === rowLabel.toUpperCase());
	if (!rowCfg) return null;

	const { startSeat, startRow, startCol, count, gaps = [] } = rowCfg;
	if (seatNum < startSeat || seatNum > count) return null;

	let col = startCol - (seatNum - 1) * 2;
	let row = startRow;

	for (const g of gaps) {
		if (seatNum > g.afterSeat) {
			col -= g.skipCols;
			row += g.changeRow;
		}
	}

	return { col, row };
}

function highlightSeat() {
	unhighlightCell();
	addTextToRoute(` 
	 `, "");
	
	const parsed = parseSeatCode(seatInput.value);
	if (!parsed) {
		smoothCenterOnCenter();
		if (seatInput.value.toLowerCase() == "spin") {
			document.body.classList.toggle('spin-page');
			setTimeout(() => {
				document.body.classList.remove("spin-page");
			}, 1500);
		} else if (seatInput.value.toLowerCase() == "claude") {
			openOverlay();
		}
		return;
	}

	const level = levelSelect.value;          // e.g., "stalls"
	const pos   = resolveSeat(level, parsed.row, parsed.seat);
	if (pos) {
		findBestRoute(level, parsed.row, parsed.seat);
		highlightCell(pos.col, pos.row);
	} else {
		smoothCenterOnCenter();
	}
}

seatInput.addEventListener('input', () => {
	highlightSeat();
});

seatInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		seatInput.blur();
	}
});

seatInput.addEventListener('focus', function() {
	this.value = '';
	highlightSeat();
});

const overlay = document.getElementById('overlay');

function openOverlay(html) {
	if (html !== undefined) {
		const box = overlay.querySelector('.overlay-content');
		box.innerHTML = html + '<br><button id="overlay-close" class="overlay-btn">Close</button>';
		overlay.querySelector('#overlay-close').addEventListener('click', closeOverlay);
	}
	overlay.classList.add('overlay--on');
	overlay.setAttribute('aria-hidden', 'false');
	document.body.classList.add('body--lock');
}

function closeOverlay() {
	overlay.classList.remove('overlay--on');
	overlay.setAttribute('aria-hidden', 'true');
	document.body.classList.remove('body--lock');
}