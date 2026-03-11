# Meta Ads Manager — Campaign Setup Guide
## Complete Junk Removal: Junk Removal Lead Gen

---

## Prerequisites

Before setting up the campaign:

1. **Meta Business Suite** — Make sure you have a Meta Business account at business.facebook.com
2. **Facebook Page** — Complete Junk Removal page must be active
3. **Instagram Account** — Connected to the Facebook page (optional but recommended)
4. **Meta Pixel** — Install on completejunkremoval.ca (see Pixel Setup below)
5. **Payment Method** — Add a credit card to your ad account

---

## Step 1: Install the Meta Pixel

The pixel tracks who visits your site so you can retarget them and track conversions.

1. Go to **Meta Events Manager** → business.facebook.com/events_manager
2. Click **Connect Data Sources** → **Web** → **Meta Pixel**
3. Name it "Complete Junk Removal Pixel"
4. Choose **Install code manually**
5. Copy the pixel base code
6. Add it to your Next.js site in `src/app/layout.tsx` inside `<head>`:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

7. **Track form submissions as leads:** In `QuoteForm.tsx`, after successful submission, fire:
```js
if (typeof window !== 'undefined' && window.fbq) {
  window.fbq('track', 'Lead', {
    content_name: 'Quote Request',
    content_category: 'Junk Removal',
  });
}
```

8. **Track phone calls:** Add `onclick` tracking to phone links:
```js
onClick={() => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', { content_name: 'Phone Call' });
  }
}}
```

---

## Step 2: Create the Campaign

1. Go to **Ads Manager** → adsmanager.facebook.com
2. Click **+ Create**

### Campaign Settings:
- **Campaign Objective:** Leads
- **Campaign Name:** `CJR — Junk Removal — Leads`
- **Special Ad Category:** None (junk removal is not a restricted category)
- **Advantage Campaign Budget:** ON
- **Daily Budget:** $30-50/day to start (scale up after 1-2 weeks of data)
- **Bid Strategy:** Lowest cost (let Meta optimize)

---

## Step 3: Create the Ad Set

### Ad Set Settings:
- **Ad Set Name:** `Broad — GrandBend+London — 25-65`
- **Conversion Location:** Website
- **Performance Goal:** Maximize number of leads
- **Pixel:** Complete Junk Removal Pixel
- **Conversion Event:** Lead

### Audience:
- **Location:**
  - Grand Bend, ON — 30km radius
  - London, ON — 25km radius
  - (These will overlap slightly — that's fine, Meta deduplicates)
- **Age:** 25–65+
- **Gender:** All
- **Detailed Targeting:** LEAVE BLANK — broad targeting works best now. Meta's algorithm will find the right people from your creative signals.
- **Advantage+ Audience:** ON (let Meta expand if it finds good leads)

### Placements:
- **Advantage+ Placements** — let Meta decide (it will auto-optimize across Feed, Stories, Reels, Explore, etc.)

### Schedule:
- **Start Date:** Immediately
- **End Date:** None (run continuously, pause manually when needed)

---

## Step 4: Create the Ads

Upload all 10 ad images and pair with their copy. In Meta Ads Manager:

1. Click **+ Create Ad** inside your ad set
2. **Ad Name:** Match the creative (e.g., "01 — Team Fleet — TOF")
3. **Identity:** Complete Junk Removal (Facebook Page + Instagram account)
4. **Ad Setup:** Single image
5. **Media:** Upload the corresponding ad image
6. **Primary Text:** Copy from ad-copy.md
7. **Headline:** Copy from ad-copy.md
8. **Description:** Copy from ad-copy.md
9. **Call to Action:** "Learn More" (for TOF/MOF) or "Call Now" (for BOF)
10. **Website URL:** `https://www.completejunkremoval.ca` (Phase 1 — Wix homepage with form + 73 Google reviews)
    - Phase 2: A/B test with `https://ads.completejunkremoval.ca/get-quote` (dedicated Next.js landing page)
11. **URL Parameters:** `utm_source=meta&utm_medium=paid&utm_campaign=junk-removal-leads&utm_content=ad-XX` (replace XX with ad number)

### Recommended Ad Upload Order (Meta tests the first ads more):
1. Ad 10 — Direct Response (strongest CTA)
2. Ad 02 — We Haul It All (action shot)
3. Ad 05 — Pricing Transparency
4. Ad 08 — Same-Day Urgency
5. Ad 01 — Team + Fleet
6. Ad 07 — Specific Items Checklist
7. Ad 03 — Spring Cleaning
8. Ad 09 — Review Spotlight
9. Ad 06 — How It Works
10. Ad 04 — Branded Trailer

---

## Step 5: Launch & Optimize

### Week 1 (Learning Phase):
- **Don't touch anything.** Meta needs ~50 conversion events to exit the learning phase.
- Budget: $30-50/day
- Check results daily but don't make changes
- The algorithm is learning — costs may be high initially

### Week 2-3 (Optimization):
- Review which ads are performing:
  - **CTR (Click-Through Rate):** Above 1% is good, above 2% is great
  - **CPL (Cost Per Lead):** Track how much each form fill / call costs you
  - **Relevance Score:** Higher = better targeting match
- **Turn off** ads with less than 1% CTR after 1,000+ impressions
- **Keep running** top 4-6 performers
- Consider increasing budget on top performers

### Week 4+ (Scaling):
- Increase daily budget by 20-30% at a time (not more, or you reset learning)
- Create a **retargeting ad set** targeting:
  - Website visitors (last 30 days)
  - Ad engagers (people who liked, commented, clicked)
  - Use ads 09 (Review) and 10 (Direct CTA) for retargeting
- Build a **Lookalike Audience** from your leads/converters once you have 100+ leads

---

## Budget Breakdown Recommendation

For $1,500/month total:
- **$40/day prospecting** (broad audience, all 10 ads) = ~$1,200/mo
- **$10/day retargeting** (website visitors + engagers, ads 09 & 10) = ~$300/mo

For $2,500/month total:
- **$65/day prospecting** = ~$1,950/mo
- **$18/day retargeting** = ~$550/mo

---

## Key Metrics to Track

| Metric | Good | Great |
|--------|------|-------|
| CTR (Click-Through Rate) | >1% | >2% |
| CPL (Cost Per Lead) | <$25 | <$15 |
| CPC (Cost Per Click) | <$2 | <$1 |
| Conversion Rate (landing page) | >5% | >10% |

---

## Quick Reference

- **Landing Page:** completejunkremoval.ca/get-quote
- **Phone:** 519-870-9136
- **Ad Images:** /public/images/ads/ad-01.png through ad-10.png
- **Ad Copy:** See ad-copy.md
- **UTM Template:** `utm_source=meta&utm_medium=paid&utm_campaign=junk-removal-leads&utm_content=ad-XX`
