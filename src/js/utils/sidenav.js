function SideNav() {
    this.sidenav = document.getElementById("mySidenav");
    this.openBtn = document.getElementById("openBtn");
    this.closeBtn = document.getElementById("closeBtn");

    this.init();
}

SideNav.prototype = {
    init: function() {

        this.openBtn.addEventListener("click", () => {
            this.openNav();
        });
        this.closeBtn.addEventListener("click", () => {
            this.closeNav();
        });
    },
    openNav: function() {
        this.sidenav.classList.add("active");
    },
    closeNav: function() {
        this.sidenav.classList.remove("active");
    }
};