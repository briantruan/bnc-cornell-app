import {
  FinancialsBadge,
  FoodBadge,
  HealthBadge,
  HousingBadge,
  IntlBadge,
  TransportBadge,
} from "./badges";

export function CategoryBadge({ category }: { category: string }) {
  switch (category) {
    case "Food Security":
      return <FoodBadge />;
    case "Financials":
      return <FinancialsBadge />;
    case "Health and Wellness":
      return <HealthBadge />;
    case "Housing":
      return <HousingBadge />;
    case "International Students":
      return <IntlBadge />;
    case "Transportation":
      return <TransportBadge />;
    default:
      return null;
  }
}
