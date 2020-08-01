import { Controller } from "stimulus"

export default class extends Controller {

    static targets = ["visible", "invisible"];
    
    connect() {
        if(this.hasVisibleTarget && this.hasInvisibleTarget){
            this.visibleTarget.innerHTML = this.visibleTarget.innerHTML + 
            ` <div class="additional-text stimulus-content">Text added by stimulus connect in visible div</div>`;
        
            this.invisibleTarget.innerHTML = this.invisibleTarget.innerHTML + 
            ' <div class="additional-text stimulus-content">Text added by stimulus connect in invisible div</div>';
            
            this.invisibleTarget.classList.add("hidden");
        }
    }

    toggle() {
        if(this.visibleTarget.classList.contains("hidden")) {
            this.visibleTarget.classList.remove("hidden");
            this.invisibleTarget.classList.add("hidden");
        } else {
            this.invisibleTarget.classList.remove("hidden");
            this.visibleTarget.classList.add("hidden");
        }
    }
}