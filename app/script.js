const { createApp } = Vue;


createApp({
  data() {
    return {
albumList: [],
apiUrl: "",
    }
  },

  methods:{
    getAlbumList(){
        axios.get('/user?ID=12345')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    created(){
        this.getAlbumList();
    }
  }
}).mount('#app')