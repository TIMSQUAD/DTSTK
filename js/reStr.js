
window.onload = function() {
    var btn = document.getElementById('btn')

        btn.addEventListener('click', function(){
            var t = document.getElementById('inp');
            if(t.value==="Dev.TSQ.1593") {
                window.location.replace("LICENSE");
            }else {
            t.disabled = true;
            btn.disabled = true;
            t.value = "Неправильно!";
            }
        });
};