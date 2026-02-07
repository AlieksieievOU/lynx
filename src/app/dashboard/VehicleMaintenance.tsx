import React, { useState } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";

interface Vehicle {
  id: string;
  truckNo: string;
  type: string;
  vin: string;
  plateNo: string;
  weight: string;
  axles: string;
  state: string;
}

const initialVehicles: Vehicle[] = [
  { id: "1", truckNo: "LP-101", type: "Semi-Truck", vin: "1HB...5678", plateNo: "IL-9922X", weight: "80,000 lbs", axles: "5", state: "IL" },
  { id: "2", truckNo: "LP-105", type: "Flatbed", vin: "2G3...9012", plateNo: "IN-4455Y", weight: "75,000 lbs", axles: "4", state: "IN" },
  { id: "3", truckNo: "LP-110", type: "Lowboy", vin: "3FA...1234", plateNo: "WI-1122Z", weight: "90,000 lbs", axles: "6", state: "WI" },
];

export const VehicleMaintenance = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [isEditing, setIsEditing] = useState(false);
  const [currentVehicle, setCurrentVehicle] = useState<Partial<Vehicle> | null>(null);

  const handleEdit = (vehicle: Vehicle) => {
    setCurrentVehicle(vehicle);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentVehicle({
      truckNo: "",
      type: "Semi-Truck",
      axles: "5",
      vin: "",
      plateNo: "",
      state: "IL",
      weight: "80,000"
    });
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update Supabase
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 font-hind animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-h2">Vehicle Maintenance & Updates</h1>
          <p className="text-brand-muted mt-1">Manage your fleet and update vehicle specifications.</p>
        </div>
        <button 
          onClick={handleAddNew}
          className="btn-primary !w-auto flex items-center gap-2"
        >
          <Plus size={20} />
          Add vehicle
        </button>
      </div>

      <div className="card-site !p-0 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-brand-white border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold text-brand-muted">Truck No.</th>
              <th className="px-6 py-4 font-semibold text-brand-muted">Type</th>
              <th className="px-6 py-4 font-semibold text-brand-muted">VIN</th>
              <th className="px-6 py-4 font-semibold text-brand-muted">Plate No.</th>
              <th className="px-6 py-4 font-semibold text-brand-muted">Registered weight</th>
              <th className="px-6 py-4 font-semibold text-brand-muted text-center">Axles</th>
              <th className="px-6 py-4 font-semibold text-brand-muted text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-medium">{vehicle.truckNo}</td>
                <td className="px-6 py-4 text-gray-600">{vehicle.type}</td>
                <td className="px-6 py-4 text-gray-500 font-mono text-sm">{vehicle.vin}</td>
                <td className="px-6 py-4 text-gray-600">{vehicle.plateNo}</td>
                <td className="px-6 py-4 text-gray-600">{vehicle.weight}</td>
                <td className="px-6 py-4 text-gray-600 text-center">{vehicle.axles}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => handleEdit(vehicle)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-brand-black text-brand-white">
              <h2 className="text-2xl font-bold">Update Truck Details</h2>
              <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="label-site !text-sm">Truck No.</label>
                  <input 
                    type="text" 
                    defaultValue={currentVehicle?.truckNo}
                    className="input-site !text-base"
                    placeholder="e.g. LP-101"
                  />
                </div>
                <div className="space-y-2">
                  <label className="label-site !text-sm">Type</label>
                  <select 
                    defaultValue={currentVehicle?.type}
                    className="input-site !text-base appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em]"
                  >
                    <option>Semi-Truck</option>
                    <option>Flatbed</option>
                    <option>Lowboy</option>
                    <option>Dump Truck</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">Axles</label>
                  <input 
                    type="number" 
                    defaultValue={currentVehicle?.axles}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">VIN</label>
                  <input 
                    type="text" 
                    defaultValue={currentVehicle?.vin}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">Plate No.</label>
                  <input 
                    type="text" 
                    defaultValue={currentVehicle?.plateNo}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600">State</label>
                  <input 
                    type="text" 
                    defaultValue={currentVehicle?.state}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-semibold text-gray-600">Registered Weight</label>
                  <input 
                    type="text" 
                    defaultValue={currentVehicle?.weight}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
