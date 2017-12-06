animals = function () {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    var animalsController = new AnimalsController(csrfToken);

    $(".required").keypress(function () {
        $(this).removeClass("field-validation-error");
    });

    if ($.fn.cloudinary_fileupload !== undefined) {
        $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();

        $(".cloudinary-fileupload").bind("cloudinarydone", function (e, data) {
            var image = {};
            image.animal_id = $("#animal_id").val();
            image.image_id = data.result.public_id;
            animalsController.saveImage(image);
        });
    }

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
        newAnimal.castred = $('#' + prefix + '-castred').is(":checked");
        newAnimal.placement = $('#' + prefix + '-placement').val();

        return newAnimal;
    }

    function create() {
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
