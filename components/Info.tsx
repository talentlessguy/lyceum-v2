import React, { ReactNode } from 'react'

export const Info = ({ summary, children }: { summary: string; children: ReactNode }) => (
  <details>
    <summary>{summary}</summary>
    {children}
  </details>
)
