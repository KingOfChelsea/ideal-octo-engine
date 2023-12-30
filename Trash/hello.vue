<template>
    <div id="mybg" ref="vantaRef">
    </div>
</template>
    
<script>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds'
export default {
    name: "hello",
    data() {
        return {
        };
    },
    mounted() {
        this.vantaEffect = BIRDS({
            el: this.$refs.vantaRef,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 0.8,
            scaleMobile: 1.00,
            backgroundColor:0xb5c4cc,
            color1: 0xcaab9b,
            color2: 0x1f70c5,
            colorMode: "lerp",
            birdSize: 1.50,
            quantity: 4,
            backgroundAlpha: 1
        })

    },
    beforeDestroy() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy()
        }
    },
    methods: {
    },
};
</script>
    
<style>

#mybg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -20;

}
</style>
    