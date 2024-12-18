import React from "react";
import Card from "./componetnt/Card";

const App = () => {
  const underratedCricketers = [
    {
      name: "Ajinkya Rahane",
      role: "Batsman",
      description:
        "A dependable middle-order batsman known for his technique and calm demeanor, especially in overseas conditions.",
      image:
        "https://i.pinimg.com/736x/71/1b/88/711b88bd73721ebe939def92e18bc9c4.jpg", // Replace with an actual image URL
    },
    {
      name: "Irfan Pathan",
      role: "All-rounder",
      description:
        "A talented swing bowler and a handy lower-order batsman who contributed to many crucial victories.",
      image:
        "https://i.pinimg.com/736x/25/b2/04/25b204cc8884ec1df23a64b986062e9d.jpg", // Replace with an actual image URL
    },
    {
      name: "Ambati Rayudu",
      role: "Batsman",
      description:
        "A consistent performer in the domestic circuit and IPL but often overlooked for international selection.",
      image:
        "https://i.pinimg.com/736x/69/08/5c/69085c9a3639495480587e04ba8ae309.jpg", // Replace with an actual image URL
    },
    {
      name: "Wriddhiman Saha",
      role: "Wicketkeeper-Batsman",
      description:
        "An exceptional wicketkeeper and reliable lower-order batsman in Test cricket.",
      image:
        "https://i.pinimg.com/736x/d2/ea/2b/d2ea2bec1ef65de69d42a2867b27b1d0.jpg", // Replace with an actual image URL
    },
    {
      name: "Robin Uthappa",
      role: "Batsman",
      description:
        "A versatile batsman and occasional wicketkeeper who played pivotal roles in limited-overs cricket.",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
    },
    {
      name: "Axar Patel",
      role: "All-rounder",
      description:
        "A consistent performer with the ball and an improving batsman, often overshadowed by other all-rounders.",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
    },
    {
      name: "Amit Mishra",
      role: "Bowler",
      description:
        "A crafty leg-spinner with a successful domestic and IPL career but limited international appearances.",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
    },
    {
      name: "Manoj Tiwary",
      role: "Batsman",
      description:
        "A stylish batsman with a strong domestic record who struggled to get regular opportunities at the international level.",
      image: "https://via.placeholder.com/150", // Replace with an actual image URL
    },
  ];

  return (
    <div className="w-screen h-screen p-7 bg-black ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full">
        {underratedCricketers.map(function (cricketer) {
          return <Card cricketer={cricketer} />;
        })}
      </div>
    </div>
  );
};

export default App;
