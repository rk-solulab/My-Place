export class Modal {
    constructor(contentID, fallbacktext) {
        this.fallbacktext = fallbacktext;
        this.contentTemplateEl = document.getElementById(contentID);
        this.modalTemplateEl = document.getElementById('modal-template');

    }
    
    show(){
        if ('content' in document.createElement('template')){
            const modalElements = document.importNode(this.modalTemplateEl.content, true);
            // we might have used const modalElement but then we won't be able to use this in hide function so we used this keyword
            this.modalElement = modalElements.querySelector('.modal');
            this.backDropElement = modalElements.querySelector('.backdrop');
            const contentElement = document.importNode(
                this.contentTemplateEl.content,
                true
            );

            this.modalElement.appendChild(contentElement);

            document.body.insertAdjacentElement('afterbegin', this.modalElement);
            document.body.insertAdjacentElement('afterbegin', this.backDropElement);

        }else {
            alert(this.fallbacktext);
        }
    }
    
    hide(){
        if (this.modalElement){
            document.body.removeChild(this.modalElement); // this.modalElement.remove()
            document.body.removeChild(this.backDropElement);
            this.modalElement = null;
            this.backDropElement = null;
        }
    }
}