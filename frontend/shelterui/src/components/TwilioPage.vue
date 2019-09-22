<template>
    <div>
        <button v-on:click="checkCapacity()">
            Press me to do some magic
        </button>
    </div>
</template>


<script>

export default {
    name: "TwilioPage",
    data() {
        return{}
    },
    props: {
        shelter: Object,
    },

    methods: {
        
    }
}
</script>

<style scoped>
</style>


