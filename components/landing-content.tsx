"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul",
    avatar: "R",
    title: "Software Developer",
    description:
      "This is a game-changer, yaar! Can't believe I lived without it!",
  },
  {
    name: "Aisha",
    avatar: "A",
    title: "Graphic Designer",
    description: "Using this every day for cool photo stuff. It's the bomb!",
  },
  {
    name: "Vikram",
    avatar: "V",
    title: "CEO",
    description:
      "Life mein bohot asaan kar diya, yaar! Can't work without it now!",
  },
  {
    name: "Meera",
    avatar: "M",
    title: "CFO",
    description:
      "Top-notch stuff, worth every penny. Loving the premium features!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
