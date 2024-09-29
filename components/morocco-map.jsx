"use client"

import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { Tooltip } from '@/components/ui/tooltip'
import { scaleLinear } from 'd3-scale'

const geoUrl = "/regions.json"


// Mock epidemiological data
const mockData = [
  { id: "06", name: "Casablanca-Settat", cases: 5000, recovered: 4500, deaths: 100 },
  { id: "04", name: "Rabat-Salé-Kénitra", cases: 3000, recovered: 2700, deaths: 60 },
  { id: "07", name: "Marrakech-Safi", cases: 2000, recovered: 1800, deaths: 40 },
  { id: "01", name: "Tanger-Tétouan-Al Hoceïma", cases: 1500, recovered: 1350, deaths: 30 },
  { id: "02", name: "Oriental", cases: 1000, recovered: 900, deaths: 20 },
  { id: "05", name: "Béni Mellal-Khénifra", cases: 800, recovered: 720, deaths: 16 },
  { id: "03", name: "Fès-Meknès", cases: 1200, recovered: 1080, deaths: 24 },
  { id: "08", name: "Drâa-Tafilalet", cases: 500, recovered: 450, deaths: 10 },
  { id: "09", name: "Souss-Massa", cases: 700, recovered: 630, deaths: 14 },
  { id: "10", name: "Guelmim-Oued Noun", cases: 300, recovered: 270, deaths: 6 },
  { id: "11", name: "Laâyoune-Sakia El Hamra", cases: 200, recovered: 180, deaths: 4 },
  { id: "12", name: "Dakhla-Oued Ed-Dahab", cases: 100, recovered: 90, deaths: 2 },
]

const colorScale = scaleLinear()
  .domain([0, 5000])
  .range(["#ffedea", "#ff5233"])

export default function MoroccoMap() {
  const [tooltipContent, setTooltipContent] = useState("")

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Morocco Epidemiological Map</h1>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 2000,
          center: [-7, 31]
        }}
        width={800}
        height={600}
        className="w-full h-auto"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const regionData = mockData.find(d => d.id === geo.id)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={regionData ? colorScale(regionData.cases) : "#F5F4F6"}
                    stroke="#D6D6DA"
                    onMouseEnter={() => {
                      if (regionData) {
                        setTooltipContent(`
                          <strong>${regionData.name}</strong><br/>
                          Cases: ${regionData.cases}<br/>
                          Recovered: ${regionData.recovered}<br/>
                          Deaths: ${regionData.deaths}
                        `)
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("")
                    }}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#F53" },
                      pressed: { outline: "none" }
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Tooltip content={tooltipContent} />
      <p className="text-sm text-gray-500 mt-4 text-center">
        Hover over regions to see detailed statistics. Colors indicate case intensity.
      </p>
    </div>
  )
}
