import React from 'react';
import '../css/Map.css'
import { Map, Marker } from "pigeon-maps"

function AppMap() {
    return (
        <>
            <div className="map_main">
                <Map height={500} width={1500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>
            </div>
        </>
    )
}

export default AppMap;