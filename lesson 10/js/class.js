class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	};

	create(text) {
		let newDiv = document.createElement("div");
		newDiv.textContent = text;
		newDiv.style.cssText = `height:${this.height}px; 
							width:${this.width}px;
							background:${this.bg};
							font-size:${this.fontSize}px;
							text-align:${this.textAlign};`;
		document.body.appendChild(newDiv);
	};
}


let testDiv = new options(
	height = 500,
	width = 700,
	bg = '#32873f',
	fontSize = 17,
	textAlign = 'center'
);

testDiv.create("It's work");