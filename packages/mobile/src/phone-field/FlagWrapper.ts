import {rgba} from 'polished'
import styled from '../../../core/src/styled'

const FlagWrapper = styled.div(() => ({
  position: 'absolute',
  top: 7,
  left: 0,
  width: 21,
  height: 15,
  cursor: 'pointer',
  '&:after': {
    content: '""',
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
    left: 0,
    width: 24,
    height: 16,
    border: [1, 'solid', rgba('#2F343A', 0.16)],
  },
}))

export default FlagWrapper
