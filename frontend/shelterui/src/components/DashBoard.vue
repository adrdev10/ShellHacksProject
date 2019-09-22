<template>
  <div id="dashboard">
    <div class="navigation" id="myTopnav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">HURRICANE RELIEF</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <div style="margin-left: 0;">
            <b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-form class="ml-auto">
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
              </b-navbar-nav>
            </b-navbar-nav>
          </div>

          <!--Testing decresed property -->
          <button v-on:click="decresedToZero()">Hello World</button>

          <div style="margin-left: 10px;">
            <b-navbar-nav class="ml-auto">
              <template>
                <div>
                  <b-form-select v-model="selected" :options="options" size="sm" class="ml-auto"></b-form-select>
                </div>
              </template>
            </b-navbar-nav>
          </div>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div id="left-side">
      <div>
        <img src alt />
      </div>
    </div>
    <div id="right-side">
      <div>
        <gmap-map :center="center" :zoom="12" style="width:100%;  height: 700px;">
          <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
const keyAPI = "b63e8965c5e1631e57d5c87eaa0b8fd4";
const AccountSID = "AC36e4053e614b15fe37b4ac51dc065217";

const pn = "+12563635545";
const mn = "+17547154916";

export default {
  name: "DashBoard",
  props: {
    user: Object
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      user: {
        selectedShelter: [{}]
      },
      currentPlace: null,
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ],
      capacity: 0,
    };
  },

  watch: {
    capacity: function(newVal, oldVal) {
      console.log(newVal);
      fetch("http://localhost:3000/postCalls", {
        method:'post',
        body: this.capacity,
      }).then((res, err) => {
        if (err) {
          console.log("Problem with server")
        }
      })
    }
  },

  mounted() {
    let fakeData = {
      data: [25.738426, -80.36898, 25.744611, -80.344279]
    };

    if (fakeData == null || fakeData.data.length == 0) {
      console.log("No Shelters");
    }
  },

  created() {
    this.geolocate();
  },

  methods: {
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

    decresedToZero(){
      this.capacity++;
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
}
#left-side {
  flex-grow: 1;
  float: left;
  text-align: left;
  overflow: auto;
  margin: auto;
  width: 35%;
}
#right-side {
  flex-grow: 4;
  float: right;
  margin: auto;
  text-align: right;
  width: 65%;
}
#app {
  background-color: white !important;
}
</style>


