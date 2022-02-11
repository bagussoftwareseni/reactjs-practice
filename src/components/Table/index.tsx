import React from 'react';
import { Table as CarbonTable, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import './style.css';

const Table: React.FC = () => {
  return (
    <CarbonTable className="table">
      <TableHead className="thead">
        <TableRow>
          <TableHeader>
            Header
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody className="tbody">
        <TableRow className="trow">
          <TableCell className="tcell">
            Test Field
          </TableCell>
        </TableRow>
      </TableBody>
    </CarbonTable>
  )
}

export default Table
