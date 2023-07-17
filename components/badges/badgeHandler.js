import { FinancialsBadge, FoodBadge, HealthBadge, IntlBadge, TransportBadge } from "./badges";

export function CategoryBadge({ category }) {
    switch (category) {
        case "Food Security":
            return <FoodBadge />
        case "Financials":
            return <FinancialsBadge />
        case "Health and Wellness":
            return <HealthBadge />
        case "International Students":
            return <IntlBadge />
        case "Transportation":
            return <TransportBadge />
        default:
            return null
    }
}