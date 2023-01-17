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
      <div class="onImageElements">
        <!----- Header ----->

        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #00000000; margin-top: 8px; margin-left: 16px; margin-right: 16px;">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img :src="require('/src/assets/fmTextedLogoWhite.png')"  style="padding-bottom: 4px; margin-right: 16px; width: 200px"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLightNavbar" aria-controls="offcanvasLightNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasLightNavbar" aria-labelledby="offcanvasLightNavbar">
              <div class="offcanvas-header">
                <img :src="require('/src/assets/fmTextedLogoWhite.png')" width="200px" style="padding-bottom: 4px; margin-right: 16px;" />
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item dropdown dropdown-hover">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Services </a>
                    <ul class="dropdown-menu fade-down">
                      <li>
                        <a class="dropdown-item dropdown-menu-dark" href="#">Airfreight</a>
                      </li>
                      <li>
                        <a class="dropdown-item dropdown-menu-dark" href="#">Seafreight</a>
                      </li>
                      <li>
                        <a class="dropdown-item dropdown-menu-dark" href="#">Road</a>
                      </li>
                      <li>
                        <a class="dropdown-item dropdown-menu-dark" href="#">Rail</a>
                      </li>
                      <li>
                        <a class="dropdown-item dropdown-menu-dark" href="#">Customs brokerage</a>
                      </li>
                      <li>
                        <a class="dropdown-item dropdown-menu-dark" href="#">Special services</a>
                      </li>
                      <li>
                        <a class="dropdown-item dropdown-menu-dark" href="#">Vessel chartering</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Career</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
                <router-link to="#" style="margin: auto 0;" width="24" height="24">
                  <img :src="require('/src/assets/icons/language.png')" width="24" height="24" />
                </router-link>

                <router-link to="/login" style="margin: auto 0 auto 24px;" width="24" height="24">
                  <img :src="require('/src/assets/icons/user.png')" width="24" height="24" />
                </router-link>
              </div>
            </div>
          </div>
        </nav>


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

// --Header--
.onImageElements {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  .navbar-nav > li > .dropdown-menu {
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.4);
    backdrop-filter: blur(5px);
  }

  @media all and (min-width: 992px) {
    .navbar .dropdown-menu-end{ right:0; left: auto;  }
    .navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
    .navbar .nav-item:hover .nav-link{ color: #fff;  }
    .navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0 0; }
    .navbar .dropdown-menu.fade-up{ top:180%;  }
    .navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg); }
  }
}
</style>
