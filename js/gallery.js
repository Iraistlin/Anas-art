(function () {
  var raw = Array.isArray(window.ARTWORKS) ? window.ARTWORKS : [];
  var works = prepare(raw);
  var featured = works.filter(function (work) { return work.featured; })[0] || works[0] || null;
  var current = -1;

  var featuredEl = document.getElementById("featured");
  var galleryEl = document.getElementById("gallery");
  var countEl = document.getElementById("count");
  var dialog = document.getElementById("detail");
  var yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (!featuredEl || !galleryEl || !dialog) return;

  if (!works.length) {
    featuredEl.innerHTML = '<p class="empty">No paintings yet. Add one in js/artworks.js, then refresh this page.</p>';
    return;
  }

  renderFeatured(featured);
  renderGrid(works);
  if (countEl) {
    countEl.textContent = works.length === 1 ? "1 painting" : works.length + " paintings";
  }

  document.getElementById("main").addEventListener("click", function (event) {
    var button = event.target.closest("[data-id]");
    if (!button || !document.getElementById("main").contains(button)) return;
    openById(button.getAttribute("data-id"));
  });

  document.getElementById("detail-close").addEventListener("click", function () {
    dialog.close();
  });
  document.getElementById("detail-prev").addEventListener("click", function () { step(-1); });
  document.getElementById("detail-next").addEventListener("click", function () { step(1); });

  dialog.addEventListener("click", function (event) {
    var rect = dialog.getBoundingClientRect();
    var inside = event.clientX >= rect.left && event.clientX <= rect.right &&
      event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });

  dialog.addEventListener("close", function () {
    current = -1;
    if (location.hash.indexOf("#painting-") === 0) {
      setHash(location.pathname + location.search);
    }
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      if (dialog.open) dialog.close();
    });
  });

  window.addEventListener("hashchange", syncFromHash);
  syncFromHash();

  function prepare(list) {
    var seen = Object.create(null);
    return list.map(function (work, index) {
      var title = text(work && work.title) || "Untitled";
      var base = text(work && work.id) || slug(title) || "painting";
      var id = base;
      var n = 2;
      while (seen[id]) {
        id = base + "-" + n;
        n += 1;
      }
      seen[id] = true;
      return {
        id: id,
        title: title,
        year: work && work.year != null ? text(work.year) : "",
        medium: text(work && work.medium),
        size: text(work && work.size),
        status: normalizeStatus(work && work.status),
        price: text(work && work.price),
        image: imageSrc(work && work.image),
        featured: Boolean(work && work.featured),
        description: text(work && work.description),
        paypalLink: text(work && work.paypalLink),
        paypalButtonId: text(work && work.paypalButtonId),
        order: index
      };
    });
  }

  function paintImage(parent, work, priority) {
    if (!work.image) {
      parent.classList.add("is-missing");
      var missing = document.createElement("span");
      missing.className = "missing";
      missing.textContent = "Image not found. Check the images folder.";
      parent.appendChild(missing);
      return;
    }
    var img = document.createElement("img");
    img.src = work.image;
    img.alt = "";
    if (priority) img.setAttribute("fetchpriority", "high");
    else img.loading = "lazy";
    img.addEventListener("error", function () {
      img.alt = "Image not found. Check the file name in js/artworks.js.";
    });
    parent.appendChild(img);
  }

  function renderFeatured(work) {
    featuredEl.replaceChildren();
    if (!work) return;

    var article = document.createElement("article");
    article.className = "featured";

    var photo = document.createElement("button");
    photo.type = "button";
    photo.className = "mat featured-photo";
    photo.setAttribute("data-id", work.id);
    photo.setAttribute("aria-label", "View " + work.title);
    paintImage(photo, work, true);

    var copy = document.createElement("div");
    copy.className = "featured-copy";

    var kicker = document.createElement("p");
    kicker.className = "eyebrow";
    kicker.textContent = "Featured painting";

    var heading = document.createElement("h1");
    heading.textContent = work.title;

    var meta = document.createElement("p");
    meta.className = "featured-meta";
    meta.textContent = [work.year, work.medium, work.size].filter(Boolean).join(" · ");

    var price = document.createElement("p");
    price.className = "featured-price";
    price.textContent = priceLabel(work);

    var description = document.createElement("p");
    description.className = "featured-description";
    description.textContent = work.description;

    var view = document.createElement("button");
    view.type = "button";
    view.className = "text-button";
    view.setAttribute("data-id", work.id);
    view.textContent = "View painting";

    copy.append(kicker, heading, meta, price, description, view);
    article.append(photo, copy);
    featuredEl.appendChild(article);
  }

  function renderGrid(list) {
    galleryEl.replaceChildren();
    list.forEach(function (work) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "card";
      button.setAttribute("data-id", work.id);

      var frame = document.createElement("span");
      frame.className = "mat";
      paintImage(frame, work, false);

      var title = document.createElement("span");
      title.className = "card-title";
      title.textContent = work.title;

      var meta = document.createElement("span");
      meta.className = "card-meta";
      var bits = [];
      if (work.year) bits.push(work.year);
      bits.push(priceLabel(work));
      meta.textContent = bits.join(" · ");
      if (work.status === "sold") meta.classList.add("is-sold");
      if (work.status === "not-for-sale") meta.classList.add("is-held");

      button.append(frame, title, meta);
      galleryEl.appendChild(button);
    });
  }

  function openById(id) {
    var index = works.findIndex(function (work) { return work.id === id; });
    if (index === -1) return;
    show(index);
  }

  function show(index) {
    var work = works[index];
    if (!work) return;
    current = index;

    var img = document.getElementById("detail-image");
    var photo = img.parentElement;
    var missing = document.getElementById("detail-missing");
    photo.classList.toggle("is-missing", !work.image);
    if (missing) missing.hidden = Boolean(work.image);
    if (work.image) {
      img.src = work.image;
      img.alt = work.title;
      img.hidden = false;
    } else {
      img.removeAttribute("src");
      img.alt = "";
      img.hidden = true;
    }

    document.getElementById("detail-title").textContent = work.title;
    document.getElementById("detail-description").textContent = work.description;

    var facts = document.getElementById("detail-facts");
    facts.replaceChildren();
    [
      ["Year", work.year],
      ["Medium", work.medium],
      ["Size", work.size],
      ["Price", priceLabel(work)]
    ].forEach(function (row) {
      if (!row[1]) return;
      var wrap = document.createElement("div");
      var dt = document.createElement("dt");
      var dd = document.createElement("dd");
      dt.textContent = row[0];
      dd.textContent = row[1];
      if (row[0] === "Price" && work.status !== "available") dd.classList.add("is-status");
      wrap.append(dt, dd);
      facts.appendChild(wrap);
    });

    var buy = document.getElementById("detail-buy");
    buy.replaceChildren();
    var offer = buyOffer(work);
    if (offer) {
      var link = document.createElement("a");
      link.className = "buy";
      link.href = offer.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Buy now";
      buy.appendChild(link);
      var note = document.createElement("p");
      note.className = "buy-note";
      note.textContent = offer.placeholder
        ? "Placeholder link — replace paypalLink before sharing this button. Checkout would open on PayPal."
        : "Checkout opens on PayPal.";
      buy.appendChild(note);
    }

    var prev = document.getElementById("detail-prev");
    var next = document.getElementById("detail-next");
    prev.disabled = works.length < 2;
    next.disabled = works.length < 2;
    prev.setAttribute("aria-label", "Previous painting");
    next.setAttribute("aria-label", "Next painting");

    if (!dialog.open) dialog.showModal();
    setHash("#painting-" + work.id);
  }

  function step(delta) {
    if (current < 0 || works.length < 2) return;
    var index = (current + delta + works.length) % works.length;
    show(index);
  }

  function syncFromHash() {
    var hash = location.hash;
    if (hash.indexOf("#painting-") !== 0) {
      if (dialog.open) dialog.close();
      return;
    }
    openById(decodeURIComponent(hash.slice("#painting-".length)));
  }

  function buyOffer(work) {
    if (work.status !== "available") return null;
    var link = work.paypalLink;
    var placeholder = /placeholder/i.test(link) || /placeholder/i.test(work.paypalButtonId);
    var url = httpUrl(link);
    if (!url && work.paypalButtonId && !/placeholder/i.test(work.paypalButtonId)) {
      url = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=" +
        encodeURIComponent(work.paypalButtonId);
    }
    if (!url && work.paypalButtonId && /placeholder/i.test(work.paypalButtonId)) {
      url = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PLACEHOLDER";
    }
    if (!url) return null;
    return { url: url, placeholder: placeholder };
  }

  function priceLabel(work) {
    if (work.status === "sold") return "Sold";
    if (work.status === "not-for-sale") return "Not for sale";
    if (!work.price) return "Price on request";
    if (/^\$/.test(work.price) || /[a-z]/i.test(work.price)) return work.price;
    var amount = Number(work.price.replace(/,/g, ""));
    if (Number.isFinite(amount)) return "$" + amount.toLocaleString("en-US");
    return work.price;
  }

  function normalizeStatus(value) {
    var status = String(value || "available").trim().toLowerCase().replace(/[\s_]+/g, "-");
    if (status === "sold") return "sold";
    if (status === "not-for-sale" || status === "nfs" || status === "notforsale") return "not-for-sale";
    return "available";
  }

  function imageSrc(value) {
    var src = text(value);
    if (!src) return "";
    if (/^https?:\/\//i.test(src) || src.indexOf("/") !== -1 || src.indexOf("\\") !== -1) return src;
    return "images/" + src;
  }

  function httpUrl(value) {
    if (!value) return "";
    try {
      var url = new URL(value, window.location.href);
      if (url.protocol === "http:" || url.protocol === "https:") return url.href;
    } catch (error) {
      return "";
    }
    return "";
  }

  function setHash(hash) {
    try {
      if ((location.pathname + location.search + location.hash) !== hash && location.hash !== hash) {
        history.replaceState(null, "", hash);
      }
    } catch (error) {
      // Some browsers block history changes on file:// pages. The painting still opens.
    }
  }

  function slug(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function text(value) {
    return value == null ? "" : String(value).trim();
  }
})();
