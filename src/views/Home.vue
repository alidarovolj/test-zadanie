<template>
  <section>
    <div class="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="some-node">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/carousel/1.png"
              class="d-block w-100"
              alt="Первый слайд"
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/carousel/1.png"
              class="d-block w-100"
              alt="Второй слайд"
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/carousel/1.png"
              class="d-block w-100"
              alt="Третий слайд"
            />
          </div>
        </div>
      </div>
      <h2 class="text-center mt-5 mb-5">Активационные товары</h2>
      <div class="posts row justify-content-evenly">
        <div
          class="post mb-4 col-5 col-lg-2 col-md-4"
          v-for="post in allPosts"
          :key="post"
        >
          <div
            class="like mb-2 d-flex justify-content-between align-items-center"
          >
            <p
              class="m-0"
              v-bind:class="post.special == 'Новинка' ? 'active' : 'non-active'"
            >
              {{ post.special }}
            </p>
            <i class="far fa-heart"></i>
          </div>
          <img
            class="w-100"
            :src="require(`@/assets/goods/${post.image}`)"
            alt=""
          />
          <div>
            <router-link :to="{ name: 'singlePage', params: { id: post.id } }">
              <p>{{ post.name }}</p>
            </router-link>
          </div>
          <p class="m-0 price">{{ post.price }} ₸</p>
        </div>
      </div>

      <p class="setClock m-0">{{ time }}</p>
    </div>
    <div class="bonuses pt-2 pb-2">
      <div class="container">
        <h2 class="text-center mt-5 mb-5">Бонусные товары</h2>
        <div class="posts row justify-content-evenly">
          <div
            class="post mb-4 col-5 col-lg-2 col-md-4"
            v-for="post in bonusPosts"
            :key="post"
          >
            <div
              class="
                like
                mb-2
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <p
                class="m-0"
                v-bind:class="
                  post.special == 'Новинка' ? 'active' : 'non-active'
                "
              >
                {{ post.special }}
              </p>
              <i class="far fa-heart"></i>
            </div>
            <img
              class="w-100"
              :src="require(`@/assets/bonuses/${post.image}`)"
              alt=""
            />
            <div>
              <router-link
                :to="{ name: 'singlePage', params: { id: post.id } }"
              >
                <p>{{ post.name }}</p>
              </router-link>
            </div>
            <p class="m-0 price">{{ post.price }} ₸</p>
          </div>
        </div>
      </div>
    </div>
    <div class="logos">
      <div
        class="
          container
          d-block d-lg-flex d-md-flex
          justify-content-between
          align-items-center
        "
      >
        <img src="../assets/logos/1.svg" alt="" />
        <img src="../assets/logos/2.png" alt="" />
        <img src="../assets/logos/3.png" alt="" />
        <img src="../assets/logos/4.png" alt="" />
        <img src="../assets/logos/5.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      interval: null,
      time: null,
    };
  },
  props: ["ser"],
  computed: mapGetters(["allPosts", "bonusPosts"]),
  methods: mapActions(["fetchPosts", "fetchBonus"]),
  async mounted() {
    this.fetchPosts();
    this.fetchBonus();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  created() {
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
};
</script>

<style lang="less">
.carousel {
  position: relative;
}
.setClock {
  position: fixed;
  right: 20px;
  bottom: 20px;
  font-weight: 700;
}
.logos {
  padding: 30px 0;
  background: #cdf3ff;
  img {
    height: 100%;
    display: block;
    margin: auto;
  }
}
.bonuses {
  background: #f0f0f0;
}
h2 {
  font-style: normal;
  font-weight: 600 !important;
  font-size: 36px;
}
.some-node {
  position: absolute;
  left: 0;
  bottom: 0;
}
.post {
  color: #000;
  border: 1px solid #d1d1d1;
  margin: 35px 10px;
  padding: 10px;
  a {
    color: #878787;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-decoration: none;
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
  .price {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: #1c1919;
  }
}
@media (max-width: 600px) {
  .post {
    margin: 0;
  }
}
</style>