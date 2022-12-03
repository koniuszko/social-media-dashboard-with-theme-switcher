const switcher = document.querySelector(".theme_switch")

const bg = document.querySelector('.bg')
const page = document.querySelector('.page')
const total_follow = document.querySelector('.total_follow')
const mode = document.querySelector('.mode')
const socials = document.querySelectorAll('.social')
const socialNames = document.querySelectorAll('.name')
const units = document.querySelectorAll('.unit')
const overview_items = document.querySelectorAll('.overview_item')
const descriptions = document.querySelectorAll('.description')

switcher.addEventListener('change', function () {
    if (this.checked) {
        bg.classList.add('light_mode');
        page.classList.add('light_mode');
        total_follow.classList.add('light_mode');
        mode.classList.add('light_mode');
        socials.forEach(social => (social.classList.add('light_mode')));
        socialNames.forEach(socialName => (socialName.classList.add('light_mode')));
        units.forEach(unit => (unit.classList.add('light_mode')));
        overview_items.forEach(overview_item => (overview_item.classList.add('light_mode')));
        descriptions.forEach(description => (description.classList.add('light_mode')))
    } else {
        bg.classList.remove('light_mode');
        page.classList.remove('light_mode');
        total_follow.classList.remove('light_mode');
        mode.classList.remove('light_mode');
        socials.forEach(social => (social.classList.remove('light_mode')));
        socialNames.forEach(socialName => (socialName.classList.remove('light_mode')));
        units.forEach(unit => (unit.classList.remove('light_mode')));
        overview_items.forEach(overview_item => (overview_item.classList.remove('light_mode')));
        descriptions.forEach(description => (description.classList.remove('light_mode')))
    }
})