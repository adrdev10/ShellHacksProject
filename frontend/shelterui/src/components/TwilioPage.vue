<template>
    <div>
        <button v-on:click="checkCapacity()">
            Press me to do some magic
        </button>
    </div>
</template>


<script>
const keyAPI = "b63e8965c5e1631e57d5c87eaa0b8fd4";
const AccountSID = "AC36e4053e614b15fe37b4ac51dc065217"

export default {
    name: "TwilioPage",
    data() {
        return{}
    },
    props: {
        shelter: Object,
    },

    methods: {
        checkCapacity() {
            const client = require('twilio')(AccountSID, keyAPI);
            client.messages
                .create({body: 'Current Capacity is ' + capacity, from: '+12563635545', to: '+17547154916'})
                    .then(message => console.log(message.sid));
        }
    }
}
</script>

<style scoped>
</style>


