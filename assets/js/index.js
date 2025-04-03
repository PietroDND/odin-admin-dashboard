import orders from './orders.js'

const sideMenu = document.querySelector('aside');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const themeToggle = document.getElementById('theme-toggler');
const themeIcons = themeToggle.querySelectorAll('span');
const tableBody = document.querySelector('table tbody');
const loadMoreBtn = document.getElementById('load-more-btn');
let tableStartIndex = 0;
let tableEndIndex = 10;

//Fill table when page loads
window.addEventListener('DOMContentLoaded', () => {
    populateOrderTable();
/*     orders.forEach((order) => {
        tableBody.innerHTML += `
        <tr>
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shippingStatus === 'Pending' ? 'danger' : order.shippingStatus === 'Shipped' ? 'warning' : 'success'}">${order.shippingStatus}</td>
            <td class="primary">Details</td>
        </tr>
        `
    }); */
});

//Load more table items
loadMoreBtn.addEventListener('click', () => {
    populateOrderTable();
});

//Open side menu in mobile view
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

//Close side menu in mobile view
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

//Switch between light and dark modes
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    setThemeIcon();
});

//Function that sets correct active theme icon in the slider selector
const setThemeIcon = () => {
    if (document.body.classList.contains('dark-theme')) {
        themeIcons[1].classList.add('active');
        themeIcons[0].classList.remove('active');
    } else {
        themeIcons[0].classList.add('active');
        themeIcons[1].classList.remove('active');
    }
};

//function to populate the order table
const populateOrderTable = () => {
    for (tableStartIndex; tableStartIndex < tableEndIndex; tableStartIndex++) {
        if (orders[tableStartIndex] !== undefined) {
            let item = orders[tableStartIndex];
            tableBody.innerHTML += `
        <tr>
            <td>${item.productName}</td>
            <td>${item.productNumber}</td>
            <td>${item.paymentStatus}</td>
            <td class="${item.shippingStatus === 'Pending' ? 'warning' : item.shippingStatus === 'Shipped' ? '' : 'success'}">${item.shippingStatus}</td>
            <td class="primary">Details</td>
        </tr>`
        } else {
            loadMoreBtn.disabled = true;
        }
    }
    tableEndIndex += 10;
};