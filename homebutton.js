// ✅ Tool Xeno Universal Floating Home Button (Final Version)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("a");
  btn.href = "/index.html";
  btn.className = "toolxeno-home-button";
  btn.setAttribute("aria-label", "Go to Tool Xeno Home");
  btn.innerHTML = `<i class="fas fa-home"></i><span>Home</span>`;
  document.body.appendChild(btn);

  const style = document.createElement("style");
  style.textContent = `
    .toolxeno-home-button {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 999999;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: 50px;
      background: linear-gradient(135deg,#667eea 0%,#764ba2 100%);
      color: #fff;
      font-family: 'Inter',sans-serif;
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
