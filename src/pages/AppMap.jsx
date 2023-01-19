import React from 'react';
import { useState } from 'react';
import '../css/Map.css'
import { geoCentroid } from "d3-geo";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation
} from "react-simple-maps";
import { Col, Row, Slider } from 'antd';
import allStates_2020 from "../assets/allstates_2020.json";
import allStates_2016 from "../assets/allStates_2016.json";
import allStates_2012 from "../assets/allStates_2012.json";

function AppMap() {
    const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
    const offsets = {
        VT: [50, -8],
        NH: [34, 2],
        MA: [30, -1],
        RI: [28, 2],
        CT: [35, 10],
        NJ: [34, 1],
        DE: [33, 0],
        MD: [47, 10],
        DC: [49, 21]
    };
    const [year, setYear] = useState("2020");

    function VoteMap(states) {
        const { allStates } = states;
        return (
            <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                        <>
                            {geographies.map(geo => {
                                const cur = allStates.find(s => s.val === geo.id);
                                const centroid = geoCentroid(geo);

                                <Marker coordinates={centroid}>
                                    <text y="2" fontSize={14} textAnchor="middle">
                                        {cur.id}
                                    </text>
                                </Marker>

                                return (
                                    Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                        <Geography
                                            key={geo.rsmKey}
                                            stroke="#fff"
                                            geography={geo}
                                            fill={cur.color}
                                        />) : (
                                        <Geography
                                            key={geo.rsmKey}
                                            stroke="#fff"
                                            geography={geo}
                                            fill={cur.color}
                                        >
                                            <Annotation
                                                subject={centroid}
                                                dx={offsets[cur.id][0]}
                                                dy={offsets[cur.id][1]}
                                            >
                                            </Annotation>
                                        </Geography>
                                    ))
                            })}
                            {geographies.map(geo => {
                                const centroid = geoCentroid(geo);
                                const cur = allStates.find(s => s.val === geo.id);
                                return (
                                    <g key={geo.rsmKey + "-name"}>
                                        {cur &&
                                            centroid[0] > -160 &&
                                            centroid[0] < -67 &&
                                            (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                                <Marker coordinates={centroid}>
                                                    <text y="2" fontSize={14} textAnchor="middle">
                                                        {cur.id}
                                                    </text>
                                                </Marker>) : (
                                                <Annotation
                                                    subject={centroid}
                                                    dx={offsets[cur.id][0]}
                                                    dy={offsets[cur.id][1]}
                                                >
                                                    <text x={4} fontSize={14} alignmentBaseline="middle">
                                                        {cur.id}
                                                    </text>
                                                </Annotation>
                                            ))}
                                    </g>
                                )
                            })}
                        </>
                    )}
                </Geographies>
            </ComposableMap>
        )
    }

    return (
        <>
            <div className='main'>
                <h1>US Election Map {year}</h1>
                {year === "2016" && <VoteMap allStates={allStates_2016} />}
                {year === "2020" && <VoteMap allStates={allStates_2020} />}
                {year === "2012" && <VoteMap allStates={allStates_2012} />}
                <div className='legend'>
                    <div className='blue'><p className='legend_text'> Democrats</p></div>
                    <div className='red'><p className='legend_text'>Republicans</p></div>
                    <div className='grey'><p className='legend_text'>Equal</p></div>
                </div>
                <div className='year_container'>
                    <div className='year'>
                        <Row style={{ justifyContent: "space-between" }}>
                            <Col span={12}>
                                <Slider
                                    min={2012}
                                    max={2020}
                                    value={parseInt(year)}
                                    step={4}
                                    dots
                                    onChange={(e) => { setYear(e.toString()); }}
                                    style={{ width: "30vw" }}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppMap;