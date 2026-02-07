import React, { useState } from "react";
import svgPaths from "@/imports/svg-fw06ab0w8h";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

const Icon = ({ path, color = "#0d0d0e", size = 24 }: { path: string, color?: string, size?: number }) => (
  <div style={{ width: size, height: size }} className="shrink-0">
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="none">
      <path d={path} fill={color} />
    </svg>
  </div>
);

type Permit = {
  date: string;
  description: string;
  orderId: string;
  tripId: string;
  unitId: string;
  license: string;
  status: string;
  id: string;
};

const defaultData: Permit[] = [
  { id: "1", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
  { id: "2", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
  { id: "3", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
  { id: "4", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
  { id: "5", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
  { id: "6", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
  { id: "7", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
  { id: "8", date: "07.12.2024", description: "Description", orderId: "6516355", tripId: "5168446", unitId: "4984112", license: "171BVDE22", status: "Not Submitted" },
];

const columnHelper = createColumnHelper<Permit>();

export const DashboardOverview = () => {
  const [data] = useState(() => [...defaultData]);
  const [selectedId, setSelectedId] = useState<string>("1");

  const columns = [
    columnHelper.display({
      id: "select",
      header: "",
      cell: (info) => (
        <div className="flex justify-center">
          {info.row.original.id === selectedId ? (
            <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center relative shrink-0">
              <div className="bg-brand-white border border-brand-white col-start-1 row-start-1 rounded-full size-[14px]" />
              <div className="bg-brand-black col-start-1 row-start-1 rounded-full size-[8px]" />
            </div>
          ) : (
            <div className="relative rounded-full size-[14px] border border-black" />
          )}
        </div>
      ),
    }),
    columnHelper.accessor("date", {
      header: "Order Date/ Time (CST)",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("description", {
      header: "Load Description",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("orderId", {
      header: "Order ID",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("tripId", {
      header: "Trip ID",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("unitId", {
      header: "Unit ID",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("license", {
      header: "License",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status / Agent",
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="space-y-10 animate-in fade-in duration-500 font-hind">
      {/* Header */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <Icon path={svgPaths.p8ccee80} size={46} color="var(--color-brand-black)" />
          <h1 className="text-[32px] font-bold text-brand-black">Dashboard</h1>
        </div>
        <div className="size-2 rounded-full bg-brand-black" />
        <h2 className="text-[32px] text-brand-black">Active Permits</h2>
      </div>

      {/* Main Table Container */}
      <div className="bg-brand-white rounded-site shadow-site overflow-hidden">
        {/* Toolbar */}
        <div className="flex border-b border-gray-100">
          <button className="flex items-center gap-3 px-6 py-4 border-r border-gray-100 hover:bg-gray-50 transition-colors">
            <Icon path={svgPaths.p17da0b00} size={24} color="var(--color-brand-black)" />
            <span className="text-[20px] font-semibold text-brand-black">Add Filter</span>
          </button>
          <div className="flex-1 flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <Icon path={svgPaths.pc423380} size={24} color="var(--color-brand-black)" />
            <span className="text-[20px] font-semibold text-brand-black">Search</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b border-[rgba(0,0,0,0.2)]">
                  {headerGroup.headers.map((header) => (
                    <th 
                      key={header.id} 
                      className={`px-6 py-4 text-[18px] font-bold text-[#0d0d0e] ${header.id === 'select' ? 'w-[60px] px-4' : ''}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr 
                  key={row.id} 
                  onClick={() => setSelectedId(row.original.id)}
                  className={`h-[60px] transition-colors cursor-pointer ${
                    row.original.id === selectedId 
                      ? 'bg-brand-black text-brand-white' 
                      : 'hover:bg-gray-50 text-brand-black'
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td 
                      key={cell.id} 
                      className={`px-6 py-4 text-[18px] ${cell.column.id === 'select' ? 'px-4' : ''}`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="px-10 py-8 border-t border-gray-100 flex items-center justify-center gap-10">
          <div className="flex items-center gap-4">
            <span className="text-[18px] text-[#0d0d0e]">Show strokes</span>
            <div className="flex items-center gap-2 px-4 py-1.5 border border-[#0d0d0e] rounded-full cursor-pointer hover:bg-gray-50">
              <span className="text-[18px] font-medium">{table.getState().pagination.pageSize}</span>
              <div className="size-3">
                <svg viewBox="0 0 10 6" fill="none">
                  <path d={svgPaths.pffedd00} fill="#0D0D0E" />
                </svg>
              </div>
            </div>
          </div>
          <span className="text-[18px] text-[#0d0d0e]">
            {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}-
            {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, data.length)} 
            out of {data.length}
          </span>
          
          <div className="flex items-center gap-2">
            <button
              className="p-1 disabled:opacity-30"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <div className="rotate-90 size-4">
                <svg viewBox="0 0 10 6" fill="none">
                  <path d={svgPaths.pffedd00} fill="currentColor" />
                </svg>
              </div>
            </button>
            <button
              className="p-1 disabled:opacity-30"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <div className="-rotate-90 size-4">
                <svg viewBox="0 0 10 6" fill="none">
                  <path d={svgPaths.pffedd00} fill="currentColor" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
