/*
	封装轮播图类
*/
class Carousel {
	constructor({el, timeout = 3000}) {
		this.el = el;
		this.timeout = timeout;

		// 鼠标移入移出事件
		this.el.onmouseover = () => {
			// 清除定时器
			clearInterval(this.timer);
		}
		this.el.onmouseout = () => {
			// 再次自动轮播
			this.autoMove();
		}


		// 复制carousel-list的第一个LI到最后
		let carouselList = this.el.getElementsByClassName('carousel-list')[0];
		let firstLi = carouselList.children[0];
		this.liWidth = firstLi.offsetWidth;    // 每张图片的宽度
		
		carouselList.innerHTML += firstLi.outerHTML; // 复制第一张图片
		this.imgLen = carouselList.children.length; // 图片的个数

		// 设置最新的UL宽度
		carouselList.style.width = this.imgLen * this.liWidth + 'px';

		this.carouselList = carouselList;


		// 添加LI的下标
		this.liIndex = 0;
		// 添加按钮的下标
		this.dotIndex = 0;

		// 获取按钮的长度
		this.dots = this.el.getElementsByClassName('dots')[0];
		this.dotLen = this.dots.children.length;

		for(let i = 0; i < this.dotLen; i++) {
			this.dots.children[i].onmouseover = () => {
				this.liIndex = i;
				this.dotIndex = i;

				// 让UL运动
				bufferMove(this.carouselList, {left: - this.liIndex * this.liWidth});
				// 切换按钮
				this.dotMove();
			}
		}
		// 自动轮播
		this.autoMove();
	}

	autoMove() {
		this.timer = setInterval(() => {
			this.rightMove();
		}, this.timeout);
	}

	leftMove() {
		this.liIndex--;
		if(this.liIndex < 0) {
			this.carouselList.style.left = - (this.imgLen - 1) * this.liWidth + 'px';
			this.liIndex = this.imgLen - 2;
		}
		bufferMove(this.carouselList, {left: - this.liIndex * this.liWidth});

		// 按钮切换
		this.dotIndex--;
		this.dotMove();
	}

	rightMove() {
		// 图片运动
		this.liIndex++;

		if(this.liIndex >= this.imgLen) {
			this.carouselList.style.left = 0
			this.liIndex = 1
		}
		bufferMove(this.carouselList, {left: - this.liIndex * this.liWidth});

		// 按钮切换
		this.dotIndex++;
		this.dotMove();
	}
	dotMove() {

		// 左侧方向的判断
		if(this.dotIndex < 0) {
			this.dotIndex = this.dotLen - 1;
		}
		// 右侧方向的判断
		if(this.dotIndex >= this.dotLen) {
			this.dotIndex = 0;
		}

		for(let i = 0; i < this.dotLen; i++) {
			this.dots.children[i].className = '';
		}
		this.dots.children[this.dotIndex].className = 'active';
	}
}

