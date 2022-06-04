import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

import { ICharacter } from '../src/interfaces/characters';

const currentCharacterName = 'https://swapi.dev/api/people/?search='

const CharacterPage = () => {
    const router = useRouter()
    const [character, setCharacter] = useState<any>({})

    useEffect(() => {
        if (router.isReady) {
            axios.get(currentCharacterName + router.query.name)
                .then(response => {
                    setCharacter(response.data.results[0])
                })
        }
    }, [router.isReady])

    console.log(character)

    return (
        <div>
            hello {character.name}
        </div>
    )
}

export default CharacterPage