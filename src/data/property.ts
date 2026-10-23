/**
 * Verified business facts for River View Resorts.
 *
 * SOURCES:
 * - 2026-10-21: client-provided listing snapshot (identity, address, phone).
 * - 2026-10-23: background research across public sources (Exa place record,
 *   Hotel-Mix, Hotels.capital, TravelTriangle, official Srikalahasti temple
 *   website). Full sourced report: docs/PROPERTY_RESEARCH.md.
 *
 * VERIFICATION LEVELS used below:
 * - verified:    corroborated by 2+ independent public sources or a dated
 *                guest account (pool, Wi-Fi, parking, room service).
 * - listed:      single public source only (breakfast, room count/features,
 *                nearby distances) — always framed as approximate on the page.
 * - unverified:  no property-specific source (Google rating, 24-hour desk,
 *                tariffs) — MUST NOT appear on the page.
 *
 * RULES: never add prices, room categories, or claims that are not in this
 * file. Rates are only ever shared by the team, on enquiry.
 */

export const property = {
  name: "River View Resorts",
  teluguName: "రివర్ వ్యూ రిసార్ట్స్",
  tagline: "Your Peaceful Escape in Srikalahasti",
  category: "Resort · Srikalahasti, Andhra Pradesh",
  address: {
    line1: "Ponallama Gudi Street, Gunteligunta",
    line2: "at L.N. Puram, Srikalahasti",
    state: "Andhra Pradesh",
    pin: "517644",
    full: "Ponallama Gudi Street, Gunteligunta at L.N. Puram, Srikalahasti, Andhra Pradesh 517644",
  },
  phoneDisplay: "+91 99080 31471",
  phoneHref: "tel:+919908031471",
  whatsappHref:
    "https://wa.me/919908031471?text=Hello%20River%20View%20Resorts%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay.",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=River+View+Resorts+Srikalahasti",
  // Research (2026-10-23) could not verify a current Google rating/count from
  // any primary source — a secondary source says 4.2/419, which conflicts with
  // the listing snapshot (4.2/461). listingVerified stays false: never shown.
  googleRating: { value: 4.2, count: 461, listingVerified: false },
} as const;

/** Amenities, corroborated first. Order drives the About highlights (first 4). */
export const amenities = [
  // verified: listing + dated guest account (used the pool, 12 Nov 2025)
  { id: "pool", label: "Swimming Pool", verified: true },
  // verified: listing + TravelTriangle ("free Wi-Fi", updated 21 Jun 2024)
  { id: "wifi", label: "Wi-Fi", verified: true },
  // verified: listing + TravelTriangle ("free parking")
  { id: "parking", label: "Free Parking", verified: true },
  // verified: listed by Hotel-Mix, Hotels.capital and TravelTriangle
  { id: "room-service", label: "Room Service", verified: true },
  // listed: single source (Exa, "Free breakfast") — inclusion not confirmed
  { id: "breakfast", label: "Breakfast", verified: false },
  // "24-hour" had no property-specific source; the plain claim is kept
  { id: "front-desk", label: "Front Desk", verified: false },
] as const;

/** Guest rooms — figures reported by public listings, framed as such on-page. */
export const rooms = {
  reportedCount: 30, // Hotel-Mix and Hotels.capital both list 30 rooms
  airConditioning: true, // reported by both listings
  templeViewsSomeRooms: true, // reported by Hotel-Mix
  // Hotel-Mix shows ₹1,987 lowest, Hotels.capital US$21 — listing-level
  // indications with no dated, bookable quote. Never publish as real rates.
  tariffsVerified: false,
} as const;

/**
 * Nearby attractions around Srikalahasti.
 * Distances are approximate, from single listings or the official temple
 * website — always presented with the "approximate" note (see
 * ExperiencesSection). Conflicting sources: temple distance is 800 m per
 * Hotel-Mix vs 322 m per Hotels.capital, so the page only says "a short walk".
 */
export const nearby = [
  {
    id: "temple",
    name: "Srikalahasti Temple",
    distance: "A short walk away",
    description:
      "The famed Kalahasteeswara Shiva shrine — one of the most revered temples in South India, minutes from your room.",
  },
  {
    id: "kannappa",
    name: "Bhakta Kannappa Temple",
    distance: "≈ 870 m",
    description:
      "The hillside shrine honouring the devoted hunter-saint Kannappa, close by in temple town.",
  },
  {
    id: "tirtham",
    name: "Bharadwaja Tirtham",
    distance: "≈ 1.1 km",
    description:
      "A sacred riverside tirtham traditionally associated with sage Bharadwaja.",
  },
  {
    id: "waterfalls",
    name: "Veyilingala Kona Waterfalls",
    distance: "≈ 8 km from town",
    description:
      "A scenic waterfall retreat a short drive away — a favourite half-day outing.",
  },
] as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;
