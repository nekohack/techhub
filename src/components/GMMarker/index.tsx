import React from 'react'
import GoogleMapReact from 'google-map-react'

const key = process.env.GATSBY_GOOGLE_MAP_KEY

const location: {
    lat: number
    lng: number
} = {
    lat: 35.0031955,
    lng: 135.750314,
}

const GMMarker = () => (
    <div style={{ width: '100%', height: '50vh' }}>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: key,
            }}
            defaultCenter={{
                lat: location.lat,
                lng: location.lng,
            }}
            defaultZoom={13}
        />
    </div>
)

export default GMMarker
