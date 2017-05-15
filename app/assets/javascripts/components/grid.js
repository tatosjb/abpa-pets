Vue.component('gridHeader', {
    props: ['header'],
    template: '<th>{{header}}</th>'
});

Vue.component('gridCell', {
    props: ['text'],
    template: '<td>{{text}}</td>'
});

Vue.component('gridLines', {
    props: ['data', 'headers'],
    template:
        '<tr>' +
            '<gridCell v-for="header in headers" :text="data[header]">' +
            // '<gridCell :text="headers">' +
            '</gridCell>' +
        '</tr>'
});

Vue.component('grid', {
    props:['items'],
    template:
        '<table class="table">' +
        '<gridHeader v-for="header in items.headers" :header="header">' +
        '</gridHeader>' +
        '<gridLines v-for="item in items.data" :data="item" :headers="items.headers">' +
        '</gridLines>' +
        '</table>'
});

