import { Controller } from "stimulus"
// Controller
export default class extends Controller {
    static targets = ["quote"]; // Target

	// kinda like an initialize to a DOM element
    connect() {
        if(this.hasQuoteTarget) {
            this.quoteTarget.innerHTML = `Hey ${this.data.get("fighter")}`;
        }
    }

	// Action
    joinUs() {
        this.quoteTarget.innerHTML = `Hey ${this.data.get("fighter")}`;
        var sortingHat = Math.random() >= 0.5;

        if(sortingHat) {
            this.quoteTarget.innerHTML = 
                this.quoteTarget.innerHTML + 
                ", You belong to the Light side, May the force be with you!"
        } else {
            this.quoteTarget.innerHTML = 
                this.quoteTarget.innerHTML + 
                ", You belong to the Dark side, Power! Ultimate power!"
        }
    }
}