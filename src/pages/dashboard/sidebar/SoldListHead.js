import { TableRow, TableCell, TableHead } from "@mui/material";

export default function SoldListHead({ headLabel }) {
  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
          >
            {headCell.label?.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
