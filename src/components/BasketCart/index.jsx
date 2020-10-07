import React from "react";
import {Link} from "react-router-dom";
import {Icon} from 'react-icons-kit';
import {ic_add_shopping_cart} from 'react-icons-kit/md/ic_add_shopping_cart'
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';
import {number} from 'prop-types';

import {getTotalBasketCart} from '../../selector';

const BasketCartBanner = styled.div`
  width: 100%;
  padding: 25px 0 7.5px 0;
`;

const BasketCartLink = styled(Link)`
  width: 100%;
  padding: 10px;
  text-decoration: none;
  ${({theme}) => css`
    color: ${theme.colors.colorWhite};
    background: ${theme.colors.dodgerBlue};
  `}

`;

const BasketCart = ({orderTotal, totalCount}) => {

    return (
        <BasketCartBanner>
            <BasketCartLink to={'/basket'}>
                <Icon size={20} icon={ic_add_shopping_cart} />
                {orderTotal === 0 ? null : (<span>{totalCount} item(s) - ${orderTotal} </span>)}
            </BasketCartLink>
        </BasketCartBanner>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => ({
    orderTotal,
    totalCount: getTotalBasketCart(cartItems)
})

BasketCart.prototype = {
    orderTotal: number,
    totalCount: number
}

export default connect(mapStateToProps, null)(BasketCart);