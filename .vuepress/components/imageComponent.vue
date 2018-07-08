<template>
<div>
 <h1 :v-if="heading">{{heading}}</h1>
    <p><img :src="`/${pic}.jpg`"  /></p>
    <!-- <p :v-if="showLink"><router-link :to="`${lnkUrl}.html`" class="nav-link action-button">{{btnText}}</router-link></p> -->
</div>
   
</template>

<script>
export default {
    data(){
        return {
            message:'sdfsdf'
        }
    },

    props:['heading','pic', 'btnText', 'lnkUrl', 'showLink'],

    methods:{
    },

}
</script>

<style lang="stylus" scoped>


    p
        text-align :center

        a.action-button
            color: #ffffff !important
            background-color :#3eaf7c
            padding: 0.8rem 1.6rem
            border-radius: 4px
            margin : 10px auto 
            display : inline-block
        a.action-button:hover
            text-decoration none !important
            background-color :#30825d
</style>


