import { NameCategory, TagCategory } from '../styles/Category.styles';

export default function Category({ title, color }) {
  return (
    <TagCategory color={color}>
      <NameCategory>{title}</NameCategory>
    </TagCategory>
  );
}
