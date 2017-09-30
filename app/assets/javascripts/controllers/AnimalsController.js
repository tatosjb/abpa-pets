class AnimalsController {
    constructor(csrfToken) {
        this.csrfToken = csrfToken;
        this.axiosConfig = {
            headers: {
                'X-CSRF-Token': this.csrfToken
            }
        };
    }

    edit(id, animal) {
        axios.put('/animals/' + id + '.json', animal, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host;
            })
            .catch(function (error) {
                this.printErrors(error.response, "edit-" + id);
                $(".send-button").button("reset");
            });
    }

    new(animal) {
        axios.post('/animals.json', animal, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host;
            })
            .catch(function (error) {
                this.printErrors(error.response, "new");
                $(".send-button").button("reset");
            });
    }

    printErrors(response, fieldPrefix) {
        Object.keys(response.data).forEach(function (value) {
            $("#" + fieldPrefix + "-" + value).addClass("field-validation-error");
        })
    };

};
