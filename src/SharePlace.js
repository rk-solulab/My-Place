import { Modal } from './UI Components/Modal';

class PlaceFinder {
    constructor() {
      const getLocationForm = document.querySelector('form');
      const locateUserButton = document.getElementById('locate-btn');
      getLocationForm.addEventListener('submit', this.submitFormButtonHandler);
      locateUserButton.addEventListener('click', this.locateUserHandler);
    }
  
    locateUserHandler() {
        console.log("Hello")
      if (!navigator.geolocation) {
        alert("Location feature not supported in your browser");
        return;
      }

      const modal = new Modal('loading-modal-content', 'Loading location please wait');
      modal.show();
      navigator.geolocation.getCurrentPosition(
        (successResult) => {
          modal.hide();
            const coordinates = {
                latitide : successResult.coords.latitude,
                longitude: successResult.coords.longitude
            };
            console.log(coordinates);
        },
        (error) => {
          modal.hide()
            alert('Could not locate your location please enter address manually')
        }
      );
    }
  
    submitFormButtonHandler() {
        console.log("Hello th")
    }
  }
  //new PlaceFinder() : this is also sufficient to call the constructor of the function
  const instantiatingPlaceFinderFunction = new PlaceFinder();