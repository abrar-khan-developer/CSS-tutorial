const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sideBar');

function togglesidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeAllSubMenu()
} 

function toggleSubMenu(btn){
    if(!btn.nextElementSibling.classList.contains("show")){
    closeAllSubMenu()
    }
    // btn.NextElementSibling.Class.toggle("show
    btn.nextElementSibling.classList.toggle("show");
    btn.classList.toggle("rotate");

    if(sidebar.classList.contains("close")){
        sidebar.classList.toggle("close");
        toggleButton.classList.toggle('rotate');
}
}

function closeAllSubMenu(){
    Array.from( sidebar.getElementsByClassName('show') ).forEach( element => {
        element.classList.remove('show');
        element.previousElementSibling.classList.remove('rotate');
   })
}