import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'

import { ICharacter } from '../interfaces/characters';

const CharacterInfo = ({ character }: any) => { // ?
    return (
        <>
            <Card className="card" variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Character Description
                    </Typography>

                    <p className='char-stat'>Height: <span className='char-stat-span'>{character.height}</span></p>
                    <p className='char-stat'>Mass: <span className='char-stat-span'>{character.mass}</span></p>
                    <p className='char-stat'>Hair: <span className='char-stat-span'>{character.hair_color}</span></p>
                    <p className='char-stat'>Skin: <span className='char-stat-span'>{character.skin_color}</span></p>
                    <p className='char-stat'>Birth: <span className='char-stat-span'>{character.birth_year}</span></p>
                    <p className='char-stat'>Gender: <span className='char-stat-span'>{character.gender}</span></p>
                </CardContent>
            </Card>
        </>
    )
}

export default CharacterInfo