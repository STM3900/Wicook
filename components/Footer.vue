<template>
  <footer>
    <hr />
    <p>
      Wicook - 2021, par
      <a href="https://theomigeat.com" target="_blank">Théo</a> !
    </p>
    <hr />
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  padding-bottom: 25px;
}

footer p {
  text-align: center;
}

footer a {
  color: rgb(82, 153, 211);
}

footer a:hover {
  animation-name: rainbow;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
}

@keyframes rainbow {
  0% {
    color: rgb(82, 153, 211);
  }
  12% {
    color: #4355db;
  }
  25% {
    color: #a3e048;
  }
  37% {
    color: #f7d038;
  }
  50% {
    color: #e6261f;
  }
  62% {
    color: #f7d038;
  }
  75% {
    color: #a3e048;
  }
  87% {
    color: #4355db;
  }
}
</style>
