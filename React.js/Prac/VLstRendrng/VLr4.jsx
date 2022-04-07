import React from 'react'

function VLr4() {
    const games = [
        {
            GameName : 'Cricket',
            Players : 11
        },
        {
            GameName : 'Carroms',
            Players : 4
        },
        {
            GameName : 'Chess',
            Players : 2
        }
    ]
    const gamelist = games.map(game => <h2>For {game.GameName} :- {game.Players} PLayers</h2>)
  return <div>{gamelist}</div>
}

export default VLr4