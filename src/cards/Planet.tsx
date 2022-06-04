import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios';

import { Planets } from '../interfaces/planets';

const Planet = ({ character }: any) => { // ?
    const [planet, setPlanet] = useState<any>({})

    if (character === null) return '' // ?

    useEffect(() => {
        if (character.homeworld) {
            axios.get(character.homeworld).then(response => setPlanet(response.data))
        }
    }, [character.homeworld])

    return (
        <Card className="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Home Planet
                </Typography>

                <p className='char-stat'>Name: <span className='char-stat-span'>{planet.name}</span></p>
                <p className='char-stat'>Created: <span className='char-stat-span'>{planet.created}</span></p>
                <p className='char-stat'>Population: <span className='char-stat-span'>{planet.population}</span></p>
                <p className='char-stat'>Gravity: <span className='char-stat-span'>{planet.gravity}</span></p>
                <p className='char-stat'>Terrain: <span className='char-stat-span'>{planet.terrain}</span></p>
                <p className='char-stat'>Climate: <span className='char-stat-span'>{planet.climate}</span></p>
            </CardContent>
        </Card>
    )
}

export default Planet