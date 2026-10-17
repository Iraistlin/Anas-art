# Ana — Paintings

A quiet gallery site for Ana's paintings. It is plain HTML, CSS, and a little JavaScript, so it can be hosted for free on GitHub Pages with no build step.

Open `index.html` in a browser to view it on your computer.

The pictures shipping with the site are placeholder studies. Swap in photographs whenever you are ready. The About text, email address, and Instagram link are placeholders too.

## Add a painting

1. Put the photo in the `images/` folder.
   JPEG, PNG, and WebP all work. A simple name is easiest, such as `blue-vase.jpg`.
2. Open `js/artworks.js`.
3. Copy one of the `{ ... }` blocks, including the comma after it.
4. Paste it where the painting should appear. Higher in the list means earlier on the page.
5. Fill in the title, year, medium, size, price, and a sentence of description.
6. Set `image` to the file you added, for example `images/blue-vase.jpg`.
   A bare file name such as `blue-vase.jpg` is fine too. The site looks in `images/` for it.
7. Save the file and refresh the browser.

Use `featured: true` on the painting that should be large at the top. Leave it `false` on the others. If more than one is `true`, the first one is used.

`status` is one of:

- `"available"` — shows the price
- `"sold"` — shows **Sold**
- `"not-for-sale"` — shows **Not for sale**

Leave `price` as `""` when you would rather show "Price on request".

Each painting can be linked directly. Blue Interior, for example, is `index.html#painting-blue-interior`.

## PayPal later

A Buy now button is already wired up, and it stays hidden until you give it a link. Nothing here is connected to a real PayPal account.

When you want a button on one painting:

1. In PayPal, create a payment link or a hosted Buy Now button for that painting.
2. Paste the link into `paypalLink` for that entry.
   Or, if PayPal gave you a hosted button id instead of a link, paste the id into `paypalButtonId`.
3. Leave both as `""` on paintings that should not have a button.
4. The button only appears when the painting is `"available"`.

Do not put a PayPal password, API secret, or client secret in this file. A payment link is meant to be public. A password is not.

Blue Interior currently has a stand-in link containing the word `PLACEHOLDER`, so you can see the button. Replace that link before anyone uses it.

## Change the words and the contact links

In `index.html`:

- The About section is sample text. Replace it with a short note about Ana.
- The email and Instagram entries are marked **Placeholder**. Put in the real address and profile.
- The name in the header is the word "Ana". Change it there if the site should say something else.

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

Cormorant Garamond and Outfit are included in `fonts/` under the SIL Open Font License. The license texts are beside the font files.
