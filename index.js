document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.head-links a');
    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});

const socialLink = document.getElementById('socialLink');
socialLink.addEventListener('click', function(event) {
    event.preventDefault();
    const url = socialLink.getAttribute('href');
    window.open(url, '_blank');
});

function openNewWindow(url) {
    window.open(url, '_blank');
}



function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    var headBtn = document.querySelector('.head-btn');

    if (dropdownContent.style.maxHeight) {

        dropdownContent.style.opacity = '0';
        dropdownContent.style.maxHeight = null;
        headBtn.removeAttribute('href'); 
    } else {
        dropdownContent.style.opacity = '1';
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        headBtn.setAttribute('href', '#');
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.head-container li a');

    links.forEach(link => {
        const defaultColor = getComputedStyle(link).color;
        link.addEventListener('mouseover', function() {
            this.style.transition = 'color 0.3s ease';
            this.style.color = '#808080';
        });
        link.addEventListener('mouseout', function() {
            this.style.transition = 'color 0.3s ease';
            this.style.color = defaultColor; 
        });
    });
});


