function Board({children, alpha}) {
  return (
    <div 
    onAuxClick={(e) => {
      e.preventDefault()
    }}
    className="Board">
      { children }
      <div className="absolute bottom">
        { alpha.map((a, x) => (
          <p
          style={{
            transform: `translateX(calc(62.5px * ${x - 1}))`
          }}
          >{ a }</p>
        )) }
      </div>
      <div className="absolute bottom top">
        { alpha.map((a, x) => (
          <p
          style={{
            transform: `translateX(calc(62.5px * ${x - 1}))`
          }}
          >{ a }</p>
        )) }
      </div>
      <div className="absolute left">
        { alpha.map((a, i) => (
          <p
          style={{
            transform: `translateY(calc(62.5px * ${i - 1}))`
          }}
          >{ i + 1 }</p>
        )) }
      </div>
      <div className="absolute right">
        { alpha.map((a, i) => (
          <p
          style={{
            transform: `translateY(calc(62.5px * ${i - 1}))`
          }}
          >{ i + 1 }</p>
        )) }
      </div>
    </div>
  );
}

export default Board;
