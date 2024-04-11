(function ($) {
    "use strict";
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        // console.log($videoSrc);
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })
        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
})(jQuery);
//SERVICES
const services = [
    { icon: "fa-user-tie", title: "Dining Reservations", description: "Book your table online or by phone to secure your spot for lunch, dinner, or brunch. We offer flexible reservation options to accommodate your schedule." },
    { icon: "fa-utensils", title: "Quality Food", description: "At PHcuisine, quality is our recipe. Our culinary team is dedicated to sourcing the freshest, highest quality ingredients to create mouthwatering dishes that delight your taste buds. From farm-fresh produce to premium cuts of meat and sustainable seafood, every dish is crafted with care and attention to detail. Experience the difference of quality food at PHcuisine and savor the flavors of perfection with every bite." },
    { icon: "fa-cart-plus", title: "Online Order", description: "Order your favorite dishes from the comfort of your home with PHcuisine's convenient online ordering service. Browse our menu, select your desired items, and simply place your order for pickup or delivery. Whether you're craving a delicious burger, a fresh salad, or a decadent dessert, we've got you covered. Enjoy the convenience of ordering online and indulge in our mouthwatering flavors today!" },
    { icon: "fa-headset", title: "Customer Service", description: "PHcuisine strives to provide exceptional customer service to all our guests, whether in person or over the phone. If you have any further questions or need assistance, feel free to contact us again." },
    { icon: "fa-user-tie", title: "Master Chefs | Our Team", description: "Meet the culinary artisans behind the magic at PHcuisine. Our master chefs and talented team bring years of experience and passion to the kitchen, transforming the finest ingredients into culinary masterpieces. With creativity and precision, they craft dishes that tantalize the senses and leave a lasting impression on every palate. From innovative creations to time-honored classics, our team's dedication to excellence shines through in every bite. Join us at PHcuisine and experience the culinary expertise of our master chefs and their talented team firsthand." },
    { icon: "fa-utensils", title: "Catering Services", description: "Planning a corporate event, wedding, or party? Let us take care of the catering! Choose from our diverse menu options and let our experienced team handle the details." },
    { icon: "fa-cart-plus", title: "Special Occasions", description: "Celebrate birthdays, anniversaries, and other milestones with us! Let us know in advance, and we'll make sure to add special touches to your dining experience." },
    { icon: "fa-headset", title: "Customer Feedback", description: "We value your feedback! Share your dining experience with us through our online feedback form or social media channels. Your input helps us continuously improve our services." }
  ];
  const serviceItemsContainer = document.getElementById("serviceItemsContainer");
  services.forEach((service, index) => {
    const serviceItem = document.createElement('div');
    serviceItem.classList.add('col-lg-3', 'col-sm-6', 'wow', 'fadeInUp');
    serviceItem.setAttribute('data-wow-delay', `${index * 0.2}s`);
    serviceItem.innerHTML = `
      <div class="service-item rounded pt-3">
        <div class="p-4">
          <i class="fa fa-3x ${service.icon} text-primary mb-4"></i>
          <h5>${service.title}</h5>
          <p>${service.description.length > 100 ? service.description.substring(0, 100) + "..." : service.description}</p>
          ${service.description.length > 100 ? `<button class="btn btn-primary read-more-btn" data-description="${service.description}">Read More</button>` : ''}
        </div>
      </div>
    `;
    serviceItemsContainer.appendChild(serviceItem);
  });
//TEAM MEMBERS
    const teamMembers = [
        { name: "Jhoii Dela Cruz", position: "Executive Chef", image: "Team-Jhoii.jpg" },
        { name: "Michael Dela Cruz", position: "Sous Chef", image: "Team-Michael.jpg" },
        { name: "Jerico Rodriguez", position: "Chef", image: "Team-Eco.jpg" },
        { name: "Roger Villanueva", position: "Chef", image: "Team-Roger.jpg" },
        { name: "Adrian Angeles", position: "General Manager / Server / Dishwasher", image: "Team-Adrian.jpg" },
        { name: "Crushelle Angeles", position: "Assistant Manager / Server / Dishwasher", image: "Team-Shelle.jpg" },
        { name: "Rogelio Tibon", position: "Barista / Server / Dishwasher", image: "Team-Rogel.jpg" },
        { name: "Regina Guevarra", position: "Cashier / Host / Server", image: "Team-Regina.jpg" }
    ];
    const teamMembersContainer = document.getElementById("teamMembersContainer");
    teamMembers.forEach(member => {
        const memberHTML = `
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-item text-center rounded overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-4">
                        <img class="img-fluid" src="img/teamMembers/${member.image}" alt="${member.name}">
                    </div>
                    <h5 class="mb-0">${member.name}</h5>
                    <small>${member.position}</small>
                    <div class="d-flex justify-content-center mt-3">
                        <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        `;
        teamMembersContainer.innerHTML += memberHTML;
    });
// Fetch, Filter and Render Food Menu
// Declare Menu Categories
const categories = [
    {'breakfast' : 'container-1'}, {'lunch' : 'container-2'}, {'dinner' : 'container-3'}, {'pastries' : 'container-4'}
]
// Render list
async function renderMenu(categories){
    let response = await fetchMenu();
    let dishes = response.dishes;
    let current_categories = categories;
    current_categories.forEach(function(item){
        for (const [key, value] of Object.entries(item)) {
            let container = document.getElementById(`${value}`) // Target container
            for (let i = 0; i < dishes.length; i++){
                if(dishes[i].category.toLowerCase() === key){
                    let divElement = document.createElement('div'); // Declare node element
                    divElement.classList.add('col-lg-6') // Add Bootstrap Class
                    // Set layout for the item
                    let entry = `
                        <div class="d-flex align-items-start">
                            <img class="flex-shrink-0 img-fluid rounded" src="img/menu/${key}/${dishes[i].image}" alt="" style="width: 250px; height: 250px;">
                            <div class="w-100 d-flex flex-column text-start ps-4">
                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                    <span>${dishes[i].name}</span>
                                    <span class="text-primary">${dishes[i].price}</span>
                                </h5>
                                <small class="fst-italic">${dishes[i].description}</small>
                            </div>
                        </div>
                    `;
                    divElement.innerHTML = entry; // Set HTML to the node element
                    container.appendChild(divElement); // Add the node to the container
                }
            }
          }
    })
}
// Fetch Dishes from API Endpoint
async function fetchMenu(){
    let endpoint = "https://raw.githubusercontent.com/jmdc0903/jmdc0903v2.github.io/main/portfolio3New/files/menu.json"
    const user = await fetch(endpoint)
    const result = await user.json()
    return result
}
// Initialize function
function init(){
    renderMenu(categories)
}
  // Trigger events onload
  let doc = document.getElementById('main')
  doc.addEventListener('load', init())
  // Add event listener for read more buttons
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const description = button.getAttribute('data-description');
      document.getElementById('modal-body').innerHTML = description;
      $('#serviceModal').modal('show');
    });
  });
  // Add event listener for toggle theme switch
  let toggle_btn = document.getElementById('toggleTheme')
  let navbar = document.getElementById('navbar')
  toggle_btn.addEventListener('change', function(event){
        if(event.currentTarget.checked){
            navbar.classList.remove('navbar-dark')
            navbar.classList.remove('bg-dark')
            navbar.classList.add('navbar-light')
            navbar.classList.add('bg-light')
        }else{
            navbar.classList.remove('navbar-light')
            navbar.classList.remove('bg-light')
            navbar.classList.add('navbar-dark')
            navbar.classList.add('bg-dark')
        }
  })

