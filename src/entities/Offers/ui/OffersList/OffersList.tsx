import { useGetDashboardDataQuery } from "@/features/OffersDashboard/services/getDashboardData";
import { useMemo } from "react";
import type { StatusBadgeType } from "@/shared/ui/StatusBadge/const";
import { OfferCard } from "../OfferCard/OfferCard";
import cls from "./OffersList.module.scss"

export const OffersList = () => {
  const { data } = useGetDashboardDataQuery();
  const offers = data?.offers;

  const offersData = useMemo(() => {
    if (!offers) return [];

    return offers.map((offer) => ({
      id: offer.id,
      name: offer.name,
      platforms: offer.platforms,
      launchDate: new Date(offer.launchDate).toLocaleDateString("ru-RU"),
      balance: offer.balance,
      spent: offer.spent,
      status: offer.status as StatusBadgeType,
    }));
  }, [offers]);

  return (
    <div className={cls.container}>
      {offersData.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};