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
            <td
              className={classes.footerText}
              colSpan='4'
            >
              Total expenses
            </td>
            <td>{total}</td>
          </tr>
        </tfoot>
        <tbody>
          {EXPENSES_MOCK.map((row, index) => (
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
              <td className={classes.numberCell}>{row.expensePrice}</td>
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
    </div>
  );
}
