class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header class="nav-bar">
        <a href="../html/index.html">
          <img class="nav-bar-logo" src="../images/logos/circle.svg" alt="Circle logo">
        </a>
        <div>
          <div id="burger-menu" onclick="displayMenu()">
            <span>Menu</span>
          </div>
          <nav class="nav-bar-links hidden">
            <ul>
              <li><a href="../html/index.html">Home</a></li>
              <li><a href="../html/project.html">Projects</a></li>
              <li><a href="../html/index.html#">Services</a></li>
            </ul>
          </nav>
        </div>
        <a class="blue-button" id="nav-bar-contact" href="../html/contact.html">Contact us</a>
      </header>`
    }
}

customElements.define('nav-bar-component', Navbar);

class Footer extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `<footer class="footer">
      <div>
        <img class="footer-logo" src="../images/logos/circle.svg" alt="Circle logo">
        <address>2972 Westheimer Rd. Santa Ana, Illinois 85486</address>
      </div>
      <nav>
        <ul>
          <li><a href="#">Team</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </nav>
    </footer>`
  }
}

customElements.define('footer-component', Footer);


class CTASection extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `<section class="section" id="CTA-section">
        <h2>Do you have any questions?</h2>
        <p>Let us help you!</p>
        <form>
          <input type="email" required placeholder="&#9993; Enter your email" name="email" id="mail">
          <input type="submit" value="Suscribe" class="blue-button">
        </form>
      </section>`
  }
}

customElements.define('cta-section-component', CTASection);