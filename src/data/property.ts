/**
 * Verified business facts for River View Resorts.
 *
 * SOURCES (verified 2026-10-21, from the client-provided listing snapshot):
 * - Business name, Telugu name, address, phone, category.
 * - Amenity list is from the Google property listing — treat as PROVISIONAL
 *   until confirmed by the property owner.
 *
 * RULES: never add prices, room categories, or claims (river views, spa,
 * suites) that are not verified here.
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
  // Listing-reported rating — surfaced only if listingVerified is true.
  googleRating: { value: 4.2, count: 461, listingVerified: false },
} as const;

/** Amenities from the public listing; verification status carried per item. */
export const amenities = [
  { id: "pool", label: "Swimming Pool", verified: false },
  { id: "wifi", label: "Wi-Fi", verified: false },
  { id: "parking", label: "Free Parking", verified: false },
  { id: "breakfast", label: "Breakfast", verified: false },
  { id: "room-service", label: "Room Service", verified: false },
  { id: "front-desk", label: "24-hour Front Desk", verified: false },
] as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;
