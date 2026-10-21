# Liz Miranda

A portfolio for Liz Miranda, an oil painter in Texas. It is plain HTML, CSS, and a little JavaScript. There is no build step. Paths are relative, so the pages work when you open `index.html` on your computer and when Cloudflare serves the repository root.

The pictures in the home tiles, the About background, and the gallery are free-license samples, listed under Sample pictures. Swap the gallery files for photographs of the real paintings and edit `js/artworks.js`. The questions, the email, and the social links are still placeholders.

## What is on the page

The sections follow the layout Liz designed, top to bottom:

1. Header — round mark and the name, then Home, About Me, Portfolio, Shop, Contact.
2. Home — four tall pictures. About Me and Contact stay on this page. Portfolio opens `portfolio.html`. Shop opens `shop.html`.
3. About Me — the letter, over a studio picture.
4. Portfolio — one sideways row of the paintings that have pictures. Each tile shows the title only. The row ends with a **See All** tile. The small **See All** above the row opens the same page.
5. Shop — eight paintings, four across, with the title and price under each one. **See All** opens the Shop page.
6. Questions — six short notes. Edit them in `index.html`.
7. Footer — name, **To Start** (back to the top), contact, and two social icons.

`portfolio.html` is the full Portfolio: every entry in `js/artworks.js`, four across, including the solid black placeholders. Portfolio tiles show the title only. `shop.html` is the full Shop: every painting that has a picture, with its price. The two **See All** links do not go to the same page. The header links and the home tiles use those same two pages.

Click a painting to open it. From the Portfolio, the detail shows the title, year, medium, size, and description. From the Shop, it also shows the price and, when you have filled them in, **Buy now** and **Buy framed**.

## Add a painting

1. Put the photo in the `images/` folder.
   JPEG, PNG, and WebP all work. A simple name is easiest, such as `blue-vase.jpg`.
2. Open `js/artworks.js`.
3. Copy one of the `{ ... }` blocks, including the comma after it.
4. Paste it where the painting should appear. Higher in the list means earlier on the Portfolio page and the Shop page.
5. Fill in the title, year, medium, size, price, and a sentence of description.
6. Set `image` to the file you added, for example `images/blue-vase.jpg`.
   A bare file name such as `blue-vase.jpg` is fine too. The site looks in `images/` for it.
7. Set `shopHome` to `true` if it should also be one of the eight paintings on the homepage Shop. Leave it off to show the painting only on the full Portfolio and Shop pages.
8. Save the file and refresh the browser.

The homepage Portfolio row lists every piece that has a picture. `portfolio.html` lists those and then the black placeholders. The homepage Shop lists the pieces with `shopHome: true` (eight of them). `shop.html` lists every piece that has a picture.

A black tile is an entry with `blank: true` and `image: ""`. The title on those tiles is **Coming Soon**. To use the spot, set `image`, `title`, and `price`, then set `blank` to `false`.

`status` is one of:

- `"available"` — shows the price on the Shop. **Buy now** appears on the Shop detail when a PayPal link is set
- `"sold"` — shows **Sold** on the Shop
- `"not-for-sale"` — shows **Not for sale** on the Shop

Leave `price` as `""` when you would rather show "Price on request" on the Shop. The Portfolio does not show a price line.

Mediums on the current list are oil on canvas panel and oil on stretched canvas.

Each painting can be linked directly. On the Canvas, for example, is `portfolio.html#painting-on-the-canvas` (no price or Buy buttons) or `shop.html#painting-on-the-canvas` (price and Buy buttons).

## PayPal later

Buy buttons are already wired up, and they stay hidden until you give them a link. Nothing here is connected to a real PayPal account.

When you want a button on one painting:

1. In PayPal, create a payment link or a hosted Buy Now button for that painting.
2. Paste the link into `paypalLink` for that entry.
   Or, if PayPal gave you a hosted button id instead of a link, paste the id into `paypalButtonId`.
3. For a framed price, set `framedPrice` (for example `"$2,250"`) and paste a second link into `framedPaypalLink`, or a hosted button id into `framedPaypalButtonId`.
4. Leave the PayPal fields as `""` on paintings that should not have a button.
5. Buttons only appear when the painting is `"available"`.

`framedPrice` can be set on its own. The Shop detail shows the framed price, and **Buy framed** appears only when that option has a link or a button id.

Do not put a PayPal password, API secret, or client secret in this file. A payment link is meant to be public. A password is not.

On the Canvas currently has stand-in links containing the word `PLACEHOLDER`, so you can see both buttons. Replace those links before anyone uses them.

## Change the words and the contact links

In `index.html`:

- The About letter is Liz’s text. Edit it in the About section if a line should change.
- The questions under the Shop are placeholders. Each heading and answer is in the Questions section.
- The email is `blank@email.com` and is marked **Placeholder**. Put in the real address.
- The Facebook and X icons point at `https://example.com` and are marked **Placeholder links**.

The round mark is `images/mark.jpg`. The studio picture behind the letter is `images/about-studio.jpg`. The four home tiles use the other files in `images/`. Replace any of them with a photograph of the same name, or change the `src` in `index.html`. The same header and footer are on `portfolio.html` and `shop.html`. The email and social links are placeholders on each page.

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
| `images/tile-portfolio.jpg` | Pink and white roses | [Unsplash](https://unsplash.com/photos/1526047932273) |
| `images/tile-shop.jpg` | Hands cutting a wedding cake | [Pexels, photo 19522701](https://www.pexels.com/photo/19522701/) |
| `images/tile-contact.jpg` | A woman in a white dress | [Pexels, photo 8484213](https://www.pexels.com/photo/8484213/) |
| `images/about-studio.jpg` | A woman painting outdoors | [Unsplash](https://unsplash.com/photos/1660092626225) |
| `images/mark.jpg` | Rose, cropped for the round mark | [Unsplash](https://unsplash.com/photos/1496062031456) |
| `images/garden-terrace.jpg` | A woman in a white dress on a garden terrace | [Pexels, photo 4729631](https://www.pexels.com/photo/4729631/), Leeloo The First |
| `images/on-the-canvas.jpg` | A hand painting on canvas | [Pexels, photo 15686006](https://www.pexels.com/photo/15686006/), Natali Smirnova |
| `images/red-rose.jpg` | Pink and white roses | [Pexels, photo 20440303](https://www.pexels.com/photo/20440303/), Luis Alberto Barrera Diaz |
| `images/open-sky.jpg` | A pink rose against blue sky | [Pexels, photo 26824434](https://www.pexels.com/photo/26824434/), Ellie Burgin |
| `images/paint-water.jpg` | Paintbrushes on wood | [Pexels, photo 5583053](https://www.pexels.com/photo/5583053/), Polina Tankilevitch |
| `images/mona-lisa.jpg` | Mona Lisa | Leonardo da Vinci, public domain, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg) |
| `images/teal-wash.jpg` | A soft pink and green wash | [Pexels, photo 32171492](https://www.pexels.com/photo/32171492/), Landiva W. Souza |
| `images/olive-leaves.svg`, `vase-study.svg`, `leaf-sprig.svg`, `leaf-sprig-two.svg`, `autumn-still.svg` | Original drawings | Made for this site |

Unsplash photos are used under the [Unsplash License](https://unsplash.com/license). Pexels photos are used under the [Pexels License](https://www.pexels.com/license/).

## Fonts

Cormorant Garamond is included in `fonts/` under the SIL Open Font License. The license text is `fonts/OFL-Cormorant-Garamond.txt`.
