/* Liz Miranda's paintings
   -------------------------
   This is the only file you need to edit when a painting is added,
   sold, or given a new price. The website reads this list.

   To add a painting:
   1. Put the photo in the images/ folder.
      jpg, png, and webp all work. Name it something simple,
      like images/garden-gate.jpg
   2. Copy one of the { ... } blocks below, including the comma.
   3. Paste it where you want it to appear.
      Higher in the list means earlier in the gallery.
   4. Change the words, save, and refresh the page.

   featured              true for the large painting at the top of the
                         home page. Use true on only one painting.
                         If several say true, the first one is used.
   status                "available", "sold", or "not-for-sale"
   medium                For example "Oil on canvas panel" or
                         "Oil on stretched canvas".
   price                 What to show when status is "available",
                         for example "$1,200". Use "" to show
                         "Price on request".
   paypalLink            A PayPal payment link for the painting.
                         When this is filled in, a Buy now button appears.
                         Leave "" and that button stays hidden.
   paypalButtonId        Optional. If PayPal gave you a hosted button id
                         and you do not have a link, paste the id here.
   framedPrice           Optional price with a frame, such as "$1,450".
                         Leave "" if you are not offering a frame.
   framedPaypalLink      Optional PayPal link for the framed painting.
                         When this is filled in, a Buy framed button appears.
   framedPaypalButtonId  Optional hosted button id for the framed painting.

   Do not put a PayPal password or secret key in this file.
   A payment link is public; a password is not.
*/
window.ARTWORKS = [
  {
    id: "morning-mist",
    title: "Morning Mist",
    year: 2024,
    medium: "Oil on stretched canvas",
    size: "36 × 48 in",
    status: "available",
    price: "$2,400",
    framedPrice: "",
    image: "images/morning-mist.svg",
    featured: true,
    description: "A pale hour over still water, when the trees are only a softer green inside the fog.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  },
  {
    id: "blush-garden",
    title: "Blush Garden",
    year: 2023,
    medium: "Oil on canvas panel",
    size: "30 × 24 in",
    status: "sold",
    price: "",
    framedPrice: "",
    image: "images/blush-garden.svg",
    featured: false,
    description: "Roses just opening, painted in thin washes of blush, cream, and sage.",
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
    size: "20 × 16 in",
    status: "not-for-sale",
    price: "",
    framedPrice: "",
    image: "images/january-orchard.svg",
    featured: false,
    description: "Bare branches in a silver mist, with a little warmth left in the grass.",
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
    size: "40 × 30 in",
    status: "available",
    price: "$1,800",
    framedPrice: "$2,250",
    image: "images/blue-hour.svg",
    featured: false,
    description: "The hill goes quiet and blue, and a small gold light stays on the water.",
    paypalLink: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER",
    paypalButtonId: "",
    framedPaypalLink: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER-FRAMED",
    framedPaypalButtonId: ""
  },
  {
    id: "the-terrace",
    title: "The Terrace",
    year: 2022,
    medium: "Oil on stretched canvas",
    size: "18 × 24 in",
    status: "available",
    price: "$950",
    framedPrice: "$1,150",
    image: "images/the-terrace.svg",
    featured: false,
    description: "Evening light on a railing, and one plant still holding the sun.",
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
    description: "Two lemons on a low branch, and the green of the leaves beside them.",
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
    description: "A thin path between a pale cliff and a misty sea.",
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
    description: "A small study of green, blush, and the color of the ground.",
    paypalLink: "",
    paypalButtonId: "",
    framedPaypalLink: "",
    framedPaypalButtonId: ""
  }
];
