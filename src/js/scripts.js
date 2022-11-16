document.addEventListener("DOMContentLoaded", function() {
    const fetchHandler = new FetchHandler(() => {
        new SideNav();
        const customDate = new CustomDate();
        customDate.makeAgeProfil();
        customDate.makeYearFooter();
        new ProjectSwiper(fetchHandler);
        new RandomPosSkills();
    });
});