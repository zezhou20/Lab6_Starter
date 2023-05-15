// RecipeCard.js

class RecipeCard extends HTMLElement {
  constructor() {
    super();

    // A1. Attach the shadow DOM to this Web Component (leave the mode open)
    this.attachShadow({ mode: 'open' });

    // A2. Create an <article> element
    this.article = document.createElement('article');

    // A3. Create a style element
    this.styleEl = document.createElement('style');

    // A4. Insert all of the styles from cardTemplate.html into the <style> element
    this.styleEl.textContent = `...` // Here you need to insert styles from the cardTemplate.html file.

    // A5. Append the <style> and <article> elements to the Shadow DOM
    this.shadowRoot.append(this.styleEl, this.article);
  }

  set data(data) {
    if (!data) return;

    // A6. Select the <article>
    let article = this.shadowRoot.querySelector('article');

    // A7. Set the contents of the <article>
    article.innerHTML = `
      <img src="${data.imgSrc}" alt="${data.imgAlt}">
      <p class="title">
        <a href="${data.titleLnk}">${data.titleTxt}</a>
      </p>
      <p class="organization">${data.organization}</p>
      <div class="rating">
        <span>${data.rating}</span>
        <img src="/assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
        <span>(${data.numRatings})</span>
      </div>
      <time>${data.lengthTime}</time>
      <p class="ingredients">
        ${data.ingredients}
      </p>
    `;
  }
}

// A8. Define the Class as a customElement
customElements.define('recipe-card', RecipeCard);
