/* eslint-disable react/prop-types */
import { useMemo } from 'react';

import { EXPENSES_MOCK } from '../../../util/config';
import classes from './Table.module.css';
import Button from '../../../UI/Button';

export default function TableView({ data }) {
  const columns = ['What', 'Description', 'When', 'How much'];
  // const total = useMemo(
  //   () => data.reduce((sum, row) => sum + row.expensePrice, 0),
  //   [data]
  // );
  const total = useMemo(
    () => EXPENSES_MOCK.reduce((sum, row) => sum + row.expensePrice, 0),
    []
  );

  return (
    <div className={classes.tableWrap}>
      <table
        rules='all'
        className={classes.table}
      >
        <caption>Total expenses in 2024</caption>
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
            <td colSpan='6'>Total expenses</td>
            <td>{total}</td>
          </tr>
        </tfoot>
        <tbody>
          {EXPENSES_MOCK.map((row, index) => (
            <tr key={index}>
              <td>{row.expenseType.image}</td>
              <td>{row.expenseType.name}</td>
              <td>{row.description}</td>
              <td>{row.actionDate}</td>
              <td>{row.expensePrice}</td>
              <td>
                <Button>edit</Button>
              </td>
              <td>
                <Button>delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
