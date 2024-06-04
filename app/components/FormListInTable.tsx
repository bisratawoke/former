"use client";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
export default function FormListTableUsingTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Name
            </Typography>
          </TableCell>
          <TableCell>Descritpion</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody></TableBody>
    </Table>
  );
}
