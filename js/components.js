class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header class="nav-bar">
        <img class="nav-bar-logo" src="../images/logos/circle.svg" alt="Circle logo">
        <nav class="nav-bar-links">
          <ul>
            <li><a href="../html/index.html">Home</a></li>
            <li><a href="../html/project.html">Projects</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
        <a class="blue-button" id="nav-bar-contact" href="../html/contact.">Contact us</a>
      </header>`
    }
}

customElements.define('nav-bar-component', Navbar);

class Footer extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `<footer>
      <img class="footer-logo" src="../images/logos/circle.svg" alt="Circle logo">
      <address>2972 Westheimer Rd. Santa Ana, Illinois 85486</address>
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
          <input type="text" placeholder="&#9993; Enter your email" name="email" id="mail">
          <input type="submit" value="Suscribe">
        </form>
      </section>`
  }
}

customElements.define('cta-section-component', CTASection);