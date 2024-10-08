import silentscream2logo from "../../../../public/assets/ss2-game-page/SS2_logo_white.png";
import GameCard from "./GameCard";
import silentscreamhero from "/public/assets/home-page/SilentScreamBGLarge.png";
import controloverridehero from "/public/assets/home-page/control_override.png";
import silentscreamlogo from "/public/assets/home-page/silentscream_logo.png";
import silentscream2hero from "/public/assets/ss2-game-page/silent-scream-2-hero.png";
import steamicon from "/public/assets/steam-icon.png";
import windowsicon from "/public/assets/windows-icon.png";
import xboxicon from "/public/assets/xbox-icon.png";

const Gamecardssection = () => {
  const games = [
    {
      title: "Silent Scream 2",
      subtitle: "Psychological-Puzzle-Horror",
      description:
        "Silent Scream 2, a spine-chilling third-person adventure puzzle horror game developed by Studio 23, plunges players into the depths of terror within an age old castle, where they must navigate through intricate puzzles, uncover dark mysteries, and confront malevolent entities to survive.",
      imageSrc: silentscream2hero.src,
      logoSrc: silentscream2logo,
      link: "https://silentscream2.studio-23.xyz/",
    },
    {
      title: "Silent Scream",
      subtitle: "Action, Horror-Adventure",
      description:
        "Silent Scream is a stealth cooking game set in a creepy restaurant where you must serve customers while secretly feeding some of them to an alien entity in your basement.",
      imageSrc: silentscreamhero.src,
      logoSrc: silentscreamlogo,
      link: "https://silentscream.studio-23.xyz/",
      availableOn: [
        { src: steamicon, alt: "Steam" },
        { src: windowsicon, alt: "Windows" },
      ],
    },
    {
      title: "Control Override",
      subtitle: "Arcade, Puzzle",
      description:
        "Control:Override is a puzzle game where you must share control between the environment and yourself. Defy Physics. Solve puzzles . Terminate the rogue AI. And perhaps confront the truth about why it went rogue.",
      imageSrc: controloverridehero.src,
      link: "https://controloverride.studio-23.xyz/",
      availableOn: [
        { src: steamicon, alt: "Steam" },
        { src: windowsicon, alt: "Windows" },
        { src: xboxicon, alt: "Xbox" },
      ],
    },
  ];

  return (
    <div className="w-full h-auto py-7 md:py-14 flex flex-col gap-4 md:gap-10 px-5 md:px-12">
      {games.map((game, index) => (
        <GameCard key={index} {...game} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default Gamecardssection;
