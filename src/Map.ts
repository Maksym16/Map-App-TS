//Instructions to every other class
// on how they can be an argumment to "makeMarker"
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(same: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: same.location.lat,
        lng: same.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!',
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
