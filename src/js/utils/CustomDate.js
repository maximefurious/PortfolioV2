function CustomDate() {
    this.ageSpan = document.querySelectorAll(".age");
    this.dateFooter = document.getElementById("years")

    this.year = new Date().getFullYear()
    this.age = this.year - 2003
}

CustomDate.prototype = {
    makeAgeProfil: function() {
        this.ageSpan.forEach((object) => {
            object.innerHTML = this.age + " ans"
        });
    },
    makeYearFooter: function() {
        this.dateFooter.innerHTML = this.year;
    }
};