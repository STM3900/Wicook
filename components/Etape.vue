<template>
  <div>
    <timeline :class="completed ? 'inactive' : ''">
      <timeline-title bg-color="#FFB39F"
        ><h3 @click="completed = !completed">Étape {{ numEtape }}</h3>
        <div v-if="data.img.src" class="img" @click="expend = !expend">
          <img
            :class="expend ? 'img-expend' : 'img-base'"
            :src="data.img.src"
            :alt="data.img.alt"
          />
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
  data() {
    return {
      completed: false,
      expend: false
    };
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
  color: #ec5353;
}

h3:hover {
  cursor: pointer;
}

.step {
  margin-left: 20px;
}

.img img {
  object-fit: cover;
  transition: 0.3s;
}

.img img:hover {
  cursor: pointer;
}

.img-base {
  width: 50%;
  height: 250px;
}

.img-expend {
  width: 100%;
  height: 500px;
}

.timeline {
  transition: 0.3s;
}

.timeline-title:hover {
  cursor: auto;
  color: #d3d3d3;
}

.inactive {
  opacity: 0.5;
}
</style>
