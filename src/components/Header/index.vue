<template>
    <header :class="css.wrapper">
        <div :class="css.container">
            <div :class="css.logo">
                GimiBooks
            </div>
            <div>
                Search
            </div>
            <div>
                navigation
            </div>
        </div>
    </header>
</template>

<script>
    import css from './Header.scss';
    export default {
        data () {
            return {
                css
            }
        }
    }
</script>
