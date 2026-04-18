const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

function mountNetworkBackdrop() {
  if (document.querySelector(".network-bg")) {
    return;
  }

  const bg = document.createElement("div");
  bg.className = "network-bg";
  bg.setAttribute("aria-hidden", "true");
  bg.innerHTML = `
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" role="presentation">
      <defs>
        <linearGradient id="netLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#7db6d8" />
          <stop offset="100%" stop-color="#ef8354" />
        </linearGradient>
      </defs>

      <g class="net-lines">
        <path d="M720 430 L420 280" />
        <path d="M720 430 L420 580" />
        <path d="M720 430 L1020 280" />
        <path d="M720 430 L1020 580" />
        <path d="M420 280 L420 580" />
        <path d="M1020 280 L1020 580" />
        <path d="M420 280 L1020 280" />
        <path d="M420 580 L1020 580" />
        <path d="M300 430 L420 280" />
        <path d="M300 430 L420 580" />
        <path d="M1140 430 L1020 280" />
        <path d="M1140 430 L1020 580" />
      </g>

      <g class="net-node net-node-core" transform="translate(720 430)">
        <circle r="68"></circle>
        <text x="0" y="8">DES</text>
      </g>

      <g class="net-node" transform="translate(420 280)">
        <circle r="34"></circle>
        <text x="0" y="6">Tech Solutions</text>
      </g>
      <g class="net-node" transform="translate(420 580)">
        <circle r="34"></circle>
        <text x="0" y="6">Skills</text>
      </g>
      <g class="net-node" transform="translate(1020 280)">
        <circle r="34"></circle>
        <text x="0" y="6">Schools</text>
      </g>
      <g class="net-node" transform="translate(1020 580)">
        <circle r="34"></circle>
        <text x="0" y="6">Colleges</text>
      </g>
      <g class="net-node" transform="translate(300 430)">
        <circle r="34"></circle>
        <text x="0" y="6">Companies</text>
      </g>
      <g class="net-node" transform="translate(1140 430)">
        <circle r="34"></circle>
        <text x="0" y="6">Decision Makers</text>
      </g>
    </svg>
  `;

  document.body.prepend(bg);
}

mountNetworkBackdrop();
