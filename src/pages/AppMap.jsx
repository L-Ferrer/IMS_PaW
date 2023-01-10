import React from 'react';
import '../css/Map.css'
import { Map, Marker, GeoJson } from "pigeon-maps"
import data from '../assets/states_20m.json'

const tmp = (
    <div className="map_main">
        <Map height={627} width={1536} defaultCenter={[38, -100]} defaultZoom={4.5}>
            <Marker width={50} anchor={[38, -100]} />
            <GeoJson
                data={data}
                styleCallback={(feature, hover) => {

                }}
            />
        </Map>
    </div>
)

function AppMap() {
    return ( 
        <>
            <a href="https://www.270towin.com/maps/2020-election-competitive-states"><img src="https://www.270towin.com/map-images/2020-election-competitive-states.png" width="800" /></a>
        </>
    )
}

export default AppMap;