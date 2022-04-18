import { MenuHorizontalIcon } from '../images/Icons';
import { ButtonIcon } from '../styles/Button.styles';
import {
  ItemDetails,
  ItemDetailsStart,
  ItemDetailsSummary,
} from '../styles/Details.styles';
import { Strong, Value } from '../styles/Typography.styles';
import { formatCurrency } from '../utils/format.utils';
import Category from './Category';

export default function FinancialItem({ id, title, value, type, category }) {
  const checkNegative = (amount, type) => {
    if (type === 'E') {
      return amount - amount * 2;
    }
    return amount;
  };

  return (
    <ItemDetails>
      <ItemDetailsStart>
        <ButtonIcon>
          <MenuHorizontalIcon />
        </ButtonIcon>
        <ItemDetailsSummary>
          <Strong>{title}</Strong>
          {category && (
            <Category title={category.title} color={category.color} />
          )}
        </ItemDetailsSummary>
      </ItemDetailsStart>
      <Value negative={checkNegative(value, type) < 0}>
        {formatCurrency(checkNegative(value, type))}
      </Value>
    </ItemDetails>
  );
}
