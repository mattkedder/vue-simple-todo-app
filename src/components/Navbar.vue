<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" v-bind:class=" { 'navbarOpen': show }">
        <div class="container">
            <a class="navbar-brand" href="#">What you have done today?</a>
            <span class="navbar-text float-right">
        <i class="fa fa-list"></i> {{ done }}/{{ total }}
      </span>

        </div>
    </nav>
</template>
<script>
export default {
    name: "Navbar",
    props: ["done", "total"],
    data() {
        return {
            show: true
        }
    },
    methods: {
        toggleNavbar() {
            this.show = !this.show;
        }
    }
}
</script>