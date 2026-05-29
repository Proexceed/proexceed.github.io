function toggleMenu(){
let nav = document.getElementById("navLinks");
let icon = document.getElementById("menuIcon");
nav.classList.toggle("active");
if(nav.classList.contains("active")){
icon.innerHTML = "✖";
}else{
icon.innerHTML = "☰";
}
}

function toggleMobileDropdown(e) {
if(window.innerWidth <= 768) {
e.preventDefault();
document.getElementById("servicesDropdown").classList.toggle("open-mobile");
}
}

/* SCROLL ANIMATION SYSTEM (Graceful degradation aware) */
const cards = document.querySelectorAll('.card');
// Only hides cards if JS runs successfully

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
}, { threshold: 0.1 });

cards.forEach(card=>observer.observe(card));
