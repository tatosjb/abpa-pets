animals = function () {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    var animalsController = new AnimalsController(csrfToken);

    $(".required").keypress(function () {
        $(this).removeClass("field-validation-error");
    });

    function getAnimalInfo(prefix) {
        var newAnimal = {};
        newAnimal.code = $('#' + prefix + '-code').val();
        newAnimal.name = $('#' + prefix + '-name').val();
        newAnimal.size = $('#' + prefix + '-size').val();
        newAnimal.pet_type = $('#' + prefix + '-pet_type').val();
        newAnimal.gender = $('#' + prefix + '-gender').val();
        newAnimal.birthdate = $('#' + prefix + '-birthdate').val();
        newAnimal.color = $('#' + prefix + '-color').val();
        newAnimal.fur = $('#' + prefix + '-fur').val();
        newAnimal.description = $('#' + prefix + '-description').val();

        return newAnimal;
    }

    function create () {
        animalsController.new(getAnimalInfo('new'));
        $(".send-button").button("loading");
    }

    function edit(id) {
        animalsController.edit(id, getAnimalInfo('edit-' + id));
        $(".send-button").button("loading");
    }

    return {
        create: create,
        edit: edit
    }
}();
