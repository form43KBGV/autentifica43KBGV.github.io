class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2021 Gutierrez Vargas Kevin Brayan`;
  }
}
customElements.define("mi-footer", MiFooter);
