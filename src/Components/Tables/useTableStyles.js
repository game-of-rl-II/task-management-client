export const useTableStyles = () => {
  const customTableStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        backgroundColor: '#ECFCCB',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  return [customTableStyles]
}
