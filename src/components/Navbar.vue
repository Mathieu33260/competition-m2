<template>
    <b-navbar toggleable="lg" type="dark" style="background-color: black">
        <b-navbar-nav>

            <b-navbar-brand to="/">Le Centre</b-navbar-brand>

        </b-navbar-nav>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-navbar-brand class="mr-5" to="/expo">Expositions</b-navbar-brand>
                <b-navbar-brand class="mr-5" to="/visite">Votre visite</b-navbar-brand>
                <b-button variant="light" pill class="mr-5" to="/billeterie">Billeterie</b-button>
                <b-nav-item-dropdown class="mr-5" right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <span style="color: white">Vous êtes</span>
                    </template>
                    <b-dropdown-item href="#">En famille</b-dropdown-item>
                    <b-dropdown-item href="#">En situation de handicap</b-dropdown-item>
                    <b-dropdown-item href="#">Un professionnel</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
