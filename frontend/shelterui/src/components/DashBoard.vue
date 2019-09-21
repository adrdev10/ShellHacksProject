<template>
    <div id="dashboard">
        <div id="left-side">
            <div>
                <img src="" alt="">
                <h3>{props.name}</h3>
            </div>
        </div>
        <div id="right-side">
            <div>
                <h1>Hello World</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashBoard"
    
}
</script>

<style>
    #dashboard {
        background-color: white !important;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
    }

    #left-side {
        flex-grow: 1
    }

    #right-side {
        flex-grow: 4;
    }

    #app {
        background-color: white !important;
    }
</style>


