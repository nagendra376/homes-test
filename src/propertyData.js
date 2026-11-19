export const siteUrl = 'https://valueproperties.homes';
export const advisorPhone = '+919819162911';
export const advisorEmail = 'amit@valueproperties.homes';
export const whatsappUrl = 'https://wa.me/919819162911';

export function searchUrl(filters = {}) {
  const params = new URLSearchParams(filters).toString();
  return `${siteUrl}/property/search${params ? `?${params}` : ''}`;
}

export const budgets = [
  { label: '₹1–3 Cr', min: 1, max: 3 },
  { label: '₹3–5 Cr', min: 3, max: 5 },
  { label: '₹5–10 Cr', min: 5, max: 10 },
  { label: '₹10–20 Cr', min: 10, max: 20 },
  { label: '₹20 Cr+', min: 20 },
];

export function priceFilters({ min, max }) {
  const filters = { minPrice: min * 10_000_000 };
  if (max) filters.maxPrice = max * 10_000_000;
  return filters;
}

export const neighbourhoods = [
  { label: 'Bandra West', value: 'Bandra West' },
  { label: 'Dadar West', value: 'Dadar West' },
  { label: 'Lower Parel', value: 'Lower Parel' },
  { label: 'Prabhadevi', value: 'Prabhadevi' },
  { label: 'Vikhroli West', value: 'LBS Marg, Vikhroli West' },
  { label: 'Worli', value: 'Worli, Mumbai' },
];

export const trackRecord = [
  ['15+', 'Years active'],
  ['1,000+', 'Families served'],
  ['100+', 'Verified projects'],
  ['60+', 'Team members'],
];

const properties = {
  aureva: {
    name: 'Aureva', location: 'Dadar West', price: '2.47', details: '1 & 2 BHK',
    status: 'Under construction',
  },
  'lodha-corinthia': {
    name: 'Lodha Corinthia', location: 'Kanjur / Bhandup West', price: '2.50',
    details: '2–4 BHK', status: 'Under construction', slug: 'lodha-corinthia-1',
  },
  'lodha-elaris': {
    name: 'Lodha Elaris', location: 'Vikhroli West', price: '9', details: '4 BHK',
    status: 'Under construction', slug: 'lodha-elaris-1',
  },
  '25-south': {
    name: '25 South', location: 'Prabhadevi', price: '19', details: '3 & 4 BHK',
    status: 'Ready to move', slug: '25-downtown-2', position: '50% 40%',
  },
  '140-shivaji-park': {
    name: '140 Shivaji Park', location: 'Shivaji Park', price: '9.36', details: '3 & 5 BHK',
    status: 'Ready to move', position: '50% 37%',
  },
  'lodha-ciel': {
    name: 'Lodha Ciel', location: 'Lower Parel', price: '34', details: '5 BHK',
    status: 'Ready to move',
  },
  'dlh-signature': {
    name: 'DLH Signature', location: 'Bandra West', price: '5.75', details: '920+ sq. ft.',
    status: 'Under construction', position: '50% 33%',
  },
  'pantheion-palmera': {
    name: 'Pantheion Palmera', location: 'Bandra West', price: '15', details: '2,090+ sq. ft.',
    status: 'Under construction', slug: 'pantheion-palmera-1', position: '50% 35%',
  },
  'embassy-citadel': {
    name: 'Embassy Citadel', location: 'Worli', price: '15', details: '3 & 4 BHK',
    status: 'Under construction', position: '68% 52%',
  },
};

export const listingGroups = [
  {
    label: 'Featured',
    items: ['lodha-corinthia', 'embassy-citadel', 'lodha-elaris'],
  },
  {
    label: 'Ready to move',
    items: ['25-south', '140-shivaji-park', 'lodha-ciel'],
  },
  {
    label: 'Under construction',
    items: ['dlh-signature', 'pantheion-palmera', 'aureva'],
  },
].map((group) => ({
  ...group,
  items: group.items.map((id) => ({ id, ...properties[id] })),
}));

export const developers = [
  ['Lodha Group', 'lodha'],
  ['Godrej Properties', 'godrej'],
  ['Rustomjee Builders', 'rustomjee'],
  ['Kalpataru Group', 'kalpataru'],
  ['Runwal Developers', 'runwal'],
  ['Shapoorji Pallonji', 'shapoorji'],
];

