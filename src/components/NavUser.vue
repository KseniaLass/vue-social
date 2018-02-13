<template>
    <div class="nav-item dropdown nav-user">
        <a class="nav-link dropdown-toggle btn btn-outline-info" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle nav-user__img" src="../assets/content/ava.jpg" alt="Avatar">
            <span class="nav-user__name">{{ name }}</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Моя страница</a>
            <a class="dropdown-item" href="#">Друзья</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Выход</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Pretty Kitty'
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-user {
        &__img {
            width: 32px;
        }
    }
</style>