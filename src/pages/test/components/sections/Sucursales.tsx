import type React from "react"
import { useState } from "react"
import { IonList, IonItem, IonLabel } from "@ionic/react"
import { Map, Marker } from "pigeon-maps"

interface Sucursal {
  nombre: string
  direccion: string
  coordenadas: [number, number]
}

const Sucursales: React.FC = () => {
  const sucursales: Sucursal[] = [
    { nombre: "Mayoreo", direccion: "Calle Principal 123", coordenadas: [32.099733119103604, -116.5656031728404] },
    { nombre: "Valle de guadalupe", direccion: "Avenida Norte 456", coordenadas: [32.0947939, -116.5735554] },
    { nombre: "Valle de las palmas", direccion: "Boulevard Sur 789", coordenadas: [32.36670812592066, -116.61484440041006] },
    { nombre: "Testerazo", direccion: "Boulevard Sur 789", coordenadas: [32.295697914465485, -116.53331677806355] },
  ]

  const [center, setCenter] = useState<[number, number]>([32.25, -116.58])
  const [zoom, setZoom] = useState(10.5)

  const handleSucursalClick = (coordenadas: [number, number]) => {
    setCenter(coordenadas)
    setZoom(15)
  }

  const handleClear = () => {
    setCenter([32.25, -116.58])
    setZoom(10.5)
  }
  return (
    <section className="p-6 h-full flex flex-col gap-6">
      <div className="w-full md:h-auto rounded-lg overflow-hidden shadow-lg">
        <Map
          height={400}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center)
            setZoom(zoom)
          }}
        >
          {sucursales.map((sucursal, index) => (
            <Marker
              key={index}
              width={50}
              anchor={sucursal.coordenadas}
              color={center === sucursal.coordenadas ? "violet" : "purple"}
            />
          ))}
        </Map>
      </div>
      <IonList className="w-full p-4">
        {sucursales.map((sucursal, index) => (
          <IonItem
            key={index}
            className="py-3 cursor-pointer transition-colors duration-300"
            onClick={() => handleSucursalClick(sucursal.coordenadas)}
          >
            <IonLabel>
              <h2 className="font-semibold text-purple-800">{sucursal.nombre}</h2>
              <p className="text-sm md:text-base text-gray-600">{sucursal.direccion}</p>
            </IonLabel>
          </IonItem>
        ))}
        <IonItem
          className="cursor-pointer transition-colors duration-300"
          onClick={handleClear}>
          <IonLabel>
            <h2 className="font-semibold text-purple-600">Ver todas las sucursales</h2>
          </IonLabel>
        </IonItem>
      </IonList>
    </section>
  )
}

export default Sucursales
