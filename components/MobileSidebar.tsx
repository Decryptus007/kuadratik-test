import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileSidebar = ({ open, onOpenChange }: MobileSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Filters & Categories</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;