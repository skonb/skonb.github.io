<template>
    <div>
        <div id="nav">
            <router-link to="/">Top</router-link> |
            <router-link to="/achievement">Achievement</router-link> |
            <router-link to="/game">Game_Corner</router-link>
        </div>
        <router-view />
    </div>
</template>
<script type="ts">
import 'bootstrap/dist/css/bootstrap.css'; // add
import 'bootstrap-vue/dist/bootstrap-vue.css'; // add

import { defineComponent } from 'vue';
export default defineComponent({
});
</script>

<style>

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
