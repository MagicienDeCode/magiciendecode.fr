import './japanese-fifty.less'

import { Table, Tabs } from 'antd'
import { graphql } from 'gatsby'
import React from 'react'

import BackWard from '../../components/backward'
import NavigationBar from '../../components/navigation-bar'

const TabPane = Tabs.TabPane

class DataType {
  node!: {
    field1: string
    field2: string
    field3: string
    field4: string
    field5: string
    field6: string
    field7: string
    field8: string
    field9: string
    field10: string
  }
}

class DataTypeItem {
  key!: number
  field1!: string
  field2!: string
  field3!: string
  field4!: string
  field5!: string
  field6!: string
  field7!: string
  field8!: string
  field9!: string
  field10!: string
}

interface JapaneseFiftyProps {
  data: {
    allFiftyCsv: { edges: [DataType] }
    allFifty2Csv: { edges: [DataType] }
  }
}

export default function JapaneseFifty({ data }: JapaneseFiftyProps) {
  const columns = [
    { dataIndex: 'field1' },
    { dataIndex: 'field2' },
    { dataIndex: 'field3' },
    { dataIndex: 'field4' },
    { dataIndex: 'field5' },
    { dataIndex: 'field6' },
    { dataIndex: 'field7' },
    { dataIndex: 'field8' },
    { dataIndex: 'field9' },
    { dataIndex: 'field10' },
  ]
  const hiragana: DataTypeItem[] = []
  const katakana: DataTypeItem[] = []

  if (hiragana.length == 0) {
    data.allFiftyCsv.edges.map((row: DataType, index: number) =>
      hiragana.push({
        key: index,
        field1: row.node.field1,
        field2: row.node.field2,
        field3: row.node.field3,
        field4: row.node.field4,
        field5: row.node.field5,
        field6: row.node.field6,
        field7: row.node.field7,
        field8: row.node.field8,
        field9: row.node.field9,
        field10: row.node.field10,
      })
    )
  }

  if (katakana.length == 0) {
    data.allFifty2Csv.edges.map((row: DataType, index: number) =>
      katakana.push({
        key: index,
        field1: row.node.field1,
        field2: row.node.field2,
        field3: row.node.field3,
        field4: row.node.field4,
        field5: row.node.field5,
        field6: row.node.field6,
        field7: row.node.field7,
        field8: row.node.field8,
        field9: row.node.field9,
        field10: row.node.field10,
      })
    )
  }

  return (
    <div>
      <BackWard path={'/japanese/japanese-fifty'} />
      <NavigationBar paths="japanese" />
      <Tabs defaultActiveKey="1">
        <TabPane tab="ひらがな" key="1">
          <Table
            dataSource={hiragana}
            columns={columns}
            pagination={false}
            showHeader={false}
            rowClassName={(_, index) =>
              index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            }
          />
        </TabPane>
        <TabPane tab="カタカナ" key="2">
          <Table
            dataSource={katakana}
            columns={columns}
            pagination={false}
            showHeader={false}
            rowClassName={(_, index) =>
              index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            }
          />
        </TabPane>
      </Tabs>
    </div>
  )
}

export const JapaneseFiftyQuery = graphql`
  query {
    allFiftyCsv {
      edges {
        node {
          field1
          field2
          field3
          field4
          field5
          field6
          field7
          field8
          field9
          field10
        }
      }
    }
    allFifty2Csv {
      edges {
        node {
          field1
          field2
          field3
          field4
          field5
          field6
          field7
          field8
          field9
          field10
        }
      }
    }
  }
`
