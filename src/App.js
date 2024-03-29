import React, {useState, useEffect} from "react";
import Board from './components/Board';
import Peace from './components/Peace';

import './App.css';

const moveSelf = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/move-self.webm');
const capture = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/capture.webm');
const ilegal = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/illegal.webm');
const gameStart = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/game-start.webm');
const gameEnd = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/game-end.webm');
const promovateAudio = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/promote.webm')

//p = peao
//r = torre
//n = cavalo
//b = bispo
//q = rainha
//k = rei

//w = branco
//b = preto

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function App() {
  const [peaceFocus, setPeaceFocus] = useState(null);
  const [hints, setHints] = useState([]);
  const [moves, setMoves] = useState(0);
  const [moveList, setMoveList] = useState([]);
  const [hightLightRed, setHightlightRed] = useState([])
  const [dragStop, setDragStop] = useState(false)

  const [boardPeaces, setBoardPeaces] = useState([
    [8,9,10,12,11,10,9,8],
    [7,7,7,7,7,7,7,7],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [2,3,4,6,5,4,3,2]
  ])

  const myPeaces = [1,2,3,4,5,6]
  
  const peaces = [
    '',
    'wp',
    'wr',
    'wn',
    'wb',
    'wq',
    'wk',
    'bp',
    'br',
    'bn',
    'bb',
    'bq',
    'bk'
  ]

  const newGame = () => {
    setBoardPeaces([
      [8,9,10,12,11,10,9,8],
      [7,7,7,7,7,7,7,7],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1],
      [2,3,4,6,5,4,3,2]
    ])
    gameEnd.play()
    setMoves(0)
    setHints([])
    setPeaceFocus(null)
  }

  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }, [])

  return (
    <div className="App">
      <Board alpha={alpha}>
        {boardPeaces.map((pace,y) => (
          pace.map((peace, x) => (
              <Peace
              key={x + 1+':'+y + 1}
              boardPeaces={boardPeaces}
              className={`peace square-${x + 1}${y + 1}`}
              blank={peace === 0}
              p={peaces[peace]}
              y={y + 1}
              x={x + 1}
              setBoardPeaces={setBoardPeaces}
              peaceFocus={peaceFocus}
              setPeaceFocus={setPeaceFocus}
              setHints={setHints}
              hints={hints}
              moveSelf={moveSelf}
              capture={capture}
              ilegal={ilegal}
              myPeaces={myPeaces}
              gameStart={gameStart}
              moves={moves}
              setMoves={setMoves}
              promovateAudio={promovateAudio}
              hightLightRed={hightLightRed}
              setHightlightRed={setHightlightRed}
              dragStop={dragStop}
              setDragStop={setDragStop}
              />
          ))
        ))}
        {/* { highlight } */}
        { peaceFocus && <div 
        style={{
          transform: `translateX(calc(62.5px * ${peaceFocus.split(':')[0] - 1})) translateY(calc(62.5px * ${peaceFocus.split(':')[1] - 1}))`
        }}
        className={`highlight square-${peaceFocus.split(':')[0]}${peaceFocus.split(':')[1]}  peace`}>

        </div> }
        {/* { highlight--red } */}
        { hightLightRed.map((hint => (
          <>
            <div
            key={`${hint.y}:${hint.x}`}
            style={{
              transform: `translateX(calc(62.5px * ${hint.x - 1})) translateY(calc(62.5px * ${hint.y - 1}))`
            }}
            className={`highlight highlight--red peace square-${hint.y}${hint.x}`}></div>
          </>
        ))) }
        {/* { hint } */}
        { hints.map((hint => hint.x > 0 && hint.x <= 8 && hint.y <= 8 && (
          <>
            <div
            key={`${hint.y}:${hint.x}`}
            style={{
              transform: `translateX(calc(62.5px * ${hint.x - 1})) translateY(calc(62.5px * ${hint.y - 1}))`
            }}
            className={`hint peace square-${hint.y}${hint.x}`}></div>
          </>
        ))) }
        <button
        onClick={() => {
          newGame()
        }}
        >Novo jogo</button> 
      </Board>
    </div>
  );
}

export default App;
