<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExprience"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ["results"],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    };
  },

  methods: {
    loadExprience() {
      fetch(
        "https://vue-http-request-da1fe-default-rtdb.firebaseio.com/surveys.json",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        });
    },
  },
  mounted() {
    this.loadExprience();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
