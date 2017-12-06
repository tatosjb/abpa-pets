people = function () {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    var peopleController = new PeopleController(csrfToken);

    $(".required").keypress(function () {
        $(this).removeClass("field-validation-error");
    });

    function getPersonInfo(prefix) {
        var newPerson = {};
        newPerson.name = $('#' + prefix + '-name').val();
        newPerson.rg = $('#' + prefix + '-rg').val();
        newPerson.cpf = $('#' + prefix + '-cpf').val();
        newPerson.occupation = $('#' + prefix + '-occupation').val();
        newPerson.company = $('#' + prefix + '-company').val();
        newPerson.address = $('#' + prefix + '-address').val();
        newPerson.neighborhood = $('#' + prefix + '-neighborhood').val();
        newPerson.referece_point = $('#' + prefix + '-reference_point').val();
        newPerson.ibge_code = $('#' + prefix + '-ibge_code').val();
        newPerson.volunteer = $('#' + prefix + '-volunteer').is(":checked");

        return newPerson;
    }

    function create () {
        peopleController.new(getPersonInfo('new'));
        $(".send-button").button("loading");
    }

    function edit(id) {
        peopleController.edit(id, getPersonInfo('edit-' + id));
        $(".send-button").button("loading");
    }

    function findPeople(query) {
        return peopleController.find(query);
    }

    return {
        create: create,
        edit: edit
    }
}();
