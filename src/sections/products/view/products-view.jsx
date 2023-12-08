import { useState } from 'react';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';
import { CFormLabel } from '@coreui/react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Drawer, Input,Space,Col,Row } from 'antd';
import { products } from 'src/_mock/products';
import ProductCard from '../product-card';

import ProductCartWidget from '../product-cart-widget';





// ----------------------------------------------------------------------

export default function ProductsView() {


  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const buttonStyle3 = {
    backgroundColor: '#69A3DE',
    border: '1px solid #69A3DE',
    borderRadius: '50px',
    color: '#fff',
    variant: 'outline',
    padding: '2px 15px',
    margin: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };
  return (
    <Container>

<Drawer
        title="Add Home"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button>Cancel</Button>
            <Button type="primary">OK</Button>
          </Space>
        }
      >
      <div >
        <>
          <div style={{ backgroundColor: 'white' }}>
            <div style={{ marginLeft: '10px' }}>
              <h3> Add home</h3>
              <hr />

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <CFormLabel>Name</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      name="name"
                      placeholder="Name"
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel>Background</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      placeholder="Background"
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                <Col span={12}>
                    <CFormLabel>Phone Number</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      name="name"
                      placeholder="Email"
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel>Email</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      placeholder=" Email"
                   
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel>Address</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      placeholder=" Address"
                   
                    />
                  </Col>

                  <Col span={12}>
                    <CFormLabel>Ongoing Activities</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      name="name"
                      placeholder="Activities"
                    />
                  </Col>
                </Row>
              </div>


              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
               
                  <Col span={12}>
                    <CFormLabel>Funding Status</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      placeholder="Funding Status"
                   
                    />
                  </Col>
                </Row>
              </div>

              <div style={{ marginBottom: '30px' }}>
              <h3> Visiting Schedules</h3>
              <hr />

                <Row gutter={[16, 16]}>
                <Col span={12}>
                    <CFormLabel>Weekdays</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      name="name"
                      placeholder="Weekdays"
                    />
                  </Col>
                  <Col span={12}>
                    <CFormLabel>Weekends</CFormLabel>

                    <Input
                      type="text"
                      size="sm"
                      placeholder="Weekends"
                   
                    />
                  </Col>
                </Row>
              </div>

            

              <div style={{ marginBottom: '30px' }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button onClick={() => showDrawer()} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" ghost />}>
          Submit
        </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </>
      </div>
      </Drawer>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <Typography variant="h4" sx={{ mb: 5 }}>
       Active Homes
      </Typography>
      <div style={{ margin: '10px' }}>
             

              <Button onClick={() => showDrawer()} variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" ghost />}>
          New Home
        </Button>
            </div>
      


      </div>
    

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
       .
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <ProductCartWidget />
    </Container>
  );
}
