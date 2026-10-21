/* Liz Miranda's paintings
   -----------------------
   This is the only file you need to edit when a painting is added,
   sold, or given a new price. The website reads this list.

   To add a painting:
   1. Put the photo in the images/ folder.
      jpg, png, and webp all work. Name it something simple,
      like images/blue-vase.jpg
   2. Copy one of the { ... } blocks below, including the comma.
   3. Paste it where you want it to appear.
      Higher in the list means earlier in the Portfolio.
      The Shop shows the same list, keeping only "available" paintings.
   4. Change the words, save, and refresh the page.

   featured              Kept so older notes still make sense. This layout
                         does not pin one large painting at the top.
   status                "available", "sold", or "not-for-sale"
   price                 What to show when status is "available",
                         for example "$1,200". Use "" to show
                         "Price on request".
   framedPrice           Optional. Shown on the detail view when the
                         painting is available. Leave "" to hide it.
   paypalLink            A PayPal payment link. When this is filled in,
                         a Buy now button appears on that painting.
                         Leave "" and the button stays hidden.
   paypalButtonId        Optional. If PayPal gave you a hosted button id
                         and you do not have a link, paste the id here.
                         Leave "" if you are using paypalLink or no button.
   framedPaypalLink      Same as paypalLink, for the framed price.
                         A second button, Buy framed, appears when set.
   framedPaypalButtonId  Hosted button id for the framed price, if you
                         have an id instead of a link.

   Do not put a PayPal password or secret key in this file.
   A payment link is public; a password is not.
*/
window.ARTWORKS = [
  {
    id: "morning-mist",
    title: "Morning Mist",
    year: 2025,
    medium: "Oil on stretched canvas",
    size: "36 × 48 in",
    status: "available",
    price: "$2,400",
    framedPrice: "",
    image: "images/morning-mist.svg",
    featured: true,
    description: "A pale field and a low tree line, painted in the hour before the color warms.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "blush-garden",
    title: "Blush Garden",
    year: 2024,
    medium: "Oil on canvas panel",
    size: "20 × 16 in",
    status: "sold",
    price: "",
    framedPrice: "",
    image: "images/blush-garden.svg",
    featured: false,
    description: "A few open blooms and a lot of quiet space around them.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "january-orchard",
    title: "January Orchard",
    year: 2025,
    medium: "Oil on canvas panel",
    size: "18 × 24 in",
    status: "not-for-sale",
    price: "",
    framedPrice: "",
    image: "images/january-orchard.svg",
    featured: false,
    description: "Bare branches against a soft sky. This one stays in the studio.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "blue-hour",
    title: "Blue Hour",
    year: 2024,
    medium: "Oil on stretched canvas",
    size: "30 × 40 in",
    status: "available",
    price: "$1,800",
    framedPrice: "$2,250",
    image: "images/blue-hour.svg",
    featured: false,
    description: "The last blue in the sky, and the garden still holding a little of it.",
    paypalLink: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER",
    paypalButtonId: "",
    framedPaypalLink: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER-FRAMED",
    framedPaypalButtonId: ""
  },
  {
    id: "the-terrace",
    title: "The Terrace",
    year: 2023,
    medium: "Oil on stretched canvas",
    size: "24 × 30 in",
    status: "available",
    price: "$950",
    framedPrice: "$1,150",
    image: "images/the-terrace.svg",
    featured: false,
    description: "A railing, a pot of flowers, and evening light on the floor.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "lemon-bough",
    title: "Lemon Bough",
    year: 2025,
    medium: "Oil on canvas panel",
    size: "16 × 20 in",
    status: "available",
    price: "$720",
    framedPrice: "",
    image: "images/lemon-bough.svg",
    featured: false,
    description: "Leaves and a few lemons, close enough to count.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "coast-path",
    title: "Coast Path",
    year: 2023,
    medium: "Oil on stretched canvas",
    size: "24 × 36 in",
    status: "available",
    price: "$1,600",
    framedPrice: "",
    image: "images/coast-path.svg",
    featured: false,
    description: "A narrow path between the grass and the water.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "sage-study",
    title: "Sage Study",
    year: 2026,
    medium: "Oil on canvas panel",
    size: "11 × 14 in",
    status: "available",
    price: "$280",
    framedPrice: "",
    image: "images/sage-study.svg",
    featured: false,
    description: "A small study of stems and soft green.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "wild-roses",
    title: "Wild Roses",
    year: 2024,
    medium: "Oil on canvas panel",
    size: "20 × 20 in",
    status: "available",
    price: "$860",
    framedPrice: "$1,080",
    image: "images/wild-roses.svg",
    featured: false,
    description: "Roses left a little loose, the way they grow.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "evening-garden",
    title: "Evening Garden",
    year: 2025,
    medium: "Oil on stretched canvas",
    size: "30 × 24 in",
    status: "available",
    price: "$1,350",
    framedPrice: "",
    image: "images/evening-garden.svg",
    featured: false,
    description: "The garden after the sun drops, still warm in the middle.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "peony-study",
    title: "Peony Study",
    year: 2026,
    medium: "Oil on canvas panel",
    size: "12 × 16 in",
    status: "available",
    price: "$420",
    framedPrice: "",
    image: "images/peony-study.svg",
    featured: false,
    description: "One flower, a few leaves, and the color of the ground.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "soft-light",
    title: "Soft Light",
    year: 2024,
    medium: "Oil on stretched canvas",
    size: "28 × 36 in",
    status: "available",
    price: "$1,100",
    framedPrice: "",
    image: "images/soft-light.svg",
    featured: false,
    description: "A window and the pale light that sits on the wall beside it.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  }
];
