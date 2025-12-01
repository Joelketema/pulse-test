import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";

const statuses = ["In Progress", "Planning", "Review"];
const priorities = ["High", "Medium", "Low"];

const FilterProjects = ({
    filters,
    setFilters,
    applyFilters,
    resetFilters,
    isSheetOpen,
    setIsSheetOpen,
}: any) => {
    return (
        <>
            <div>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Filter Projects</SheetTitle>
                        </SheetHeader>

                        <div className="space-y-4 mt-6">
                            <Input
                                type="text"
                                placeholder="Enter query"
                                value={filters.search ?? ""}
                                onChange={(e) =>
                                    setFilters((p) => ({
                                        ...p,
                                        search: e.target.value || null,
                                    }))
                                }
                            />

                            <Select
                                value={filters.status ?? ""}
                                onValueChange={(v) =>
                                    setFilters((p) => ({
                                        ...p,
                                        status: v || null,
                                    }))
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {statuses?.map((status, index) => (
                                        <SelectItem key={index} value={status}>
                                            {status}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select
                                value={filters.priority ?? ""}
                                onValueChange={(v) =>
                                    setFilters((p) => ({
                                        ...p,
                                        priority: v || null,
                                    }))
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    {priorities.map((priority, index) => (
                                        <SelectItem
                                            key={index}
                                            value={priority}
                                        >
                                            {priority}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <div className="flex gap-2 pt-4">
                                <Button
                                    className="flex-1"
                                    onClick={applyFilters}
                                >
                                    Apply filters
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={resetFilters}
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default FilterProjects;
