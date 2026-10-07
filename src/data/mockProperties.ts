export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: 1250000,
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    beds: 5,
    baths: 4,
    sqft: 4200,
  },
  {
    id: '2',
    title: 'Ocean View Penthouse',
    price: 850000,
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    beds: 3,
    baths: 2,
    sqft: 1800,
  },
  {
    id: '3',
    title: 'Mountain Retreat',
    price: 450000,
    location: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
    beds: 2,
    baths: 2,
    sqft: 1200,
  },
];
