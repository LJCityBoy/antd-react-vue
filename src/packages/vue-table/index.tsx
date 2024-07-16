import React from "react";
import { Table, TableProps } from "antd";

interface EditableRowProps {
  index: number;
  bodyCell: any;
}

class AVTable extends React.Component<TableProps> {
  constructor(props: TableProps) {
    super(props);
  }

  render() {
    //cell
    const EditableCell: React.FC<React.PropsWithChildren> = ({
      children,
      ...restProps
    }) => {
      return <td {...restProps}>{children}</td>;
    };
    //row
    const EditableRow: React.FC<EditableRowProps> = ({
      index,
      bodyCell,
      ...props
    }) => {
      return <tr {...props} />;
    };
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };

    return <Table {...this.props} components={components}></Table>;
  }
}

export default AVTable;
