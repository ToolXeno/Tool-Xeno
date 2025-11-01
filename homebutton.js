// ✅ Tool Xeno - Universal Floating Home Button (Auto-Working Final Version)
document.addEventListener("DOMContentLoaded", () => {
  // Load FontAwesome if missing
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement("link");
    fa.rel = "stylesheet";
    fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fa);
  }

  // Create the button
  const btn = document.createElement("a");
  btn.href = window.location.origin + "/index.html"; // works anywhere
  btn.className = "toolxeno-home-button";
  btn.setAttribute("aria-label", "Go to Tool Xeno Home");
  btn.innerHTML = `<i class="fas fa-home"></i><span>Home</span>`;
  document.body.appendChild(btn);

  // Add styling
  const style = document.createElement("style");
  style.textContent = `
    .toolxeno-home-button {
      position: fixed;
      bottom: 26px;
      right: 26px;
      z-index: 999999;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.15);
      box-shadow: 0 4px 20px rgba(102,126,234,0.4);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      -webkit-tap-highlight-color: transparent;
      transition: all .3s ease;
    }
    .toolxeno-home-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 32px rgba(102,126,234,0.55);
    }
    .toolxeno-home-button:active { transform: translateY(-1px); }
    .toolxeno-home-button i { font-size: 16px; line-height: 1; }
    .toolxeno-home-button span { line-height: 1; }

    /* Light Theme Support */
    body.light-theme .toolxeno-home-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 4px 18px rgba(102,126,234,0.3);
    }
    body.light-theme .toolxeno-home-button:hover {
      box-shadow: 0 8px 28px rgba(102,126,234,0.5);
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .toolxeno-home-button {
        bottom: 20px;
        right: 20px;
        padding: 10px 18px;
        font-size: 14px;
      }
    }

    /* Extra Small Devices: Icon Only */
    @media (max-width: 480px) {
      .toolxeno-home-button span { display: none; }
      .toolxeno-home-button {
        width: 52px;
        height: 52px;
        padding: 0;
        border-radius: 50%;
        justify-content: center;
      }
      .toolxeno-home-button i { font-size: 18px; }
    }
  `;
  document.head.appendChild(style);
});
