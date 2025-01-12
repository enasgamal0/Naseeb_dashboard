<template>
    <div class="slider_wrapper">
        <!-- START:: SKELETON LOADER -->
        <!-- <SliderSkeletonLoader v-if="!sliderData" /> -->
        <!-- END:: SKELETON LOADER -->
        <!-- START:: SLIDER -->
        <carousel
            dir="ltr"
            :nav="false"
            :dots="true"
            :items="1"
            :loop="true"
            :autoplay="true"
            :autoplayTimeout="6000"
            :dragEndSpeed="2000"
            :smartSpeed="2000"
            :center="true"
        >
            <!-- START:: SLIDER ITEM -->
            <div
                :dir="getAppLocale == 'ar' ? 'rtl' : 'ltr'"
                class="slider_image_wrapper"
                v-for="slide in sliderData"
                :key="slide.id"
            >
                <img :src="slide.url" alt="Slider Image" />

                <!-- <div class="slide_content_wrapper">
                    <h2>{{ slide.file_name }}</h2>
                </div> -->
            </div>
            <!-- END:: SLIDER ITEM -->
        </carousel>
        <!-- END:: SLIDER -->
    </div>
</template>

<script>
// START:: IMPORTING VUEX HELPERS
import { mapGetters } from "vuex";
// END:: IMPORTING VUEX HELPERS

// START:: IMPORTING LOADERS
// import SliderSkeletonLoader from "../ui/loaders/SliderSkeletonLoader.vue";
// END:: IMPORTING LOADERS

// START:: IMPORTING OWL CAROUSEL
import carousel from "vue-owl-carousel";
// END:: IMPORTING OWL CAROUSEL

export default {
    name: "TheSlider",

    components: { 
        // SliderSkeletonLoader, 
        carousel 
    },

    props: ["sliderData"],

    computed: {
        // START:: VUEX GET APP THEME
        ...mapGetters("AppLangModule", ["getAppLocale"]),
        // END:: VUEX GET APP THEME
    },
};
</script>
<style>
.slider_wrapper .owl-carousel .owl-stage-outer .owl-stage .owl-item .slider_image_wrapper img{
    object-fit: contain !important;
}
</style>