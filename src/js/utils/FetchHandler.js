function FetchHandler(callback) {
    this.data = {};
    this.callback = callback;

    this.fetchData();
}

FetchHandler.prototype = {
    fetchData: function() {
        fetch('./src/data/data.json').then(response => response.json().then(data => {
            this.data = data;
            this.callback();
        }));
    }
}