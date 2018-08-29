import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { saveData } from '../actions';

import Box from '../components/Box';
import Summary from '../components/Summary';
import Button from '../components/Button';
import Form from '../components/Form';

class PaymentContainer extends React.Component {

  componentDidMount() {
    const { data } = this.props;

    if (!data) {
      fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(
        result => {
          this.props.saveData(result);
        }
      )
    }
  }

  render() {
    const { data } = this.props;

    if (!data) return <span></span>

    const {
      total,
      subTotal,
      shippingTotal,
      discount
    } = data

    return (
      <Fragment>
        <Box title='cartão de crédito'>
          <Form />
        </Box>
        <Summary
          products={subTotal}
          shipping={shippingTotal}
          discount={discount}
          total={total} />
        <Button
          title='finalizar o pedido'
          type='submit'
          form='creditCardForm' />
    </Fragment>
    )
  }
}

const mapStateToProps = ({ data }) => ({
  data
});

export default withRouter(connect(
  mapStateToProps,
  {
    saveData
  }
)(PaymentContainer));
