const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


// sidear active/desactive items

currentItem = document.querySelector(".sidebar .active");
const selectedItem1 = document.querySelector(".sidebar a:nth-child(1)");
const selectedItem2 = document.querySelector(".sidebar a:nth-child(2)");
const selectedItem3 = document.querySelector(".sidebar a:nth-child(3)");
const selectedItem4 = document.querySelector(".sidebar a:nth-child(4)");
const selectedItem5 = document.querySelector(".sidebar a:nth-child(5)");
const selectedItem6 = document.querySelector(".sidebar a:nth-child(6)");
const selectedItem7 = document.querySelector(".sidebar a:nth-child(7)");
const selectedItem8 = document.querySelector(".sidebar a:nth-child(8)");
const selectedItem9 = document.querySelector(".sidebar a:nth-child(9)");

selectedItem1.addEventListener('click', () => {
    selectedItem1.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem2.addEventListener('click', () => {
    selectedItem2.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem3.addEventListener('click', () => {
    selectedItem3.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem4.addEventListener('click', () => {
    selectedItem4.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem5.addEventListener('click', () => {
    selectedItem5.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem6.addEventListener('click', () => {
    selectedItem6.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem7.addEventListener('click', () => {
    selectedItem7.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem8.addEventListener('click', () => {
    selectedItem8.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})
selectedItem9.addEventListener('click', () => {
    selectedItem9.classList.toggle("active");
    currentItem.classList.toggle("active");
    currentItem = document.querySelector(".sidebar .active");

})






// *** show sidebar ***
menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle("block");
    //sideMenu.style.display = 'block';
})

// *** close sidebar ***
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove("block");
    // sideMenu.style.display = 'none';
})




// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})


// fill orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

})