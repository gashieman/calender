new Vue({
    el: '#vue-app',
    data: {
        name: 'Emmanuel',
        surname: 'Jaricher',
        website:'https://www.udemy.com/',
        webTag: '<a href="https://www.udemy.com/">The Udemy Link</a>'
    },
    methods:{
        greet:function(time){
            return 'Good' + ' ' + time + ' '+ this.name;
        }
    }
});