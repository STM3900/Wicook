<template>
  <div>
    <timeline>
      <timeline-title bg-color="#d3d3d3"
        ><h3>Étape {{ numEtape }}</h3>
        <div v-if="data.img.src" class="img">
          <img :src="data.img.src" :alt="data.img.alt" />
        </div>
        <p>{{ data.text }}</p></timeline-title
      >
    </timeline>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";

export default {
  name: "Etape",
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    numEtape: {
      type: Number,
      default: null
    }
  }
};
</script>

<style scoped>
h3 {
  margin-top: 0;
  font-size: 1.3rem;
}

.step {
  margin-left: 20px;
}

.img img {
  width: 50%;
  height: 250px;
  object-fit: cover;
}

.timeline-title:hover {
  cursor: auto;
  color: #d3d3d3;
}
</style>
