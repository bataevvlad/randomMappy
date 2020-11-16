// Instructions to other classes,
// on how to can be an argument to addMarker;
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    markerContent(): string;
}

export class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps
            .Map(document.getElementById(divId), {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                },
            });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        })
    }

    createPath(user, company: Mappable): void {
        const pathMap = new google.maps.Polyline({
            path: [user.location, company.location],
            geodesic: true,
            strokeColor: "#0066ff",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        })

        pathMap.setMap(this.googleMap);
    }
}
