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
                        <em>{{usersignedin}}</em>
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
        <h3>{{usersignedin}}</h3>
      </div>
    </div>
    <div id="right-side">
      <div>
        <gmap-map :center="center" :zoom="12" style="width:100%;  height: 700px;">
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
			v-on:click="markerClickHandler"
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
  props: {
	  usersignedin: String
  },
  data() {
    return{
      center: { lat: 45.508, lng: -73.587 },
	  places: [],
	  markers: [
		  { position: {lat: 30.607481, lng: -86.515763}, address: "", name: "Shelter 1"},
		  { position: {lat: 30.076522, lng: -81.749945}, address: "", name: "Shelter 2"},
		  { position: {lat: 28.447261, lng: -81.398536}, address: "", name: "Shelter 3"},
		  { position: {lat: 25.787836, lng: -80.256457}, address: "", name: "Shelter 4"},
		  { position: {lat: 27.305359, lng: -80.352243}, address: "", name: "Shelter 5"},
		  { position: {lat: 30.395532, lng: -84.271367}, address: "", name: "Shelter 6"},
		  { position: {lat: 27.956539, lng: -82.478864}, address: "", name: "Shelter 7"}
	  ],
      currentPlace: null,
      selected: null,
        options: [
          { value: null, text: 'Please select the closet shelter' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
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
	
	markerClickHandler: function(event) {
		console.log(event.latLng + "")
		Object.keys(event).push({address: "Shelter 1"})
		console.log("shelter got clicked: " + event)
		console.log("shelter got clicked: " + Object.keys(event))
		console.log("xa    : " + event.xa)
		console.log("pixel: " + event.pixel)
		console.log("ua: " + event.ua)

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
        // this.markers.push({ position: {lat: 30.607481, lng: -86.515763}});
        // this.markers.push({ position: {lat: 30.076522, lng: -81.749945}});
        // this.markers.push({ position: {lat: 28.447261, lng: -81.398536}});
        // this.markers.push({ position: {lat: 25.787836, lng: -80.256457}});
        // this.markers.push({ position: {lat: 27.305359, lng: -80.352243}});
        // this.markers.push({ position: {lat: 30.395532, lng: -84.271367}});
		// this.markers.push({ position: {lat: 27.956539, lng: -82.478864}});
		this.markers.push();
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



