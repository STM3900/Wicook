<template>
  <div>
    <div class="wrapper">
      <Nuxt />
      <div class="push"></div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  components: {
    Footer
  }
};
</script>

<style>
html,
body {
  min-height: 80vh;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
.wrapper {
  min-height: 93vh;
  /* Equal to height of footer */
  /* But also accounting for potential margin-bottom of last child */
  margin-bottom: -50px;
}
.footer,
.push {
  height: 50px;
}

.link {
  color: #ec5353;
  transition: 0.3s;
}

.link:hover {
  color: #b44444;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  transition: 0.3s;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  transition: 0.3s;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(100px, 0, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}

::-webkit-scrollbar {
  width: 8px;
  background: #ffffff;
  border-left: 1px solid #ffffff;
}

::-webkit-scrollbar-track {
  border-radius: 1px;
}

::-webkit-scrollbar-thumb {
  background: #ec5353;
  border-left: 0px solid #ffffff;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>
