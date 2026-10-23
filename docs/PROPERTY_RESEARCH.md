# River View Resorts — Sourced Property Research

Background research completed 2026-10-23 across public sources. This document is
the source of truth for what the site may claim; `src/data/property.ts` mirrors
its conclusions. **Never publish anything not supported here.**

## Identity (verified)

Business name, Telugu name, address (Ponallama Gudi Street, Gunteligunta at
L.N. Puram, Srikalahasti, Andhra Pradesh 517644) and phone (+91 99080 31471)
match across the client listing snapshot and public place records.

- Address discrepancy worth retaining: Hotel-Mix lists PIN 517640 vs our
  snapshot's 517644 — the snapshot wins; do not silently "correct" it.
- No official website or social account could be authenticated for this
  property. The domain riverviewresort.com belongs to a resort in Bethel,
  Maine, USA — never link to it.

## Amenities

| Amenity | Evidence | Status |
|---|---|---|
| Swimming Pool | Exa place record + dated guest account (used the pool, 12 Nov 2025) | Corroborated |
| Wi-Fi | Exa + TravelTriangle ("free Wi-Fi", updated 21 Jun 2024) | Corroborated |
| Free Parking | Exa + TravelTriangle | Corroborated |
| Room Service | Hotel-Mix, Hotels.capital, TravelTriangle | Corroborated |
| Breakfast ("Free breakfast") | Exa only | Listed, not independently confirmed |
| 24-hour front desk | No property-specific source | Unverified — page shows plain "Front Desk" |

## Rooms

- 30 rooms reported by two listings (Hotel-Mix, Hotels.capital); air
  conditioning and temple views from some rooms reported by the same listings.
- No verifiable room category names (Standard/Deluxe/Family/Suite) exist —
  TravelTriangle's "rooms and suites" is generic; suites remain unverified.
- Indicative tariffs are listing-level only (Hotel-Mix ₹1,987 lowest;
  Hotels.capital from US$21/night) with no dated, bookable quote — never
  published as real rates; the page routes all rates to call/WhatsApp enquiry.

## Nearby attractions

| Attraction | Reported distance | Limitation |
|---|---|---|
| Srikalahasti Temple | 800 m (Hotel-Mix) vs 322 m (Hotels.capital) | Conflicting — page says only "a short walk" |
| Bhakta Kannappa Temple | ≈ 870 m (Hotel-Mix) | Single source |
| Bharadwaja Tirtham | ≈ 1.1 km (Hotel-Mix) | Single source |
| Veyilingala Kona Waterfalls | 8 km from Srikalahasti (official temple website) | Town-relative, not hotel-to-site; Hotel-Mix's 770 m claim conflicts and is rejected |

## Google rating

Unverified. A secondary source says 4.2/419; the listing snapshot said
4.2/461; no primary Google data was accessible. `googleRating.listingVerified`
stays `false` and the rating is never shown on the page.

## Guest sentiment (individual accounts, not stats)

Positive: river/temple views, comfortable beds, clean bathrooms, good service
(26 Oct 2025); pool and garden enjoyment (12 Nov 2025). Negative: one account
alleges rude management and a refused towel request (22 Nov 2025). Not
published as review claims.

## Sources

- Exa place record — https://exa.ai/library/place/728xq6lmkkz
- Hotel-Mix listing — https://river-view-resorts-srikalahasti.hotel-mix.in/
- Hotels.capital listing — https://hotels.capital/river-view-s/
- TravelTriangle (updated 21 Jun 2024) — https://traveltriangle.com/blog/resorts-near-tada-falls/
- Official temple website — https://srikalahasthitemple.org/places-to-visit
- Google Hotels entity (no accessible rating) — https://www.google.com.ng/travel/hotels/entity/CgoIkJOlt8vgi9tzEAE

## Open questions for the property owner

Breakfast inclusion, pool access conditions, reception hours, room categories
and current tariffs, real route-based distances, and a dated Google rating.
