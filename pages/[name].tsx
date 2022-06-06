import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button } from '@mui/material'

import CharacterInfo from '../src/cards/CharacterInfo';
import Planet from '../src/cards/Planet';
import Vehicles from '../src/cards/Vehicles';
import Starships from '../src/cards/Starships';

import { ICharacter } from '../src/interfaces/characters';

const currentCharacterName = 'https://swapi.dev/api/people/?search='

const CharacterPage = () => {
    const router = useRouter()
    const [character, setCharacter] = useState<ICharacter | any>({})

    useEffect(() => {
        if (router.isReady) {
            axios.get(currentCharacterName + router.query.name)
                .then(response => {
                    setCharacter(response.data.results[0])
                })
        }
    }, [router.isReady])

    return (
        <>
            <h1 className='char-name'>{character.name}</h1>

            <div className='cards-container'>
                <CharacterInfo character={character} />
                <Planet character={character} />
                <Vehicles character={character} />
                <Starships character={character} />
            </div>
        </>
    )
}

export default CharacterPage