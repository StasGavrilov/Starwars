import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { List, ListItem, ListItemButton } from '@mui/material'
import Link from 'next/link'

import { ICharacter } from '../interfaces/characters'
import Loading from './Loading'

const DATA_BASE = 'https://swapi.dev/api/people/'

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[] | []>([])

    useEffect(() => {
        axios.get(DATA_BASE).then(response => {
            setCharacters(response.data.results)
        })
    }, [])

    const decode = (str: string) => {
        return decodeURIComponent(str)
        // console.log(decode('hello%20stas'))
    } //TODO:

    return (
        <>
            <h1 className='title'>Starwars</h1>

            {characters.length === 0 ? <Loading />
                :
                <div>
                    <List>
                        {characters.map((character, index) => (
                            <ListItem key={index}>
                                <div>
                                    <Link href={`/${decode(character.name)}`}>
                                        <a className='link'>
                                            <ListItemButton>
                                                {character.name}
                                            </ListItemButton>
                                        </a>
                                    </Link>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
            }
        </>
    )
}

export default CharacterList