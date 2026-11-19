# Value Properties homepage design

## References

- [Homy](https://homy.framer.media/) pairs a large architectural hero with a quiet navigation bar and image-led property cards. Firecrawl detected Special Gothic and Switzer, with near-black `#080B0F` as its primary colour.
- [Bildora](https://bildora.framer.website/) layers its headline over a full-width building photograph and uses generous spacing around editorial image sections. Firecrawl detected Inter and an orange accent of `#FF4B18`.
- [Value Properties](https://valueproperties.homes/) supplies the logo, listings, project imagery, company figures and advisor contact details. The public site uses Fraunces for headings and Plus Jakarta Sans for body text.

All three homepage captures were reviewed at 1440 CSS pixels on 19 November 2026. The top-of-page crops are in the Codex task's `work` folder as `reference-0-top.jpg`, `reference-1-top.jpg` and `reference-2-top.jpg`, in the same order as above.

## Layout and tokens

| Role | Implementation |
| --- | --- |
| Page | Off-white `#FAFBF9`, dark navy text `#14263A` |
| Actions | Blue `#125E91`, with darker `#08466F` for emphasis |
| Discovery section | Pale blue `#EAF2F6` |
| Headings | Fraunces Variable, including an italic second hero line |
| Body and labels | Manrope Variable |
| Main container | Up to 1,280 pixels with responsive side gutters |
| Architecture and cards | Rounded photos, white card surfaces and light dividers |

The homepage starts with the Aureva hero, a search panel and four company figures. Selected listings follow, with filters for Featured, Ready to move and Under construction. Neighbourhood and budget links, company benefits, developer links, team and contact sections complete the page. At mobile widths the navigation collapses, the listings become a single column and the search panel sits below the hero.

The hero uses the [Aureva listing image](https://valueproperties.homes/property/aureva), the discovery image comes from [Lodha Riservo](https://valueproperties.homes/property/lodha-riservo-1), and the team photo comes from [Value Properties](https://valueproperties.homes/). Images and fonts are stored locally. The selected property cards use a snapshot of the live homepage. Search and browse links open the existing Value Properties site for the full catalogue.

## Local preview and animation

Run `npm run dev` from this directory. Run `npm run build` for the production bundle.

GSAP and Framer Motion are installed for the next pass. The initial render shows all content in its final position. For the animation pass, scope GSAP to section entrances and Framer Motion to interactive components such as listing changes. Respect the visitor's reduced-motion preference and keep layout space reserved when content changes.
