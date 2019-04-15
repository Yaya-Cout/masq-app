import React, { Fragment } from 'react'
import MediaQuery from 'react-responsive'

import NavbarMin from './NavbarMin'
import NavbarMax from './NavbarMax'
import NavBarMobile from './NavbarMobile'

const Navbar = (props) => {
  return (
    <Fragment>
      <MediaQuery maxWidth={500}>
        <NavBarMobile {...props} />
      </MediaQuery>
      <MediaQuery minWidth={501} maxWidth={1023}>
        <NavbarMin {...props} />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <NavbarMax {...props} />
      </MediaQuery>
    </Fragment>
  )
}

export default Navbar