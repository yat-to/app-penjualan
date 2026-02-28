"use client";
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { useRouter } from 'next/navigation';

import { menu } from '@/data/menu';

const ListMenu = ({ item }) => {
    const router = useRouter(); // Pastikan router dipanggil di sini juga
    const hasChildren = item.children && item.children.length > 0;
    const [isOpen, setIsOpen] = useState(false)
    const DynamicIcon = LucideIcons[item.icon];
    const ChevronIcon = LucideIcons['ChevronDown'];

    const handleClick = () => {
        if (hasChildren) {
            // Jika punya anak, buka/tutup dropdown
            setIsOpen(!isOpen);
        } else {
            // Jika TIDAK punya anak, pindah ke URL-nya
            if (item.url) {
                router.push(item.url);
            }
        }
    };

    return (
        <li className="list-none">
            <div 
                onClick={handleClick}
                className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-colors"
            >
                <div className="flex items-center gap-4">
                    {DynamicIcon ? <DynamicIcon size={20} /> : " "}
                    <span>{item.title}</span>
                </div>
                
                {hasChildren && (
                    <span className={`text-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronIcon />
                    </span>
                )}
            </div>
            
            {hasChildren && isOpen && (
                <ul className="ml-9 mt-1 border-l border-gray-200 space-y-1">
                    {item.children.map((child) => (
                        <ListMenu key={child.title} item={child} />
                    ))}
                </ul>
            )}
        </li>
    )
}

function Sidebar() {
    return (
        <div>
            <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0">
                {/* Brand Logo Section */}
                <div className="p-6">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <span className="text-xl font-bold text-gray-800">App Name</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 space-y-1">
                    {
                        menu.map((item) => (
                            <ListMenu key={item.title} item={item} />
                        ))
                    }
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar