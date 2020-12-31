import './menu-item.less'

import { Menu } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

import { Category, Categorys } from './category'

export default function MenuItem() {
  return (
    <Menu>
      {Categorys.map((category: Category, index: number) => (
        <Menu.Item key={index}>
          <Link to={'/' + category.path}>
            <img className="menu-item-img" src={category.imgPath} />
            <span>{category.label}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}
