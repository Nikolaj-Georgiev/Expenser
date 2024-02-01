/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { usePagination } from '../../../hooks/usePagination';
import classes from './Table.module.css';
import Button from '../../../UI/Button';

export default function TableView({ data, catType }) {
  const columns = ['What', 'Description', 'When', 'How much'];

  const {
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    totalPages,
    paginate,
  } = usePagination(data);

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const total = useMemo(
    () => data.reduce((sum, row) => sum + row.expensePrice, 0).toFixed(2),
    [data]
  );

  if (!data || data.length === 0) {
    return <p>Няма данни в таз хуйня</p>;
  }

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
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: 0.1 },
                }}
              >
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
              </motion.tr>
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
              {/* &#129192; */}
              {/* ☚ */}⯇
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
              {/* &#129193; */}
              {/* ☛ */}⯈
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
