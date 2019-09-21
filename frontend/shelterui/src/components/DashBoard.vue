<template>
  <div id="dashboard">
    <div id="left-side">
      <div>
        <img src alt />
        <h3>{props.name}</h3>
      </div>
    </div>
    <div id="right-side">
      <div>
        <gmap-map :center="center" :zoom="12" style="width:100%;  height: 700px;">
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "DashBoard",
  data() {
    return{
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  mounted() {
    let fakeData = {
      data: [25.738426,-80.36898, 25.744611, -80.344279],
    };
  
    if(fakeData == null || fakeData.data.length == 0) {
      console.log("No Shelters")
    }
  },

  created() {
    this.geolocate();
  },

    
  methods:{
     addMarker(lat, lon) {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },

    setPlace(place) {
      this.currentPlace = place;
    },

     geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.markers.push({ position: this.center });
      });
    }
  }
};
</script>

<style>
#dashboard {
  background-color: white !important;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}

#left-side {
  flex-grow: 1;
}

#right-side {
  flex-grow: 4;
}

#app {
  background-color: white !important;
}
</style>


