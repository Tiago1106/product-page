"use client";

// IMPORTS
import { ShoppingCart, Heart, User } from "lucide-react";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// MOCK CATEGORIES
const categories = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Puma" },
  { id: 4, name: "Converse" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between h-16 w-full border-b border-border-secondary border-dashed fixed top-0 left-0 right-0 z-50 bg-background px-4">
      {/* Logo */}

      {/* Desktop Menu */}
      <nav className="hidden lg:flex flex-row items-center gap-4 flex-1 px-4">
        {categories.map((category) => (
          <Button variant="ghost" key={category.id}>
            {category.name}
          </Button>
        ))}
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center gap-4">
        <Input type="text" placeholder="Procurar produto..." className="hidden lg:block" />
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}