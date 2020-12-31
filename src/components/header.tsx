import './header.less'

import { AutoComplete, Avatar, Col, Input, Popover, Row } from 'antd'
import { SelectProps } from 'antd/es/select'
import { Link, navigate } from 'gatsby'
import React, { useState } from 'react'

import { AlignLeftOutlined, SearchOutlined } from '@ant-design/icons'

import bookJson from '../data/book/title.json'
import englishJson from '../data/english/title.json'
import japaneseJson from '../data/japanese/title.json'
import javaJson from '../data/java/title.json'
import kotlinJson from '../data/kotlin/title.json'
import { Title } from '../data/title'
import MenuItem from './menu-item'

const allItems = [japaneseJson, englishJson, kotlinJson, javaJson, bookJson]

class Options {
  type!: string
  children!: Title[]
}

function renderTitle(title: string) {
  return (
    <span>
      <span style={{ color: 'black', fontWeight: 'bold' }}>
        {title.substring(0, 1).toUpperCase() + title.substring(1)}
      </span>
      <Link style={{ float: 'right' }} to={'/' + title}>
        More...
      </Link>
    </span>
  )
}

function renderItem(title: string, page: string, type: string) {
  return {
    value: '/' + type + '/' + page,
    label: (
      <div style={{ width: '100%' }}>
        <span style={{ color: 'blue', width: '100px' }}>{title}</span>
      </div>
    ),
  }
}

function renderOptions(opt: Title[], type: string) {
  return opt.map(element => {
    return renderItem(element.title, element.page, type)
  })
}

const init = allItems.map(it => {
  return {
    label: renderTitle(it.type),
    options: renderOptions(it.children, it.type),
  }
})

export default function Header() {
  const [options, setOptions] = useState<SelectProps<Options>['options']>(init)
  const [categoryVisible, setCategoryVisible] = useState<boolean>(false)

  const handleSearch = (value: string) => {
    if (value.length > 1) {
      const result: Options[] = []
      allItems.forEach(it => {
        const innerResult: Title[] = []
        it.children.forEach(each => {
          if (each.title.toUpperCase().includes(value.toUpperCase()) === true) {
            innerResult.push(each)
          }
        })
        if (innerResult.length > 0) {
          result.push({ type: it.type, children: innerResult })
        }
      })
      if (result.length > 0) {
        setOptions(
          result.map(it => {
            return {
              label: renderTitle(it.type),
              options: renderOptions(it.children, it.type),
            }
          })
        )
      } else {
        setOptions([])
      }
    } else {
      setOptions(init)
    }
  }

  const handleSelect = (value: string) => {
    navigate(value)
  }

  const handleVisibleChange = (visible: boolean) => {
    setCategoryVisible(visible)
  }

  return (
    <div className="main-header">
      <div className="header">
        <Row justify="center">
          <Col span={3} className="category">
            <Popover
              visible={categoryVisible}
              onVisibleChange={handleVisibleChange}
              placement="bottomLeft"
              content={<MenuItem />}
            >
              <AlignLeftOutlined className="category-icon" />
            </Popover>
          </Col>
          <Col span={18}>
            <AutoComplete
              options={options}
              dropdownMatchSelectWidth={true}
              onSelect={handleSelect}
              onSearch={handleSearch}
              className="auto-complete"
              dropdownClassName="auto-complete-drop-down"
            >
              <Input size={'middle'} suffix={<SearchOutlined />} />
            </AutoComplete>
          </Col>
          <Col span={3} className="header-avatar">
            <Link to="/">
              <Avatar src={`magiciendecode.jpg`} />
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}
