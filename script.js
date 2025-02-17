/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    // 2. Select each button click
    dropdownButton.addEventListener('click', () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')

        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown)
        }
    })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else {
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query reaches 1118px
    if (mediaQuery.matches) {
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)

/*=============== Voice ===============*/



/*=============== FAQ ===============*/

document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-box button");

    faqButtons.forEach(button => {
        button.addEventListener("click", function () {
            const panel = this.nextElementSibling;
            const icon = this.querySelector(".faq-icon");

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove("active"); // Remove margin when closed
                icon.style.transform = "rotate(0deg)";
                icon.textContent = "+";
            } else {
                document.querySelectorAll(".faq-panel").forEach(p => p.style.maxHeight = null);
                document.querySelectorAll(".faq-box button").forEach(btn => btn.classList.remove("active")); // Reset all buttons
                document.querySelectorAll(".faq-icon").forEach(i => {
                    i.style.transform = "rotate(0deg)";
                    i.textContent = "+";
                });

                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active"); // Add margin when open
                icon.style.transform = "rotate(180deg)";
                icon.textContent = "−";
            }
        });
    });
});
