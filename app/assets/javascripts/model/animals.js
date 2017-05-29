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
                this.$set(app.data, 'data', data.data);
                this.$set(app.data, 'headers', Object.keys(app.data.data[0]));
                app.data.headers.pop(app.data.headers.indexOf("url"));
            });
    }
});
