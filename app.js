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
            //相对于父盒子的坐标
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})