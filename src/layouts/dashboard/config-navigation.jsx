import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'home',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'fundraising reports',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'fundraising events',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  { 
    title: 'payments',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'testimonials',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
