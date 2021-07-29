Vue.config.devtools = true;

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
      this.autoplay();
      if (this.activeIndex === this.images.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },
    previousImage() {
      this.autoplay();
      if (this.activeIndex === 0) {
        this.activeIndex = this.images.length - 1;
      } else {
        this.activeIndex--;
      }
    },
    setActiveIndex(newIndex) {
      this.autoplay();
      this.activeIndex = newIndex;
    },
    autoplay() {
      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(this.nextImage, 3000);
    },
  },
  created() {
    this.autoplay();
  },
});
