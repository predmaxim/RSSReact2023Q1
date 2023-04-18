import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductSortProps, QueryObj, ProductResponse, Product } from './api.props';

const PROTOCOL = 'https';
const BASE = 'dummyjson.com';
const URL = `${PROTOCOL}://${BASE}`;
const PRODUCT_PAGE_DEFUALT = 1;
const PRODUCT_LIMIT_DEFUALT = 8;
const PRODUCT_SORT_DEFUALT = 'asc';
const PRODUCT_SORT_TYPE_DEFUALT = 'rating';

const createNewProps = (props: QueryObj) => {
  const limit = props.limit !== undefined && props.limit >= 0 ? props.limit : PRODUCT_LIMIT_DEFUALT;
  const page = props.page ? props.page : PRODUCT_PAGE_DEFUALT;
  const skip = limit * page - limit;
  const search = props.search ? props.search : '';
  const sort = props.sort ? props.sort : PRODUCT_SORT_DEFUALT;
  const sortType = props.sortType ? props.sortType : PRODUCT_SORT_TYPE_DEFUALT;
  return { limit, skip, search, sort, sortType };
};

const sortProducts = ({ products, sort, sortType }: ProductSortProps): Product[] => {
  const sortDirection = sort ? sort : PRODUCT_SORT_DEFUALT;
  return products.sort((a: Product, b: Product) => {
    if (typeof a[sortType] === 'string') {
      if (sortDirection === PRODUCT_SORT_DEFUALT) {
        return (<string>a[sortType]).toLowerCase() > (<string>b[sortType]).toLowerCase() ? 1 : -1;
      } else {
        return (<string>a[sortType]).toLowerCase() < (<string>b[sortType]).toLowerCase() ? 1 : -1;
      }
    }
    if (typeof a[sortType] === 'number') {
      return sortDirection === PRODUCT_SORT_DEFUALT
        ? <number>a[sortType] - <number>b[sortType]
        : <number>b[sortType] - <number>a[sortType];
    }
    return <number>a[sortType];
  });
};

const get = async (query?: string): Promise<ProductResponse> =>
  await fetch(`${URL}/${query}`, { method: 'GET' }).then((data) => data.json());

const getProducts = async (props: QueryObj): Promise<ProductResponse> => {
  const { limit } = createNewProps(props);
  const query = `products?limit=${limit}`;
  return await get(query).then((data: ProductResponse) => {
    return { products: data.products, total: data.total };
  });
};

const searchProducts = async (props: QueryObj): Promise<ProductResponse> => {
  const { limit, skip, search, sort, sortType } = createNewProps(props);
  const query = `products/search?q=${search}&limit=${limit}&skip=${skip}`;
  return await get(query).then((data: ProductResponse) => {
    const { products, total } = data;
    return { products: sortProducts({ products, sortType, sort }), total };
  });
};

export const searchProductsApi = createApi({
  reducerPath: 'productsQuery',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    searchProducts: builder.query<ProductResponse, QueryObj>({
      query: (arg: QueryObj) => {
        const { search } = createNewProps(arg);
        return `products/search?q=${search}&limit=0&skip=0`;
      },
      transformResponse: (response: ProductResponse, meta, arg) => {
        const { sort, sortType } = createNewProps(arg);
        return {
          ...response,
          products: sortProducts({
            products: response.products as Product[],
            sortType,
            sort,
          }),
        };
      },
      providesTags: (result) => {
        if (result?.products) {
          return [
            ...result.products.map(({ id }) => ({ type: 'Products' as const, id })),
            { type: 'Products', id: 'LIST' },
          ];
        }
        return [{ type: 'Products', id: 'LIST' }];
      },
    }),
  }),
});

export const { useSearchProductsQuery } = searchProductsApi;
export { searchProducts, getProducts, get, PRODUCT_LIMIT_DEFUALT, PRODUCT_PAGE_DEFUALT };
