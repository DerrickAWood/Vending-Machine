export default class Snack {
  constructor(data) {
      this.title = data.title
  }

  get Template() {
      return /*html*/ `
      <h3>${this.title}</h3>
      `
  }
}