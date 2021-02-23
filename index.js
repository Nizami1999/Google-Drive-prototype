var divInfo = document.querySelector(".divInfo");
var cancelBtn = document.querySelector(".newFolder .cancel");
var createBtn = document.querySelector(".newFolder .create");
var closeBtn = document.querySelector(".newFolder .fa-times");
var newFolderWrapper = document.querySelector(".newFolderWrapper");
var foldersList = document.querySelector(".foldersList");
var newFolder = document.getElementById("newFolder");
var inputFolderName = document.getElementById("inputFolderName");


document.addEventListener('contextmenu', function (e) {
    //prevent default action
    e.preventDefault();

    //first remove if it is open
    divInfo.classList.remove("open");

    setTimeout(() => {
        
        //show info window
        if (e.pageY + 330 > window.innerHeight) {
            divInfo.style.top = e.pageY - 330 + "px";
        }
        else{
            divInfo.style.top = e.pageY + "px";
        }

        if (e.pageX + 300 > window.innerWidth) {
            divInfo.style.left = e.pageX - 300 + "px";
        }
        else{
            divInfo.style.left = e.pageX + "px";
        }

        divInfo.classList.add("open");
    });
});

document.addEventListener('click', function () {
    divInfo.classList.remove("open");
});

//add new file
newFolder.addEventListener("click", function () {
    newFolderWrapper.style.display = "block";
});

//close FolderWrapper
closeBtn.addEventListener("click", CancelOrClose);
cancelBtn.addEventListener("click", CancelOrClose);
function CancelOrClose() {
    newFolderWrapper.style.display = "none";
};

//create new Folder
createBtn.addEventListener("click", function () {
    if (inputFolderName.value != "") {
        var div = document.createElement("div");
        div.className = "col-3";

        var a = document.createElement("a");
        a.className = "folder";
        a.setAttribute("href", "#");

        var i = document.createElement("i");
        i.className = "far fa-folder-open";

        a.appendChild(i);
        if (inputFolderName.value.length > 15) {
            a.innerHTML += " " + inputFolderName.value.substring(0, 15) + "...";
        }
        else {
            a.innerHTML += " " + inputFolderName.value;
        }

        div.appendChild(a);
        foldersList.appendChild(div);

        inputFolderName.value = "";

    }
    else {
        alert("Please enter name of folder!")
    }
});


