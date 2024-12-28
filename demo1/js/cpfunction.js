 function copyFunction(value) {
    var cp = document.createElement("input");
    cp.style = "position: absolute; left: -1000px; top: -1000px";
    cp.value = value;     
    

    document.body.appendChild(cp);
    cp.select();
    document.execCommand("copy");

    document.body.removeChild(cp);
        swal("Đã copy", "Bạn đã copy thành công !", "success");


}