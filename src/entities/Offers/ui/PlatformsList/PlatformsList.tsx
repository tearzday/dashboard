import { Card, Typography, TypographyVariant } from "@/shared/ui";
import cls from "./PlatformsList.module.scss";
import { useMemo } from "react";
import { useAppSelector } from "@/app/hooks";
import { PlatformCard } from "../PlatformCard/PlatformCard";

export const PlatformsList = () => {
  const platforms = useAppSelector((state) => state.platformsSort.platforms);

  const platformsData = useMemo(() => {
    return platforms.map((platform) => ({
      id: platform.id,
      name: platform.name,
      balance: platform.balance,
      accounts: platform.accounts,
      avgcpc: platform.avgcpc,
      avgcpa: platform.avgcpa,
    }));
  }, [platforms]);

  return (
    <Card className={cls.container}>
      <Typography variant={TypographyVariant.H2}>
        Рекламные площадки
      </Typography>

      <div className={cls.list}>
        {platformsData.map((p) => (
          <PlatformCard key={p.id} platform={p} />
        ))}
      </div>
    </Card>
  );
};