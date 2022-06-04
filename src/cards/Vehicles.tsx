import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios';

import { Planets } from '../interfaces/planets';

const Vehicles = ({ character }: any) => {
    const [vehicles, setVehicles] = useState<any>({})

    useEffect(() => { }, [])

    return (
        <Card className="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Vehicle
                </Typography>

                <p className='char-stat'>Name: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Model: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Created: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Price: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Max speed: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Crew: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Passengers: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Class: <span className='char-stat-span'></span></p>
            </CardContent>
        </Card>
    )
}

export default Vehicles

// {vehicles.name}{vehicles.model}{vehicles.created}{vehicles.cost_in_credits}{vehicles.crew}{vehicles.max_atmosphering_speed}{vehicles.passengers}{vehicles.vehicle_class}