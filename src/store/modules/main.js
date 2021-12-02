export default {
    actions: {
        async fetchPosts(acceptedData) {
            const limit = 10
            const res = await fetch(
                'http://localhost:3001/goods?_limit=' + limit
            )
            const posts = await res.json()
            acceptedData.commit('updatePosts', posts)
        },
        async fetchBonus(acceptedData) {
            const limit = 10
            const res = await fetch(
                'http://localhost:3001/bonus?_limit=' + limit
            )
            const posts = await res.json()
            acceptedData.commit('updateChanges', posts)
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        updateChanges(state, bonuses) {
            state.bonuses = bonuses
        }
    },
    state: {
        posts: [],
        bonuses: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        bonusPosts(state) {
            return state.bonuses
        }
    },
}