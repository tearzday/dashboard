import { Table } from '../entities/Table'
import './styles/index.scss'
import { TableHeaderOffer } from '../shared/const'
import { useEffect, useState } from 'react'
import { CardMetric, Selector } from '@/shared/ui'
import Iconnn from '@/shared/assets/platforms/Google Ads.svg';
import type { MetricsData } from '@/shared/types'
import { CardInfo } from '@/shared/ui/CardInfo/CardInfo'
import { Sidebar } from '@/widgets/Sidebar'
import { StatusBadge } from '@/shared/ui'
import { StatusBadgeType } from '@/shared/ui/StatusBadge/const'
import { Header } from '@/widgets/Header'


function App() {
  const [currentMetrics, setCurrentMetrics] = useState<MetricsData | null>(null)
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const data = async () => {
      const response = await fetch('../mock-data.json')
      const json = await response.json()
      
      setCurrentMetrics(json.currentMetrics)
      setOffers(json.offers)
    }

    data()
  }, [])
  return (
    <div style={{display: 'flex'}}>
      <Sidebar />
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', flex: 1,}}>
              <Header />
        <Selector icon={Iconnn} placeholder='Выберите дату' options={[{label: 'label', value: 'value'}, {label: 'label', value: 'value'}, {label: 'label', value: 'value'}]}/>
        <Table header={TableHeaderOffer} data={offers}/>
        <StatusBadge status={StatusBadgeType.ACTIVE}/>
        <StatusBadge status={StatusBadgeType.PAUSED}/>
        <StatusBadge status={StatusBadgeType.STOPPED}/>
        {currentMetrics && <CardMetric
            title="Расходы"
            value={20}
            change={10}
            changeType='increase'
          />
          }
        <CardInfo />
      </div>
    </div>
  )
}

export default App
