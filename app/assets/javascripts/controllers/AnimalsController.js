const printErrors = function (response, fieldPrefix) {
    console.log(response);
    Object.keys(response.data).forEach(function (value) {
        console.log(value);
        $("#" + fieldPrefix + "-" + value).addClass("field-validation-error");
    })
};

class AnimalsController {
    constructor(csrfToken) {
        this.csrfToken = csrfToken;
        this.axiosConfig = {
            headers: {
                'X-CSRF-Token': this.csrfToken
            }
        };

        console.log(csrfToken);
    }

    edit(id, animal) {
        axios.put('/animals/' + id + '.json', animal, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host;
            })
            .catch(function (error) {
                printErrors(error.response, "edit-" + id);
                $(".send-button").button("reset");
            });
    }

    new(animal) {
        axios.post('/animals.json', animal, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host;
            })
            .catch(function (error) {
                printErrors(error.response, "new");
                $(".send-button").button("reset");
            });
    }

};
