# Liz Miranda

A one-page portfolio for Liz Miranda, an oil painter in Texas. It is plain HTML, CSS, and a little JavaScript. There is no build step. Paths are relative, so the page works when you open `index.html` on your computer and when Cloudflare serves the repository root.

The pictures shipping with the site are original placeholder studies. Swap in photographs when you are ready. The letter, the questions, the email, and the social links are placeholders too, marked in the page.

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

## Fonts

Cormorant Garamond is included in `fonts/` under the SIL Open Font License. The license text is `fonts/OFL-Cormorant-Garamond.txt`.
