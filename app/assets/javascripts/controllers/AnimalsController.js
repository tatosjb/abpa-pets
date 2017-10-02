class AnimalsController {
    constructor(csrfToken) {
        this.csrfToken = csrfToken;
        this.axiosConfig = {
            headers: {
                'X-CSRF-Token': this.csrfToken
            }
        };
    }

    static printErrors(response, fieldPrefix) {
        Object.keys(response.data).forEach(function (value) {
            $("#" + fieldPrefix + "-" + value).addClass("field-validation-error");
            $("#" + fieldPrefix + "-" + value).attr("title", response.data[value][0]);
            $("#" + fieldPrefix + "-" + value).tooltip("show");
        })
    };

    edit(id, animal) {
        axios.put('/animals/' + id + '.json', animal, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host;
            })
            .catch(function (error) {
                AnimalsController.printErrors(error.response, "edit-" + id);
                $(".send-button").button("reset");
            });
    }

    new(animal) {
        axios.post('/animals.json', animal, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host;
            })
            .catch(function (error) {
                AnimalsController.printErrors(error.response, "new");
                $(".send-button").button("reset");
            });
    }

};
