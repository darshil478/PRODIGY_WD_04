let button = document.querySelector(".bars")
let menu = document.querySelector("ul")
let btn = document.querySelector("#close")

button.addEventListener("click",function(){
    menu.classList.add("active")
})

btn.addEventListener("click",function(){
    menu.classList.remove("active")
})
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const menuItems = document.querySelectorAll('nav ul#menu li a');
        menuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });
</script>
