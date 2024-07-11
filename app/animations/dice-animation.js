class DiceAnimation {
  static setDomElements() {
    this.dice = document.querySelector(".app-dice");
    this.randomButton = document.querySelector(".app-button");
  }
  static triggerDiceAnimation() {
    this.setDomElements();

    const deg = ["rotate(0deg)", "rotate(180deg)"];

    // After the hover of the dice button, its animation will be triggered
    this.randomButton.addEventListener("mouseover", () => {
      this.dice.style.transform = deg[1];
    });

    this.randomButton.addEventListener("mouseout", () => {
      this.dice.style.transform = deg[0];
    });
  }
}

export default DiceAnimation;
