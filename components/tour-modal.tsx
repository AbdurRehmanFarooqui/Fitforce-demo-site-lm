"use client";
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createBrowserClient } from '@supabase/ssr';
import { toast } from 'sonner';

export const TourModal = ({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: any }) => {
    const [loading, setLoading] = useState(false);
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData(e.currentTarget);
        const tourData = {
            user_id: user.id,
            user_email: user.email,
            phone: formData.get('phone'),
            preferred_date: formData.get('date'),
        };

        const { error } = await supabase.from('tours').insert([tourData]);

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Tour requested! We'll call you shortly.");
            onClose();
        }
        setLoading(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[400px] border-primary/20 bg-card">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase italic">Book a <span className="text-primary">VIP Tour</span></DialogTitle>
                    <DialogDescription>Pick a date and we'll show you the floor.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" name="date" type="date" required className="block" />
                    </div>
                    <Button type="submit" className="w-full font-bold uppercase italic" disabled={loading}>
                        {loading ? "Scheduling..." : "Confirm Request"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};