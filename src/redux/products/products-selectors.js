const getFilter = state => state.products.filter;

const getProducts = state => {
    const filter = getFilter(state);
    return state.products.productsItems.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
};

export {getProducts, getFilter};
