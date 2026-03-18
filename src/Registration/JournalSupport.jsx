import React, { useState } from "react";
import { journalPackages } from "../utils/journalData";
import PackageInclusionsModal from "./PackageInclusionsModal";

const JournalSupport = ({ selectedJournal, setSelectedJournal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (pkg) => {
    if (selectedJournal?.id === pkg.id) {
      setSelectedJournal(null);
    } else {
      setSelectedJournal(pkg);
    }
  };

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#8BB314] mb-2">
          Research Publication Support
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
          Increase the impact of your research with structured support for
          publication in Q1, Q2, Q3, Q4 Scopus indexed journals.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {journalPackages.map((pkg) => {
          const isSelected = selectedJournal?.id === pkg.id;
          const isHighlighted = !!pkg.badge;

          return (
            <div
              key={pkg.id}
              className={`
                relative rounded-2xl border-2 p-5 flex flex-col transition-all duration-200
                ${
                  isSelected
                    ? "border-[#3a4a00] shadow-lg shadow-[#3a4a00]/20 bg-[#3a4a00]"
                    : isHighlighted
                    ? "border-[#8BB314] bg-[#f6faeb]"
                    : "border-gray-200 bg-white hover:border-[#8BB314]/50 hover:shadow-md"
                }
              `}
            >
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-[#8BB314] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              )}

              {/* Tier name */}
              <h3
                className={`font-bold text-base mb-0.5 pr-8 pb-4 ${
                  isSelected ? "text-white" : "text-[#3a4a00]"
                }`}
              >
                {pkg.tier}
              </h3>

              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-amber-400 text-xs font-semibold">
                  ⚡ Exclusive Offer
                </span>
                <span
                  className={`text-2xl font-extrabold ${
                    isSelected ? "text-white" : "text-[#3a4a00]"
                  }`}
                >
                  ${pkg.specialPrice.toLocaleString()}
                </span>
              </div>
              <p
                className={`text-xs mb-5 ${
                  isSelected ? "text-[#c8e06a]" : "text-gray-400"
                }`}
              >
                Regular:{" "}
                <span className="line-through">
                  ${pkg.regularPrice.toLocaleString()} USD
                </span>
              </p>

              {/* Savings badge */}
              <div
                className={`mb-4 inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg w-fit ${
                  isSelected
                    ? "bg-[#8BB314]/30 text-[#c8e06a]"
                    : "bg-green-50 text-green-700"
                }`}
              >
                Save ${(pkg.regularPrice - pkg.specialPrice).toLocaleString()}
              </div>

              {/* Actions — pushed to bottom */}
              <div className="mt-auto flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleSelect(pkg)}
                  className={`
                    w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200
                    ${
                      isSelected
                        ? "bg-[#8BB314] text-white hover:bg-[#7aa010]"
                        : "bg-[#8BB314] text-[#3a4a00] border border-[#8BB314]/40 hover:bg-[#8BB314]/20"
                    }
                  `}
                >
                  {isSelected ? "✓ Added" : "Add"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* View Full Inclusions button */}
      <div className="flex pt-4">
  <button
    type="button"
    onClick={() => setModalOpen(true)}
    className="py-2 px-4 rounded-xl border text-[#8BB314] text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ml-auto"
    
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(58,74,0,0.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
    }}
  >
    <span>👁</span> View Full Inclusions
  </button>
</div>
      

      {/* Selected summary */}
      {selectedJournal && (
        <div className="mt-5 flex items-center justify-between bg-[#3a4a00] border border-[#3a4a00] rounded-xl px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#8BB314] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </span>
            <span className="text-sm font-medium text-white">
              {selectedJournal.tier} selected
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#c8e06a]">
              +${selectedJournal.specialPrice.toLocaleString()}
            </span>
            <button
              type="button"
              onClick={() => setSelectedJournal(null)}
              className="text-xs text-red-400 hover:text-red-300 font-medium underline"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      <PackageInclusionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default JournalSupport;