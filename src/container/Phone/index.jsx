import React, {useEffect} from "react";
import {connect} from 'react-redux';
import styled from 'styled-components';
import {array, func, bool} from 'prop-types';

import {fetchPhones, phoneAddedToCart} from "../../action";
import RenderPhone from './RenderPhone';
import Layout from "../Layout";
import ErrorIndicator from '../../components/ErrorIndicator';

const PhonesContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
`;

const PhonesContainerBanner = styled.div`
  width: 30.33%;
  height: 100%;
  padding: 1.5%;
`;

const Phones = ({
                    fetchPhones,
                    phones,
                    loading,
                    onAddedToCart,
                    error
                }) => {
    useEffect(() => {
        fetchPhones();
    }, [fetchPhones]);

    return (
        <Layout>
            <PhonesContainer>
                {error && <ErrorIndicator />}
                {loading && <p>...Loading</p>}
                {phones && phones.map(item =>
                    <PhonesContainerBanner key={item.id}>
                        <RenderPhone phone={item} onAddedToCart={() => onAddedToCart(item.id)} />
                    </PhonesContainerBanner>
                )}
            </PhonesContainer>
        </Layout>
    )
}

const mapStateToProps = ({phoneList: {phones, loading, error}}) => ({
    phones, loading, error
})

const mapDispatchToProps = {
    fetchPhones,
    onAddedToCart: phoneAddedToCart
}

Phones.prototype = {
    fetchPhones: func.isRequired,
    onAddedToCart: func,
    phones: array,
    loading: bool,

}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);