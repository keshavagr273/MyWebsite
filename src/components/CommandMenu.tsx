"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Folder,
  Palette,
  LucideIcon,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Section {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const [query, setQuery] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const sections: Section[] = [
    {
      id: "projectspage",
      title: "Projects",
      description: "View all my projects",
      icon: Folder,
      category: "Pages",
    },
  ];

  const filteredSections = sections.filter(
    (section: Section) =>
      section.title.toLowerCase().includes(query.toLowerCase()) ||
      section.description.toLowerCase().includes(query.toLowerCase()) ||
      section.category.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredSections.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredSections.length - 1,
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredSections[selectedIndex]) {
          handleSelectItem(filteredSections[selectedIndex]);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredSections, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const handleSelectItem = (section: Section): void => {
    router.push(`/${section.id}`);
    onClose();
  };


  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-[#09090B]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 left-0 z-50 flex justify-center pt-[8vh]">
        <div className="mx-4 w-full max-w-2xl overflow-hidden rounded-xl border-2 border-[#1C1C1F] bg-[#09090B] shadow-2xl">
          <div className="flex items-center gap-4 border-b-2 border-[#1C1C1F] p-5">
            <Search className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for pages and sections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent font-sans text-lg text-white placeholder-gray-400 outline-none"
            />
            <div className="flex items-center gap-2">
              <kbd className="rounded-md border border-[#252528] bg-[#1C1C1F] px-2 py-1 font-mono text-xs text-gray-400">
                esc
              </kbd>
              <button
                onClick={onClose}
                className="rounded-md p-1 text-gray-400 transition-colors hover:bg-[#1C1C1F] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className=" max-h-96 overflow-y-auto">
            {filteredSections.length === 0 ? (
              <div className="p-12 text-center text-gray-400">
                <div className="mb-3">
                  <Search className="mx-auto h-12 w-12 opacity-30" />
                </div>
                <p className="font-sans text-lg">No results found</p>
                {query && (
                  <p className="mt-2 text-sm opacity-75">
                    Try searching for something else
                  </p>
                )}
              </div>
            ) : (
              <div ref={listRef} className="p-3">
                {filteredSections.map((section: Section, index: number) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleSelectItem(section)}
                      className={`group flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all duration-200 ${
                        index === selectedIndex
                          ? "scale-[1.02] transform bg-[#1C1C1F] text-white ring-2 ring-[#252528]"
                          : "text-gray-300 hover:bg-[#0F0F10] hover:text-white"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                          index === selectedIndex
                            ? "bg-[#252528] text-white"
                            : "bg-[#1C1C1F] text-gray-400 group-hover:bg-[#252528] group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 truncate font-sans text-base font-semibold">
                          {section.title}
                        </div>
                        <div className="truncate font-sans text-sm text-gray-400">
                          {section.description}
                        </div>
                      </div>
                      <div
                        className={`rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors ${
                          index === selectedIndex
                            ? "bg-[#252528] text-gray-300"
                            : "bg-[#1C1C1F] text-gray-500"
                        }`}
                      >
                        {section.category}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t-2 border-[#1C1C1F] bg-[#0A0A0A] p-5">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <kbd className="rounded border border-[#252528] bg-[#1C1C1F] px-2 py-1 font-mono text-xs">
                    ↑
                  </kbd>
                  <kbd className="rounded border border-[#252528] bg-[#1C1C1F] px-2 py-1 font-mono text-xs">
                    ↓
                  </kbd>
                </div>
                <span className="font-sans">navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="rounded border border-[#252528] bg-[#1C1C1F] px-2 py-1 font-mono text-xs">
                  ↵
                </kbd>
                <span className="font-sans">select</span>
              </div>
            </div>
            <div className="font-sans text-sm text-gray-500">
              @code by KESHAV
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandMenu;
