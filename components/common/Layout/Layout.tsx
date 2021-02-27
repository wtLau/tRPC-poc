import {
  Footer,
  Navbar,
} from '@components/common'
import { Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import './Layout.module.css'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const Layout: FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={1}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout