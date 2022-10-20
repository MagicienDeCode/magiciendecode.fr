import './cv-en.less'

import React from 'react'

import BackWard from '../../components/backward'

export default function Example() {
  return (
    <div className="main-cv">
      <BackWard path={'/home/cv'} />
      <div>test</div>
    </div>
  )
}
