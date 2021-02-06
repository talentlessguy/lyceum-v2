import React, { ReactChildren, ReactNode } from 'react'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

type GridProps = {
  children: ReactNode
  columns?: number
}

const Grid = ({ children, columns = 2 }: GridProps) => (
  <ResponsiveMasonry
    columnsCountBreakPoints={{
      1400: 1,
      1450: 2
    }}
  >
    <Masonry gutter="3rem" columnsCount={columns}>
      {children}
    </Masonry>
  </ResponsiveMasonry>
)

export default Grid
