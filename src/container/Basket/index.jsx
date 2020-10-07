import React from 'react';
import * as  R from 'ramda';
import { connect } from 'react-redux';
import styled, {css} from 'styled-components';
import {Icon} from "react-icons-kit";
import {plus} from 'react-icons-kit/icomoon/plus';
import {minus} from 'react-icons-kit/icomoon/minus';
import {array, number, func} from 'prop-types';

import {
    phoneAddedToCart,
    phoneRemovedFromCart
} from '../../action';
import RenderSidebar from "./RenderSidebar";

const BasketBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BasketBannerContainer = styled.div`
  width: 1000px;
  display: flex;
  .content{
    width: 70%;
  }
  .sidebar{
    width: 30%;
    padding: 70px 20px 10px 20px;
    display: flex;
    
  }
`;

const RenderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  table{
    tr{
      width: 100%;
      display: flex;      
      justify-content: space-between;
    }
    
    td{
      width: 100%;
      border: 1px solid silver;
      display: flex;
      align-items: center;
      justify-content: center; 
      flex-wrap: wrap;
      span{
        cursor:pointer;
      }
      strong{
        padding: 20px;
      }
    }
    img{
      width: 100px;
      padding: 5px;
      ${({theme}) => css`
       box-shadow: 0 0 5px ${theme.colors.borderShadow};
      `}
    }
    
  }
`;

const Basket = ({
                   items,
                   total,
                   onIncrease,
                   onDelete
}) => {

    const isBasketEmpty = R.isEmpty(items)
    const renderContent = () => {

        return (
            <RenderContent>
                <h2>Your Order</h2>
                {isBasketEmpty && <div>Your shopping cart is empty</div>}
                {!isBasketEmpty &&
                <>
                    <table>
                        <tbody>
                        {items.map(({id, name, count, total, image}, idx) =>(
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td><img src={image} alt={name}/></td>
                                <td>{name}</td>
                                <td>{total}</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(id)}
                                    >
                                        <Icon icon={minus} size={20} />
                                    </button>
                                    <strong>
                                        {count}
                                    </strong>
                                    <button
                                        onClick={() => onIncrease(id)}
                                    >
                                        <Icon icon={plus} size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div>
                        Total: ${total}
                    </div>
                </>
                }
            </RenderContent>
        )
    };

    return (
        <BasketBanner>
            <BasketBannerContainer>
                <div className={'content'}>
                    {renderContent()}
                </div>
                <div className={'sidebar'}>
                    <RenderSidebar />
                </div>
            </BasketBannerContainer>
        </BasketBanner>

    );
};
const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}
const mapDispatchToProps = {
    onIncrease: phoneAddedToCart,
    onDelete: phoneRemovedFromCart
}

Basket.propTypes = {
    items: array,
    total: number,
    onIncrease: func,
    onDelete: func
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);