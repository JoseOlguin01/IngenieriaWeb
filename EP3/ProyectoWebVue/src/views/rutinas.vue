<template>
  <div>
    <div class="columna">
      <Card
        v-for="card in cards"
        :key="card.id"
        :imageSrc="(`../assets/images/${card.imageSrc}`)"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          imageSrc: "rock.jpg",
          title: "ROCK LIFTING",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
          id: 2,
          imageSrc: "80.jpg",
          title: "80'S FITNESS",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        // Agrega más objetos de tarjeta según sea necesario
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../assets/rutinas.scss';
</style>
