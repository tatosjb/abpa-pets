animals = function () {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    var animalsController = new AnimalsController(csrfToken);

    function create () {
        var newAnimal = {};
        newAnimal.code = $('#code').val();
        newAnimal.name = $('#name').val();
        newAnimal.size = $('#size').val();
        newAnimal.pet_type = $('#pet_type').val();
        newAnimal.gender = $('#gender').val();
        newAnimal.birthdate = $('#birthdate').val();
        newAnimal.color = $('#color').val();
        newAnimal.fur = $('#fur').val();
        newAnimal.description = $('#description').val();

        animalsController.new(newAnimal);
    }

    return {
        create: create
    }
}();
