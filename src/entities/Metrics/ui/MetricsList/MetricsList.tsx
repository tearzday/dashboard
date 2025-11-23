import { MetricsItem } from '../MetricsItem/MetricsItem'
import { useGetDashboardDataQuery } from '@/features/OffersDashboard/services/getDashboardData';
import cls from './MetricsList.module.scss'
import { iconMetricsMap, titleMap } from '../../model/const';
import type { MetricKeys } from '../../model/types';
import { moneyConverter } from '@/shared/utils/moneyConverter';


export const MetricsList = () => {
    const { data } = useGetDashboardDataQuery();

    return (
        <div className={cls.list}>
            {
                data && Object.entries(data.currentMetrics).map(([key, metric]) => {
                    const {value, change, changeType} = metric

                    const typedKey = key as MetricKeys;
                    const IconComponent = iconMetricsMap[typedKey]
                    const title = titleMap[typedKey]
                    const changeValue = key == 'expenses' || key == 'clicks' ? `${change}%` : change;
                    const currentValue = key === "expenses" ? moneyConverter(value) : key === "cpa" ? moneyConverter(value, "postfix") : value;
                     
                    return <MetricsItem icon={IconComponent} key={key} title={title} change={changeValue} changeType={changeType} value={currentValue}/>
                })
            }
        </div>
    )
}
