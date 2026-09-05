// ============================================================
// CONFIGURAÇÃO CENTRAL — altere apenas aqui.
// ============================================================
const CONFIG = {
  // [PLACEHOLDER] Insira a URL real de checkout. Todos os botões CTA usam este valor.
  CHECKOUT_URL: "https://SEU-CHECKOUT-AQUI.com/acervo-100-livros-cristaos",

  // [PLACEHOLDER] Data/hora real de encerramento da promoção (ISO 8601, com fuso).
  // Só mantenha o contador visível se essa data for verdadeira (sem escassez falsa).
  PROMO_END: "2026-09-11T23:59:59-03:00",

  // [PLACEHOLDER] IDs de tracking. Deixe em branco para não disparar nada.
  META_PIXEL_ID: "",
  GTM_ID: "",
};

// Aplica a URL de checkout em todos os CTAs da página
document.querySelectorAll(".js-cta").forEach((el) => {
  el.setAttribute("href", CONFIG.CHECKOUT_URL);
  el.addEventListener("click", () => {
    if (typeof fbq === "function" && CONFIG.META_PIXEL_ID) {
      fbq("track", "Lead", { content_name: el.dataset.cta || "cta" });
    }
  });
});

// Ano dinâmico no rodapé
const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Contador regressivo da promoção
(function initCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  const end = new Date(CONFIG.PROMO_END).getTime();
  const fields = {
    days: el.querySelector('[data-cd="days"]'),
    hours: el.querySelector('[data-cd="hours"]'),
    minutes: el.querySelector('[data-cd="minutes"]'),
    seconds: el.querySelector('[data-cd="seconds"]'),
  };

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const diff = end - Date.now();
    if (isNaN(end) || diff <= 0) {
      el.parentElement.style.display = "none";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    fields.days.textContent = pad(days);
    fields.hours.textContent = pad(hours);
    fields.minutes.textContent = pad(minutes);
    fields.seconds.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
})();
