"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/supabase";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Logo from "@/assets/images/piwc-logo.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
      setIsAdmin(data.user?.user_metadata?.role === "admin");
      setMounted(true);
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      setIsAdmin(currentUser?.user_metadata?.role === "admin");
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
    router.push("/");
  };

  const handleNav = (href: string) => {
    router.push(href);
    setMobileOpen(false);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm px-1.5 md:px-4">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          onClick={() => router.push("/")}
          className="text-lg font-extrabold cursor-pointer text-primary hover:opacity-90 transition"
        >
          <Image src={Logo} alt="The PIWC Network" width={40} height={40} />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/jobs">Jobs</NavLink>
          {isAdmin && <NavLink href="/admin/dashboard">Admin Panel</NavLink>}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          {!user ? (
            <>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <span
                  className="cursor-pointer hover:text-foreground transition"
                  onClick={() => router.push("/signin")}
                >
                  Log In
                </span>
                <span className="text-gray-300">|</span>
                <span
                  className="cursor-pointer hover:text-foreground transition"
                  onClick={() => router.push("/signup")}
                >
                  Sign Up
                </span>
              </div>
              <Button
                className="bg-blue-900 text-white hover:bg-blue-800"
                onClick={() => router.push("/post-job")}
              >
                Post A Job
              </Button>
            </>
          ) : (
            <>
              <Button
                className="bg-blue-900 text-white hover:bg-blue-800"
                onClick={() => router.push("/post-job")}
              >
                Post A Job
              </Button>
              <UserDropdown
                user={user}
                isAdmin={isAdmin}
                onLogout={handleLogout}
              />
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-6 pt-4 bg-white border-t shadow-md absolute top-[60px] left-0 w-full z-40"
          >
            <nav className="flex flex-col gap-4 text-sm text-muted-foreground">
              <NavLink href="/" onClick={() => handleNav("/")}>
                Home
              </NavLink>
              <NavLink href="/jobs" onClick={() => handleNav("/jobs")}>
                Jobs
              </NavLink>
              {isAdmin && (
                <NavLink
                  href="/admin/users"
                  onClick={() => handleNav("/admin/users")}
                >
                  Admin
                </NavLink>
              )}
            </nav>

            <div className="mt-6 border-t pt-4 space-y-2">
              <Button
                className="w-full bg-blue-900 text-white hover:bg-blue-800"
                onClick={() => handleNav("/post-job")}
              >
                Post a Job
              </Button>
              {!user ? (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleNav("/signup")}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleNav("/signin")}
                  >
                    Sign In
                  </Button>
                </>
              ) : (
                <LogoutDialog onConfirm={handleLogout}>
                  <Button variant="destructive" className="w-full">
                    Logout
                  </Button>
                </LogoutDialog>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="hover:text-foreground transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function UserDropdown({
  user,
  onLogout,
  isAdmin,
}: {
  user: any;
  onLogout: () => void;
  isAdmin: boolean;
}) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer hover:ring-2 hover:ring-muted transition">
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback>{user?.email?.[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="font-medium truncate">
              {user?.user_metadata?.full_name ?? "Account"}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {user?.email}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => (location.href = "/post-job")}>
            Post a job
          </DropdownMenuItem>
          {isAdmin && (
            <DropdownMenuItem
              onClick={() => (location.href = "/admin/dashboard")}
            >
              Admin Panel
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setShowLogoutDialog(true);
            }}
            className="text-destructive cursor-pointer"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <LogoutDialog
        open={showLogoutDialog}
        onOpenChange={setShowLogoutDialog}
        onConfirm={onLogout}
      />
    </>
  );
}

type LogoutDialogProps =
  | {
      open: boolean;
      onOpenChange: (value: boolean) => void;
      onConfirm: () => void;
      children?: never;
    }
  | {
      onConfirm: () => void;
      children: React.ReactNode;
      open?: never;
      onOpenChange?: never;
    };

function LogoutDialog(props: LogoutDialogProps) {
  const handleConfirm = () => {
    setTimeout(() => {
      props.onConfirm();
    }, 150);
  };

  const content = (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
      </AlertDialogHeader>
      <div className="text-sm text-muted-foreground px-6">
        Are you sure you want to log out of your account?
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleConfirm}>Logout</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );

  if ("open" in props && props.open !== undefined) {
    return (
      <AlertDialog open={props.open} onOpenChange={props.onOpenChange}>
        {content}
      </AlertDialog>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{props.children}</AlertDialogTrigger>
      {content}
    </AlertDialog>
  );
}
