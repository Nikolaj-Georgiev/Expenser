/* eslint-disable react/prop-types */
// import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { paginationActions } from '../../../store/pagination-slice';
import { motion, AnimatePresence } from 'framer-motion';

import { EXPENSES_MOCK, SAVINGS_MOCK } from '../../../util/config';
import classes from './Table.module.css';
import Button from '../../../UI/Button';

export default function TableView({ data }) {
  const columns = ['What', 'Description', 'When', 'How much'];

  const catType = useSelector((state) => state.dashboard.catTypes);

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const currentData = catType === 'savings' ? SAVINGS_MOCK : EXPENSES_MOCK; // mock data to check the logic and the styling
  const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(paginationActions.setCurrentPage(pageNumber));
    }
  };

  const total = currentData
    .reduce((sum, row) => sum + row.expensePrice, 0)
    .toFixed(2);

  if (!currentData || currentData.length === 0) {
    return <p>Няма данни в таз хуйня</p>;
  }

  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  return (
    <>
      <div className={classes.tableWrap}>
        <table
          rules='all'
          className={classes.table}
        >
          <caption>{`Total ${catType} in 2024`}</caption>
          <thead>
            <tr>
              <th colSpan='2'>{columns[0]}</th>
              {columns.slice(1).map((column, index) => (
                <th key={index}>{column}</th>
              ))}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td
                className={classes.footerText}
                colSpan='4'
              >
                {`Total ${catType}`}
              </td>
              <td>{total}</td>
            </tr>
          </tfoot>
          <tbody>
            {currentItems.map((row, index) => (
              <tr key={index}>
                <td className={classes.imageCell}>
                  <div className={classes.imageDiv}>
                    <img
                      className={classes.tableImage}
                      src={row.expenseType.image}
                    />
                  </div>
                </td>
                <td className={classes.colCell}>{row.expenseType.name}</td>
                <td className={classes.descriptionTd}>{row.description}</td>
                <td className={classes.colCell}>{row.actionDate}</td>
                <td className={classes.numberCell}>
                  {row.expensePrice.toFixed(2)}
                </td>
                <td className={classes.colCell}>
                  <Button isTable={true}>edit</Button>
                </td>
                <td className={classes.colCell}>
                  <Button isTable={true}>delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className={classes.pagination}>
          <li>
            <Button
              className={classes.prev}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &#129192;
            </Button>
          </li>
          {[...Array(totalPages).keys()].map((number) => (
            <Button
              key={number + 1}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Button>
          ))}
          <li>
            <Button
              className={classes.next}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &#129193;
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}

// const total = useMemo(
//   () => data.reduce((sum, row) => sum + row.expensePrice, 0),
//   [data]
// );
// const total = useMemo(
//   () => EXPENSES_MOCK.reduce((sum, row) => sum + row.expensePrice, 0),
//   []
// );
