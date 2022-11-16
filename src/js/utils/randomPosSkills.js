function RandomPosSkills() {
    this.skills = document.querySelectorAll("#skills__box em");
    this.spacewidth = document.querySelector("#skills__box");
    this.width = this.spacewidth.offsetWidth - 200;
    this.spaceheight = 60;

    this.init();
}

RandomPosSkills.prototype.init = function() {
    this.skills.forEach((skill) => {
        const x = Math.floor(Math.random() * this.spacewidth);
        const y = Math.floor(Math.random() * this.spaceheight);
        const padding = Math.floor(Math.random() * 60);
        const fontSize = Math.floor(Math.random() * 30 + 50);

        skill.style.top = y + "px";
        skill.style.left = x + "px";
        skill.style.padding = padding + "px";
        skill.style.fontSize = fontSize + "px";
    });
};