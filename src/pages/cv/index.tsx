import { Link } from 'gatsby'
import React from 'react'

import BackWard from '../../components/backward'
import NavigationBar from '../../components/navigation-bar'

export default function Example() {
  return (
    <div>
      <BackWard path={'/home'} />
      <NavigationBar paths="cv" />
      <Link to={'cv-en'}>CV - English</Link>
    </div>
  )
}
