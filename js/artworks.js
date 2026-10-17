/* Ana's paintings
   ----------------
   This is the only file you need to edit when a painting is added,
   sold, or given a new price. The website reads this list.

   To add a painting:
   1. Put the photo in the images/ folder.
      jpg, png, and webp all work. Name it something simple,
      like images/blue-vase.jpg
   2. Copy one of the { ... } blocks below, including the comma.
   3. Paste it where you want it to appear.
      Higher in the list means earlier in the gallery.
   4. Change the words, save, and refresh the page.

   featured         true for the large painting at the top of the home
                    page. Use true on only one painting. If several say
                    true, the first one is used.
   status           "available", "sold", or "not-for-sale"
   price            What to show when status is "available",
                    for example "$1,200". Use "" to show
                    "Price on request".
   paypalLink       A PayPal payment link. When this is filled in,
                    a Buy now button appears on that painting.
                    Leave "" and the button stays hidden.
   paypalButtonId   Optional. If PayPal gave you a hosted button id
                    and you do not have a link, paste the id here.
                    Leave "" if you are using paypalLink or no button.

   Do not put a PayPal password or secret key in this file.
   A payment link is public; a password is not.
*/
window.ARTWORKS = [
  {
    id: "harbor-morning",
    title: "Harbor Morning",
    year: 2024,
    medium: "Oil on linen",
    size: "36 × 48 in",
    status: "available",
    price: "$2,400",
    image: "images/harbor-morning.svg",
    featured: true,
    description: "Thin bands of water under a warm sky, painted to hold the hour just after the fog lifts.",
    paypalLink: "",
    paypalButtonId: ""
  },
  {
    id: "red-room",
    title: "The Red Room",
    year: 2023,
    medium: "Oil on canvas",
    size: "30 × 24 in",
    status: "sold",
    price: "",
    image: "images/red-room.svg",
    featured: false,
    description: "A small interior, mostly one color, with the window left as a pale rectangle.",
    paypalLink: "",
    paypalButtonId: ""
  },
  {
    id: "orchard-january",
    title: "Orchard in January",
    year: 2025,
    medium: "Oil on panel",
    size: "20 × 16 in",
    status: "not-for-sale",
    price: "",
    image: "images/orchard-january.svg",
    featured: false,
    description: "Bare trees, a gray-green ground, and the little warmth left in the grass.",
    paypalLink: "",
    paypalButtonId: ""
  },
  {
    id: "blue-interior",
    title: "Blue Interior",
    year: 2024,
    medium: "Acrylic on canvas",
    size: "40 × 30 in",
    status: "available",
    price: "$1,800",
    image: "images/blue-interior.svg",
    featured: false,
    description: "A room reduced to a window, a floor, and the blue of the wall at midday.",
    paypalLink: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER",
    paypalButtonId: ""
  },
  {
    id: "terrace",
    title: "Terrace",
    year: 2022,
    medium: "Oil on canvas",
    size: "18 × 24 in",
    status: "available",
    price: "$950",
    image: "images/terrace.svg",
    featured: false,
    description: "Evening light on a railing, and one plant still in the sun.",
    paypalLink: "",
    paypalButtonId: ""
  },
  {
    id: "lemons",
    title: "Still Life with Lemons",
    year: 2025,
    medium: "Oil on linen",
    size: "16 × 20 in",
    status: "available",
    price: "$720",
    image: "images/lemons.svg",
    featured: false,
    description: "Two lemons, a folded cloth, and the color of the table.",
    paypalLink: "",
    paypalButtonId: ""
  },
  {
    id: "coast-road",
    title: "Coast Road",
    year: 2023,
    medium: "Oil on canvas",
    size: "24 × 36 in",
    status: "available",
    price: "$1,600",
    image: "images/coast-road.svg",
    featured: false,
    description: "The road is a thin line between the cliff and the water.",
    paypalLink: "",
    paypalButtonId: ""
  },
  {
    id: "study-green",
    title: "Study in Green",
    year: 2026,
    medium: "Gouache on paper",
    size: "11 × 14 in",
    status: "available",
    price: "$280",
    image: "images/study-green.svg",
    featured: false,
    description: "A quick study of green against the color of the paper.",
    paypalLink: "",
    paypalButtonId: ""
  }
];
