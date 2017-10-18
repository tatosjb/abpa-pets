//= require jquery
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets
//= require i18n/translations
//= require axios
//= require select2

axios = require('axios');
csrfToken = $('meta[name="csrf-token"]').attr('content');