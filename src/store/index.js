import { createStore } from 'vuex'
import router from '../router'
import { auth,db,ref, set } from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth'

export default createStore({
  state: {
    user: null,
    loading: false,
  },
  mutations: {

    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    },

    SET_LOADING (state) {
      state.loading = true
    },

    UNSET_LOADING (state) {
      state.loading = false
    },


   

  },
  actions: {
    
    
    async login ({ commit }, details) {
      commit('SET_LOADING');
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
        commit('UNSET_LOADING');
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async register ({ commit}, details) {
      commit('SET_LOADING');
       const { email, password ,uname} = details
    // console.log(username);
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        // commit('UNSET_LOADING');
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }
      // auth.currentUser.userName = username;
      commit('SET_USER', auth.currentUser)
      
      
        let data ={
          displayName: uname,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          fileToken: 100
        }
        
        set(ref(db, 'users/' + auth.currentUser.uid), data);
        commit('UNSET_LOADING');
      
      
      router.push('/')
    },

    

    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

 

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
    
  }
})