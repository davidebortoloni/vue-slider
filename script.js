let play;

const root = new Vue({
  el: "#root",
  data: {
    activeIndex: 0,
    images: [
      "./images/image1.jpg",
      "./images/image2.jpg",
      "./images/image3.jpg",
      "./images/image4.jpg",
    ],
  },
  methods: {
    nextImage() {
      clearInterval(play);
      this.continuousPlayback();
      if (this.activeIndex === this.images.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },
    previousImage() {
      clearInterval(play);
      this.continuousPlayback();
      if (this.activeIndex === 0) {
        this.activeIndex = this.images.length - 1;
      } else {
        this.activeIndex--;
      }
    },
    setActiveIndex(newIndex) {
      this.activeIndex = newIndex;
    },
    continuousPlayback() {
      play = setInterval(this.nextImage, 3000);
    },
  },
});

root.continuousPlayback();
