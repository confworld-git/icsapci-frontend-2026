import React, { useState } from "react";
import { addonsList } from "../utils/journalData";

const Addons = ({ selectedAddons, setSelectedAddons }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.id === addon.id);
      if (exists) return prev.filter((a) => a.id !== addon.id);
      return [...prev, addon];
    });
  };

  const isSelected = (id) => selectedAddons.some((a) => a.id === id);

  const totalAddonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="py-6">
      {/* Toggle button */}
      <div className="flex justify-center mb-6">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 bg-[#8BB314] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#7aa010] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <span>☰</span>
          {expanded ? "Hide" : "Add"} Addons
          {selectedAddons.length > 0 && (
            <span className="bg-white text-[#3a4a00] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ml-1">
              {selectedAddons.length}
            </span>
          )}
        </button>
      </div>

      {/* Addons grid — animated expand/collapse */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mb-4 text-center"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addonsList.map((addon) => {
            const selected = isSelected(addon.id);
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => toggleAddon(addon)}
                className={`
                  relative text-left p-4 rounded-2xl border-2 transition-all duration-200 w-full
                  ${
                    selected
                      ? "border-[#3a4a00] bg-[#3a4a00] shadow-md shadow-[#3a4a00]/20"
                      : "border-gray-200 bg-white hover:border-[#8BB314]/50 hover:shadow-md"
                  }
                `}
              >
                {/* Check indicator */}
                <div
                  className={`
                    absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                    ${
                      selected
                        ? "bg-[#8BB314] border-[#8BB314]"
                        : "border-gray-300 bg-white"
                    }
                  `}
                >
                  {selected && (
                    <span className="text-white text-[10px] font-bold">✓</span>
                  )}
                </div>

                {/* Icon */}
                <div className="text-2xl mb-2">{addon.icon}</div>

                {/* Text */}
                <p
                  className={`font-semibold text-sm mb-0.5 pr-6 ${
                    selected ? "text-white" : "text-[#3a4a00]"
                  }`}
                >
                  {addon.label}
                </p>
                {addon.sublabel && (
                  <p
                    className={`text-xs mb-2 ${
                      selected ? "text-[#c8e06a]" : "text-gray-400"
                    }`}
                  >
                    {addon.sublabel}
                  </p>
                )}

                {/* Price */}
                <p
                  className={`text-lg font-extrabold ${
                    selected ? "text-white" : "text-[#3a4a00]"
                  }`}
                >
                  ${addon.price}{" "}
                  <span
                    className={`text-xs font-normal ${
                      selected ? "text-[#c8e06a]" : "text-gray-400"
                    }`}
                  >
                    USD
                  </span>
                </p>
              </button>
            );
          })}
        </div>

        {/* Addons summary */}
        {selectedAddons.length > 0 && (
          <div className="mt-5 bg-[#3a4a00] border border-[#3a4a00] rounded-xl p-4">
            <p className="text-xs font-semibold text-[#c8e06a] uppercase tracking-wider mb-3">
              Selected Add-ons
            </p>
            <div className="space-y-2">
              {selectedAddons.map((addon) => (
                <div
                  key={addon.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-white/80 flex items-center gap-2">
                    <span>{addon.icon}</span>
                    {addon.label}
                    {addon.sublabel && (
                      <span className="text-[#c8e06a]/70">({addon.sublabel})</span>
                    )}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm text-[#c8e06a]">
                      +${addon.price}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAddon(addon);
                      }}
                      className="text-red-400 hover:text-red-300 text-xs font-medium"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-[#8BB314]/30 flex justify-between">
              <span className="font-semibold text-sm text-white">
                Add-ons Total
              </span>
              <span className="font-bold text-[#c8e06a]">
                +${totalAddonsAmount}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Collapsed summary when addons selected but panel is hidden */}
      {!expanded && selectedAddons.length > 0 && (
        <div className="mt-3 flex items-center justify-between bg-[#3a4a00] border border-[#3a4a00] rounded-xl px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-[#8BB314] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {selectedAddons.length}
              </span>
            </span>
            <span className="text-sm font-medium text-white">
              {selectedAddons.length} add-on{selectedAddons.length > 1 ? "s" : ""} selected
            </span>
          </div>
          <span className="font-bold text-[#c8e06a]">+${totalAddonsAmount}</span>
        </div>
      )}
    </div>
  );
};

export default Addons;