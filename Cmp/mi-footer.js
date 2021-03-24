class MiFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = /* html */
      `Copyright &copy; 2021 G`;
  }
}
customElements.define("mi-footer", MiFooter);
