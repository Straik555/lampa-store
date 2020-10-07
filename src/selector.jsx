import * as R from 'ramda';

export const getTotalBasketCart = phone => {
    const totalCount = R.compose(
        R.sum(),
        R.pluck('count')
    )(phone)
    return totalCount
}
