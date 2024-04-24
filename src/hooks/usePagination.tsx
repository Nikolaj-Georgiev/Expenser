import { useDispatch, useSelector } from 'react-redux';
import { paginationActions } from '../store/pagination-slice';

export function usePagination(data) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(paginationActions.setCurrentPage(pageNumber));
    }
  };

  return {
    currentPage,
    itemsPerPage,
    paginate,
    indexOfFirstItem,
    indexOfLastItem,
    totalPages,
  };
}
