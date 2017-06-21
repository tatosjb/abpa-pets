const I18nTranslator = function () {
    return {
        translate: function (entity, attribute, locale = I18n.locale.toString()) {
            return I18n.translations[locale].activerecord.attributes[entity][attribute];
        }
    }

}();