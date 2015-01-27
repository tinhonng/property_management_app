/**
 * Created by tinhonng on 1/26/15.
 */
document.addEventListener("DOMContentLoaded", function() {
   /* Array.prototype.forEach.call(document.getElementsByClassName('unit'), function(e){
        e.addEventListener("click", function(){
            var hiddenInfo = e.getElementsByClassName("hiddenInfo")[0];
            var flag = hiddenInfo.getAttribute('data-flag');
            if(flag){
                hiddenInfo.style.display = "none";
                hiddenInfo.setAttribute("data-flag", "");
            }
            else{
                hiddenInfo.style.display = "block";
                hiddenInfo.setAttribute("data-flag", "showing");
            }



        });
    });*/
    document.getElementById("search").addEventListener("keydown", function(){
        window.setTimeout(function(){
            var value = document.getElementById("search").value;
            var unitArray = document.getElementsByClassName('unit');
            var rex = new RegExp(value, 'i');
            Array.prototype.forEach.call(unitArray, function(e){
                e.style.display = "none";
            });
            Array.prototype.forEach.call(unitArray, function(e){
                if(rex.test(e.textContent)){ //should use textContent instead of innerHTHML or outterHTML
                    e.style.display = "table";
                }
            });
        },1);


    });
});