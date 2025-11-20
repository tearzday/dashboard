import { Table } from '../entities/Table'
import './styles/index.scss'
import { TableHeaderOffer } from '../shared/const'
import { useEffect, useState } from 'react'
import { ButtonIcon, CardMetric, Selector } from '@/shared/ui'
import Icon from '@/shared/assets/icons/platforms/Google Ads.svg';
import { CardCurrency } from '@/shared/ui/CardCurrency/CardCurrency'
import type { MetricsData } from '@/shared/types'
import { CardInfo } from '@/shared/ui/CardInfo/CardInfo'
import { Sidebar } from '@/widgets/Sidebar'

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
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', flex: 1, padding: '20px'}}>
        <Selector icon={Icon} placeholder='Выберите дату' options={[{label: 'label', value: 'value'}, {label: 'label', value: 'value'}, {label: 'label', value: 'value'}]}/>
        <Table header={TableHeaderOffer} data={offers}/>
        <ButtonIcon src={Icon} alt='dawd'/>
        <CardCurrency />
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
