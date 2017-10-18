adoption = function () {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    var adoptionController = new AdoptionController(csrfToken);

    $('.find-people').select2({
        placeholder: 'Selecione uma pessoa',
        ajax: {
            url: function (params) {
                if (params.term)
                    return "/people/find/" + params.term;

                return "/people/find/";
            },
            dataType: 'json',
            data: "",
            processResults: function (data) {
                let result = {
                    results: data.map(function (value) {
                        return {
                            id: value.id,
                            text: value.name
                        }
                    }),
                };

                return result;
            }
        }
    });

    function donate(id) {
        person_id = $("#find-people-" + id).val();

        adoptionController.donate({"person_id": parseInt(person_id), "animal_id": id});
        $(".send-button").button("loading");
    }

    return {
        donate: donate
    }
}();