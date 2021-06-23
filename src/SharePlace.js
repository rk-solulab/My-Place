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
      navigator.geolocation.getCurrentPosition(
        (successResult) => {
            const coordinates = {
                latitide : successResult.coords.latitude,
                longitude: successResult.coords.longitude
            };
            console.log(coordinates);
        },
        (error) => {
            alert('Could not locate your location please enter address manually')
        }
      );
    }
  
    submitFormButtonHandler() {
        console.log("Hello")
    }
  }
  //new PlaceFinder() : this is also sufficient to call the constructor of the function
  const instantiatingPlaceFinderFunction = new PlaceFinder();