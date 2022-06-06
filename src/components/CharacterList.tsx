import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { List, ListItem, ListItemButton, Pagination } from '@mui/material'
import Link from 'next/link'

import { ICharacter } from '../interfaces/characters'
import Loading from './Loading'

const DATA_BASE = 'https://swapi.dev/api/people/'

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[] | []>([])
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)

    useEffect(() => {
        axios.get(DATA_BASE + `?page=${page}`).then(response => {
            setCharacters(response.data.results)
            const pageCount = Math.ceil(response.data.count / 10)
            setPageQty(pageCount)
        })
    }, [page])

    const decode = (str: string) => {
        return str.replace("%20", "-")
    }

    return (
        <>
            <h1 className='title'>Starwars</h1>

            {characters.length === 0 ? <Loading />
                :
                <div className='list-container'>
                    <List>
                        {characters.map((character, index) => (
                            <ListItem key={index} sx={{ justifyContent: 'center' }}>
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

            {pageQty > 0 ? <Pagination
                count={pageQty}
                page={page}
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
                className='page-nav'
            /> : null}
        </>
    )
}

export default CharacterList