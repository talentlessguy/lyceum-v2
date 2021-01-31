import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

const ExternalLink = (props: DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
  <a rel="noreferrer" target="_blank" {...props}>
    {props.children}
  </a>
)

export default ExternalLink
