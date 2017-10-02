class PeopleController {
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

    edit(id, person) {
        axios.put('/people/' + id + '.json', person, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host + "/people";
            })
            .catch(function (error) {
                PeopleController.printErrors(error.response, "edit-" + id);
                $(".send-button").button("reset");
            });
    }

    new(person) {
        axios.post('/people.json', person, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host + "/people";
            })
            .catch(function (error) {
                PeopleController
                    .printErrors(error.response, "new");
                $(".send-button").button("reset");
            });
    }
};
