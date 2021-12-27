import React from 'react'

import BackWard from '../components/backward'
import NavigationBar from '../components/navigation-bar'

export default function Example() {
  return (
    <div>
      <BackWard path={'/chinese/gushiwen'} />
      <NavigationBar paths="chinese" />
      <div>test</div>
    </div>
  )
}
