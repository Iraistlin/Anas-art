# Liz Miranda — Paintings

A small gallery site for Liz Miranda's paintings. It is plain HTML, CSS, and a little JavaScript, so it can be hosted for free on GitHub Pages with no build step.

Open `index.html` in a browser to view it on your computer.

The pictures shipping with the site are placeholder studies. Swap in photographs whenever you are ready. The About text, email address, and Instagram link are placeholders too.

## Add a painting

1. Put the photo in the `images/` folder.
   JPEG, PNG, and WebP all work. A simple name is easiest, such as `garden-gate.jpg`.
2. Open `js/artworks.js`.
3. Copy one of the `{ ... }` blocks, including the comma after it.
4. Paste it where the painting should appear. Higher in the list means earlier on the page.
5. Fill in the title, year, medium, size, price, and a sentence of description.
6. Set `image` to the file you added, for example `images/garden-gate.jpg`.
   A bare file name such as `garden-gate.jpg` is fine too. The site looks in `images/` for it.
7. Save the file and refresh the browser.

Liz paints in oil on canvas panels and on stretched canvas. For `medium`, use a phrase like `Oil on canvas panel` or `Oil on stretched canvas`.

Use `featured: true` on the painting that should be large at the top. Leave it `false` on the others. If more than one is `true`, the first one is used.

`status` is one of:

- `"available"` — shows the price
- `"sold"` — shows **Sold**
- `"not-for-sale"` — shows **Not for sale**

Leave `price` as `""` when you would rather show "Price on request".

Each painting can be linked directly. Blue Hour, for example, is `index.html#painting-blue-hour`.

## A framed price

If a painting can also be bought in a frame, fill in `framedPrice`, for example `"$1,450"`. The detail view shows that price on its own line. Leave `framedPrice` as `""` when a frame is not offered.

The framed price is separate from the PayPal button. A price alone does not add a button.

## PayPal later

Buy buttons are already wired up, and each one stays hidden until you give it a link. Nothing here is connected to a real PayPal account.

When you want a button on one painting:

1. In PayPal, create a payment link or a hosted Buy Now button for that painting.
2. Paste the link into `paypalLink` for the unframed painting.
   Or, if PayPal gave you a hosted button id instead of a link, paste the id into `paypalButtonId`.
3. For a framed option, paste a second link into `framedPaypalLink` (or an id into `framedPaypalButtonId`).
4. Leave a field as `""` when that button should stay hidden.
5. Buttons only appear when the painting is `"available"`.

When both links are set, the detail view shows two buttons: **Buy now** and **Buy framed**.

Do not put a PayPal password, API secret, or client secret in this file. A payment link is meant to be public. A password is not.

Blue Hour currently has stand-in links containing the word `PLACEHOLDER`, so you can see both buttons. Replace those links before anyone uses them. The Terrace has a framed price and no PayPal link, so the price shows and the framed button stays hidden.

## Change the words and the contact links

In `index.html`:

- The About section is sample text. Replace it with a short note about Liz Miranda.
- The email and Instagram entries are marked **Placeholder**. Put in the real address and profile.

If you use a custom domain, update the canonical address in the `<head>` of `index.html` as well.

## Turn on GitHub Pages

The live site is whatever is on the `main` branch. Merge the portfolio first, then:

1. On GitHub, open this repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**.
5. Save.

After a minute or two the site is published at:

<https://iraistlin.github.io/anas-art/>

GitHub Pages serves the files as they are. There is no install step and no build command. The empty `.nojekyll` file tells GitHub to publish the folders as-is.

## Fonts

Cormorant Garamond, Great Vibes, and Nunito Sans are included in `fonts/` under the SIL Open Font License. The license texts are beside the font files.
