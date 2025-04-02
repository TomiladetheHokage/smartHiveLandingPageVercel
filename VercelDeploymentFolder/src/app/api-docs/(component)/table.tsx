"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  data: {
    name: string;
    type?: string;
    description: string;
    required?: boolean;
  }[];
  heading: string;
  headers?: string[];
};
export const TableComponent = ({
  data,
  heading,
  headers = ["Name", "Type", "Description"],
}: Props) => {
  return (
    <div>
      <h1>{heading}</h1>
      <div className="mt-3">
        <Table className="md:w-fit w-full">
          <TableHeader>
            <TableRow>
              {headers.map((head, index) => (
                <TableCell key={index} className="border-e md:min-w-[150px]">
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="border-e">
                  {item.name}
                  {item.required && <span className="text-red-500">*</span>}
                </TableCell>
                {item.type && (
                  <TableCell className="border-e">{item.type}</TableCell>
                )}
                <TableCell className="border-e">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
