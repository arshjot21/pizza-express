# Pizza Express — Static Website

A modern, responsive pizza restaurant website built with HTML, CSS, and vanilla JavaScript.

## Files and folders

- `index.html` — page layout, menu, story, special offer and newsletter section
- `css/style.css` — responsive styling, pizza photography, animations, hover effects and mobile layout
- `js/script.js` — mobile navigation, menu filters, demo add-to-order messages and newsletter validation
- `assets/` — place for your own local images and icons

## Run in Visual Studio Code

1. Download and extract `pizza_express_website.zip`.
2. Open Visual Studio Code.
3. Select **File → Open Folder** and choose `pizza_express_website`.
4. Open `index.html`.
5. For the easiest preview, install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

No Node.js, database, or package installation is required.

## Features

- Responsive desktop, tablet, and mobile layout
- Animated hero background and interactive hover effects
- Menu categories: All favourites, Veggie love, Classics, Spicy picks
- Add-to-order demo buttons with a toast message
- Mobile navigation menu
- Newsletter form with browser email validation
- Current year is set automatically

## Important demo notes

- Menu prices are example prices in Indian rupees; change them to your real menu and pricing.
- Food photos and Google Fonts load from external URLs, so an internet connection is needed for those assets.
- The add-to-order buttons only show a demo message. They do not create a real order, process payment, or contact a restaurant.
- The newsletter form does not transmit or store email addresses. Connect a real backend or mailing-list service before collecting customer information.
- This is an original practice project and is not affiliated with any existing restaurant brand.

## Customise

- Edit headings, pizza names and prices in `index.html`.
- Change colours in the `:root` section at the top of `css/style.css`.
- Replace remote image URLs in `css/style.css` with your own image files.
- Add real ordering, payment and delivery features only after connecting a secure backend.
