import React, {useEffect, useState} from "react"

import rd3 from 'react-d3-library'

import BarChart from "../../d3-components/barchart"
import methodProfiles from "../../data/procurement_methods_stats"
import { DESKTOP_MIN_WIDTH, media } from "../../shared/style"

const RD3Component = rd3.Component

const sortAttribute = a => a.totalProjectValue

const sortedMethods = methodProfiles.sort((a, b) => {
    return sortAttribute(b) - sortAttribute(a)
  })
  .reverse()
  .map(a => {
    return {
      ...a,
      totalProjectValueInMillion: a['totalProjectValue'] / 1e6
    }
  })

const MethodRanking = () => {
    const [valueKey, setValueKey] = useState('totalProjectValueInMillion')

    const [viz, setViz] = useState({})

    useEffect(()=> {
      const data = sortedMethods.map( a => {
        return {
          label: `${a.purchase_method_name}`,
          value: a[valueKey]
        }
      })

      const obj = BarChart({
        name: 'method-ranking',
        data,
      })

      if(viz && viz.reset){
        viz.reset()
      }

      setViz(obj)
    }, [valueKey])

    useEffect( () => {
      if(viz && viz.display){
        viz.display()
      }
    }, [viz])

    return <div>
      <div style={{marginTop: "0rem"}}>
        <div css={{
          textAlign: "center",
          fontSize: "11px",
          [media(DESKTOP_MIN_WIDTH)] : {
            textAlign: "right",
          }
        }}>หน่วย: <select
            style={{
                border: "0px",
                background: "#eee",
            }}
            value={valueKey}
            onChange={(e) => {
              setValueKey(e.target.value)
            }}
          >
            <option value="totalProjects">จำนวนโครงการรวม</option>
            <option value="totalProjectValueInMillion">มูลค่าโครงการรวม​ (ล้านบาท)</option>
          </select>
        </div>
        <RD3Component data={viz.node}/>
      </div>
    </div>
}

export default MethodRanking