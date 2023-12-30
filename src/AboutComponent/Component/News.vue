<template>
    <div class="message-page">
        <div class="msg-tit">
            <div class="msg-top">
                <div class="tit-word">消息通知</div>
                <div class="tit-more">
                    <a href=""></a>
                </div>
            </div>
            <div class="msg-line"></div>
            <div class="marquee-wrap">
                <ul class="marquee-list" :class="{ 'animate-up': animateUp }" @mouseenter="stopFn" @mouseleave="startFn">
                    <li v-for="(item, index) in sendNews" :key="index">
                            <p @click="newpage(item.url)"  class="p-tit">{{ item.title }}</p>
                            <p  class="p-word">
                                {{ item.content }}
                            </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MessagePage',

    data() {
        return {
            // listData:this.sendNews,
            animateUp: false,
            timer: null
        }
    },
    props: ["sendNews"],
    computed: {

    },
    created() {
        this.timer = setInterval(this.scrollAnimate, 3000);
    },
    methods: {
        scrollAnimate() {
            this.animateUp = true
            setTimeout(() => {
                this.sendNews.push(this.sendNews[0])
                this.sendNews.shift()
                this.animateUp = false
            }, 2000)
        },
        stopFn() {
            clearInterval(this.timer)
        },
        startFn() {
            this.timer = setInterval(this.scrollAnimate, 3000);
        },
        newpage(data) {
            window.open(data,'_blank');
        }
    },
    destroyed() {
        clearInterval(this.timer)
    },
}
</script>

<style scoped lang="less">
.message-page {
    border: 1px solid transparent;
    margin-top: 24px;
    width: 800px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 4px;
    position:absolute;
    top: 30%;
    left: 30%;
    .msg-tit {
        padding: 15px 16px 24px 16px;

        .msg-top {
            display: flex;
            justify-content: space-between;

            .tit-word {
                font-size: 16px;
                color: #222222;
            }

            .tit-more {
                color: #666666;
                font-size: 12px;
                text-decoration: underline;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .msg-line {
            width: 768px;
            height: 1px;
            background: #EFEFEF;
            margin: 16px 0;

        }

        .marquee-wrap {
            /*width: 80%;*/
            height: 48px;
            margin: 0 auto;
            overflow: hidden;
            .marquee-list {

                /*border: 1px solid red;*/
                li {
                    width: 100%;
                    height: 100%;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    list-style: none;
                    font-size: 18px;
                    font-weight: 400;


                    .p-tit {
                        font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        color: #222222;
                        height: 22px;
                        line-height: 10px;
                    }

                    .p-word {
                        margin-top: 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        color: #666666;
                        height: 18px;
                        line-height: 18px;
                        width: 767px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                }
            }

            .animate-up {
                transition: all 0.5s ease-in-out;
                transform: translateY(-48px);
            }
        }
    }


}</style>

