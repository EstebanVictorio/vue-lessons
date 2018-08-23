<template>
    <div class="mdc-typography">
        <h1 class="mdc-typography--headline1">App</h1>
        <router-link to="/">Go to home</router-link>
        <router-link to="/product">Go to product</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Base"
    }
</script>

<style scoped>

</style>