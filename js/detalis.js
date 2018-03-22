var oBox  	   = document.getElementById('box');
var oSmallBox  = document.getElementById('small-box');
var aSmallImg  = Array.from(oSmallBox.children);
var oMiddleBox = document.getElementById('middle-box');
var oMiddleImg = document.getElementById('middle-img');
var oLargeBox  = document.getElementById('large-box');
var oLargeImg  = document.getElementById('large-img');
var oShadow    = document.getElementById('shadow');

aSmallImg.forEach( v => {
	v.onmouseover = function () {
		aSmallImg.forEach(v => v.className = '');
		this.className = 'active';
		oMiddleImg.src = this.src;
		oLargeImg.src = this.src;
	};
});

var maxL = 0;
var maxT = 0;
var maxLargeImgL  = 0;
var maxLargeImgT  = 0;

oMiddleBox.onmouseover = function () {
	oShadow.style.display = 'block';
	oLargeBox.style.display = 'block';

	maxL = oMiddleBox.offsetWidth - oShadow.offsetWidth;
	maxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

	maxLargeImgL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
	maxLargeImgT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;
};

oMiddleBox.onmouseout = function () {
	oShadow.style.display = 'none';
	oLargeBox.style.display = 'none';
};

oMiddleBox.onmousemove = function (ev) {
	var e = ev || window.event;
	var iL = e.pageX - oShadow.offsetWidth / 2 - oMiddleBox.offsetLeft - oBox.offsetLeft;
	var iT = e.pageY - oShadow.offsetHeight / 2 - oMiddleBox.offsetTop - oBox.offsetTop;

	if(iL < 0) {
		iL = 0;
	}

	if(iT < 0) {
		iT = 0;
	}

	if(iL > maxL) {
		iL = maxL;
	}

	if(iT > maxT) {
		iT = maxT;
	}
	oShadow.style.left = iL + 'px';
	oShadow.style.top  = iT + 'px';

	oLargeImg.style.left  = - iL * maxLargeImgL / maxL + 'px';
	oLargeImg.style.top   = - iT * maxLargeImgT / maxT + 'px';
};
