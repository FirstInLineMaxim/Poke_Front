import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './leaderboard.css'

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://poke-api-f2zt.onrender.com/leaderboard').then(data => setLeaderboard(data.data))
        axios.get('https://poke-api-f2zt.onrender.com/api/v1/pokemon').then(data => setData(data.data))
    }, [])
    function changeNumber(num) {
        if (num.toString().length === 1) {
            return `00` + num;
        } else if (num.toString().length === 2) {
            return "0" + num;
        } else if (num.toString().length === 3) {
            return num;
        }
    }
    function findPokemon(id) {
        if (data) {
            const found = data.find(ele => ele._id == id)
            if (found) {
                return { image: findImage(found), pokemonName: found.name.english }
            }
        }

    }
    function findImage(found) {
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${changeNumber(
            found.id
        )}.png`
    }

    return (
        <table className='HighScore'>
            <thead>
                <tr className='rows_flex'>
                    <th>Username</th>
                    <th>Pokemon</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody className='display_reverse'>
                {data ? leaderboard && leaderboard.map(function (ele, i) {
                    const { image, pokemonName } = findPokemon(ele.pokemon)
                    return (
                        <tr key={i} className='rows_flex'>
                            <td>{ele.username}</td>
                            <td><img className="leader_poke" src={image} alt={pokemonName} />{pokemonName}</td>
                            <td>{ele.score}</td>
                        </tr>)

                }) : <tr className='Center_Pokeball'><td className="loader_spinner"></td></tr>}
            </tbody>
        </table>
    )
}
