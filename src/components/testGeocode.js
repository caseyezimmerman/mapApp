import React, { Component } from 'react'
import Geocoder from 'react-native-geocoding';

Geocoder.setApiKey('AIzaSyCOaoP7KuO0wOQ9fiejMot0D57UsaIQqCI')

Geocoder.getFromLocation("Atlanta").then(
      json => {
        var location = json.results[0].geometry.location;
        alert(location.lat + ", " + location.lng);
      },
      error => {
        alert(error);
      }
    );