
import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const rows = [
    { feature: "Premium THCa Selection", goldy: true, other: false },
    { feature: "Full-Spectrum Terpenes", goldy: true, other: false },
    { feature: "Sustainable Organic Sourcing", goldy: true, other: "Sometimes" },
    { feature: "Rigorous Lab-Tested Purity", goldy: true, other: false },
    { feature: "No Pesticides or Additives", goldy: true, other: false },
  ];

  return (
    <section className="py-24 bg-[#F5F5DA]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1A1A1A]">The <span className="text-[#0C8281]">Gold Standard</span></h2>
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-gray-100">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-8 font-bold text-gray-500 uppercase text-xs tracking-widest">Everything You Need</th>
                <th className="p-8 text-center bg-[#F5F5DA]/50">
                  <span className="text-[#0C8281] italic text-2xl font-bold">Goldy's</span>
                </th>
                <th className="p-8 text-center font-bold text-gray-400">Regular Brands</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="p-8 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-8 text-center bg-[#F5F5DA]/20">
                    <div className="flex justify-center">
                      <div className="bg-[#0C8281] rounded-full p-1">
                        <Check size={16} className="text-white" />
                      </div>
                    </div>
                  </td>
                  <td className="p-8 text-center">
                    <div className="flex justify-center">
                      {typeof row.other === 'boolean' ? (
                        <X size={20} className="text-gray-300" />
                      ) : (
                        <span className="text-sm font-medium text-gray-400">{row.other}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
