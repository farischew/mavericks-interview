"use client";

import { useState } from "react";

export default function Game() {
  const [userChoice, setUserChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const choices = ["rock", "paper", "scissors"];
  const scenarios = [
    {
      user: "rock",
      computer: "scissors",
      outcome: "win",
    },
    {
      user: "paper",
      computer: "rock",
      outcome: "win",
    },
    {
      user: "scissors",
      computer: "paper",
      outcome: "win",
    },
    {
      user: "paper",
      computer: "scissors",
      outcome: "lose",
    },
    {
      user: "rock",
      computer: "paper",
      outcome: "lose",
    },
    {
      user: "scissors",
      computer: "rock",
      outcome: "lose",
    },
  ];

  // Button Handler
  const choiceHandler = (choice: string) => {
    setUserChoice(choice);
    const computer = choices[Math.floor(Math.random() * choices.length)];

    setComputerChoice(computer);

    const resultScenario = scenarios.find(
      (scenario) => scenario.user == choice && scenario.computer == computer
    );

    if (resultScenario) {
      console.log(resultScenario.outcome);
      setResult(resultScenario.outcome);
    }

    // Old Game Logic:
    // if (userChoice == computerChoice) {
    //   setResults("Its a draw!");
    // } else if (userChoice == "scissors" && computerChoice == "rock") {
    //   setResults("You lost!");
    // } else if (userChoice == "rock" && computerChoice == "paper") {
    //   setResults("You lost!");
    // } else if (userChoice == "paper" && computerChoice == "scissors") {
    //   setResults("You lost!");
    // } else {
    //   setResults("You Win!");
    // }
  };

  return (
    <div className="flex gap-4">
      <button
        className="p-3 border rounded-2xl"
        onClick={() => choiceHandler("rock")} // the issue i face just now was calling the function immediately.
      >
        Rock
      </button>
      <button
        className="p-3 border rounded-2xl"
        onClick={() => choiceHandler("paper")}
      >
        Paper
      </button>
      <button
        className="p-3 border rounded-2xl"
        onClick={() => choiceHandler("scissors")}
      >
        Scissors
      </button>

      <div>
        {result && (
          <div>
            <p>Results: {result}</p>
            <p>You choose: {userChoice}</p>
            <p>Computer choose: {computerChoice}</p>
          </div>
        )}
      </div>
    </div>
  );
}
