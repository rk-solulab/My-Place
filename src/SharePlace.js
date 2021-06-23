class PlaceFinder {

    constructor() {
        const getLocationForm = document.querySelector('form');
        const submitFormButton = document.getElementById('locate-btn');
        getLocationForm.addEventListner('click', this.getLocationHandler);
        submitFormButton.addEventListener('submit', this.submitFormButtonHandler);
    }

    getLocationHandler() {
        
    }
    
    submitFormButtonHandler() {}

}