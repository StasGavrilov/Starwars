import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

import CharacterInfo from '../src/cards/CharacterInfo';
import Planet from '../src/cards/Planet';
import Vehicles from '../src/cards/Vehicles';

import { ICharacter } from '../src/interfaces/characters';

const currentCharacterName = 'https://swapi.dev/api/people/?search='

const CharacterPage = () => {
    const router = useRouter()
    const [character, setCharacter] = useState<ICharacter | any>({}) // ?
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
            <h1>{character.name}</h1>

            <div className='cards-container'>
                <CharacterInfo character={character} />
                <Planet character={character} />
                <Vehicles character={character} />
            </div>
        </>
    )
}

export default CharacterPage