# Liz Miranda

A one-page portfolio for Liz Miranda, an oil painter in Texas. It is plain HTML, CSS, and a little JavaScript. There is no build step. Paths are relative, so the page works when you open `index.html` on your computer and when Cloudflare serves the repository root.

The pictures in the home tiles, the strip, the About background, and the gallery are free-license samples, listed under Sample pictures. Swap the gallery files for photographs of the real paintings and edit `js/artworks.js`. The questions, the email, and the social links are still placeholders.

## What is on the page

The sections follow the layout Liz designed, top to bottom:

1. Header — round mark and the name, then Home, About Me, Portfolio, Shop, Contact.
2. Home — four tall pictures, each with a button into a section.
3. A sideways strip of pictures. **See All** goes to the Portfolio.
4. About Me — the letter, over a studio picture.
5. Portfolio — every painting in `js/artworks.js`, four across, with the title and price under each one.
6. Shop — the same cards, keeping only paintings marked `"available"`.
7. Questions — six short notes. Edit them in `index.html`.
8. Footer — name, **To Start** (back to the top), contact, and two social icons.

Click a painting to open it. The detail shows the title, year, medium, size, price, description, and, when you have filled them in, **Buy now** and **Buy framed**.

**See All** on the Portfolio jumps to the Shop. **See All** on the Shop jumps back to the Portfolio. The strip’s **See All** opens the Portfolio. There is no second website behind those links.

## Add a painting

1. Put the photo in the `images/` folder.
   JPEG, PNG, and WebP all work. A simple name is easiest, such as `blue-vase.jpg`.
2. Open `js/artworks.js`.
3. Copy one of the `{ ... }` blocks, including the comma after it.
4. Paste it where the painting should appear. Higher in the list means earlier in the Portfolio.
5. Fill in the title, year, medium, size, price, and a sentence of description.
6. Set `image` to the file you added, for example `images/blue-vase.jpg`.
   A bare file name such as `blue-vase.jpg` is fine too. The site looks in `images/` for it.
7. Save the file and refresh the browser.

`status` is one of:

- `"available"` — shows the price, and the painting appears in the Shop
- `"sold"` — shows **Sold**, and the painting stays in the Portfolio only
- `"not-for-sale"` — shows **Not for sale**, and the painting stays in the Portfolio only

Leave `price` as `""` when you would rather show "Price on request".

Mediums on the current list are oil on canvas panel and oil on stretched canvas.

Each painting can be linked directly. Blue Hour, for example, is `index.html#painting-blue-hour`.

## PayPal later

Buy buttons are already wired up, and they stay hidden until you give them a link. Nothing here is connected to a real PayPal account.

When you want a button on one painting:

1. In PayPal, create a payment link or a hosted Buy Now button for that painting.
2. Paste the link into `paypalLink` for that entry.
   Or, if PayPal gave you a hosted button id instead of a link, paste the id into `paypalButtonId`.
3. For a framed price, set `framedPrice` (for example `"$2,250"`) and paste a second link into `framedPaypalLink`, or a hosted button id into `framedPaypalButtonId`.
4. Leave the PayPal fields as `""` on paintings that should not have a button.
5. Buttons only appear when the painting is `"available"`.

`framedPrice` can be set on its own. The detail view shows the framed price, and **Buy framed** appears only when that option has a link or a button id.

Do not put a PayPal password, API secret, or client secret in this file. A payment link is meant to be public. A password is not.

Blue Hour currently has stand-in links containing the word `PLACEHOLDER`, so you can see both buttons. Replace those links before anyone uses them.

## Change the words and the contact links

In `index.html`:

- The About letter is Liz’s text. Edit it in the About section if a line should change.
- The questions under the Shop are placeholders. Each heading and answer is in the Questions section.
- The email is `blank@email.com` and is marked **Placeholder**. Put in the real address.
- The Facebook and X icons point at `https://example.com` and are marked **Placeholder links**.

The round mark is `images/mark.svg`. The studio picture behind the letter is `images/about-studio.svg`. The four home tiles and the strip use the other files in `images/`. Replace any of them with a photograph of the same name, or change the `src` in `index.html`.

## Cloudflare Workers

The live site is the `main` branch, deployed as a static-assets Worker. The project name in Cloudflare is `anas-art`. There is no Worker script. `wrangler.jsonc` points the assets at the repository root, and `.assetsignore` leaves out git, this readme, the Wrangler config, `node_modules`, and the unused Outfit font files.

In the Workers Builds settings for this repository, use:

| Setting | Value |
| --- | --- |
| Root directory | `/` |
| Build command | *(leave blank)* |
| Deploy command | `npx wrangler deploy` |

Merge to `main` and Cloudflare runs that deploy. The site is the files in the repository root (`index.html` and the folders next to it). Do not set a build command, and do not set an output directory other than the root. Paths in the page are relative, so they keep working on that host.

To check the upload list on your own computer, from the repository root:

```
npx wrangler deploy --dry-run
```

That prints what would be published. It does not need a Worker script.

## GitHub Pages, if you ever want it

Optional. The same files can be served from the repository root with no build.

1. On GitHub, open this repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Set the branch to **main** and the folder to **/ (root)**.
5. Save.

The empty `.nojekyll` file tells GitHub to publish the folders as they are. Wrangler does not upload that file.

## Sample pictures

These stand in until the real paintings are ready. The four botanical cards and the autumn still life are original drawings made for this site. Mona Lisa is public domain.

| File | What it is | Credit |
| --- | --- | --- |
| `images/tile-about.jpg` | White roses and bridal shoes | [Unsplash](https://unsplash.com/photos/1594552072238) |
| `images/tile-portfolio.jpg` | Pink and white roses | [Unsplash](https://unsplash.com/photos/1455659817273) |
| `images/tile-shop.jpg` | Hands cutting a wedding cake | [Pexels, photo 19522701](https://www.pexels.com/photo/19522701/) |
| `images/tile-contact.jpg` | A woman in a white dress | [Pexels, photo 8484213](https://www.pexels.com/photo/8484213/) |
| `images/strip-1.jpg` | A couple holding hands | [Unsplash](https://unsplash.com/photos/1519741497674) |
| `images/strip-2.jpg` | A white rose bouquet | [Unsplash](https://unsplash.com/photos/1468327768560) |
| `images/strip-3.jpg` | A couple | [Unsplash](https://unsplash.com/photos/1522673607200) |
| `images/strip-4.jpg` | A vintage camera | [Unsplash](https://unsplash.com/photos/1495707902641) |
| `images/strip-5.jpg` | A white dress on a stone terrace | [Unsplash](https://unsplash.com/photos/1469334031218) |
| `images/about-studio.jpg` | A woman painting outdoors | [Unsplash](https://unsplash.com/photos/1660092626225) |
| `images/mark.jpg` | Rose, cropped for the round mark | [Unsplash](https://unsplash.com/photos/1496062031456) |
| `images/garden-terrace.jpg` | A woman in white in a garden | [Unsplash](https://unsplash.com/photos/1591604466107) |
| `images/on-the-canvas.jpg` | A hand painting on canvas | [Unsplash](https://unsplash.com/photos/1579965342575) |
| `images/red-rose.jpg` | A red rose | [Unsplash](https://unsplash.com/photos/1494972308805) |
| `images/open-sky.jpg` | A pink rose against blue sky | [Pexels, photo 26824434](https://www.pexels.com/photo/26824434/), Ellie Burgin |
| `images/paint-water.jpg` | Brushes and colored water | [Unsplash](https://unsplash.com/photos/1460661419201) |
| `images/mona-lisa.jpg` | Mona Lisa | Leonardo da Vinci, public domain, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg) |
| `images/teal-wash.jpg` | A blue watercolor | [Unsplash](https://unsplash.com/photos/1579783901586) |
| `images/olive-leaves.svg`, `vase-study.svg`, `leaf-sprig.svg`, `leaf-sprig-two.svg`, `autumn-still.svg` | Original drawings | Made for this site |

Unsplash photos are used under the [Unsplash License](https://unsplash.com/license). Pexels photos are used under the [Pexels License](https://www.pexels.com/license/).

## Fonts

Cormorant Garamond is included in `fonts/` under the SIL Open Font License. The license text is `fonts/OFL-Cormorant-Garamond.txt`.
