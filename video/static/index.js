menu = document.querySelector('#menu');
sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function () {
    if(sidebar.style.display=="none"){
      sidebar.style.display="block";
    }else{
      sidebar.style.display="none";
    }
});

function acco() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
