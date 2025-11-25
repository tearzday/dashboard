import { WalletsData } from '../../model/const';
import { WalletItem } from '../WalletItem/WalletItem';
import cls from './WalletList.module.scss';

export const WalletList = () => {
  return (
    <div className={cls.container}>
      {WalletsData.map((wallet) => (
        <WalletItem
          key={wallet.currency}
          flag={wallet.flag}
          currency={wallet.currency}
          value={wallet.value}
        />
      ))}
    </div>
  );
};
