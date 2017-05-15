var app = new Vue({
    el: '#app',
    data: {
        headers: [],
        data: {}
    },
    created () {
        this.data = {
            headers: [],
            data: {}
        };

        this.$http.get('animals')
            .then(function (data) {
                this.$set(app.data, 'data', data.data)
                this.$set(app.data, 'headers', Object.keys(app.data.data[0]))
            });
    }
});
//
// var example2 = new Vue({
//     el: '#example-2',
//     data: {
//         parentMessage: 'Parent',
//         items: [
//             { message: 'Foo' },
//             { message: 'Bar' }
//         ]
//     }
// });