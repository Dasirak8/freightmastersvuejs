<template>
  <div class="home">
    <div>
      <Carousel
        :navigation="false"
        :pagination="false"
        :startAutoPlay="true"
        :timeout="5000"
        class="carousel"
        v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img class="background-tint" :src="require(`../assets/slideshowImages/${slide}.jpg`)" alt="" />
          </div>
        </Slide>
      </Carousel>

      <!--- Your on-image shit here --->
      <div class="container">
        <h1>PUT YOUR ELEMENTS HERE</h1>
      </div>

    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["1", "2", "3", "4"];

    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #080710;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.background-tint {
  filter:brightness(50%);
}
.carousel {
  position: relative;
  display: flex;
  max-height: 100vh;
  height: 100vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

</style>
