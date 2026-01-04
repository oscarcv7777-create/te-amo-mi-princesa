// Corazones flotantes (ligero, efectivo y “cute” sin sobrecargar)
const container = document.getElementById("floating-hearts");

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "💖" : "💗";

  const left = Math.random() * 100;      // vw
  const size = 14 + Math.random() * 22;  // px
  const duration = 4 + Math.random() * 4; // s
  const drift = (Math.random() * 40) - 20; // px

  heart.style.left = `${left}vw`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.setProperty("--drift", `${drift}px`);

  container.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

const style = document.createElement("style");
style.textContent = `
  #floating-hearts{
    position:fixed;
    inset:0;
    pointer-events:none;
    overflow:hidden;
    z-index:1;
  }
  .float-heart{
    position:absolute;
    bottom:-40px;
    opacity:.95;
    filter: drop-shadow(0 10px 18px rgba(0,0,0,.25));
    animation-name: floatUp;
    animation-timing-function: ease-in;
  }
  @keyframes floatUp{
    from{ transform: translate(0, 0); opacity: 0; }
    10%{ opacity: .95; }
    to{ transform: translate(var(--drift), -110vh); opacity: 0; }
  }
`;
document.head.appendChild(style);

// ritmo de corazones (ajústalo si quieres más/menos “drama”)
setInterval(spawnHeart, 250);
