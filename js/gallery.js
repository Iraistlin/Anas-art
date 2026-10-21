(function () {
  var raw = Array.isArray(window.ARTWORKS) ? window.ARTWORKS : [];
  var works = prepare(raw);
  var current = -1;

  var portfolioEl = document.getElementById("portfolio-grid");
  var shopEl = document.getElementById("shop-grid");
  var dialog = document.getElementById("detail");
  var home = document.getElementById("home");

  if ((!portfolioEl && !shopEl) || !dialog || !home) return;

  if (!works.length) {
    var emptyHost = portfolioEl || shopEl;
    emptyHost.innerHTML = '<p class="empty">No paintings yet. Add one in js/artworks.js, then refresh this page.</p>';
    return;
  }

  if (portfolioEl) renderCards(portfolioEl, listFor(portfolioEl));
  if (shopEl) renderCards(shopEl, listFor(shopEl));
  if (portfolioEl && portfolioEl.getAttribute("data-show") === "slider") wireSlider(portfolioEl);

  home.addEventListener("click", function (event) {
    var button = event.target.closest("[data-id]");
    if (!button) return;
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
    if (location.hash.indexOf("#painting-") === 0) setHash(location.pathname + location.search);
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
    return list.map(function (work) {
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
        framedPrice: text(work && work.framedPrice),
        image: imageSrc(work && work.image),
        description: text(work && work.description),
        paypalLink: text(work && work.paypalLink),
        paypalButtonId: text(work && work.paypalButtonId),
        framedPaypalLink: text(work && work.framedPaypalLink),
        framedPaypalButtonId: text(work && work.framedPaypalButtonId),
        home: Boolean(work && work.home),
        shopHome: Boolean(work && work.shopHome),
        blank: Boolean(work && work.blank) || !text(work && work.image)
      };
    });
  }

  function listFor(el) {
    var mode = el.getAttribute("data-show") || "all";
    if (mode === "slider") return works.filter(function (work) { return !work.blank; });
    if (mode === "shop-home") return works.filter(function (work) { return work.shopHome; });
    if (mode === "shop") return works.filter(function (work) { return !work.blank; });
    return works;
  }

  function wireSlider(scroller) {
    var prev = document.querySelector(".slider-prev");
    var next = document.querySelector(".slider-next");
    var drag = { on: false, x: 0, left: 0, moved: false };

    function stepCard(dir) {
      var card = scroller.querySelector(".art-card");
      var gap = 16;
      var amount = card ? card.getBoundingClientRect().width + gap : 280;
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      scroller.scrollBy({ left: dir * amount, behavior: reduce ? "auto" : "smooth" });
    }

    if (prev) prev.addEventListener("click", function () { stepCard(-1); });
    if (next) next.addEventListener("click", function () { stepCard(1); });

    scroller.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "touch") return;
      drag.on = true;
      drag.moved = false;
      drag.x = event.clientX;
      drag.left = scroller.scrollLeft;
    });
    scroller.addEventListener("pointermove", function (event) {
      if (!drag.on) return;
      var dx = event.clientX - drag.x;
      if (Math.abs(dx) > 6) drag.moved = true;
      scroller.scrollLeft = drag.left - dx;
    });
    function endDrag() { drag.on = false; }
    scroller.addEventListener("pointerup", endDrag);
    scroller.addEventListener("pointercancel", endDrag);
    scroller.addEventListener("click", function (event) {
      if (!drag.moved) return;
      event.preventDefault();
      event.stopPropagation();
      drag.moved = false;
    }, true);
  }

  function renderCards(container, list) {
    container.replaceChildren();
    if (!list.length) {
      container.innerHTML = '<p class="empty">Nothing in this group yet.</p>';
      return;
    }
    list.forEach(function (work) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "art-card";
      button.setAttribute("data-id", work.id);

      var photo = document.createElement("span");
      photo.className = "art-photo";
      if (work.image && !work.blank) {
        var img = document.createElement("img");
        img.src = work.image;
        img.alt = "";
        img.loading = "lazy";
        photo.appendChild(img);
      } else if (work.blank) {
        photo.classList.add("is-blank");
      } else {
        photo.classList.add("is-missing");
        photo.textContent = "Add an image";
      }

      var title = document.createElement("span");
      title.className = "art-title";
      title.textContent = work.title;

      var price = document.createElement("span");
      price.className = "art-price";
      price.textContent = work.blank ? "\u00a0" : priceLabel(work);

      button.append(photo, title, price);
      container.appendChild(button);
    });

    if (container.getAttribute("data-show") === "slider") {
      var more = document.createElement("a");
      more.className = "see-all-card";
      more.href = "portfolio.html";
      more.textContent = "See All \u2192";
      container.appendChild(more);
    }
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
    var missing = document.getElementById("detail-missing");
    var photoBox = img.closest(".detail-photo");
    if (photoBox) photoBox.classList.toggle("is-blank", Boolean(work.blank));
    if (missing) missing.hidden = Boolean(work.image) || Boolean(work.blank);
    if (work.image && !work.blank) {
      img.hidden = false;
      img.src = work.image;
      img.alt = work.title;
    } else {
      img.hidden = true;
      img.removeAttribute("src");
      img.alt = "";
    }

    document.getElementById("detail-title").textContent = work.title;
    document.getElementById("detail-description").textContent = work.description;

    var facts = document.getElementById("detail-facts");
    facts.replaceChildren();
    var rows = [
      ["Year", work.year],
      ["Medium", work.medium],
      ["Size", work.size],
      ["Price", priceLabel(work)]
    ];
    if (work.status === "available" && work.framedPrice) rows.push(["Framed", formatPrice(work.framedPrice)]);
    rows.forEach(function (row) {
      if (!row[1]) return;
      var wrap = document.createElement("div");
      var dt = document.createElement("dt");
      var dd = document.createElement("dd");
      dt.textContent = row[0];
      dd.textContent = row[1];
      wrap.append(dt, dd);
      facts.appendChild(wrap);
    });

    var buy = document.getElementById("detail-buy");
    buy.replaceChildren();
    var plain = buyOffer(work.paypalLink, work.paypalButtonId, work.status);
    var framedOffer = buyOffer(work.framedPaypalLink, work.framedPaypalButtonId, work.status);
    if (plain || framedOffer) {
      var row = document.createElement("div");
      row.className = "buy-row";
      if (plain) row.appendChild(buyLink(plain, "Buy now", ""));
      if (framedOffer) row.appendChild(buyLink(framedOffer, "Buy framed", "buy-framed"));
      buy.appendChild(row);
      var note = document.createElement("p");
      note.className = "buy-note";
      var placeholder = (plain && plain.placeholder) || (framedOffer && framedOffer.placeholder);
      note.textContent = placeholder
        ? "Placeholder link — replace the PayPal fields before sharing these buttons."
        : "Checkout opens on PayPal.";
      buy.appendChild(note);
    }

    if (!dialog.open) dialog.showModal();
    setHash("#painting-" + work.id);
  }

  function buyLink(offer, label, extraClass) {
    var link = document.createElement("a");
    link.className = extraClass ? "buy " + extraClass : "buy";
    link.href = offer.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    return link;
  }

  function step(delta) {
    if (current < 0 || works.length < 2) return;
    show((current + delta + works.length) % works.length);
  }

  function syncFromHash() {
    var hash = location.hash;
    if (hash.indexOf("#painting-") !== 0) {
      if (dialog.open) dialog.close();
      return;
    }
    openById(decodeURIComponent(hash.slice("#painting-".length)));
  }

  function buyOffer(link, buttonId, status) {
    if (status !== "available") return null;
    var placeholder = /placeholder/i.test(link) || /placeholder/i.test(buttonId);
    var url = httpUrl(link);
    if (!url && buttonId && !/placeholder/i.test(buttonId)) url = hosted(buttonId);
    if (!url && buttonId && /placeholder/i.test(buttonId)) url = hosted("PLACEHOLDER");
    if (!url) return null;
    return { url: url, placeholder: placeholder };
  }

  function hosted(id) {
    return "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=" + encodeURIComponent(id);
  }

  function priceLabel(work) {
    if (work.blank) return "";
    if (work.status === "sold") return "Sold";
    if (work.status === "not-for-sale") return "Not for sale";
    if (!work.price) return "Price on request";
    return formatPrice(work.price);
  }

  function formatPrice(price) {
    var raw = text(price);
    if (!raw) return "";
    if (/^\$/.test(raw) || /[a-z]/i.test(raw)) return raw;
    var amount = Number(raw.replace(/,/g, ""));
    if (Number.isFinite(amount)) return "$" + amount.toLocaleString("en-US");
    return raw;
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
    return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function text(value) {
    return value == null ? "" : String(value).trim();
  }
})();
