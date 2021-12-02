<template>
  <nav id="navbar">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center set-blocks">
        <h1 class="m-0" v-on:click="$router.push({ name: 'Home' })">
          LOGOxLOGO
        </h1>
        <div class="search-bar">
          <input
            class="search w-100"
            type="text"
            placeholder="Поиск"
            v-model="inputData"
            @keyup="$emit('update', inputData)"
          />
          <i class="fas fa-search"></i>
          <div class="results">
            <div
              class="singleRes d-flex align-items-center"
              v-for="seb in filteredSearch"
              :key="seb"
            >
              <router-link
                class="d-flex w-100 align-items-center"
                :to="{ name: 'singlePage', params: { id: seb.id } }"
              >
                <img
                  class="w-50 me-2"
                  :src="require(`@/assets/goods/${seb.image}`)"
                  alt=""
                />
                <p class="m-0">{{ seb.name }}</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="profile">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle d-flex justify-content-between align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="far fa-grin"></i> <span class="d-none d-lg-flex d-md-flex me-2 ms-2">Мой профиль</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="
          d-flex
          align-items-center
          justify-content-between
          set-blocks-second overflow-auto
        "
      >
        <button class="categories d-flex align-items-center">
          <i class="fas fa-bars"></i>
          <p class="w-100 m-0">Категории товаров</p>
        </button>
        <ul class="d-flex justify-content-between set-links align-items-center m-0 p-0">
          <li>
            <a href="" v-on:click="$router.push({ name: 'thumb' })">Главная</a>
          </li>
          <li>
            <a href="" v-on:click="$router.push({ name: 'thumb' })"
              >О компании</a
            >
          </li>
          <li>
            <a href="" v-on:click="$router.push({ name: 'thumb' })"
              ><i class="fas fa-gift"></i> Бонусная система</a
            >
          </li>
          <li>
            <a href="" v-on:click="$router.push({ name: 'thumb' })"
              >Поддержка</a
            >
          </li>
          <li>
            <a href="" v-on:click="$router.push({ name: 'thumb' })">Контакты</a>
          </li>
        </ul>
        <div class="d-flex additions">
          <i class="far fa-heart"></i>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["ser"],
  computed: {
    ...mapGetters(["allPosts"]),
    filteredSearch() {
      return this.allPosts.filter((another) =>
        another.name.toLowerCase().includes(this.ser.toLowerCase())
      );
    },
  },
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="less">
h1 {
  font-weight: 700 !important;
}
.dropdown-toggle::after {
  color: #7dc1d7 !important;
  border-top: 0.5em solid;
  border-right: 0.5em solid transparent;
  border-left: 0.5em solid transparent;
}
.search-bar {
  position: relative;
  width: 40%;
  .search {
    background: #eeeeee;
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 10px 20px;
    color: #fff;
    font-size: 18px;
    display: block;
    padding: .375rem .75rem;
    &:focus-within ~ .results {
      display: block;
    }
  }
  i {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .results {
    position: absolute;
    top: 100%;
    display: none;
    height: fit-content;
    background: #fff;
    z-index: 1000;
    padding: 10px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    .singleRes {
      width: 100%;
      height: 100%;
      a{
        color: #000;
        text-decoration: none;
      }
    }
  }
}
.set-blocks {
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  padding: 20px 0;
}
.set-blocks-second {
  padding: 20px 0;
  ul li {
    padding: 0 20px;
  }
  ul a {
    color: #000;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  ul i {
    color: #e01563;
  }
}
.additions i {
  font-size: 24px;
  padding: 10px;
  background: #f0f0f0;
  border-radius: 50%;
  color: #e01563;
  margin-left: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #e01563;
    border-radius: 50%;
    color: #fff;
  }
}
.set-links {
  list-style-type: none;
  a {
    color: #000;
    transition: all 0.3s;
  }
  a:hover {
    color: #e01563;
  }
}
.categories {
  background: #ffdd00;
  border-radius: 4px;
  border: none;
  width: fit-content;
  padding: 15px 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  i {
    margin-right: 10px;
  }
}
.dropdown button {
  background: #cdf3ff;
  border: none;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.24px;
  i {
    background: #fff;
    padding: 5px;
    border-radius: 50%;
    color: #7dc1d7;
  }
}
</style>