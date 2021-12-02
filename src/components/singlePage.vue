<template>
  <div class="backg-set">
    <div class="container">
      <div
        v-on:click="$router.push({ name: 'Home' })"
        class="breadcrumbs mt-3 mb-5 d-flex align-items-center"
      >
        <i class="fas fa-long-arrow-alt-left"></i
        ><span>Главная - Личный кабинет</span>
      </div>
      <div class="main-block d-block d-lg-flex mb-5">
        <div class="first-side col-12 col-lg-5 col-md-5">
          <img
            class="w-100"
            :src="require(`@/assets/bonuses/${single.image}`)"
            alt=""
          />
        </div>
        <div class="second-side col-12 col-lg-7 col-md-7">
          <div class="d-flex mt-3 mb-3">
            <p>{{ single.article }}</p>
            <p>{{ single.category }}</p>
            <p
              class="m-0"
              v-bind:class="
                single.special == 'Новинка' ? 'active' : 'non-active'
              "
            >
              {{ single.special }}
            </p>
          </div>
          <h2>{{ single.name }}</h2>
          <h2>{{ single.price }} ₸</h2>
          <div class="buttons-main d-flex align-items-center">
            <button>Добавить в корзину</button>
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      single: null,
    };
  },
  computed: mapGetters(["allPosts"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts();
  },
  created() {
    const single = this.allPosts.find(
      (single) => single.id == this.$route.params.id
    );
    if (single) {
      this.single = single;
    }
  },
};
</script>

<style lang="less">
p {
  margin: 0 !important;
}
.buttons-main {
  margin: 2rem 0;
  button {
    padding: 10px 30px;
    color: #fff;
    border: none;
    border-radius: 4px;
    &:nth-child(1) {
      margin-right: 1rem;
      background: #e01563;
    }
    &:nth-child(2) {
      background: #393434;
    }
  }
}
.breadcrumbs {
  display: flex;
  i {
    background: #d9d9d9;
    color: #656565;
    font-size: 20px;
    padding: 5px;
    border-radius: 50%;
    margin-right: 20px;
  }
}
.second-side {
  padding-left: 2rem;
  p:nth-child(2) {
    margin: 0 1rem !important;
  }
  .active {
    background: #e01563;
    border-radius: 7.5px;
    padding: 0 5px;
    color: #fff;
  }
  .non-active {
    background: #3eb991;
    border-radius: 7.5px;
    padding: 0 5px;
    color: #fff;
  }
}
@media (max-width: 600px) {
  .second-side{
    padding: 0;
  }
}
</style>