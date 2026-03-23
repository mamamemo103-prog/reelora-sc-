(function() {
  var AGE_KEY = "sg_age_ok";
  var modal = document.getElementById("ageModal");
  var btnContinue = document.getElementById("ageContinue");
  var btnExit = document.getElementById("ageExit");

  function hideModal() {
    if (modal) {
      modal.classList.remove("is-visible");
      modal.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }

  if (localStorage.getItem(AGE_KEY) === "1") {
    hideModal();
  } else if (modal && btnContinue && btnExit) {
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    btnContinue.addEventListener("click", function() {
      localStorage.setItem(AGE_KEY, "1");
      hideModal();
    });

    btnExit.addEventListener("click", function() {
      window.location.href = "exit.html";
    });
  }
})();

(function() {
  var toggle = document.getElementById("navToggle");
  var drawer = document.getElementById("navDrawer");
  var overlay = document.getElementById("navOverlay");

  function closeNav() {
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    if (drawer) drawer.classList.remove("is-open");
    if (overlay) {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  function openNav() {
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    if (drawer) drawer.classList.add("is-open");
    if (overlay) {
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
    }
  }

  if (toggle && drawer && overlay) {
    toggle.addEventListener("click", function() {
      if (drawer.classList.contains("is-open")) closeNav();
      else openNav();
    });
    overlay.addEventListener("click", closeNav);
    drawer.querySelectorAll("a").forEach(function(a) {
      a.addEventListener("click", closeNav);
    });
  }
})();

(function() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();

(function () {
  var bar = document.getElementById("cookiebar");
  var accept = document.getElementById("cookieAccept");
  var reject = document.getElementById("cookieReject");
  var KEY = "sg_cookie_choice";

  function closeBar() {
    if (bar) bar.classList.remove("show");
  }

  function applyAccept() {
    try {
      localStorage.setItem(KEY, "1");
    } catch (e) {}
    closeBar();
  }

  function applyReject() {
    try {
      localStorage.setItem(KEY, "1");
    } catch (e) {}
    closeBar();
  }

  if (accept) accept.addEventListener("click", applyAccept);
  if (reject) reject.addEventListener("click", applyReject);

  try {
    if (!localStorage.getItem(KEY) && bar) bar.classList.add("show");
  } catch (e) {
    if (bar) bar.classList.add("show");
  }
})();

(function() {
  document.querySelectorAll(".faq-item").forEach(function(item) {
    var btn = item.querySelector("button");
    var icon = item.querySelector(".faq-icon");
    if (!btn) return;
    btn.addEventListener("click", function() {
      var open = item.classList.toggle("is-open");
      if (icon) icon.textContent = open ? "−" : "+";
    });
  });
})();
