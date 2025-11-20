import { Table } from '../entities/Table'
import './styles/index.scss'
import { TableHeaderOffer } from '../shared/const'
import { useEffect, useState } from 'react'
import { ButtonIcon, CardMetric } from '@/shared/ui'
import Icon from '@/app/assets/icons/platforms/Google Ads.svg';
import { CardCurrency } from '@/shared/ui/CardCurrency/CardCurrency'
import type { MetricsData } from '@/shared/types'
import { CardInfo } from '@/shared/ui/CardInfo/CardInfo'

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
    <>
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
    </>
  )
}

export default App
