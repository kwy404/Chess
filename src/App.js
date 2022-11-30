import React, {useState} from "react";
import Board from './components/Board';
import Peace from './components/Peace';
import './App.css';

const moveSelf = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/move-self.webm');
const capture = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/capture.webm');
const ilegal = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/illegal.webm');

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

  const [boardPeaces, setBoardPeaces] = useState([
    [8,9,10,11,12,10,9,8],
    [7,7,0,7,7,7,7,7],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [7,0,7,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [2,3,4,5,6,4,3,2]
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

  return (
    <div className="App">
      <Board alpha={alpha}>
        {boardPeaces.map((pace,y) => (
          pace.map((peace, x) => (
            <div key={x + 1+':'+y + 1}>
              <Peace
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
              />
            </div>
          ))
        ))}
        {/* { highlight } */}
        { peaceFocus && <div 
        style={{
          transform: `translateX(calc(62.5px * ${peaceFocus.split(':')[0] - 1})) translateY(calc(62.5px * ${peaceFocus.split(':')[1] - 1}))`
        }}
        className={`highlight square-${peaceFocus.split(':')[0]}${peaceFocus.split(':')[1]}  peace`}>

        </div> }
        {/* { hint } */}
        { hints.map((hint => (
          <>
          { !hint.canKill ?
            <div
            key={`${hint.y}:${hint.x}`}
            style={{
              transform: `translateX(calc(62.5px * ${hint.x - 1})) translateY(calc(62.5px * ${hint.y - 1}))`
            }}
            className={`hint peace square-${hint.y}${hint.x}`}>
            </div> : <div
            key={`${hint.y}:${hint.x}`}
            style={{
              transform: `translateX(calc(62.5px * ${hint.x - 1})) translateY(calc(62.5px * ${hint.y - 1}))`
            }}
            className={`hint capture-hint peace square-${hint.y}${hint.x}`}>

            </div> }
          </>
        ))) }
      </Board>
    </div>
  );
}

export default App;