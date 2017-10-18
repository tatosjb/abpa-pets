class AdoptionController {
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

    donate(donation) {
        console.log(donation);
        axios.post('/donate', donation, this.axiosConfig)
            .then(function (response) {
                window.location.href = location.protocol + "//" + location.host + "/animals/" + donation.animal_id;
            })
            .catch(function (error) {
                AnimalsController.printErrors(error.response, "new");
                $(".send-button").button("reset");
            });
    }
};
