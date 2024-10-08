const { createApp } = Vue;

createApp({
  data() {
    return {
        albumList: [],
        apiUrl: "http://localhost/php-dischi-json/api/albums.php",
    }
  },


  methods:{
    getAlbumList(){
        axios.get(this.apiUrl)
        .then((response) => {
          
          console.log(response.data);
          albumList = response.data;
          console.log("Album list array:", albumList);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
},
created(){
    this.getAlbumList();

  }
}).mount('#app')