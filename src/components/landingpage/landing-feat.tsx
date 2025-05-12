import React from 'react';
import { CheckIcon, MinusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LandingFeature() {
  return (
    <>
      {/* Pricing */}
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {/* Card */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Free</CardTitle>
              <span className="font-bold text-5xl">Free</span>
            </CardHeader>
            <CardDescription className="text-center">
              Forever free
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">1 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={'outline'}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="border-primary flex flex-col">
            <CardHeader className="text-center pb-2">
              <Badge className="uppercase w-max self-center mb-3">
                Most popular
              </Badge>
              <CardTitle className="!mb-7">Startup</CardTitle>
              <span className="font-bold text-5xl">£39</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              All the basics for starting a new business
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">2 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign up</Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Team</CardTitle>
              <span className="font-bold text-5xl">£89</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Everything you need for a growing business
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">5 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={'outline'}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Enterprise</CardTitle>
              <span className="font-bold text-5xl">149</span>
            </CardHeader>
            <CardDescription className="text-center  w-11/12 mx-auto">
              Advanced features for scaling your business
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">10 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={'outline'}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Pricing */}
    </>
  );
}
