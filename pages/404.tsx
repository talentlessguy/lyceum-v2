import React from 'react'

const Page404 = () => (
  <div
    style={{
      display: 'flex',
      placeItems: 'center',
      placeContent: 'center',
      flexDirection: 'column',
      height: 'calc(100vh - 51px)'
    }}
  >
    <h1
      style={{
        fontSize: 'calc(6rem + 6vw)',
        fontFamily: '"Space Mono", "Fira Code", Consolas, monospace',
        margin: 0
      }}
    >
      404
    </h1>
    <p>Страница не найдена :(</p>
  </div>
)

export default Page404
