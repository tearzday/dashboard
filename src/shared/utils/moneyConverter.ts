export const moneyConverter = (
  value: number,
  currencyPosition: 'prefix' | 'postfix' = 'prefix'
) => {
  const formatted = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return currencyPosition === 'prefix' ? `$${formatted}` : `${formatted}$`;
};
