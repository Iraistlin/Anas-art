/* Liz Miranda's paintings
   -----------------------
   This is the only file you need to edit when a painting is added,
   sold, or given a new price. The pictures shipping with the site are
   free-license samples. Swap in a photograph of the real painting and
   change the words below.

   To add a painting:
   1. Put the photo in the images/ folder.
      jpg, png, and webp all work. Name it something simple,
      like images/blue-vase.jpg
   2. Copy one of the { ... } blocks below, including the comma.
   3. Paste it where you want it to appear.
      Higher in the list means earlier on the Portfolio page and the Shop page.
   4. Change the words, save, and refresh the page.

   The homepage Portfolio row shows every piece that has a picture.
   portfolio.html shows that list, then the black placeholders.
   The homepage Shop shows the eight pieces with shopHome set to true.
   The Portfolio is a showcase: tiles show the title only, and the
   detail opened from a Portfolio tile has no price and no Buy buttons.
   shop.html shows every piece that has a picture, with its price.
   Buy buttons stay on the Shop detail, and only when a PayPal link is set.

   To replace a black tile, fill in image, title, and price, then set blank to false.

   status                "available", "sold", or "not-for-sale"
   price                 Shop only. What to show when status is
                         "available", for example "$1,200". Use "" to
                         show "Price on request".
   framedPrice           Optional. Shown on the Shop detail when the
                         painting is available. Leave "" to hide it.
   paypalLink            A PayPal payment link. When this is filled in,
                         a Buy now button appears on that painting.
   paypalButtonId        Hosted button id, if you have an id instead of a link.
   framedPaypalLink      Same as paypalLink, for the framed price.
   framedPaypalButtonId  Hosted button id for the framed price.
   shopHome              true puts the piece in the eight on the homepage Shop.
   blank                 true draws a solid black tile on the Portfolio page.
                         These tiles are left out of the Shop.

   Do not put a PayPal password or secret key in this file.
*/
window.ARTWORKS = [
  {
    id: "olive-leaves",
    shopHome: true,
    title: "Olive Leaves",
    year: 2025,
    medium: "Oil on canvas panel",
    size: "16 × 24 in",
    status: "available",
    price: "$480",
    framedPrice: "",
    image: "images/olive-leaves.svg",
    featured: false,
    description: "A sample print. Replace this file with a photograph of the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "vase-study",
    shopHome: true,
    title: "Vase Study",
    year: 2025,
    medium: "Oil on canvas panel",
    size: "16 × 24 in",
    status: "available",
    price: "$520",
    framedPrice: "",
    image: "images/vase-study.svg",
    featured: false,
    description: "A sample print. Replace this file with a photograph of the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "leaf-sprig",
    shopHome: true,
    title: "Leaf Sprig",
    year: 2024,
    medium: "Oil on canvas panel",
    size: "16 × 24 in",
    status: "sold",
    price: "",
    framedPrice: "",
    image: "images/leaf-sprig.svg",
    featured: false,
    description: "A sample print. This one is marked sold.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "leaf-sprig-two",
    shopHome: true,
    title: "Leaf Sprig II",
    year: 2024,
    medium: "Oil on canvas panel",
    size: "16 × 24 in",
    status: "available",
    price: "$440",
    framedPrice: "",
    image: "images/leaf-sprig-two.svg",
    featured: false,
    description: "A sample print. Replace this file with a photograph of the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "garden-terrace",
    shopHome: true,
    title: "Garden Terrace",
    year: 2025,
    medium: "Oil on stretched canvas",
    size: "24 × 36 in",
    status: "available",
    price: "$1,600",
    framedPrice: "",
    image: "images/garden-terrace.jpg",
    featured: false,
    description: "A sample photograph. Replace it with the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "on-the-canvas",
    shopHome: true,
    title: "On the Canvas",
    year: 2024,
    medium: "Oil on stretched canvas",
    size: "30 × 40 in",
    status: "available",
    price: "$1,800",
    framedPrice: "$2,250",
    image: "images/on-the-canvas.jpg",
    featured: false,
    description: "A sample photograph. The PayPal links below are stand-ins.",
    paypalLink: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER",
    paypalButtonId: "",
    framedPaypalLink: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER-FRAMED",
    framedPaypalButtonId: ""
  },
  {
    id: "red-rose",
    shopHome: true,
    title: "Blush Roses",
    year: 2025,
    medium: "Oil on canvas panel",
    size: "20 × 24 in",
    status: "available",
    price: "$860",
    framedPrice: "",
    image: "images/red-rose.jpg",
    featured: false,
    description: "A sample photograph. Replace it with the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "open-sky",
    title: "Open Sky",
    year: 2025,
    medium: "Oil on canvas panel",
    size: "18 × 24 in",
    status: "available",
    price: "$720",
    framedPrice: "",
    image: "images/open-sky.jpg",
    featured: false,
    description: "A sample photograph. Replace it with the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "paint-water",
    shopHome: true,
    title: "Studio Brushes",
    year: 2023,
    medium: "Oil on stretched canvas",
    size: "24 × 30 in",
    status: "available",
    price: "$1,100",
    framedPrice: "",
    image: "images/paint-water.jpg",
    featured: false,
    description: "A sample photograph. Replace it with the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "mona-lisa",
    title: "Mona Lisa",
    year: 1503,
    medium: "Oil on poplar panel",
    size: "21 × 30 in",
    status: "not-for-sale",
    price: "",
    framedPrice: "",
    image: "images/mona-lisa.jpg",
    featured: false,
    description: "Leonardo da Vinci. Public domain, from Wikimedia Commons. A stand-in for the gallery, not a painting for sale.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "autumn-still",
    title: "Autumn Still",
    year: 2025,
    medium: "Oil on canvas panel",
    size: "16 × 20 in",
    status: "available",
    price: "$640",
    framedPrice: "",
    image: "images/autumn-still.svg",
    featured: false,
    description: "A sample still life. Replace this file with a photograph of the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "teal-wash",
    title: "Soft Wash",
    year: 2024,
    medium: "Oil on canvas panel",
    size: "16 × 20 in",
    status: "available",
    price: "$540",
    framedPrice: "",
    image: "images/teal-wash.jpg",
    featured: false,
    description: "A sample photograph. Replace it with the painting.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "coming-1",
    title: "Coming Soon",
    year: "",
    medium: "",
    size: "",
    status: "not-for-sale",
    price: "",
    framedPrice: "",
    image: "",
    blank: true,
    featured: false,
    description: "A blank Portfolio tile. Add a picture, title, and price here, then set blank to false.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "coming-2",
    title: "Coming Soon",
    year: "",
    medium: "",
    size: "",
    status: "not-for-sale",
    price: "",
    framedPrice: "",
    image: "",
    blank: true,
    featured: false,
    description: "A blank Portfolio tile. Add a picture, title, and price here, then set blank to false.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "coming-3",
    title: "Coming Soon",
    year: "",
    medium: "",
    size: "",
    status: "not-for-sale",
    price: "",
    framedPrice: "",
    image: "",
    blank: true,
    featured: false,
    description: "A blank Portfolio tile. Add a picture, title, and price here, then set blank to false.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "coming-4",
    title: "Coming Soon",
    year: "",
    medium: "",
    size: "",
    status: "not-for-sale",
    price: "",
    framedPrice: "",
    image: "",
    blank: true,
    featured: false,
    description: "A blank Portfolio tile. Add a picture, title, and price here, then set blank to false.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  }
];
