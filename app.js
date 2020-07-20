new Vue({
    el: ".app",
    data: {
        name: "zhangsan",
        website: "https://www.baidu.com",
        year: 2020,
        x: 0,
        y: 0
    },
    methods: {
        greet: function (e) {
            return "Good " + e;
        },
        add: function (e) {
            this.year += e;
        },
        updataXY: function (e) {
            //offsetX/Y获取到是触发点相对被触发dom的左上角距离
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})