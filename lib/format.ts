export function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export const statusLabel = {
  "on-load": "On load",
  available: "Available",
  "at-receiver": "At receiver",
} as const;

export const equipmentLabel = {
  all: "All",
  "dry-van": "Dry van",
  reefer: "Reefer",
  flatbed: "Flatbed",
  specialized: "Specialized",
} as const;
