import { SidebarProvider } from './SidebarContext';
import { AuthProvider } from './FirebaseAuthContext';
import { SessionProvider } from './SessionContext';
import { BookingProvider } from './BookingContext';
import { HotelProvider } from './HotelContext';
import { RoomProvider } from './RoomContext';

export const providers = [
    <SidebarProvider key={1} />,
    <AuthProvider key={2} />,
    <SessionProvider key={3} />,
    <BookingProvider key={4} />,
    <HotelProvider key={5} />,
    <RoomProvider key={6} />,
]