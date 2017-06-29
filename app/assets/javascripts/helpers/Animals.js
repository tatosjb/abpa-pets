class Animals {
    constructor() {
        this.animals = [];

        axios.get('animals.json')
            .then((response) => {
                this.animals.push(response.data);
                console.log(this.animals)
            });
    }
}