<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <a class="navbar-brand col-3" href="#">
            <img src="../assets/paw.svg" alt="Paw!">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!--<form class="form-inline">-->
                <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
                <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
            <!--</form>-->

            <app-nav-user></app-nav-user>

        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .navbar {
        width: 100%;
        &-brand {
            img {
                width: 40px;
                height: 40px;
            }
        }
        &-collapse {
            justify-content: flex-end;
        }
    }
</style>