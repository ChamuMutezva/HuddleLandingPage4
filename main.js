//Intersection Observer api, 
const headerFeature = document.querySelectorAll(".observed");
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate__in');
        } 
    });   
});

headerFeature.forEach(heads => {
    observer.observe(heads);
});