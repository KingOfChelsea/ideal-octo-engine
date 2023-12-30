<template>
    <div>
        <div id="container">
        </div>
        <div id="panel"></div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import MapLoader from "@/Util/util.js"
export default {
    name: 'GMap',
    methods: {

        initMap() {
            var that = this
            AMapLoader.load({
                key: "e00fe1cb0618dd5deaed56c3026fba28",             // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                // plugins: [''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap) => {
                this.map = new AMap.Map("container", {  //设置地图容器id
                    viewMode: "3D",    //是否为3D地图模式
                    zoom: 8,           //初始化地图级别
                    center: [105.602725, 37.076636], //初始化地图中心点位置
                });
                var weixing = new AMap.TileLayer.Satellite({
                    zIndex: 10
                });
                this.map.add(weixing)
                this.map.plugin(['AMap.MapType', 'AMap.Scale', "AMap.Driving", "AMap.Geolocation"], () => {
                    this.map.addControl(new AMap.MapType())
                    this.map.addControl(new AMap.Scale());
                    // this.map.addControl(new AMap.HawEye());
                });
                var driving = new AMap.Driving({
                    map: this.map,
                    panel: "panel"
                })
                driving.search([
                    { keyword: `广州商学院` },
                    { keyword: that.$route.query.name }
                ], function (status, result) {
                    // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                    if (status === 'complete') {
                        // log.success('绘制驾车路线完成')
                        console.log("success! the map route has inited ");
                    } else {
                        // log.error('获取驾车数据失败：' + result)
                        console.log("failure ", result);
                    }
                });
                    // MapLoader()
            }).catch(e => {
                console.log(e);
            })
        },
        getLocation() {
            
    }

},
mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
}
};
</script>

<style lang="less" scoped>
#container {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    height: 100vh;
}

#panel {
    position: fixed;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
}

#panel .amap-call {
    background-color: #009cf9;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

#panel .amap-lib-driving {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
}

.info {

    width: 26rem;
}
</style>