/* ==========================================================================
   LegalEdge — mock test link config
   --------------------------------------------------------------------------
   Swap the placeholder URLs below with your real mock test links.
   Every "Start free test" button on the site reads from this file —
   update a link here once and it updates everywhere the test appears.
   ========================================================================== */

const MOCK_TEST_LINKS = {
  "clat-legal-reasoning-mock-01": "#REPLACE_WITH_CLAT_LEGAL_REASONING_MOCK_01_LINK",
  "ailet-logical-reasoning-sprint": "#REPLACE_WITH_AILET_LOGICAL_REASONING_SPRINT_LINK",
  "lsat-analytical-reasoning-set-01": "#REPLACE_WITH_LSAT_ANALYTICAL_REASONING_SET_01_LINK",
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-test-link]").forEach((el) => {
    const key = el.getAttribute("data-test-link");
    const url = MOCK_TEST_LINKS[key];
    if (!url) return;

    if (url.startsWith("#REPLACE")) {
      // Still a placeholder — keep it inert-looking but flag it in console
      // rather than silently 404ing when clicked.
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("This test link hasn't been added yet. Swap it in mock-links.js under the key: " + key);
      });
      return;
    }

    el.setAttribute("href", url);
    // Uncomment to open mock tests in a new tab:
    // el.setAttribute("target", "_blank");
    // el.setAttribute("rel", "noopener noreferrer");
  });
});
