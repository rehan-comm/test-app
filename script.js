const dropdown = document.querySelector(".dropdown");
const selected = document.querySelector(".categori span");
const filter = document.querySelector(".filter");
const filterDropdown = document.querySelector(".filter-dropdown");
const filterOptions = document.querySelectorAll(".filter-option");
const filterText = filter.querySelector("span");
const input = document.querySelector(".input-task")
const categori = document.querySelector("#categori")
const submit = document.querySelector(".add-task")
const p_count = document.querySelector(".p-count");
const tasks = document.querySelector("#tasks")
const pending_icon = `<i class="ri-loader-2-fill"></i>`
const completed_icon = `<i class="ri-check-fill"></i>`
const option = document.querySelector(".cate-option")
const task_icon = document.querySelector(".task-icon")
const complete_btn = document.querySelector(".complete")


const update_pending_count = () => {
    let count = Number(p_count.textContent);
    count++;
    p_count.textContent = count;
}

const categoriColor = () => {
    if (option.value === "work") {
        option.classList.add("work")
    } else if (option.value === "study") {
        option.classList.add("study")
    } else if (option.value === "shopping") {
        option.classList.add("shopping")
    } else {
        console.log("No Color");
    }
}

const changeIcon = () => {
    complete_btn.addEventListener("click", () => {
        task_icon.classList.contains("ri-loader-2-fill")
            ? (task_icon.classList.replace("ri-loader-2-fill", "ri-check-fill"))
            : (task_icon.classList.replace("ri-check-fill", "ri-loader-2-fill"));
    })
}


const createTask = () => {
    if (input.value === "" || categori.value === "") {
        alert("Fill Input")
    } else {
        console.log("Form Submit")
        console.log(input.value, categori.value)
        tasks.insertAdjacentHTML("beforeend", `<div class="task">
            <div class="task-left">
                <i class="ri-loader-2-fill task-icon"></i>
            </div>
            <div class="task-center">
                <h2>${input.value}</h2>
                <p class="${categori.value} cate-option"><i class="ri-circle-fill"></i> ${categori.value}</p>
            </div>
            <div class="task-right">
                <button class="edit"><i class="ri-pencil-line"></i> Edit</button>
                <button class="complete"><i class="ri-check-line"></i> Complete</button>
                <button class="delete"><i class="ri-delete-bin-6-line"></i> Delete</button>
            </div>
        </div>`)
        update_pending_count()
        categoriColor()
        changeIcon()
    }
}

submit.addEventListener("click", () => {
    createTask()
})











































filter.addEventListener("click", () => {
    filterDropdown.classList.toggle("active");
});

filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
        filterText.innerText = option.innerText;
        filterDropdown.classList.remove("active");

        console.log("Selected Category:", option.innerText);
    });
});