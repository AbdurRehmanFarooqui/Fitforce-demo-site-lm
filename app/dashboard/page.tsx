"use client";
import React, { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Calendar, User, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { TourModal } from '@/components/tour-modal';
export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [bookings, setBookings] = useState<any[]>([]); // To store the list of classes
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [isTourOpen, setIsTourOpen] = useState(false);
    const [tours, setTours] = useState<any[]>([]);
    const [profile, setProfile] = useState<any>(null);
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUB_KEY!
    );

    useEffect(() => {
        const fetchDashboardData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/');
                return;
            }
            setUser(user);

            // Fetch Profile Data (This is the new part)
            const { data: profileData } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single(); // Get the single row for this user

            if (profileData) setProfile(profileData);

            // Fetch Bookings (existing)
            const { data: bookingsData } = await supabase
                .from('bookings')
                .select('*')
                .eq('user_id', user.id);
            if (bookingsData) setBookings(bookingsData);

            // 3. Fetch Tour Requests (new)
            const { data: toursData } = await supabase
                .from('tours')
                .select('*')
                .eq('user_id', user.id)
                .order('preferred_date', { ascending: true });
            if (toursData) setTours(toursData);

            setLoading(false);
        };
        fetchDashboardData();
    }, [router, supabase, isTourOpen]);

    // 1. Add this function inside your Dashboard component
    const handleCancel = async (bookingId: string) => {
        // Optimistic UI update: Remove from state immediately
        const previousBookings = [...bookings];
        setBookings(bookings.filter(b => b.id !== bookingId));

        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', bookingId);

        if (error) {
            toast.error("Could not cancel booking");
            setBookings(previousBookings); // Rollback if error
        } else {
            toast.success("Booking cancelled");
        }
    };

    if (loading) return <div className="h-screen flex items-center justify-center font-black italic uppercase tracking-tighter text-2xl">Loading...</div>;

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container px-4">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-black uppercase italic">
                        Welcome, <span className="text-primary">{user?.email?.split('@')[0]}</span>
                    </h1>
                    <p className="text-muted-foreground uppercase tracking-widest text-sm">Member Dashboard</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="border-primary/20 bg-card/50 backdrop-blur">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium uppercase">Membership</CardTitle>
                            <Zap className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            {/* Update this line below */}
                            <div className="text-2xl font-bold italic uppercase">
                                {profile?.membership_status || 'FREE TRIAL'}
                            </div>

                            {/* Only show Upgrade link if they aren't 'pro' or 'elite' yet */}
                            {profile?.membership_status !== 'pro' && profile?.membership_status !== 'elite' && (
                                <Link href="/#pricing" className="text-xs text-muted-foreground mt-1 underline cursor-pointer hover:text-primary block mb-2">
                                    Upgrade Plan
                                </Link>
                            )}

                            <Button
                                variant="link"
                                className="text-xs text-primary p-0 h-auto mt-2 font-bold uppercase italic"
                                onClick={() => setIsTourOpen(true)}
                            >
                                Schedule Gym Tour →
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-card/50">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium uppercase">Classes Joined</CardTitle>
                            <Dumbbell className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold italic">{bookings.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {bookings.length > 0 ? "Keep up the momentum!" : "Ready for your first burn?"}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-white/10 bg-card/50">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium uppercase">Goal Progress</CardTitle>
                            <Calendar className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold italic">WEEK 1</div>
                            <p className="text-xs text-muted-foreground mt-1">Stay consistent!</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Upcoming Sessions List */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold uppercase italic">Your Classes</h2>

                        {bookings.length > 0 ? (
                            <div className="grid gap-3">
                                {bookings.map((booking) => (
                                    <div
                                        key={booking.id}
                                        className="flex items-center justify-between p-4 bg-card border border-white/5 rounded-xl group hover:border-red-500/30 transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-red-500/10 transition-colors">
                                                <CheckCircle2 className="h-5 w-5 text-primary group-hover:text-red-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold uppercase italic">{booking.class_name}</h3>
                                                <p className="text-[10px] text-muted-foreground uppercase">
                                                    Joined {new Date(booking.created_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>

                                        {/* The Cancel Button */}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleCancel(booking.id)}
                                            className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10 uppercase text-[10px] font-bold"
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                ))}
                                <Button variant="link" className="text-primary uppercase font-bold text-xs" onClick={() => router.push('/#programs')}>
                                    + Join another class
                                </Button>
                            </div>
                        ) : (
                            <div className="bg-muted/30 rounded-xl p-8 border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                                <p className="text-muted-foreground mb-4">You haven't booked any classes yet.</p>
                                <Button variant="outline" className="uppercase font-bold" onClick={() => router.push('/#programs')}>
                                    Explore Programs
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold uppercase italic">Tour Requests</h2>

                        {tours.length > 0 ? (
                            <div className="grid gap-3">
                                {tours.map((tour) => (
                                    <div
                                        key={tour.id}
                                        className="p-4 bg-card border border-white/5 rounded-xl flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${tour.status === 'confirmed' ? 'bg-green-500/10' : 'bg-yellow-500/10'
                                                }`}>
                                                <Calendar className={`h-5 w-5 ${tour.status === 'confirmed' ? 'text-green-500' : 'text-yellow-500'
                                                    }`} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold uppercase italic text-sm">Gym Walkthrough</h3>
                                                <p className="text-xs text-muted-foreground">
                                                    Date: {new Date(tour.preferred_date).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Status Badge */}
                                        <div className={`text-[10px] font-black uppercase px-2 py-1 rounded border ${tour.status === 'confirmed'
                                            ? 'border-green-500/50 text-green-500 bg-green-500/5'
                                            : 'border-yellow-500/50 text-yellow-500 bg-yellow-500/5'
                                            }`}>
                                            {tour.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-muted/10 rounded-xl p-6 border border-white/5 text-center">
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">No active requests</p>
                            </div>
                        )}
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold uppercase italic">Account Settings</h2>
                        <div className="bg-card border border-white/10 rounded-xl p-6 space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                <span className="text-sm text-muted-foreground uppercase">Email</span>
                                <span className="text-sm font-medium">{user?.email}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                <span className="text-sm text-muted-foreground uppercase">User ID</span>
                                <span className="text-xs font-mono text-muted-foreground">{user?.id.slice(0, 8)}...</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground uppercase">Security</span>
                                <Button variant="link" className="h-auto p-0 text-primary uppercase font-bold text-xs">Reset Password</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add the Modal component at the bottom */}
            <TourModal
                isOpen={isTourOpen}
                onClose={() => setIsTourOpen(false)}
                user={user}
            />
        </div>
    );
}