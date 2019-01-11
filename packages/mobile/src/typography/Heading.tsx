import React, {FunctionComponent} from 'react'

import {Typo, Placeholder, Box} from '@qiwi/pijma-core'

export interface HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: '1' | '2' | '3' | '4'
  color?: 'default' | 'inverse'
  placeholder?: boolean
}

const HeadingSize: { [size in HeadingProps['size']]: number } = {
  1: 7,
  2: 6,
  3: 5,
  4: 4,
}

const HeadingHeight: { [size in HeadingProps['size']]: number } = {
  1: 8,
  2: 7,
  3: 6,
  4: 5,
}

const HeadingTag: { [size in HeadingProps['size']]: NonNullable<HeadingProps['tag']> } = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
}

const HeadingWeight: { [size in HeadingProps['size']]: number } = {
  1: 900,
  2: 900,
  3: 900,
  4: 700,
}

const placeholderOffset: { [size in HeadingProps['size']]: {top: number, bottom: number} } = {
  1: {top: 2, bottom: 1},
  2: {top: 2, bottom: 1},
  3: {top: 2, bottom: 1},
  4: {top: 1, bottom: 1},
}

const placeholderHeight: { [size in HeadingProps['size']]: number } = {
  1: 5,
  2: 4,
  3: 3,
  4: 3,
}

const HeadingColor: { [color in NonNullable<HeadingProps['color']>]: string } = {
  default: '#000',
  inverse: '#fff',
}

export const Heading: FunctionComponent<HeadingProps> = ({tag, size, color = 'default', placeholder, children}) => {
  if (placeholder) {
    const offset = placeholderOffset[size]
    return (
      <Box pt={offset.top} pb={offset.bottom}>
        <Placeholder
          width={50}
          height={placeholderHeight[size]}
          color={color === undefined ? undefined : HeadingColor[color]}
        />
      </Box>
    )
  }
  return (
    <Typo
      as={tag ? tag : HeadingTag[size]}
      display="block"
      size={HeadingSize[size]}
      height={HeadingHeight[size]}
      weight={HeadingWeight[size]}
      color={color === undefined ? undefined : HeadingColor[color]}
      children={children}
    />
  )
}

Heading.defaultProps = {
  color: 'default',
}
