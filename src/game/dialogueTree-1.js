var ds = document.getElementById("miniAgent");

export const characters = {
  Glasses: {
    mini: "https://storage.scoge.co/scogeUniverse/characters/Glasses/CC-Glasses-Mini.jpg",
  },
  Lesli: {
    mini: "https://storage.scoge.co/scogeUniverse/characters/CC-Lesli-1.png",
  },
};

export const dialogueTree1 = {
  intro: [
    {
      character: "Lesli",
      tone: "neutral",
      text: "After the recent Digisette recall we're going to have to be really careful.",
      waiter: null,
      choices: [
        {
          text: "[ CONTINUE ]",
          action: () => ds.dialogue.choose(1),
        },
      ],
    },
    {
      character: "Lesli",
      tone: "neutral",
      text: "All enforcers have orders to bring in anyone they find still using this system.",
      waiter: null,
      choices: [
        {
          text: "[ CONTINUE ]",
          action: () => ds.dialogue.choose(2),
        },
      ],
    },
    {
      character: "Lesli",
      tone: "neutral",
      text: "This Oracle Cloak should help you maneuver through the city. But be fast!",
      waiter: null,
      choices: [
        {
          text: "[ OK! ]",
          action: () => {
            ds.dialogue.end();
          },
        },
      ],
    },
  ],
  ch3Easter1: [
    {
        character: "Glasses",
        tone: "neutral",
        text: "Hell of a rehersal huh! I'm glad we got that out the way.",
        waiter: null,
        choices: [
          {
            text: "[ CONTINUE ]",
            action: () => ds.dialogue.choose(1),
          },
        ],
      },
      {
        character: "Glasses",
        tone: "neutral",
        text: "Those snoby upper-level brats wont know what hit-em once we...",
        waiter: null,
        choices: [
          {
            text: "[ CONTINUE ]",
            action: () => ds.dialogue.choose(2),
          },
        ],
      },
      {
        character: "Glasses",
        tone: "neutral",
        text: "Almost forgot,.. You're not logged in! I'll contact you again when you're in and it's secure.",
        waiter: null,
        choices: [
          {
            text: "[ OK! ]",
            action: () => {
                ds.dialogue.end();
            },
          },
        ],
      },
  ],
};
