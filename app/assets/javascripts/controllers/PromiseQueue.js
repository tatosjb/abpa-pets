let promiseQueue = {};

class PromiseQueue {
    constructor() {
        this.active = {};
        this.queue = {};
    }

    static getInstance(){
        if(!promiseQueue)
            this.instance = new PromiseQueue();
    }

    handleNextPromise(label){
        let promise = this.queue[label];
        this.queue[label] = null;

        promise.done(function () {
                this.active[label] = false;

                start(label)
            })
        
        // axios.get()
    }

    start(label) {
        if(this.queue[label]){
            this.active[label] = true;
            handleNextPromise(label);
        }
    }

    handlePromise(label, promise) {
        if(!this.queue[label])
            this.queue[label] = [];

        this.queue[label] = promise;

        if(!this.active[label])
            this.start(label);
    }
}