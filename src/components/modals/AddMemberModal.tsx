import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAddTeamMember } from "@/service/mutation/use-add-team-member";
import { toast } from "sonner";

interface AddMemberModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function AddMemberModal({ open, setOpen }: AddMemberModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const [error, setError] = useState("");

    const createMutation = useAddTeamMember(setOpen);

    const handleSave = () => {
        if (name.trim() === "" && email.trim() === "" && role.trim() === "") {
            toast.error("Please Fill all the required fields");
            setError("Please Fill all the required fields");
            return;
        }

        const payload = {
            name,
            email,
            role,
        };

        console.log("payload", payload);
        createMutation.mutateAsync(payload);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={() => {
                setOpen(false);
                setError("");
            }}
        >
            <DialogContent className="sm:max-w-sm w-[90%] rounded-2xl p-5">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold capitalize">
                        Add Member
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="transition-smooth"
                        placeholder="Enter Name"
                    />
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="transition-smooth"
                        placeholder="Enter Email"
                    />
                    <Input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="transition-smooth"
                        placeholder="Enter Role"
                    />

                    <span className="text-red-500 text-md text-center mt-5">
                        {error && error}
                    </span>
                    <div className="flex justify-end gap-2">
                        <Button
                            variant="outline"
                            disabled={createMutation.isPending}
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            className="bg-primary hover:shadow-glow"
                            disabled={createMutation.isPending}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
