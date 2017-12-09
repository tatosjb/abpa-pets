adoption = function () {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    var adoptionController = new AdoptionController(csrfToken);
    
    function processResults(data) {
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

    function findPeople(params) {
        if (params.term)
            return "/people/find/" + params.term;

        return "/people/find/";
    }

    function findVolunteer(params) {
        if (params.term)
            return "/volunteer/find/" + params.term;

        return "/volunteer/find/";
    }

    $('.find-people').select2({
        placeholder: 'Selecione uma pessoa',
        ajax: {
            url: findPeople,
            dataType: 'json',
            data: "",
            processResults: processResults
        }
    });

    $('.find-volunteer').select2({
        placeholder: 'Selecione uma pessoa',
        ajax: {
            url: findVolunteer,
            dataType: 'json',
            data: "",
            processResults: processResults
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