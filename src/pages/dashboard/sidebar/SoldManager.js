import {
  Container,
  Stack,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import Page from "src/components/Page";
import useSold from "src/hooks/useSold";
import { fShortenNumber } from "src/utils/formatNumber";
import SoldListHead from "./SoldListHead";
import { TABLE_HEAD, USERDATA } from "src/_mock/manatimeMock";
import Image from "src/components/Image";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F2F2F2",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SoldManager() {
  const {
    soldState: { sold },
    soldDispatch,
  } = useSold();

  const handleClick = (id) => {
    soldDispatch({
      payload: sold.filter((item) => item.id !== id),
      type: "setSold",
    });
  };

  return (
    <Page title="Absence">
      <Container maxWidth="xl">
        <Stack sx={{ backgroundColor: "#FFFFFF" }}>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <SoldListHead headLabel={TABLE_HEAD} />

              <TableBody>
                {sold &&
                  sold.map((row) => {
                    const {
                      id,
                      userId,
                      category,
                      period,
                      curSold,
                      takenSold,
                      futurSold,
                    } = row;

                    const { name } = USERDATA.find(
                      (item) => item.id === userId
                    );

                    return (
                      <StyledTableRow key={id} tabIndex={-1} role="checkbox">
                        <StyledTableCell>{name}</StyledTableCell>
                        <StyledTableCell>{category}</StyledTableCell>
                        <StyledTableCell>{period}</StyledTableCell>
                        <StyledTableCell>
                          {fShortenNumber(curSold)}
                        </StyledTableCell>
                        <StyledTableCell>
                          {fShortenNumber(takenSold)}
                        </StyledTableCell>
                        <StyledTableCell>
                          {fShortenNumber(futurSold)}
                        </StyledTableCell>
                        <StyledTableCell sx={{ padding: 1, width: 150 }}>
                          <IconButton>
                            <Image
                              disabledEffect
                              src="./assets/Ajuster.svg"
                              sx={{ width: 28, height: 28 }}
                            />
                          </IconButton>
                          <IconButton>
                            <Image
                              disabledEffect
                              src="./assets/Transferer.svg"
                              sx={{ width: 28, height: 28 }}
                            />
                          </IconButton>
                          <IconButton onClick={() => handleClick(id)}>
                            <Image
                              disabledEffect
                              src="./assets/Solder.svg"
                              sx={{ width: 28, height: 28 }}
                            />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </Page>
  );
}
