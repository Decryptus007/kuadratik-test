import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FilterButtonProps } from "@/types";

const FilterButton = ({ label, onClick }: FilterButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="h-6 px-2 capitalize text-xs text-primary hover:text-primary hover:border hover:border-primary hover:bg-transparent"
    >
      {label} <X className="h-3 w-3 ml-1" />
    </Button>
  );
};

export default FilterButton;
