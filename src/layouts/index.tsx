import './global.less'
import './index.less'

import { Affix, BackTop } from 'antd'
import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'

interface GlobalLayoutProps {
  children: ReactNode
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div>
      <Helmet
        title="MagicienDeCode"
        meta={[
          { name: 'description', content: 'magiciendecode' },
          {
            name: 'keywords',
            content: 'magiciendecode, gatsby, antd, typescript, less',
          },
        ]}
      >
        <link
          rel="icon"
          href={
            'https://github.com/MagicienDeCode/images/blob/master/magiciendecode/star.png'
          }
        />
      </Helmet>
      <div className="main-body bg-linear">
        <Affix offsetTop={0}>
          <Header />
        </Affix>
        <div>
          <BackTop>
            <div className="ant-back-top-inner">UP</div>
          </BackTop>
        </div>
        <div className="main-content">{children}</div>
        {/*
          <Affix offsetBottom={0}>
            <div className="footer">
              <span>LI Xiang (magiciendecode.fr) ©2020</span>
            </div>
          </Affix>
          */}
      </div>
    </div>
  )
}
