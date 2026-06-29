function loadHeader() {
    const header = document.querySelector("#site-header");

    header.innerHTML = `<header class="site-header">
  <nav class="site-nav" aria-label="Main navigation">

<button class="mobile-menu-btn" type="button" aria-label="Open navigation menu">
  ☰
</button>

    <ul class="nav-menu">
      <li class="nav-item">
        <a href="/index.html" class="nav-link">Home</a>
      </li>

      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle" type="button">
          About
        </button>

        <ul class="dropdown-menu">
          <li>
            <a href="/about/personal.html" class="dropdown-link">Personal</a>
          </li>
          <li>
            <a href="/about/professional.html" class="dropdown-link">Professional</a>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle" type="button">
          Projects
        </button>

        <ul class="dropdown-menu">
          <li>
            <span class="dropdown-link disabled-link">Coming Soon</span>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/about/contact.html">Contact </a>
      </li>
    </ul>
  </nav>
</header>`
}

loadHeader();