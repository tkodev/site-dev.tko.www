import React from 'react'
import { Box } from '@mui/material'
import { makeSx } from '@/queries'

type ExampleProps = {
  //
}

const useSx = makeSx<ExampleProps>((props, theme) => {
  return {
    root: {
      color: 'red'
    }
  }
})

const Example: React.FC<ExampleProps> = (props) => {
  const { children } = props
  const sx = useSx(props)

  return (
    <Box sx={sx.root}>
      example
      {children}
    </Box>
  )
}

export { Example }
