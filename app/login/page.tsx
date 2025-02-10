"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HardHatIcon, LockIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    // For now, we'll just show a toast and redirect
    toast({
      title: "Login Successful",
      description: "Welcome to the SMC Dashboard!",
    });
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="m-auto w-full max-w-md">
        <div className="rounded-xl bg-white shadow-xl overflow-hidden">
          <div className="relative h-48">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D12AQFE8WK_g4oa7w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706192196893?e=2147483647&v=beta&t=4iot-jVKI84eVp3PzFkgQQeke8iQUs_TNS337YnGBOE"
              alt="Smart Helmet"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <HardHatIcon className="mx-auto h-16 w-16 mb-2" />
                <h1 className="text-3xl font-bold">SMC</h1>
                <p className="text-xl">Secure Motorcycle Companion</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              Log In
            </Button>
          </form>
          <div className="px-8 pb-8 text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
