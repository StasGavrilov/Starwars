import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios';

import { Starship } from '../interfaces/starship';

const Starships = ({ character }: any) => {
    const [starship, setStarship] = useState<any>({})

    useEffect(() => {
        if (character.starships && character.starships.length > 0) {
            axios.get(starship).then(response => {
                setStarship(response.data)
            })
        }
    }, [character.starships])

    if (starship === null) return ''

    return (
        <>
            <Card className="card" variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Starship
                    </Typography>

                    <p className='char-stat'>Name: <span className='char-stat-span'>{starship.name}</span></p>
                    <p className='char-stat'>Model: <span className='char-stat-span'>{starship.model}</span></p>
                    <p className='char-stat'>Created: <span className='char-stat-span'>{starship.created}</span></p>
                    <p className='char-stat'>Price-in-credits: <span className='char-stat-span'>{starship.cost_in_credits}</span></p>
                    <p className='char-stat'>Max speed: <span className='char-stat-span'>{starship.max_atmosphering_speed}</span></p>
                    <p className='char-stat'>Crew: <span className='char-stat-span'>{starship.crew}</span></p>
                    <p className='char-stat'>Passengers: <span className='char-stat-span'>{starship.passengers}</span></p>
                    <p className='char-stat'>Class: <span className='char-stat-span'>{starship.starship_class}</span></p>
                </CardContent>
            </Card>
        </>
    )
}

export default Starships;