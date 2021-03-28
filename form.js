function myform() {
    let jsx = document.forms["myjsform"]["firstname"].value;
    if (jsx == "") {
        alert("please fill out your name");
        return false;
    }
}