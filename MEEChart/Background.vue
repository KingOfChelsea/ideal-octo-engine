<template>
    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: 'Background',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    z-index: -100;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000;
    overflow: hidden;
}

.background span {
    width: 18vmin;
    height: 18vmin;
    border-radius: 18vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 32;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #215433;
    top: 95%;
    left: 80%;
    animation-duration: 147s;
    animation-delay: -175s;
    transform-origin: 5vw 3vh;
    box-shadow: 36vmin 0 5.057325193049916vmin currentColor;
}

.background span:nth-child(1) {
    color: #687449;
    top: 37%;
    left: 20%;
    animation-duration: 95s;
    animation-delay: -170s;
    transform-origin: -9vw -1vh;
    box-shadow: 36vmin 0 4.816945364674123vmin currentColor;
}

.background span:nth-child(2) {
    color: #583c3c;
    top: 60%;
    left: 51%;
    animation-duration: 172s;
    animation-delay: -170s;
    transform-origin: -5vw -24vh;
    box-shadow: 36vmin 0 5.163881395973588vmin currentColor;
}

.background span:nth-child(3) {
    color: #215433;
    top: 34%;
    left: 99%;
    animation-duration: 70s;
    animation-delay: -150s;
    transform-origin: 7vw -15vh;
    box-shadow: 36vmin 0 4.684333757468627vmin currentColor;
}

.background span:nth-child(4) {
    color: #534969;
    top: 12%;
    left: 33%;
    animation-duration: 166s;
    animation-delay: -42s;
    transform-origin: 25vw -4vh;
    box-shadow: -36vmin 0 4.889659281166987vmin currentColor;
}

.background span:nth-child(5) {
    color: #215433;
    top: 37%;
    left: 19%;
    animation-duration: 8s;
    animation-delay: -4s;
    transform-origin: -17vw 3vh;
    box-shadow: 36vmin 0 4.80854307454979vmin currentColor;
}

.background span:nth-child(6) {
    color: #215433;
    top: 49%;
    left: 50%;
    animation-duration: 138s;
    animation-delay: -165s;
    transform-origin: 5vw 5vh;
    box-shadow: 36vmin 0 5.130102591462078vmin currentColor;
}

.background span:nth-child(7) {
    color: #215433;
    top: 30%;
    left: 47%;
    animation-duration: 100s;
    animation-delay: -103s;
    transform-origin: -4vw 17vh;
    box-shadow: 36vmin 0 4.8441849823616785vmin currentColor;
}

.background span:nth-child(8) {
    color: #c777c3;
    top: 83%;
    left: 28%;
    animation-duration: 179s;
    animation-delay: -134s;
    transform-origin: -10vw -2vh;
    box-shadow: 36vmin 0 4.82553408472873vmin currentColor;
}

.background span:nth-child(9) {
    color: #534969;
    top: 94%;
    left: 86%;
    animation-duration: 28s;
    animation-delay: -180s;
    transform-origin: -11vw -2vh;
    box-shadow: 36vmin 0 4.900681413864927vmin currentColor;
}

.background span:nth-child(10) {
    color: #c777c3;
    top: 42%;
    left: 74%;
    animation-duration: 140s;
    animation-delay: -180s;
    transform-origin: -22vw -9vh;
    box-shadow: -36vmin 0 4.816300399066341vmin currentColor;
}

.background span:nth-child(11) {
    color: #583c3c;
    top: 16%;
    left: 11%;
    animation-duration: 59s;
    animation-delay: -43s;
    transform-origin: -10vw -18vh;
    box-shadow: 36vmin 0 5.412040561433092vmin currentColor;
}

.background span:nth-child(12) {
    color: #c777c3;
    top: 80%;
    left: 27%;
    animation-duration: 9s;
    animation-delay: -1s;
    transform-origin: 21vw 6vh;
    box-shadow: -36vmin 0 5.4534487159111595vmin currentColor;
}

.background span:nth-child(13) {
    color: #687449;
    top: 64%;
    left: 44%;
    animation-duration: 139s;
    animation-delay: -148s;
    transform-origin: -13vw -11vh;
    box-shadow: 36vmin 0 4.791529202644207vmin currentColor;
}

.background span:nth-child(14) {
    color: #583c3c;
    top: 96%;
    left: 87%;
    animation-duration: 105s;
    animation-delay: -51s;
    transform-origin: 2vw 11vh;
    box-shadow: -36vmin 0 5.303244470427755vmin currentColor;
}

.background span:nth-child(15) {
    color: #534969;
    top: 7%;
    left: 12%;
    animation-duration: 6s;
    animation-delay: -6s;
    transform-origin: -1vw 15vh;
    box-shadow: -36vmin 0 4.963377804734918vmin currentColor;
}

.background span:nth-child(16) {
    color: #6c4747;
    top: 53%;
    left: 47%;
    animation-duration: 164s;
    animation-delay: -42s;
    transform-origin: 24vw 13vh;
    box-shadow: 36vmin 0 4.917230508762871vmin currentColor;
}

.background span:nth-child(17) {
    color: #6c4747;
    top: 48%;
    left: 55%;
    animation-duration: 149s;
    animation-delay: -37s;
    transform-origin: 22vw 1vh;
    box-shadow: 36vmin 0 5.459679677556695vmin currentColor;
}

.background span:nth-child(18) {
    color: #c777c3;
    top: 24%;
    left: 2%;
    animation-duration: 60s;
    animation-delay: -84s;
    transform-origin: -4vw 22vh;
    box-shadow: -36vmin 0 4.5925026624312935vmin currentColor;
}

.background span:nth-child(19) {
    color: #534969;
    top: 76%;
    left: 13%;
    animation-duration: 97s;
    animation-delay: -93s;
    transform-origin: 5vw -24vh;
    box-shadow: -36vmin 0 4.912322399117179vmin currentColor;
}

.background span:nth-child(20) {
    color: #583c3c;
    top: 55%;
    left: 80%;
    animation-duration: 132s;
    animation-delay: -124s;
    transform-origin: 8vw 5vh;
    box-shadow: 36vmin 0 4.704694991670549vmin currentColor;
}

.background span:nth-child(21) {
    color: #583c3c;
    top: 37%;
    left: 83%;
    animation-duration: 104s;
    animation-delay: -59s;
    transform-origin: 16vw -19vh;
    box-shadow: 36vmin 0 4.694638357213654vmin currentColor;
}

.background span:nth-child(22) {
    color: #6c4747;
    top: 13%;
    left: 56%;
    animation-duration: 78s;
    animation-delay: -154s;
    transform-origin: 3vw 23vh;
    box-shadow: -36vmin 0 5.457450813961343vmin currentColor;
}

.background span:nth-child(23) {
    color: #215433;
    top: 38%;
    left: 78%;
    animation-duration: 100s;
    animation-delay: -13s;
    transform-origin: -5vw 12vh;
    box-shadow: 36vmin 0 4.630299326881768vmin currentColor;
}

.background span:nth-child(24) {
    color: #c777c3;
    top: 65%;
    left: 14%;
    animation-duration: 27s;
    animation-delay: -59s;
    transform-origin: -22vw 11vh;
    box-shadow: 36vmin 0 5.117082254827822vmin currentColor;
}

.background span:nth-child(25) {
    color: #687449;
    top: 57%;
    left: 31%;
    animation-duration: 90s;
    animation-delay: -134s;
    transform-origin: -22vw -21vh;
    box-shadow: 36vmin 0 5.120634616360758vmin currentColor;
}

.background span:nth-child(26) {
    color: #c777c3;
    top: 23%;
    left: 65%;
    animation-duration: 176s;
    animation-delay: -120s;
    transform-origin: -14vw 14vh;
    box-shadow: 36vmin 0 4.8852098674591495vmin currentColor;
}</style>