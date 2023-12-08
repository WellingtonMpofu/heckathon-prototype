import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  const donations = [
    {
      title: "ORAP",
      description: "",
      postedAt: faker.date.recent(),
    },
    {
      title: "World Vision",
      description: "",
      postedAt: faker.date.recent(),
    },
    {
      title: "NCM",
      description: "",
      postedAt: faker.date.recent(),
    },
    {
      title: "ORAP",
      description: "",
      postedAt: faker.date.recent(),
    },
    {
      title: "World Vision",
      description: "",
      postedAt: faker.date.recent(),
    }
  ]

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Better a home of choice
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Number of Homes"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Number of Donors"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Annual Donations"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Fundraising Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Fundraising Progress"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'ORAP',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'NCM',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'World Vision',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Home Locations"
            chart={{
              series: [
                { label: 'Bulawayo', value: 4344 },
                { label: 'Harare', value: 5435 },
                { label: 'Gweru', value: 1443 },
                { label: 'Hwange', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Annual Donations Report"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Emthunzini Wethemba', value: 400 },
                { label: 'Emerald Hill Childrens Home', value: 430 },
                { label: 'Shearly Cripps Childrens Home', value: 448 },
                { label: 'Khayelisha Village', value: 470 },
                { label: 'Chinyaradzo Home', value: 540 },
                { label: 'Jairos Jiri Centre', value: 580 },
                { label: 'Queen Elizabeth Adventist Home', value: 690 },
                { label: 'Thembiso Childrens Home', value: 1100 },
                { label: 'Layden House', value: 1200 },
                { label: 'Cork Road Elderly Home', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Donor Activity"
            chart={{
              categories: ['Bulawayo', 'Harare', 'Gweru', 'Hwange', 'Victoria Falls', 'Kwekwe'],
              series: [
                { name: 'World Vision', data: [80, 50, 30, 40, 100, 20] },
                { name: 'NCM', data: [20, 30, 40, 80, 20, 80] },
                { name: 'ORAP', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Daily Donation Updates"
            list={donations.map((item, index) => ({
              id: faker.string.uuid(),
              title: item.title,
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Donation Timelines"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '$4220 donated by World Vision to Emthunzini Wethemba',
                'Food parcels donated by World Vision to Emthunzini Wethemba',
                'Stationary donated by ORAP to Jairos Jiri Centre',
                '$3000 donated by NCM to Khayelisha Village',
                '$5000 donated by NCM to Layden House',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
