import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios';

import { IVehicle } from '../interfaces/vehicle';
import { ICharacter } from '../interfaces/characters';

export interface IVehiclesProps {
    character: ICharacter
}

const Vehicles = ({ character }: IVehiclesProps) => {
    const [vehicle, setVehicle] = useState<IVehicle | null>(null)

    useEffect(() => {
        if (character.vehicles && character.vehicles.length > 0) {
            axios.get(character.vehicles[0]).then(response => {
                setVehicle(response.data)
            })
        }
    }, [character.vehicles])

    if (vehicle === null) return ''

    return (
        <>
            <Card className="card" variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Vehicle
                    </Typography>

                    <p className='char-stat'>Name: <span className='char-stat-span'>{vehicle.name}</span></p>
                    <p className='char-stat'>Model: <span className='char-stat-span'>{vehicle.model}</span></p>
                    <p className='char-stat'>Created: <span className='char-stat-span'>{vehicle.created}</span></p>
                    <p className='char-stat'>Price: <span className='char-stat-span'>{vehicle.cost_in_credits}</span></p>
                    <p className='char-stat'>Max speed: <span className='char-stat-span'>{vehicle.max_atmosphering_speed}</span></p>
                    <p className='char-stat'>Crew: <span className='char-stat-span'>{vehicle.crew}</span></p>
                    <p className='char-stat'>Passengers: <span className='char-stat-span'>{vehicle.passengers}</span></p>
                    <p className='char-stat'>Class: <span className='char-stat-span'>{vehicle.vehicle_class}</span></p>
                </CardContent>
            </Card>
        </>
    )
}
export default Vehicles