const printErrors = function(response){
    console.log(response);
    Object.keys(response.data).forEach(function (value) {
        console.log(value);
        $("#" + value).addClass("field-validation-error");
    })
};

class AnimalsController {
    constructor(csrfToken) {
        this.csrfToken = csrfToken;
        console.log(csrfToken);
    }

    new(animal) {
        axios.post('/animals.json', animal, {
            headers: {
                'X-CSRF-Token': this.csrfToken
            }})
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host;
            })
            .catch(function (error) {
                printErrors(error.response);
            });
    }

};
