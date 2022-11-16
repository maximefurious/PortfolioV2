function ProjectModals(name, data) {
    this.name = name;
    this.modal = document.getElementById("modal");
    this.data = data;

    this.init();
}

ProjectModals.prototype = {
    init: function() {
        const modalsContent = document.createElement("div");
        modalsContent.classList.add("modals-content");

        const header = document.createElement("header");
        header.classList.add("close-container");

        const title = document.createElement("h2");
        title.innerHTML = this.data.projectName;

        const close = document.createElement("span");
        close.classList.add("close");
        close.innerHTML = "&times;";

        header.append(title, close);

        const description = document.createElement("p");
        description.innerHTML = this.data.description;

        const step = document.createElement("ul");
        for (let i = 0; i < this.data.projectStep.length; i++) {
            const stepItem = document.createElement("li");
            stepItem.innerHTML = this.data.projectStep[i];
            step.appendChild(stepItem);
        }

        const languageContainer = document.createElement("div");
        const language = document.createElement("ul");
        for (let i = 0; i < this.data.projectLanguage.length; i++) {
            const languageItem = document.createElement("li");
            languageItem.innerHTML = this.data.projectLanguage[i];
            language.appendChild(languageItem);
        }

        languageContainer.appendChild(language);

        if (this.data.projectGithub) {
            const github = document.createElement("a");
            github.id = "github";
            github.href = this.data.projectGithub;
            github.innerText = "Voir sur GitHub";
            modalsContent.append(header, description, step, github, languageContainer);
        } else {
            modalsContent.append(header, description, step, languageContainer);
        }

        this.modal.innerHTML = "";
        this.modal.appendChild(modalsContent);

        this.makeModal();
    },
    initEventListener: function() {
        const close = document.querySelector(".close");
        close.addEventListener("click", () => {
            this.modal.style.display = "none";
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.modal.style.display = "none"
            }
        })

        document.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        })
    },
    makeModal: function() {
        this.modal.style.display = "flex";
        this.initEventListener();
    }
}